import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { NavigationBar } from "../components/Navigationbar";
import ImportBsJS from "@/functions/importBsJS";
import { Carousel } from "@/components/Carousel";
import { Cards } from "@/components/Card";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Layout",
  description: "ขาว สีกากุล",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={inter.className}>
          <ImportBsJS/>
          <NavigationBar/>
          {children}
          <Carousel/>
          <Cards/>
        <Footer/>
      </body>
    </html>
  );
}
