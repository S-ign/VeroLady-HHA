import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";

const AboutPage: NextPage = () => {
  return (
    <>
      <HeaderNav />
      <main className="h-screen flex flex-col justify-center justify-items-center items-center gap-12">
      <div className="text-3xl">About Me</div>
      <div className="text-3xl">About HHS</div>
      </main>
      <Footer />
    </>
  ) 
} 

export default AboutPage
