import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // ✅ Import Head

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chauffit",
  description:
    "Your premium mobility solution that redefines luxury travel. With a curated fleet of professional chauffeurs, we deliver sophistication on every journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
