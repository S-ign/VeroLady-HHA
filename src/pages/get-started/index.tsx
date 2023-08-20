import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";

const GetStartedPage: NextPage = () => {
  return (
    <>
      <HeaderNav />
      <main className="h-screen flex flex-col justify-center justify-items-center items-center gap-12">

        <div className="flex w-1/2 text-xl">
          <div>
            Ready to experience compassionate and personalized home health care? Take the first step towards a brighter future by filling out our convenient scheduling form. We&apos;re eager to understand your unique needs and provide you with the exceptional care you deserve. Expect to hear from us soon, as we&apos;re committed to bringing comfort and support right to your doorstep. Your well-being is our priority, and we can&apos;t wait to be a part of your journey.
          </div>
        </div>

        <hr className="h-px w-1/2 my-2 bg-slate-400 border-0"/>

        <div className="flex p-12">
          <form className="flex flex-col gap-8 text-xl" action="/send-data-here" method="post">

            <div className="flex flex-row gap-8">
              <div>
                <input className="border border-2 rounded rounded-xl" type="text" id="first" name="first" placeholder="First Name" />
              </div>
              <div>
                <input className="border border-2 rounded rounded-xl" type="text" id="last" name="last" placeholder="Last Name" />
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <div>
                <input className="border border-2 rounded rounded-xl" type="text" id="email" name="email" placeholder="Email Address" />
              </div>
              <div>
                <input className="border border-2 rounded rounded-xl" type="text" id="phone" name="phone" placeholder="Phone Number" />
              </div>
            </div>

            <div>
              <input className="border border-2 rounded rounded-xl w-full" type="text" id="address" name="address" placeholder="Address" />
            </div>

            <div className="flex justify-center">
              <button className="bg-sky-800 rounded rounded-full w-8/12 text-white" type="submit">Submit</button>
            </div>

          </form>
        </div>
      </main>
      <Footer />
    </>
  ) 
} 

export default GetStartedPage

