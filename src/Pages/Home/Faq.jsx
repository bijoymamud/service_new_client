
// import React, { useState, useRef, useEffect } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
//   const contentRef = useRef(null);
//   const [maxHeight, setMaxHeight] = useState("0px");

//   useEffect(() => {
//     if (isOpen) {
//       setMaxHeight(`${contentRef.current.scrollHeight}px`);
//     } else {
//       setMaxHeight("0px");
//     }
//   }, [isOpen]);

//   return (
//     <div className="mb-4">
//       <button
//         onClick={toggleOpen}
//         className={`w-full bg-white rounded-md p-4 flex justify-between items-center text-left ${
//           isOpen ? "border-b-2 border-blue-900" : ""
//         }`}
//       >
//         <span
//           className={`font-medium text-gray-800 transition-all duration-300 ${
//             isOpen ? "underline underline-offset-4" : ""
//           }`}
//         >
//           {question}
//         </span>
//         {isOpen ? (
//           <ChevronUp className="h-5 w-5 text-[#1e3a8a]" />
//         ) : (
//           <ChevronDown className="h-5 w-5 text-[#1e3a8a]" />
//         )}
//       </button>

//       <div
//         ref={contentRef}
//         style={{
//           maxHeight: maxHeight,
//           transition: "max-height 0.3s ease, opacity 0.3s ease",
//           overflow: "hidden",
//           opacity: isOpen ? 1 : 0,
//         }}
//         className="bg-white p-4 rounded-b-md mt-[-4px]"
//       >
//         <p className="text-gray-700">{answer}</p>
//       </div>
//     </div>
//   );
// };

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqItems = [
//     {
//       question: "How does the co-ownership work?",
//       answer:
//         "When a seller enables the 'Buy a Share' option, interested buyers can express interest in purchasing a portion of the property. Once 5 buyers join, a private group chat is unlocked for all parties to discuss details. You'll need to be on our 'Buy a Share' plan ($99 for 3 months or $399/year) to participate.",
//     },
//     {
//       question: "What are the benefits of boosting my listing",
//       answer:
//         "Boosting your listing increases its visibility in search results, puts it in front of more potential buyers, and can reduce the time it takes to sell your property. Boosted listings receive up to 5x more views and 3x more inquiries than standard listings.",
//     },
//     {
//       question: "Does your safeland handle the legal aspects of land transactions?",
//       answer:
//         "Yes, our platform provides standard legal documents and contracts for most common land transactions. However, for complex deals or specific legal requirements, we recommend consulting with a real estate attorney. Premium and Annual Premium members have access to our legal consultation service.",
//     },
//     {
//       question: "How do I become a verified seller?",
//       answer:
//         "To become a verified seller, you need to complete our verification process which includes providing proof of identity, proof of ownership for your properties, and passing our background check. Verified sellers receive a badge on their listings and typically see 40% higher engagement rates.",
//     },
//     {
//       question: "What happens if co buying group doesn't form within 90 days",
//       answer:
//         "If a co-buying group doesn't form within 90 days, the seller has several options: extend the co-buying period for another 30 days, revert to a traditional sale, or pause the listing. There's no penalty for changing the selling method, and all expressed interests are saved if you decide to try co-buying again later.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(index === openIndex ? -1 : index);
//   };

//   return (
//   <section >
//       <div className="py-16 p-10 bg-[#1C3988] rounded-lg container mx-auto">
//       <div className="container mx-auto ">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
//           Frequently Asked Questions
//         </h2>
//         <p className="text-white text-lg mb-8">
//           Find answers to common questions about our platform.
//         </p>

//         <div className="space-y-4">
//           {faqItems.map((item, index) => (
//             <FAQItem
//               key={index}
//               question={item.question}
//               answer={item.answer}
//               isOpen={index === openIndex}
//               toggleOpen={() => toggleFAQ(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default FAQ;
"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-2">
      <button
        onClick={toggleOpen}
        className={`w-full bg-white rounded-md p-4 flex justify-between items-center text-left ${
          isOpen ? "border-b-2 border-blue-900" : ""
        }`}
      >
        <span
          className={`font-medium text-gray-800 transition-all duration-300 ${
            isOpen ? "underline underline-offset-4" : ""
          }`}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#1e3a8a]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#1e3a8a]" />
        )}
      </button>

      <div
        style={{
          maxHeight: isOpen ? "9999px" : "0px",
          transition:
            "max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease, margin 0.3s ease",
          overflow: "hidden",
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? "1rem" : "0rem",
          marginTop: isOpen ? "-4px" : "0px",
        }}
        className="bg-white rounded-b-md"
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "How does the co-ownership work?",
      answer:
        "When a seller enables the 'Buy a Share' option, interested buyers can express interest in purchasing a portion of the property. Once 5 buyers join, a private group chat is unlocked for all parties to discuss details. You'll need to be on our 'Buy a Share' plan ($99 for 3 months or $399/year) to participate.",
    },
    {
      question: "What are the benefits of boosting my listing",
      answer:
        "Boosting your listing increases its visibility in search results, puts it in front of more potential buyers, and can reduce the time it takes to sell your property. Boosted listings receive up to 5x more views and 3x more inquiries than standard listings.",
    },
    {
      question: "Does your safeland handle the legal aspects of land transactions?",
      answer:
        "Yes, our platform provides standard legal documents and contracts for most common land transactions. However, for complex deals or specific legal requirements, we recommend consulting with a real estate attorney. Premium and Annual Premium members have access to our legal consultation service.",
    },
    {
      question: "How do I become a verified seller?",
      answer:
        "To become a verified seller, you need to complete our verification process which includes providing proof of identity, proof of ownership for your properties, and passing our background check. Verified sellers receive a badge on their listings and typically see 40% higher engagement rates.",
    },
    {
      question: "What happens if co buying group doesn't form within 90 days",
      answer:
        "If a co-buying group doesn't form within 90 days, the seller has several options: extend the co-buying period for another 30 days, revert to a traditional sale, or pause the listing. There's no penalty for changing the selling method, and all expressed interests are saved if you decide to try co-buying again later.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="bg-[#f9f7f2]">
      <div className="p-10 bg-[#1C3988] rounded-lg container mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-white text-lg mb-8">
            Find answers to common questions about our platform.
          </p>

          <div>
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
