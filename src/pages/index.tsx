import Head from "next/head";
import HeaderNav from "~/components/HeaderNav";
import SacramentoText from "~/components/SacramentoText";
import Footer from "~/components/Footer";

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

      <main className="flex flex-col items-center justify-center">
        <div className="font-mono">
          We care by providing personal Care Services, Compainion Service and Homemaking Services for your elderly and disabled.
        </div>
        <ul>
          <li>Grooming/Dressing</li>
          <li>Cleaning Services</li>
          <li>Companionship</li>
          <li>And More</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
