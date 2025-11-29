"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const qualities = [
    "Certifikovaná finanční poradkyně",
    "Akreditovaný profesionální kouč ICF",
    "Absolventka VŠE Praha",
    "Autorka knihy 'Cesta k finanční svobodě'",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-[#edf8f7] text-[#235c58] rounded-full text-sm font-medium mb-6">
              O mně
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-black mb-6 text-balance">
              Věřím, že každý si zaslouží mít své finance pod kontrolou
            </h2>

            <p className="text-[#737b8c] leading-relaxed mb-6">
              Během své více než patnáctileté praxe jsem pomohla stovkám klientů…
            </p>

            <p className="text-[#737b8c] leading-relaxed mb-8">
              Kombinuji odborné znalosti finančního světa…
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="space-y-4"
            >
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#2a6f69] flex-shrink-0" />
                  <span className="text-black">{quality}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                number: "01",
                title: "Důvěra",
                description: "Základem naší spolupráce…",
              },
              {
                number: "02",
                title: "Individualita",
                description: "Každý klient je jedinečný…",
              },
              {
                number: "03",
                title: "Vzdělávání",
                description: "Pomohu vám pochopit principy…",
              },
              {
                number: "04",
                title: "Dlouhodobost",
                description: "Zaměřuji se na udržitelné strategie…",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 bg-[#f3f4f6] rounded-xl hover:shadow-card transition-shadow duration-300"
              >
                <span className="text-sm font-semibold text-[#2a6f69] mb-2 block">
                  {value.number}
                </span>
                <h3 className="font-display text-lg font-semibold text-black mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#737b8c] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
