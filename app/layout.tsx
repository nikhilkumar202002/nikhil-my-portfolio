import type { Metadata } from "next";
import { helveticaNeue } from "./fonts";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Preloader from "./component/ui/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Kumar | Web Designer & Frontend Developer in India",
  description: "Nikhil Kumar is a Web Designer & Frontend Developer from India creating modern, responsive websites, UI/UX designs and WordPress solutions for businesses and brands worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${helveticaNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans">
        <Preloader />
        <Navbar />
        <main className="site-main flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
