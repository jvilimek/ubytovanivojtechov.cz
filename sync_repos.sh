#!/bin/bash

# --- KONFIGURACE ---
# URL nebo cesta k druhému repozitáři (odkud berete změny)
SOURCE_REPO_URL="https://github.com/jvilimek/vojtechov-stay-charm"
# Název větve ve zdrojovém repozitáři
SOURCE_BRANCH="main"
# Soubor, kde je uložen hash posledního synchronizovaného commitu
COMMIT_FILE=".last_synced_commit"
# Dočasný název pro vzdálený repozitář uvnitř Gitu
REMOTE_NAME="source_sync"
# --------------------

# 1. Kontrola, zda existuje soubor s posledním commitem
if [ ! -f "$COMMIT_FILE" ] || [ ! -s "$COMMIT_FILE" ]; then
    echo "❌ Chyba: Soubor $COMMIT_FILE neexistuje nebo je prázdný!"
    echo "Zapište do něj hash posledního společného commitu."
    exit 1
fi

LAST_COMMIT=$(cat "$COMMIT_FILE" | tr -d '[:space:]')
echo "ℹ️ Poslední synchronizovaný commit: $LAST_COMMIT"

# 2. Přidání zdrojového repozitáře do Git konfigurace (pokud už neexistuje)
if ! git remote | grep -q "^$REMOTE_NAME$"; then
    echo "🔄 Přidávám dočasný remote: $SOURCE_REPO_URL"
    git remote add "$REMOTE_NAME" "$SOURCE_REPO_URL"
fi

# 3. Stažení nejnovějších dat ze zdrojového repozitáře
echo "🔄 Stahuji nejnovější data ze zdrojového repozitáře..."
git fetch "$REMOTE_NAME" "$SOURCE_BRANCH"

# Verifikace, zda zadaný commit ve stažené historii vůbec existuje
if ! git cat-file -e "$LAST_COMMIT" 2>/dev/null; then
    echo "❌ Chyba: Commit $LAST_COMMIT nebyl ve zdrojovém repozitáři nalezen!"
    exit 1
fi

# 4. Zjištění, zda jsou k dispozici nové commity
NEW_COMMITS=$(git log "${LAST_COMMIT}..${REMOTE_NAME}/${SOURCE_BRANCH}" --oneline)

if [ -z "$NEW_COMMITS" ]; then
    echo "✅ Žádné nové commity k synchronizaci. Vše je aktuální."
    # Úklid
    git remote remove "$REMOTE_NAME"
    exit 0
fi

echo "🚀 Nalezeny nové commity k aplikaci:"
echo "$NEW_COMMITS"

# 5. Vygenerování a aplikace záplat (patches) se zachováním historie
echo "📦 Generuji a aplikuji patche..."

# Použijeme git format-patch, který vytvoří balík změn, a git am ho aplikuje jako čisté commity
# --stdout posílá vše do roury, git am --3way řeší případné drobné konflikty v kódu
if git format-patch "${LAST_COMMIT}..${REMOTE_NAME}/${SOURCE_BRANCH}" --stdout | git am --3way; then
    echo "✨ Patche byly úspěšně aplikovány!"
    
    # 6. Aktualizace souboru s posledním synchronizovaným commitem
    NEW_LAST_COMMIT=$(git rev-parse "${REMOTE_NAME}/${SOURCE_BRANCH}")
    echo "$NEW_LAST_COMMIT" > "$COMMIT_FILE"
    echo "📝 Soubor $COMMIT_FILE byl aktualizován na nový commit: $NEW_LAST_COMMIT"
    
    # Automaticky přidáme změnu souboru s hashem do posledního commitu nebo vytvoříme nový
    git add "$COMMIT_FILE"
    git commit --amend --no-edit 2>/dev/null || git commit -m "chore: update sync checkpoint"
    
    echo "🎉 Synchronizace dokončena. Nyní můžete provést 'git push' do vašeho aktuálního repozitáře."
else
    echo "⚠️ Došlo ke konfliktům při aplikaci změn!"
    echo "Před pokračováním vyřešte konflikty v souborech a poté spusťte: git am --continue"
    echo "Pokud chcete akci vrátit zpět, spusťte: git am --abort"
fi

# 7. Úklid dočasného remote spojenectví
git remote remove "$REMOTE_NAME"
