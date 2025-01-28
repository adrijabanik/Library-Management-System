"use client"; 

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
    <div className="faq-wrapper">
      {/* Background Image */}
      <div className="faq-background-image">
         <Image 
                    width={1300}
                    height={1300}
                     alt='Library'
                     src='/assets/book.png'
                    ></Image>
      </div>
     <div className="faq-container">
        {/* Left Section */}
        <div className="faq-left">
          <h5>Frequently Asked Questions</h5>
          <h2>Let&apos;s clarify some of your questions</h2>
          <p>
            Find quick answers to common questions about searching, borrowing,
            returning books, and using our library system effectively.
          </p>
          <div className="faq-image">
          <Image 
                    width={1300}
                    height={1300}
                     alt='Library'
                     src='/assets/booj.png'
                    ></Image>
          </div>
        </div>

        {/* Right Section */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;