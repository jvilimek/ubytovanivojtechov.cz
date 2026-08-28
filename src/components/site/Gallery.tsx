import { useEffect, useState } from "react";

export type GalleryPhoto = { url: string; alt: string };

export type GalleryLabels = { zoom: string; close: string; dialog: string };

const DEFAULT_LABELS: GalleryLabels = {
  zoom: "Zvětšit fotografii",
  close: "Zavřít",
  dialog: "Fotogalerie",
};

export function Gallery({
  photos,
  labels = DEFAULT_LABELS,
}: {
  photos: GalleryPhoto[];
  labels?: GalleryLabels;
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  return (
    <>
      <div
        data-lightbox
        data-close-label={labels.close}
        data-dialog-label={labels.dialog}
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {photos.map((photo, i) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl ring-1 ring-border ${
              i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/3]" : "aspect-[4/3]"
            }`}
            aria-label={`${labels.zoom}: ${photo.alt}`}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              loading={i < 2 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.dialog}
          className="fixed inset-0 z-100 flex items-center justify-center bg-forest/95 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[open]!.url}
              alt={photos[open]!.alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between text-sm text-oat/70">
              <span>{photos[open]!.alt}</span>
              <span className="tabular-nums">
                {open + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 rounded-full bg-oat/10 px-4 py-2 text-sm text-oat ring-1 ring-oat/20 transition-colors hover:bg-oat/20"
          >
            {labels.close}
          </button>
        </div>
      )}
    </>
  );
}
