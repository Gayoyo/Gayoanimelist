import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "GayohatsuAnimelist",
  description: "Website Anime Indonesia ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" sup>
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true} >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
