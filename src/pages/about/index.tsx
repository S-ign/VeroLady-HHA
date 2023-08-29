import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";
import Image from "next/image";

import SacramentoText from "~/components/SacramentoText";
import Lucita from "~/assets/lucita.jpeg"

const AboutPage: NextPage = () => {
  return (
    <>
      <HeaderNav />
      <main className="flex flex-col justify-center justify-items-center items-center">

        <div className="flex w-full justify-center items-center bg-yellow-100">

          <div className="flex flex-col py-12 justify-center items-center gap-8 xl:flex-row 2xl:flex-row">

            <Image className="rounded-full" src={Lucita} alt="lucita" />

            <div className="flex flex-col">
              <div className="flex">
                <SacramentoText text="Lucita Dover" size="text-7xl"/>
              </div>
              <div className="w-full border-double rounded-xl border-4 border-indigo-500 w-1/2 p-4 shadow-xl text-center">
                  is an entrepreneur with a heart for the elderly. After observing how elderly can be treated in our community and through personal family involvement in care giving. She went on to be Certified by the State of Florida to provide HHA services in her community. As a professional who cares she owns and operates Vero Lady HHA Services in Ft. Pierce and Vero Beach areas, soon to expand into Port St. Lucie. If you have loved ones that need our services come, you love them and we&apos;ll care for them.  
              </div>
            </div>

          </div>
        </div>
        <div className="flex w-full text-3xl justify-center items-center bg-orange-100 text-center py-12">
          Vero Lady HHA Services, provide services currently in the Ft. Pierce and Vero Beach area. Soon to expand into Port St. Lucie. Our company is compassionate about providing quality care for our community, mainly serving the elderly. Our care gives are qualified state of Florida certified  home health aids that are professional, reliable, dependable, and compassionate.
        </div>
      </main>
      <Footer />
    </>
  ) 
} 

export default AboutPage
