import manifest from "../../public/images/photos.json";

export type Photo = {
  /** Název souboru v public/images */
  file: string;
  /** Popisek pro alt text a galerii */
  alt: string;
  /** Volitelná role fotky na stránce (hero, living, surroundings…) */
  role?: string;
  /** Zobrazit ve fotogalerii (výchozí true) */
  gallery?: boolean;
  /** URL použitelná v <img src> */
  url: string;
};

export const photos: Photo[] = (manifest as Omit<Photo, "url">[]).map((photo) => ({
  ...photo,
  url: `/images/${photo.file}`,
}));

export const galleryPhotos = photos.filter((photo) => photo.gallery !== false);

export function photoByRole(role: string): Photo {
  const photo = photos.find((p) => p.role === role);
  if (!photo) throw new Error(`Fotka s rolí "${role}" chybí v public/images/photos.json`);
  return photo;
}
