// scripts/optimize-images.mjs
import fg from 'fast-glob';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC_DIR = 'public';
const OUT_DIR = path.join(SRC_DIR, 'optimized');

// co zpracovat
const PATTERN = [
  `${SRC_DIR}/**/*.{jpg,jpeg,png}`,
  `!${SRC_DIR}/optimized/**`,
  `!${SRC_DIR}/favicon*`,
  `!${SRC_DIR}/**/*sprite*`,
];

// default šířky pro fotky (hero + galerie)
const WIDTHS_PHOTO = [1600, 1200, 800, 600];
// malé šířky pro loga/ikony
const WIDTHS_LOGO = [256, 192, 128, 96, 64];

// pomocné
const ensureDir = (p) => fs.mkdirSync(p, { recursive: true });
const isLogoLike = (relPath) => {
  const l = relPath.toLowerCase();
  // zachytíme běžné názvy/složky: logo*, icon*, /logo(s)/
  return (
    l.includes('logo') ||
    l.includes('/logo') ||
    l.includes('/logos') ||
    l.includes('icon') ||
    l.includes('/icons')
  );
};

async function processOne(file) {
  const rel = path.relative(SRC_DIR, file);           // např. "logocimice.png" nebo "galerie/kurt1.jpg"
  const dir = path.dirname(rel);                       // "" nebo "galerie"
  const base = path.basename(rel, path.extname(rel));  // "logocimice" / "kurt1"

  // Vyber šířky podle typu souboru
  const widths = isLogoLike(rel) ? WIDTHS_LOGO : WIDTHS_PHOTO;

  // Zjisti metadata (kvůli alfě u PNG/loga)
  const meta = await sharp(file).metadata();
  const hasAlpha = !!meta.hasAlpha;

  for (const w of widths) {
    const pipeline = sharp(file).resize({ width: w, withoutEnlargement: true });

    // AVIF
    {
      const outPath = path.join(OUT_DIR, dir, `${base}-${w}.avif`);
      ensureDir(path.dirname(outPath));
      await pipeline
        .clone()
        .avif({
          // pro loga lehce vyšší kvalita, pořád super malé soubory
          quality: isLogoLike(rel) ? 60 : 45,
          effort: 4,
          // u průhledných PNG zachováme alfakanál automaticky
        })
        .toFile(outPath);
    }

    // WebP
    {
      const outPath = path.join(OUT_DIR, dir, `${base}-${w}.webp`);
      ensureDir(path.dirname(outPath));
      await pipeline
        .clone()
        .webp({
          quality: isLogoLike(rel) ? 80 : 68,
          alphaQuality: 80,
          lossless: isLogoLike(rel) && hasAlpha, // loga s alfou můžou být klidně lossless
        })
        .toFile(outPath);
    }
  }

  // Volitelně vytvoř i PNG fallback u nejmenší varianty (užitečné pro velmi staré prohlížeče)
  // Můžeš klidně smazat, pokud fallback řešíš originálním souborem.
  const smallest = (isLogoLike(rel) ? WIDTHS_LOGO : WIDTHS_PHOTO).at(-1);
  const pngOut = path.join(OUT_DIR, dir, `${base}-${smallest}.png`);
  ensureDir(path.dirname(pngOut));
  await sharp(file)
    .resize({ width: smallest, withoutEnlargement: true })
    .png({
      compressionLevel: 9,
      palette: isLogoLike(rel), // u loga zapne indexed-color paletu (menší PNG)
    })
    .toFile(pngOut);
}

async function run() {
  console.time('optimize-images');
  const files = await fg(PATTERN, { dot: false });
  if (!files.length) {
    console.log('Nenalezeny žádné JPG/PNG ve složce public/.');
    return;
  }
  console.log(`Najito ${files.length} obrázků. Optimalizuji…`);
  let ok = 0, fail = 0;

  for (const f of files) {
    try {
      await processOne(f);
      ok++;
      process.stdout.write('.');
    } catch (e) {
      fail++;
      console.warn(`\n⚠️  Chyba u ${f}:`, e.message);
    }
  }
  console.timeEnd('optimize-images');
  console.log(`\nHotovo ✅  OK: ${ok}, Chyb: ${fail}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
