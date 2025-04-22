import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-500" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need filmmaking experience?",
      answer: "No, this workshop is beginner-friendly and perfect for all creative minds. We've designed it to be accessible regardless of your prior experience with filmmaking or AI tools."
    },
    {
      question: "Are the tools used in the workshop free?",
      answer: "Yes! We'll focus on free or freemium tools to help you get started without spending a penny. You'll be able to implement everything you learn without any significant investment."
    },
    {
      question: "Will I get the recording?",
      answer: "Yes, a recording will be available for a limited time for registered attendees. This allows you to review the content at your own pace or catch up if you miss any part of the live session."
    },
    {
      question: "Is it really live and interactive?",
      answer: "Absolutely! You'll be able to ask questions and even try out a demo during the session. The workshop is designed to be engaging and hands-on."
    },
    {
      question: "Can I join from mobile?",
      answer: "Yes, but for the best experience, a desktop/laptop is recommended. Some of the AI tools work better on larger screens, and you'll be able to follow along with the demonstrations more easily."
    },
    {
      question: "Will there be a certificate?",
      answer: "A certificate will be provided to those who complete a short task post-workshop. This can be a great addition to your portfolio or resume if you're looking to showcase your AI video creation skills."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about the AI Filmmaking Workshop
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-3xl mx-auto">
          <AnimatedElement delay={100}>
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement delay={200} className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions? We're here to help!
            </p>
            <button className="px-6 py-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/50 rounded-full font-medium transition-all">
              Contact Support
            </button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default FAQ;