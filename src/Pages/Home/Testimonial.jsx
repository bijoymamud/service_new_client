// import React, { useState } from "react"
// import "keen-slider/keen-slider.min.css"
// import { useKeenSlider } from "keen-slider/react"

// const TestimonialSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     slides: {
//       perView: 3,
//       spacing: 15,
//     },
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel)
//     },
//     dragStart: () => {
//       document.documentElement.classList.add("dragging")
//     },
//     dragEnd: () => {
//       document.documentElement.classList.remove("dragging")
//     },
//   })

//   const testimonials = [
//     {
//       id: 1,
//       name: "Shahriar Hossain",
//       image: "https://randomuser.me/api/portraits/men/12.jpg",
//       designation: "Real Estate Investor",
//       review:
//         "GlobalLand made investing in land so easy and risk-free. Highly professional service.",
//     },
//     {
//       id: 2,
//       name: "Tanjila Rahman",
//       image: "https://randomuser.me/api/portraits/women/22.jpg",
//       designation: "Land Buyer",
//       review:
//         "I found a perfect plot within my budget. The support team was responsive and helpful.",
//     },
//     {
//       id: 3,
//       name: "Mehedi Hasan",
//       image: "https://randomuser.me/api/portraits/men/33.jpg",
//       designation: "Business Owner",
//       review:
//         "Needed commercial land urgently. GlobalLand got me sorted within days!",
//     },
//     {
//       id: 4,
//       name: "Farzana Akter",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//       designation: "Architect",
//       review:
//         "Their land listings are genuine and come with all legal papers ready. Loved the experience!",
//     },
//     {
//       id: 5,
//       name: "Rezaul Karim",
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//       designation: "Engineer",
//       review:
//         "I was worried about paperwork, but GlobalLand took care of everything. Highly satisfied.",
//     },
//     {
//       id: 6,
//       name: "Nadia Chowdhury",
//       image: "https://randomuser.me/api/portraits/women/66.jpg",
//       designation: "Freelancer",
//       review:
//         "Affordable pricing, clear documentation, and great customer care. Will use again!",
//     },
//     {
//       id: 7,
//       name: "Ashraf Mahmud",
//       image: "https://randomuser.me/api/portraits/men/77.jpg",
//       designation: "Land Developer",
//       review:
//         "As a repeat client, I trust GlobalLand for bulk deals and fast closings.",
//     },
//   ]

//   return (
//     <div className="flex flex-col items-center bg-[#1a1a1a] text-white py-16 px-4 md:px-10 overflow-hidden">
//       <h1 className="text-3xl md:text-4xl font-bold mb-10">Client Testimonials</h1>

//       <style jsx global>{`
//         .dragging .keen-slider__slide > div {
//           transition: none !important;
//         }
//         .keen-slider__slide > div {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-origin: center center;
//         }
//       `}</style>

//       <div ref={sliderRef} className="keen-slider w-full">
//         {testimonials.map((review, index) => {
//           const isCenter = index === currentSlide % testimonials.length
//           const isSide =
//             index === (currentSlide - 1 + testimonials.length) % testimonials.length ||
//             index === (currentSlide + 1) % testimonials.length ||
//             index === (currentSlide - 2 + testimonials.length) % testimonials.length ||
//             index === (currentSlide + 2) % testimonials.length

//           return (
//             <div key={review.id} className="keen-slider__slide flex justify-center items-end">
//               <div
//                 className={`bg-white text-black rounded-xl shadow-lg p-6 max-w-xs transition-all duration-500 transform hover:scale-105 relative
//                   ${isCenter ? "scale-110 z-30 -mt-10" : isSide ? "scale-95 opacity-80 z-20 mt-4" : "scale-90 opacity-50 z-10 mt-8"}`}
//               >
//                 <img
//                   src={review.image}
//                   alt={review.name}
//                   className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-lg font-bold text-center">{review.name}</h3>
//                 <p className="text-sm text-center text-gray-600">{review.designation}</p>
//                 <p className="mt-4 text-sm text-center text-gray-700">“{review.review}”</p>
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       <div className="mt-8 flex justify-center space-x-2">
//         {Array.from({ length: testimonials.length }).map((_, i) => (
//           <div
//             key={i}
//             className={`h-3 w-3 rounded-full transition-all duration-300 ${
//               i === currentSlide % testimonials.length ? "bg-[#9ECA2E] w-8" : "bg-gray-500"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default TestimonialSlider
import React, { useState } from "react";

const testimonials = [
  {
    name: "Sumon",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The AI recommendations have saved us countless hours of planning and helped us identify risks we would have missed. Our project delivery time has improved by 30%.",
  },
  {
    name: "Bijoy Vi",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The AI recommendations have saved us countless hours of planning and helped us identify risks we would have missed. Our project delivery time has improved by 30%.",
  },
  {
    name: "Bijoy Vi",
    role: "Buyer From USA",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "I found my dream property in Costa Rica through GlobalLand. The detailed listings and transparent information made me confident in my purchase, even from thousands of miles away.",
  },
  {
    name: "Bijoy Vi",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "The AI recommendations have saved us countless hours of planning and helped us identify risks we would have missed. Our project delivery time has improved by 30%.",
  },
  {
    name: "Bijoy Vi",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    text: "The AI recommendations have saved us countless hours of planning and helped us identify risks we would have missed. Our project delivery time has improved by 30%.",
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(2);

  const getCard = (index) => {
    const length = testimonials.length;
    return testimonials[(index + length) % length];
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const cardsToShow = [
    getCard(activeIndex - 2),
    getCard(activeIndex - 1),
    getCard(activeIndex),
    getCard(activeIndex + 1),
    getCard(activeIndex + 2),
  ];

  return (
    <div className="bg-gray-50 p-10 text-center  mx-auto pt-32">
      <h2 className="text-3xl font-bold text-blue-900 mb-2">What Our Customers Say</h2>
      <p className="text-gray-600 mb-10  mx-auto">
        Hear from buyers and sellers who have successfully used GlobalLand to achieve their land ownership goals.
      </p>

      <div className="flex justify-center items-center space-x-6 gap-5   w-full">
        {cardsToShow.map((card, i) => (
          <div
            key={i}
            className={`bg-white p-8 rounded-xl shadow-md transition-transform duration-300
              flex flex-col items-center text-left
              ${i === 2 ? "scale-110 shadow-xl" : "opacity-70"}
              w-72 md:w-[600px]`}
          >
            <img
              src={card.image}
              alt={`${card.name} profile`}
              className={`w-20 h-20 rounded-full mb-4 object-cover ${
                i === 2 ? "border-4 border-blue-900" : "border-2 border-gray-300"
              }`}
            />
            <div className="text-4xl text-blue-900 mb-4">“</div>
            <p className="text-gray-700 mb-6 flex-grow">{card.text}</p>
            <h3 className="font-semibold text-lg text-blue-900">{card.name}</h3>
            <p className="text-sm text-gray-400">{card.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center space-x-6">
        <button
          onClick={prev}
          className="btn btn-circle btn-outline btn-lg text-blue-900 hover:bg-blue-100"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="btn btn-circle btn-outline btn-lg text-blue-900 hover:bg-blue-100"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
