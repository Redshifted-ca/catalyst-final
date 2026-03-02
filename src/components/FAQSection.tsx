import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  link?: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-card border border-border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <a href={faq.link}>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
              </a>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
