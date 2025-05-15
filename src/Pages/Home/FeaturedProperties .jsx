import { CircleDollarSign, Heart, MapPin, Users } from "lucide-react";
import React from "react";

export const FeaturedProperties = () => {
  const properties = [
    {
      title: "Mountain View Ranch",
      location: "Colorado, USA",
      price: "$250,000",
      area: "25 Acres",
      bank_state: "Down Payment Available",
      image: "https://www.swadeshproperties.com/images/property-near-dhaka.jpg",
      interestedPeople: 2,
      description: "This beautiful property offers breathtaking, panoramic views that make it an ideal choice for both recreation and residential purposes.",
    },
    {
      title: "Mountain View Ranch",
      location: "Monticello, USA",
      price: "$250,000",
      area: "25 Acres",
      bank_state: "Down Payment Available",
      image: "https://images.prop24.com/352732157/Crop508x373",
      interestedPeople: 4,
      description: "This beautiful property offers breathtaking, panoramic views that make it an ideal choice for both recreation and residential purposes.",
    },
    {
      title: "Oceanfront Paradise",
      location: "Miami, USA",
      price: "$650,000",
      area: "25 Acres",
      bank_state: "Down Payment Available",
      image: "https://teja12.kuikr.com/is/a/t20/1280x800/public/images/apartments/original_img/v74zo3.gif",
      interestedPeople: 1,
      description: "This beautiful property offers breathtaking, panoramic views that make it an ideal choice for both recreation and residential purposes.",
    },
    {
      title: "Oceanfront Paradise",
      location: "Barcelona, Spain",
      price: "$650,000",
      area: "25 Acres",
      bank_state: "Down Payment Available",
      image: "https://static.vecteezy.com/system/resources/previews/021/812/444/non_2x/vacant-land-management-land-reclamation-for-land-plot-for-building-house-aerial-view-land-pins-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-expand-free-photo.jpg",
      interestedPeople: 3,
      description: "This beautiful property offers breathtaking, panoramic views that make it an ideal choice for both recreation and residential purposes.",
    },
    {
      title: "Oceanfront Paradise",
      location: "Los Angeles, USA",
      price: "$650,000",
      area: "25 Acres",
      image: "https://s.wsj.net/public/resources/images/MN-AI570_RELVAL_M_20150311124152.jpg",
      interestedPeople: 4,
      description: "This beautiful property offers breathtaking, panoramic views that make it an ideal choice for both recreation and residential purposes.",
    },
    {
      title: "Oceanfront Paradise",
      location: "Florida, USA",
      price: "$650,000",
      area: "25 Acres",
      image: "https://images1.loopnet.com/i2/d-7EeXp_5N_l21TE6KeuBMgnYHd7hn0D8CYqHaEw74s/117/land-property-for-sale-3137-3139-rio-linda-blvd-sacramento-ca-95815.jpg",
      interestedPeople: 2,
      description: "This beautiful property offers breathtaking, panoramic views that make it an ideal choice for both recreation and residential purposes.",
    },
  ];

  return (
    <section className="bg-[#F9F5ED] py-16">
      <div className="container mx-auto">
       
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-4">
          <h2 className="text-4xl text-start text-[#1C3988] font-semibold  basis-6/12">Featured Properties</h2>

          <p className="text-gray-700 ">Discover our featured properties, carefully selected for their prime locations and exceptional value. Whether for <br /> recreation, investment, or building your dream home, these listings offer unique opportunities </p>
          </div>
          
          <div className="basis-5/12 flex items-center justify-end space-x-5 ps-10">
  <button
    className="py-2.5 h-12 cursor-pointer rounded-md text-white font-medium bg-[#1C3988] hover:bg-[#1C3970] mt-4 w-full flex items-center justify-center"
  >
    All Properties
  </button>

  <button
    className="py-2.5  cursor-pointer rounded-md border font-medium bg-white text-[#1C3970] mt-4 h-12 w-full flex items-center justify-center"
  >
    <span className="flex gap-2 items-center justify-center">
      <MapPin size={20} /> View Map
    </span>
  </button>

  <button
    className="py-2.5  cursor-pointer rounded-md font-medium text-[#1C3970] mt-4 h-10 w-full flex items-center justify-center"
  >
    <select
      defaultValue="Pick a color"
      className="select h-12 w-full bg-white text-[#1C3970] font-medium text-start outline-none"
    >
      <option disabled value="Pick a color">
        Pick a color
      </option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
  </button>
</div>
        </div>

    
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {properties.map((property, index) => (
    <div key={index} className="card w-full bg-white shadow-lg rounded-lg overflow-hidden relative">
      
      {/* Favorite Button */}
      <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:text-red-500 transition-colors">
        <Heart size={22} />
      </button>

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-[#1C3988]">{property.title}</h3>
        <p className="flex items-center gap-1 text-sm font-medium text-gray-600">
          <MapPin size={16} /> {property.location}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="flex items-center gap-1 text-lg font-bold text-[#1C3988]">
            <CircleDollarSign size={20} /> {property.price}
          </span>
          <span className="text-md font-bold text-gray-700">{property.area}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div
            className={`text-xs font-medium px-5 py-2 rounded-full ${
              property.bank_state === "Down Payment Available"
                ? "bg-[#1C3988] cursor-pointer text-white"
                : "invisible"
            }`}
          >
            {property.bank_state}
          </div>

          <p className="flex items-center gap-2 text-base text-gray-700">
            <Users size={18} />
            <span className="mt-[1px] font-semibold">{property.interestedPeople} / 5</span>
          </p>
        </div>

        <p className="pt-2.5 text-sm text-gray-600">{property.description}</p>

        <button className="py-2.5 cursor-pointer rounded-md text-white font-medium bg-[#1C3988] hover:bg-[#1C3970] mt-4 w-full">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
