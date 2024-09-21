import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const Faq = () => {
  return (
    <div className="mx-auto bg-black max-w-[93.194%]">
      <div className="flex py-9 px-4 sm:px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge">
        <div className="flex w-full h-auto flex-col items-start gap-[37px] flex-shrink-0">
          <Header title="FAQs" count={faqs.length} />
          <AccordionList faqs={faqs} />
        </div>
      </div>
    </div>
  );
};

const Header = ({ title, count }) => (
  <div className="flex w-auto h-auto items-start">
    <div className="flex w-auto h-[73px] flex-col justify-center text-offwhite font-spacegrotesk text-[2rem] sm:text-[3.7rem] font-normal leading-[60px]">
      {title}
    </div>
    <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-spacemono font-medium leading-[28px]">
      ({count})
    </div>
  </div>
);

const AccordionList = ({ faqs }) => (
  <div className="w-full text-[#A0A0A0] font-spacemono text-[1rem]">
    <Accordion type="single" className="w-full text-red-50" collapsible>
      {faqs.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className="w-full">
          <AccordionTrigger className="w-full text-[1.25rem] sm:text-[1.5rem] font-spacegrotesk text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="w-full text-[1rem] sm:text-[1.1rem] text-[#A0A0A0] font-spacemono text-left">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default Faq;