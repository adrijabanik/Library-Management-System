import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
// yimport Header from "@/components/Menubar/Header";
=======
// import Header from "@/app/Menubar/Header";
>>>>>>> 68c500ec5a02c7bf9687ae95a86f9023460012c9

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Library Management System",
  description: "Organize, Access, Inspire: Your Library, Your Way!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " suppressHydrationWarning>
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
