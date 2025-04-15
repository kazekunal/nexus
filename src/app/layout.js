import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // you can adjust the weights as needed
});

export const metadata = {
  title: "Chauffit",
  description:
    "Your premium mobility solution that redefines luxury travel. With a curated fleet of professional chauffeurs, we deliver sophistication on every journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
