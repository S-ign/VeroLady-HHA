import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";
import Image from "next/image";

import Lucita from "~/assets/lucita.jpeg"

const AboutPage: NextPage = () => {
  return (
    <>
      <HeaderNav />
      <main className="flex flex-col justify-center justify-items-center items-center">

        <div className="flex justify-center items-center bg-yellow-100">

          <div className="flex flex-col py-12 justify-center items-center gap-8 bg-yellow-50 m-12 rounded-xl shadow-xl">

            <Image className="rounded-full" src={Lucita} alt="lucita" />

            <div className="flex flex-col items-center">
              <div className="border-double rounded-xl border-4 border-red-400 lg:w-1/2 p-4 shadow-xl text-center">
                  Lucita Dover is an entrepreneur with a heart for the elderly. After observing how elderly can be treated in our community and through personal family involvement in care giving. She went on to be Certified by the State of Florida to provide HHA services in her community. As a professional who cares she owns and operates Vero Lady HHA Services in Ft. Pierce and Vero Beach areas, soon to expand into Port St. Lucie. If you have loved ones that need our services, you love them, and we&apos;ll care for them.  
              </div>
            </div>

          </div>
        </div>
        <div className="flex w-full text-3xl justify-center items-center bg-orange-100 text-center py-12">
          Our company is compassionate about providing quality care in our community.  Our caregivers are Florida State Certified Home Health Aids that are professional, reliable and trustworthy. Serving our Elderly who&apos;s family love, we care.
        </div>
      </main>
      <Footer />
    </>
  ) 
} 

export default AboutPage
