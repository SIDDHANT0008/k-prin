import "./globals.css";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(base),
  title: "For Kavita ❤️ | My Pyaara Baccha",
  description: "A little surprise, made with all my love, just for you. Happy Princess Day, Kavita 👑",
  openGraph: {
    title: "For Kavita ❤️ | My Pyaara Baccha",
    description: "A little surprise, made with all my love, just for you 💗",
    type: "website",
    images: ["/images/photo1.jpg"],
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFE6EE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
