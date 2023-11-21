import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";
import { useHubspotForm } from 'next-hubspot';

const GetStartedPage: NextPage = () => {

//  <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
//<script>
//  hbspt.forms.create({
//    region: "na1",
//    portalId: "43777801",
//    formId: "d924beb8-e5b9-4376-ba5c-021de61f6c8c"
//  });
//</script>

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "43777801",
    formId: "d924beb8-e5b9-4376-ba5c-021de61f6c8c",
    target: '#hubspot-form-wrapper'
  });

  return (
    <>
      <div className="flex flex-wrap justify-items-center justify-center gap-8">
        <HeaderNav />
      </div>

      <main className="flex flex-col justify-center justify-items-center items-center gap-8 p-12">

        <div className="flex lg:w-1/2 xl:w-1/2 2xl:w-1/2 text-xl">
          <div>
            We&apos;re eager to understand your unique needs and provide you with the exceptional care you deserve. Expect to hear from us soon, as we&apos;re committed to bringing comfort and support right to your doorstep. Your well-being is our priority, and we can&apos;t wait to be a part of your journey.
          </div>
        </div>

        <hr className="h-px w-1/2 my-2 bg-slate-400 border-0"/>

        <div id="hubspot-form-wrapper"></div>

      </main>
      
      <Footer />
    </>
  ) 
} 

export default GetStartedPage

