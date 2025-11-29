"use client";

import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Úvodní konzultace",
      description:
        "Nezávazně se poznáme a probereme vaše cíle, obavy a představy. Tato konzultace je zdarma a bez jakýchkoli závazků.",
    },
    {
      number: "02",
      title: "Analýza situace",
      description:
        "Společně projdeme vaši aktuální finanční situaci, příjmy, výdaje, závazky a stávající produkty. Identifikujeme příležitosti ke zlepšení.",
    },
    {
      number: "03",
      title: "Návrh strategie",
      description:
        "Na základě analýzy připravím individuální finanční plán s konkrétními kroky a doporučeními přizpůsobenými vašim cílům.",
    },
    {
      number: "04",
      title: "Realizace a podpora",
      description:
        "Pomohu vám s implementací strategie a budu vás průběžně podporovat na cestě k vašim finančním cílům.",
    },
  ];

  return (
    <motion.section
      id="process"
      className="py-24 bg-[#f3f4f6]"
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
            Jak to funguje
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-black mb-4">
            Cesta k vaší finanční svobodě
          </h2>
          <p className="text-[#737b8c] max-w-2xl mx-auto">
            Spolupráce se mnou je jednoduchá a transparentní. Zde je přehled toho, 
            co vás čeká na cestě k lepším financím.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex gap-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {i !== steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-[calc(100%-4rem)] bg-[#e2e4e9]" />
              )}

              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#2a6f69] text-[#edf8f7] flex items-center justify-center font-display font-semibold">
                  {step.number}
                </div>
              </div>

              <div className="flex-1 pt-1">
                <h3 className="font-display text-xl font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-[#737b8c] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
