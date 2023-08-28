import { type NextPage } from "next";
import HeaderNav from "~/components/HeaderNav";
import Footer from "~/components/Footer";

const ServicesPage: NextPage = () => {
  return (
    <>
      <div className="bg-teal-50">
        <HeaderNav />
        <main className="flex flex-col flex-wrap justify-center justify-items-center items-center gap-12 text-center py-8">
          <div className="border border-sky-500 rounded-full p-8 shadow-xl">
            <div>
              Personal Care
            </div>
            personal hygiene, bathing, dressing, brushing teeth, cleaning dentures, hair care, nail care, skin care.
          </div>
        
          <div className="border border-sky-500 rounded-full p-8 shadow-xl">
            <div>
              Incontinence Management
            </div>
            Assistance with/in restroom, manage water intake, cleaning private areas, changing soiled clothing, changing bedding
          </div>
        
          <div className="border border-sky-500 rounded-full p-8 shadow-xl">
            <div>
              Meal Preparation
            </div>
            We can prepare simple meals for clients as well as warming, microwave and feeding.
          </div>
        
          <div className="border border-sky-500 rounded-full p-8 shadow-xl">
            <div>
              Companionship
            </div>
            Having someone you know and like with you, rather than being on your own. Is what we do here at HHA services.
          </div>
        
          <div className="border border-sky-500 rounded-full p-8 shadow-xl">
            <div>
              Light Housekeeping
            </div>
            Sweeping, Mopping, Taking out trash, Washing Dishes, Laundry, Making bed, Dusting, Cleaning counters, Tables ect...
          </div>
        </main>
      <Footer />
      </div>
    </>
  ) 
} 

export default ServicesPage

