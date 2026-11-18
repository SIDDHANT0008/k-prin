"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

const isLocal = (u) => /^(https?:\/\/)?(localhost|127\.|0\.0\.0\.0|192\.168\.|10\.|\[::1\])/i.test(u.trim());

export default function QrPage() {
  const [url, setUrl] = useState(process.env.NEXT_PUBLIC_SITE_URL || "");
  const [png, setPng] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url && typeof window !== "undefined" && !isLocal(window.location.origin)) {
      setUrl(window.location.origin);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const u = url.trim();
    setPng("");
    if (!u) { setError("Paste your deployed website link above (for example https://for-kavita.vercel.app)."); return; }
    if (!/^https?:\/\//i.test(u)) { setError("The link must start with https://"); return; }
    if (isLocal(u)) { setError("That link only works on your own computer or network. Deploy the site first, then paste the public link."); return; }
    setError("");
    QRCode.toDataURL(u, { width: 1024, margin: 4, errorCorrectionLevel: "H", color: { dark: "#5A2B4D", light: "#FFFFFF" } })
      .then(setPng)
      .catch(() => setError("Could not create the QR code. Check the link and try again."));
  }, [url]);

  return (
    <main className="mesh flex min-h-[100svh] flex-col items-center px-6 py-14 text-center">
      <h1 className="font-display italic text-5xl text-wine">QR code for Kavita 💗</h1>
      <p className="mt-3 max-w-sm text-mauve">Paste the deployed link, then download the QR as a PNG.</p>

      <label htmlFor="u" className="mt-8 text-sm font-bold">Website link</label>
      <input
        id="u" value={url} onChange={(e) => setUrl(e.target.value)}
        placeholder="https://your-site.vercel.app" inputMode="url" autoCapitalize="off" autoCorrect="off"
        className="mt-2 w-full max-w-md rounded-2xl border-2 border-petal bg-white/90 px-4 py-3 text-base outline-none focus:border-rose"
      />

      <div className="mt-8 flex min-h-[18rem] w-full max-w-xs items-center justify-center rounded-3xl bg-white p-4 shadow-soft">
        {png ? <img src={png} alt={`QR code for ${url}`} className="h-auto w-full" /> : <p className="text-sm text-mauve" role="alert">{error}</p>}
      </div>

      {png && (
        <a href={png} download="kavita-surprise-qr.png" className="btn-love mt-6 inline-flex items-center">
          Download PNG ⬇️
        </a>
      )}
    </main>
  );
}
