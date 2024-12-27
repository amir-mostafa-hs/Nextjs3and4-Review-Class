import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Next.js Blog",
  description: "A simple blog built with Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" p-8">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
