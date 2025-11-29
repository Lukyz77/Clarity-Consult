"use client";

import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#edf8f7] text-[#2a6f69] rounded-full text-sm font-medium mb-6">
              Rezervace
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-black mb-6 text-balance">
              Udělejte první krok k finanční svobodě
            </h2>

            <p className="text-[#737b8c] leading-relaxed mb-8">
              Rezervujte si nezávaznou úvodní konzultaci zdarma. Během 30 minut 
              probereme vaše cíle a zjistíme, zda vám mohu pomoci.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {[
                { Icon: Phone, label: "Telefon", value: "+420 123 456 789" },
                { Icon: Mail, label: "E-mail", value: "marie@financniporadce.cz" },
                { Icon: MapPin, label: "Kancelář", value: "Praha 1, Václavské nám. 1" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ delay: 0.1 * (i + 1), duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#edf8f7] flex items-center justify-center">
                    <item.Icon className="w-5 h-5 text-[#2a6f69]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737b8c]">{item.label}</p>
                    <p className="font-medium text-black">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-[#737b8c]">
              Konzultace probíhají osobně v Praze nebo online přes Zoom/Google Meet.
            </p>
          </motion.div>

          {/* Right - Calendly area */}
          <motion.div
            className="bg-secondary rounded-2xl p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-[#2a6f69]" />
              <h3 className="font-display text-xl font-semibold text-black">
                Vyberte si termín
              </h3>
            </div>

            <div className="bg-card rounded-xl p-6 min-h-[400px] flex flex-col items-center justify-center border border-border">
              <Calendar className="w-16 h-16 text-[#737b8c]/30 mb-4" />
              <p className="text-center text-[#737b8c] mb-6">
                Pro rezervaci termínu klikněte na tlačítko níže.
                <br />Budete přesměrováni do plánovacího kalendáře.
              </p>

              <button
                className="h-12 rounded-lg px-8 text-white bg-[#2a6f69] hover:bg-[#2a6f69]/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                onClick={() =>
                  window.open("https://calendly.com", "_blank")
                }
              >
                Otevřít kalendář Calendly
              </button>
            </div>

            <p className="text-sm text-[#737b8c] text-center mt-6">
              Po výběru termínu vám přijde potvrzení e-mailem s detaily schůzky.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
