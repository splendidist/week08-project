import { Oooh_Baby } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const font = Oooh_Baby({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "FolioFlavours",
  description: "Share and Discover Vegan Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={font.className}>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
