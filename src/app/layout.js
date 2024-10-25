import { Inter, Merriweather } from 'next/font/google';
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["100","400","500","600","700","800"] });

export const metadata = {
  title: "Necessitatibus velit hic placeat molestiae",
  description: "Ut quam et praesentium magnam nihil dolorem aut. Qui et est ipsa unde commodi. In distinctio numquam placeat quam. Repellendus saepe consequatur animi voluptatem nam quaerat quia. Sunt a hic corporis commodi at debitis deleniti corporis.",
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
