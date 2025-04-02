import { Outfit, Ovo, Montserrat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "TAANZ - Outsourcing for Accounting Firms in Australia & New Zealand",
  description: "TAANZ is a leading outsourcing company that provides accounting and finance services to businesses in Australia and New Zealand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
