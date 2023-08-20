import Head from "next/head";
import HeaderNav from "~/components/HeaderNav";
import SacramentoText from "~/components/SacramentoText";
import Footer from "~/components/Footer";
import Image from "next/image"

import hha1 from "../assets/hha1.jpg"
import hha2 from "../assets/hha2.jpg"
import hha3 from "../assets/hha3.jpg"
import hha4 from "../assets/hha4.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Vero Lady HHA Serices</title>
        <meta name="description" content="Vero Lady HHA Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-wrap justify-items-center justify-center gap-8">
        <HeaderNav />
        <div className="flex text-6xl">
          <SacramentoText text="Family Love, We Care"/>
        </div>
      </div>

      <hr className="h-px my-8 bg-sky-400 border-0"/>

      <main className="flex flex-col justify-center justify-items-center items-center gap-12">
        <div className="flex justify-center justify-items-center items-center">

          <div className="flex flex-col flex-wrap w-10/12 justify-around gap-8">

                <div className="flex flex-col rounded rounded-full border border-4 border-sky-500 text-xl">
                  <div className="flex flex-row gap-8 justify-center justify-items-center items-center text-center">
                    <Image className="w-1/3" src={hha2} alt="hha2"/>
                    <div className="text-center">
                      Welcome to Vero Lady HHA Services, your trusted partner in personalized home health care services. At Vero Lady HHA Services, we understand that every individual&apos;s journey to wellness is unique. That&apos;s why we&apos;re dedicated to providing compassionate and tailored care that promotes independence, enhances quality of life, and brings peace of mind to both our clients and their families.
                    </div>
                  </div>

                  <div className="flex flex-row gap-8 justify-center justify-items-center items-center text-center">
                    <div className="text-center">
                      Our team of highly-trained caregivers is committed to delivering top-notch medical and non-medical assistance within the comfort of your own home. Whether you or your loved one are recovering from an illness, managing a chronic condition, or simply in need of a helping hand, we&apos;re here to provide the support you deserve.
                    </div>
                    <Image className="w-1/3" src={hha1} alt="hha1"/>
                  </div>

                  <div className="flex flex-row gap-8 justify-center justify-items-center items-center text-center">
                    <Image className="w-1/3" src={hha4} alt="hha4"/>
                    <div className="text-center">
                      With a deep respect for the dignity and preferences of each person we serve, Vero Lady HHA Services offers a wide range of services that encompass everything from skilled nursing care to companionship and light housekeeping. Our holistic approach not only addresses physical needs but also fosters emotional well-being, ensuring a comprehensive and holistic caregiving experience.
                    </div>
                  </div>

                  <div className="flex flex-row gap-8 justify-center justify-items-center items-center text-center">
                    <div className="text-center">
                      As a locally-owned and operated small business, we take pride in our strong ties to the community we serve. Our mission is to create a warm and nurturing environment where our clients feel valued and understood. We believe that everyone deserves to age gracefully and comfortably in the place they call home, and we&apos;re honored to be a part of that journey.
                    </div>
                    <Image className="w-1/3" src={hha3} alt="hha3"/>
                  </div>
                </div>

          </div>
        </div>

        <div className="rounded rounded-full border border-4 border-sky-500 text-xl w-1/4 my-12 text-center">
          Explore our services to discover how Vero Lady HHA Services can make a positive difference in your life or the life of your loved one. Contact us today to schedule a consultation and take the first step towards a brighter, healthier future. Your well-being is our priority, and we&apos;re here to welcome you home.
        </div>
      </main>

      <Footer />
    </>
  );
}
