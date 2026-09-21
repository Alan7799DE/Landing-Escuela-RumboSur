import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa para empezar?",
    answer: "No, para nada. En Rumbo Sur recibimos personas que nunca cantaron y personas con trayectoria. Cada uno tiene su proceso y lo respetamos. Te acompañamos desde donde estés.",
  },
  {
    question: "¿Desde qué edad se puede estudiar canto?",
    answer: "Las clases de canto están abiertas desde los 14 años en adelante. Trabajamos tanto con adolescentes como con adultos de todas las edades.",
  },
  {
    question: "¿Hace falta saber música?",
    answer: "No, no hace falta saber música, ni tocar instrumentos. En las clases tenés acompañamiento en vivo de guitarra o piano. Lo importante es tu voz y tus ganas de cantar.",
  },
  {
    question: "¿Qué pasa si me da mucha vergüenza cantar?",
    answer: "Es algo súper común y normal. Empezamos de a poco, en un espacio privado y cuidado. Los talleres grupales son opcionales al principio y cuando consideremos que es el momento te acompañamos a dar ese paso.",
  },
  {
    question: "¿Puedo empezar en cualquier momento del año?",
    answer: "Sí, damos clases todo el año. Podés empezar cuando quieras. No cobramos matrícula de inscripción.",
  },
  {
    question: "¿Las clases son presenciales, online o ambas?",
    answer: "Las clases son presenciales en nuestro espacio. Es importante el encuentro cara a cara, el acompañamiento en vivo y la experiencia del sonido en el espacio.",
  },
  {
    question: "¿Cuánto dura cada clase?",
    answer: "Los encuentros individuales tienen una duración de 50 minutos. Los talleres grupales son de 1 hora y media (aprox).",
  },
  {
    question: "¿Cómo saber si me conviene individuales o grupales?",
    answer: "Siempre te invitamos a hacer una primera clase individual de prueba, donde charlamos objetivos y te contaremos un poco más acerca de cómo trabajamos.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 cream-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Preguntas frecuentes</h2>
            <p className="text-xl text-muted-foreground">
              Respondemos las dudas más comunes sobre las clases en Rumbo Sur.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl px-6 shadow-md hover:shadow-lg transition-shadow border-none"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
