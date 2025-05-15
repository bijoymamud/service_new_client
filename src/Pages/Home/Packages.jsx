


import { Check } from 'lucide-react'

const Packages = () => {
  const plans = [
    {
      name: "Basic",
      tagline: "Perfect for occasional sellers",
      price: "$29",
      period: "/month",
      features: ["List up to 5 properties", "Standard search ranking", "Buyer chat access", "Free daily boosts"],
    },
    {
      name: "Premium",
      tagline: "Ideal for active sellers with multiple properties",
      price: "$59",
      period: "/month",
      features: ["Unlimited listings", "Higher search ranking", "Buyer chat access", "1 free daily boost/month"],
    },
    {
      name: "Annual Premium",
      tagline: "Best value for professional",
      price: "$499",
      period: "/year",
      features: ["Unlimited listings", "Best search ranking", "Buyer chat access", "12 free daily boosts"],
    },
  ]

  return (
    <div id="pricing" className="min-h-screen py-8 px-4 md:px-4 md:pt-28 bg-[#f9f7f2]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-12">
          <h3 className=" mb-2 text-sm md:text-2xl font-semibold text-[#1C3988]">Seller</h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1C3988] mb-3 md:mb-4">Pricing And Plan</h1>
          <p className="text-gray-700 max-w-full md:max-w-2xl mx-auto text-xs md:text-base">
            Choose a plan tailored for your selling needs, with features like unlimited listings and enhanced search rankings to boost your success.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 w-full">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md w-full flex flex-col relative">
              <div className="p-6 flex flex-col  h-[500px]">
                <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-1">{plan.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{plan.tagline}</p>
                {plan.saveText && <p className="text-xs text-green-600 font-medium mb-2">{plan.saveText}</p>}

                <div className="relative h-20 mb-6">
  <div 
    className="absolute -left-[61px] p-10 text-white w-[280px] bg-cover bg-center"
    style={{
      backgroundImage: 'url("https://i.ibb.co/6cp0cyZb/Shaps-All.png")'
    }}
  >
    <div className="flex items-end ms-3 mb- ">
      <span className="text-4xl font-bold ">{plan.price}</span>
      <span className="text-lg ml-1">{plan.period}</span>
    </div>
  </div>
</div>


                
                <ul className="space-y-3 flex-grow mt-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-[#1e3a8a] flex items-center justify-center mr-3">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="cursor-pointer w-full bg-[#1e3a8a] hover:bg-[#152a61] text-white py-3 px-6 rounded-md font-medium transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages