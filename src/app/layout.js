import { Inter, Merriweather } from 'next/font/google';
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["100","400","500","600","700","800"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${merriweather.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
