// Generator OG images 1200x630 dla AI na macierzynskim
// Uruchom: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'images');

// ---------- OG HOME (paleta marki: cream / terra / charcoal) ----------
const ogHome = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#F7F4EF"/>
  <!-- blob terra prawy gorny -->
  <circle cx="1080" cy="80" r="260" fill="#E8B89E" opacity="0.45"/>
  <circle cx="1160" cy="560" r="180" fill="#C4704B" opacity="0.12"/>
  <!-- pasek akcent -->
  <rect x="90" y="250" width="64" height="6" rx="3" fill="#C4704B"/>
  <!-- eyebrow -->
  <text x="90" y="210" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="4" fill="#C4704B">EWA CHAMCZYK</text>
  <!-- headline -->
  <text x="88" y="340" font-family="Helvetica, Arial, sans-serif" font-size="86" font-weight="700" fill="#1A1A1A">AI na macierzyńskim</text>
  <!-- subhead -->
  <text x="90" y="412" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="400" fill="#1A1A1A" opacity="0.72">Wracasz do pracy. AI Cię nie wyprzedzi.</text>
  <!-- dolna nota -->
  <text x="90" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="500" fill="#49607A">Ebook · newsletter · kurs · Instagram</text>
</svg>`;

// ---------- OG EBOOK (paleta ebooka: bordo / zloto / cream-warm) ----------
const ogEbook = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#FAF8F5"/>
  <circle cx="1090" cy="540" r="240" fill="#6B1F1F" opacity="0.10"/>
  <circle cx="1130" cy="70" r="150" fill="#C9A76C" opacity="0.18"/>
  <!-- zlota linia -->
  <rect x="90" y="232" width="80" height="4" rx="2" fill="#C9A76C"/>
  <text x="90" y="200" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="4" fill="#6B1F1F">EWA CHAMCZYK · EBOOK</text>
  <text x="88" y="350" font-family="Helvetica, Arial, sans-serif" font-size="104" font-weight="700" font-style="italic" fill="#6B1F1F">Nie zniknęłaś.</text>
  <text x="90" y="424" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="400" fill="#2C2416" opacity="0.78">7 listów do mamy, która chce iść dalej.</text>
  <text x="90" y="548" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="500" fill="#6B5D4D">Premiera 26 maja 2026 · PDF</text>
</svg>`;

async function run() {
  await sharp(Buffer.from(ogHome)).jpeg({ quality: 88 }).toFile(join(OUT, 'og-home.jpg'));
  console.log('OK og-home.jpg');
  await sharp(Buffer.from(ogEbook)).jpeg({ quality: 88 }).toFile(join(OUT, 'og-nie-zniknelas.jpg'));
  console.log('OK og-nie-zniknelas.jpg');
}
run().catch((e) => { console.error(e); process.exit(1); });
