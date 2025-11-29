"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Martin Procházka",
      role: "Podnikatel",
      quote:
        "Marie mi pomohla kompletně přeorganizovat firemní i osobní finance. Díky její strategii jsem za rok ušetřil přes 200 000 Kč a konečně mám přehled o tom, kam peníze tečou.",
    },
    {
      name: "Petra Králová",
      role: "IT manažerka",
      quote:
        "Před spoluprací s Marií jsem odkládala všechna finanční rozhodnutí. Dnes mám jasný plán, investuji a poprvé v životě mám pocit finanční jistoty.",
    },
    {
      name: "Tomáš Dvořák",
      role: "Lékař",
      quote:
        "Oceňuji Marii za profesionální, ale zároveň lidský přístup. Vysvětlila mi vše srozumitelně a bez zbytečného tlaku. Spolupráci vřele doporučuji.",
    },
    {
      name: "Lucie Svobodová",
      role: "Freelancer",
      quote:
        "Jako freelancer jsem měla chaos ve financích. Marie mi pomohla nastavit systém, který funguje. Konečně vím, kolik si můžu dovolit investovat a kolik nechat jako rezervu.",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#edf8f7] text-[#2a6f69] rounded-full text-sm font-medium mb-6">
            Reference
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-black mb-4">
            Co říkají moji klienti
          </h2>
          <p className="text-[#737b8c] max-w-2xl mx-auto">
            Nejlepší doporučení přichází od spokojených klientů. Zde je několik 
            příběhů těch, kterým jsem měla tu čest pomoct.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#f3f4f6] rounded-2xl p-8 relative hover:shadow-white transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Quote className="w-5 h-5 text-[#2a6f69]/40 absolute top-3 right-3" />

              <p className="text-black leading-relaxed mb-6">"{t.quote}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a6f69]/10 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-[#2a6f69]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-[#737b8c]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
