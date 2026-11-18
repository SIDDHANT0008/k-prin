# For My Pyaara Baccha ❤️

A romantic Princess Day surprise for Kavita. Built with Next.js 14, Tailwind CSS and Framer Motion.

## Run it on your computer
```bash
npm install
npm run dev        # http://localhost:3000
```

## Things you can personalise
- Photos: `public/images/photo1.jpg` to `photo10.jpg`
- Captions, letter and poem: `lib/content.js`
- Music: replace `public/audio/love-song.mp3` with your favourite song (keep the same file name)

## Deploy on Vercel
1. Push this folder to a GitHub repository (`git init`, `git add .`, `git commit`, `git push`).
2. Go to vercel.com, sign in, click **Add New > Project**, and import the repository.
3. Leave every setting as it is (Vercel detects Next.js) and click **Deploy**.
4. When it finishes you get a public link like `https://for-kavita.vercel.app`.
   You can rename it in **Settings > Domains** to something personal.

No GitHub? Run `npx vercel` in this folder and follow the prompts, then `npx vercel --prod`.

## Make the QR code (only after deploying)
A QR code must point to the public link. It cannot point to localhost, because her phone cannot open your computer.

**Option 1: in the browser.** Open `https://YOUR-SITE.vercel.app/qr`, paste the link, press **Download PNG**.

**Option 2: command line.**
```bash
npm run qr -- https://YOUR-SITE.vercel.app
```
The PNG is saved to `qr-output/kavita-surprise-qr.png` (1024 px, high error correction, scans with any phone camera).

Both options refuse localhost and private network addresses on purpose.
Before printing, scan it once with your own phone.

## Tips
- Music never autoplays. It starts when she taps **Open Your Surprise**, and the Play/Pause button stays visible.
- Some phones block sound in silent mode. If so, she can tap Play.
