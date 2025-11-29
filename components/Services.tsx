"use client";

import { ArrowRight, TrendingUp, Users, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const packages = [
    {
      icon: Target,
      name: "Start",
      subtitle: "Pro ty, kdo začínají",
      price: "3 900",
      description: "Ideální pro ty, kdo chtějí udělat první kroky…",
      features: [
        "Úvodní konzultace (90 min)",
        "Analýza aktuální situace",
        "Základní finanční plán",
        "E-mailová podpora po dobu 1 měsíce",
      ],
      popular: false,
    },
    {
      icon: TrendingUp,
      name: "Růst",
      subtitle: "Nejoblíbenější volba",
      price: "9 900",
      description: "Komplexní program pro ty, kdo chtějí aktivně budovat bohatství…",
      features: [
        "3 konzultace (90 min)",
        "Detailní analýza a strategie",
        "Investiční plán na míru",
        "Optimalizace pojištění",
        "Průběžná podpora 3 měsíce",
        "Přístup do členské sekce",
      ],
      popular: true,
    },
    {
      icon: Sparkles,
      name: "Premium",
      subtitle: "Pro náročné klienty",
      price: "24 900",
      description: "VIP péče s individuálním přístupem…",
      features: [
        "6 konzultací (90 min)",
        "Komplexní strategie",
        "Správa portfolia",
        "Daňová optimalizace",
        "Neomezená podpora 6 měsíců",
        "Čtvrtletní revize",
        "Prioritní linka",
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f3f4f6]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent text-[#edf8f7] rounded-full text-sm font-medium mb-6">
            Služby
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-black mb-4">
            Vyberte si balíček, který vám sedne
          </h2>

          <p className="text-[#737b8c] max-w-2xl mx-auto">
            Nabízím tři úrovně spolupráce…
          </p>
        </motion.div>

        {/* Packages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "shadow-card-hover ring-2 ring-[#2a6f69]"
                  : "shadow-card hover:shadow-card-hover"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2a6f69] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    Nejoblíbenější
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <pkg.icon className="w-6 h-6 text-[#2a6f69]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-black">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-[#737b8c]">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-display font-semibold text-black">
                  {pkg.price}
                </span>
                <span className="text-[#737b8c] ml-2">Kč</span>
              </div>

              <p className="text-[#737b8c] mb-6 text-sm leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#edf8f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-[#2a6f69]" />
                    </div>
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="flex text-center justify-center items-center w-full h-12 rounded-lg px-8 text-white bg-[#2a6f69] hover:bg-[#2a6f69]/90 transition duration-300 mt-auto cursor-pointer"
              >
                Mám zájem
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center text-[#737b8c] mt-12"
        >
          Potřebujete něco speciálního?{" "}
          <a
            href="#booking"
            className="text-[#2a6f69] hover:underline font-medium"
          >
            Kontaktujte mě
          </a>{" "}
          pro individuální nabídku.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
