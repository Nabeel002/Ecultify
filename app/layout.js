import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Inter } from "@next/font/google";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ecultify",
  description: "Cutting Edge WebApp",
};

const inter= Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`${inter.className}`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
