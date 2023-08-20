import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";

const ServicesPage: NextPage = () => {
  return (
    <>
      <HeaderNav />
      <main className="h-screen flex flex-col justify-center justify-items-center items-center gap-12">
      <div className="text-3xl">Services</div>
      </main>
      <Footer />
    </>
  ) 
} 

export default ServicesPage

