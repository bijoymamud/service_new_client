import { Globe } from "lucide-react";
import PropertyMap from "./PropertyMap/PropertyMap";

export const WhyChoose = () => {
  return (
    <section className="bg-[#F9F5ED] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold mb-6 text-[#1C3988]">Why Choose You Safehand</h2>
          <p className="text-lg mb-6 text-gray-700">
            The premier global marketplace for buying and selling land with innovative features designed for both buyers and sellers.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="bg-[#1C3988] p-2 rounded-md">
              <Globe size={35} className="text-[#fff] " />
              </div>
              <div>
              <h2 className="text-xl font-semibold text-[#1C3988]">Global Reach</h2>
              <p className="w-11/12 ">Browse and list properties from around the world with country-specific categories and multi-language support.</p>
              </div>
            </div>

     

            <div className="flex items-start gap-5">
              <div className="bg-[#1C3988] p-2 rounded-md">
                <img src="https://i.ibb.co/j9GzZFR7/Group-2147226058.png" className="w-[40px] object-cover" />
                
              </div>
              <div>
              <h2 className="text-xl font-semibold text-[#1C3988]">Down Payment Options</h2>
              <p className="w-11/12 ">Browse and list properties from around the world with country-specific categories and multi-language support.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#1C3988] p-2 rounded-md">
                       
            <img src="https://i.ibb.co/Qjmjd0Hf/accounting-1-traced.png" className="w-[40px] object-cover" />
                
              </div>
              <div>
              <h2 className="text-xl font-semibold text-[#1C3988]">Construction Calculator</h2>
              <p className="w-11/12 ">Browse and list properties from around the world with country-specific categories and multi-language support.</p>
              </div>
            </div>


            <div className="flex items-start gap-5">
              <div className="bg-[#1C3988] p-2 rounded-md">
                       
              <img src="https://i.ibb.co/7h5Z8LD/subscription-2-1-traced.png" className="w-[40px] object-cover" />
                
              </div>
              <div>
              <h2 className="text-xl font-semibold text-[#1C3988]">Seller Subscriptions</h2>
              <p className="w-11/12 ">Browse and list properties from around the world with country-specific categories and multi-language support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Replace static image with map */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <PropertyMap />
        </div>
      </div>
    </section>
  );
};
