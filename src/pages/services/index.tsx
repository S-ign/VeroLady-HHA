import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";
import Image from "next/image";

import PersonalCare from "~/assets/PersonalCare.jpg"
import Incontinence from "~/assets/Inconstinance.jpg"
import Meal from "~/assets/Meal.png"
import Companionship from "~/assets/companionship.jpeg"
import Housekeeping from "~/assets/Housekeeping.jpeg"

const ServicesPage: NextPage = () => {
  return (
    <>
      <div className="bg-teal-50">
        <HeaderNav />
        <main className="flex flex-col flex-wrap justify-center items-center gap-12 text-center py-8">

          <div className="flex flex-col flex-wrap justify-center items-center bg-teal-100 bg-opacity-75 m-4 rounded-xl gap-12 shadow-xl">
            <div className="flex flex-col justify-center items-center lg:flex-row xl:flex-row 2xl:flex-row gap-12">

              <div className="flex flex-row border border-sky-500 justify-center items-center rounded-full p-8 shadow-xl bg-teal-50 lg:w-1/3">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full w-9/12" src={PersonalCare} alt="Personal Care"/>
                  <div className="text-3xl">
                    Personal Care
                  </div>
                  <div className="flex flex-row gap-8">
                  
                    <div className="flex flex-col">
                      <div>Personal hygiene</div>
                      <div>Bathing</div>
                      <div>Dressing</div>
                      <div>Brushing teeth</div>
                    </div>
                  
                    <div className="flex flex-col">
                      <div>Cleaning dentures</div>
                      <div>Hair care</div>
                      <div>Nail care</div>
                      <div>Skin care</div>
                    </div>
                </div>
                </div>
              </div>
              
              <div className="flex flex-row border border-sky-500 rounded-full p-8 shadow-xl bg-teal-50 lg:w-1/3">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full w-9/12" src={Incontinence} alt="Incontinence"/>
                  <div className="text-3xl">
                    Incontinence Management
                  </div>
                  <div className="flex flex-row gap-8">
                  
                    <div className="flex flex-col">
                      <div>Restroom Assistance</div>
                      <div>Manage Water Intake</div>
                    </div>
                  
                    <div className="flex flex-col">
                      <div>Changing Soiled Clothing</div>
                      <div>Changing bedding</div>
                      <div>Cleaning private areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center lg:flex-row xl:flex-row 2xl:flex-row gap-12">
              <div className="flex flex-col border border-sky-500 rounded-full items-center p-8 shadow-xl bg-teal-50">
                <Image className="rounded-full w-1/2" src={Meal} alt="Meal"/>
                <div className="text-3xl">
                  Meal Preparation
                </div>
                <div className="flex flex-col">
                  <div>We can prepare simple meals for clients</div>
                  <div>as well as warming, microwave and feeding.</div>
                </div>
              </div>
              
              <div className="flex flex-row border border-sky-500 items-center bg-teal-50 rounded-full p-8 shadow-xl lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                <Image className="rounded-full w-1/3" src={Companionship} alt="Companionship"/>
                <div className="flex flex-col">
                  <div className="text-3xl">
                    Companionship
                  </div>
                  <div className="flex flex-col">
                    <div>Having someone you know and like with you, rather</div>
                    <div>than being on your own. Is what we do here at HHA services.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col border border-sky-500 rounded-full items-center p-8 shadow-xl bg-teal-50 lg:w-1/3">
              <Image className="rounded-full w-9/12" src={Housekeeping} alt="Housekeeping" />
              <div className="text-3xl">
                Light Housekeeping
              </div>
                <div className="flex flex-row gap-8">
              
                  <div className="flex flex-col">
                    <div>Sweeping</div>
                    <div>Mopping</div>
                    <div>Taking out trash</div>
                    <div>Washing Dishes</div>
                  </div>
              
                  <div className="flex flex-col">
                    <div>Laundry</div>
                    <div>Making bed</div>
                    <div>Dusting</div>
                    <div>Cleaning counters</div>
                  </div>
                </div>
            </div>
          </div>
        </main>
      <Footer />
      </div>
    </>
  ) 
} 

export default ServicesPage

