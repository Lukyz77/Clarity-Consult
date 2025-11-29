"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#e7f4f2] text-[#2d7c72] rounded-full text-sm font-medium mb-6">
            Finanční poradenství & Koučink
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1c2534] leading-tight mb-6">
            Pomohu vám dosáhnout{" "}
            <span className="text-[#1b6a5c]">finanční svobody</span>
          </h1>

          <p className="text-lg text-[#6b7280] mb-10 max-w-lg leading-relaxed">
            S více než 15 lety zkušeností v oblasti finančního poradenství vám
            pomohu vytvořit strategii, která vám přinese klid a jistotu do budoucna.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#1b6a5c] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#16564a] transition">
              Nezávazná konzultace
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="px-6 py-3 rounded-xl border border-[#1b6a5c] text-[#1b6a5c] font-medium hover:bg-[#eaf6f4]">
              Zjistit více
            </button>
          </div>

          {/* TRUST */}
          <div className="mt-14 flex items-center gap-10">
            <div>
              <p className="text-4xl font-display font-bold text-[#1c2534]">500+</p>
              <p className="text-sm text-[#6b7280]">Spokojených klientů</p>
            </div>

            <div className="w-px h-12 bg-gray-200" />

            <div>
              <p className="text-4xl font-display font-bold text-[#1c2534]">15</p>
              <p className="text-sm text-[#6b7280]">Let zkušeností</p>
            </div>

            <div className="w-px h-12 bg-gray-200" />

            <div>
              <p className="text-4xl font-display font-bold text-[#1c2534]">98%</p>
              <p className="text-sm text-[#6b7280]">Doporučení</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-6 w-[100%] h-[107%] rotate-3 bg-[#2a6f69]/10 rounded-3xl"></div>
          <div className="absolute -top-7 w-[100%] h-[108%] -rotate-3 bg-[#edf8f7] rounded-3xl"></div>

          <Image
            src="/HeroImage.jpeg"
            alt="Finanční poradkyně"
            width={650}
            height={800}
            className="relative rounded-3xl shadow-xl object-cover w-full"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
