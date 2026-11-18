// Usage: npm run qr -- https://your-site.vercel.app
import QRCode from "qrcode";
import { mkdirSync } from "node:fs";

const url = (process.argv[2] || "").trim();
if (!/^https:\/\//i.test(url)) {
  console.error("Please pass your deployed https link, e.g.  npm run qr -- https://for-kavita.vercel.app");
  process.exit(1);
}
if (/localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.|\.local\b/i.test(url)) {
  console.error("That looks like a local address. A phone cannot open it. Deploy first, then use the public link.");
  process.exit(1);
}
mkdirSync("qr-output", { recursive: true });
const out = "qr-output/kavita-surprise-qr.png";
await QRCode.toFile(out, url, { width: 1024, margin: 4, errorCorrectionLevel: "H", color: { dark: "#5A2B4D", light: "#FFFFFF" } });
console.log(`QR saved to ${out}\nPoints to: ${url}`);
