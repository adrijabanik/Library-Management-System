// "use client"; 

// import React, { useState } from "react";
// import Image from "next/image";
// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(1); 

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       question: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
//       answer:
//         "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
//       answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
//     },
//     {
//       question:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
//       answer:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
//     },
//     {
//       question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <div className="faq-wrapper">
//       {/* Background Image */}
//       <div className="faq-background-image">
//          <Image 
//                     width={1300}
//                     height={1300}
//                      alt='Library'
//                      src='/assets/book.png'
//                     ></Image>
//       </div>
//      <div className="faq-container">
//         {/* Left Section */}
//         <div className="faq-left">
//           <h5>Frequently Asked Questions</h5>
//           <h2>Let&apos;s clarify some of your questions</h2>
//           <p>
//             Find quick answers to common questions about searching, borrowing,
//             returning books, and using our library system effectively.
//           </p>
//           <div className="faq-image">
//           <Image 
//                     width={1300}
//                     height={1300}
//                      alt='Library'
//                      src='/assets/booj.png'
//                     ></Image>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="faq-right">
//           {faqs.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <div className="faq-question" onClick={() => toggleFAQ(index)}>
//                 <span>{faq.question}</span>
//                 <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
//               </div>
//               {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
      answer:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      question:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-12">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          width={1300}
          height={1300}
          alt="Library"
          src="/assets/book.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 px-6">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h5 className="text-indigo-600 text-lg font-semibold">Frequently Asked Questions</h5>
          <h2 className="text-3xl font-bold mt-2">
            Let&apos;s clarify some of your questions
          </h2>
          <p className="text-gray-700 mt-4">
            Find quick answers to common questions about searching, borrowing,
            returning books, and using our library system effectively.
          </p>
          <div className="mt-6">
            <Image
              width={1300}
              height={1300}
              alt="Library"
              src="/assets/booj.png"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
