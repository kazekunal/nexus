import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chauffit",
  description:
    "Your premium mobility solution that redefines luxury travel. With a curated fleet of professional chauffeurs, we deliver sophistication on every journey.",
  appleWebApp: {
    title: "Chauffit",
    statusBarStyle: "black",
    capable: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-MERSXMJ4FR" />
    </html>
  );
}