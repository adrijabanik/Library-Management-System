import "./globals.css";
import Header from "@/components/Menubar/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  
      >
        < Header/>
        {children}
      </body>
    </html>
  );
}
