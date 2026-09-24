"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageCircle, Calendar } from "lucide-react";
import { useState, useRef } from "react";

const ContactSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotateIcon = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" ref={containerRef} className="relative py-16 md:py-32 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div style={{ y: y1 }} className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20"
          >
            Connect with Us
          </motion.span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl text-foreground font-extrabold tracking-tight leading-[1.1]">
            Let's Forge Your <br />
            <span className="font-serif-accent italic text-primary">Digital Future.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
            Ready to scale? Whether it's high-end production or industrial-grade automation, we're here to engineer your growth.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:gap-20 lg:grid-cols-2 items-start">
          {/* Left — Info + Quick links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", text: "+91 7603917369" },
                { icon: Phone, label: "Pannu", text: "+91 6369835221" },
                { icon: Mail, label: "Email Us", text: "hello@zeenox.agency" },
                { icon: MapPin, label: "Visit Us", text: "vakkanangundu, 626104" },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="group flex items-center gap-5 p-5 sm:p-7 rounded-[1.5rem] bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon size={22} className="sm:hidden" />
                    <Icon size={28} className="hidden sm:block" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{label}</p>
                    <p className="text-base sm:text-xl font-bold text-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/917603917369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-500 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-black uppercase tracking-widest">WhatsApp Inquire</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 p-6 rounded-2xl border border-border bg-card text-foreground hover:bg-foreground hover:text-background transition-all duration-500 group"
              >
                <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-black uppercase tracking-widest">Book Strategy Call</span>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              const email = formData.get("email") as string;
              const subject = formData.get("subject") as string;
              const message = formData.get("message") as string;

              let text = `*New Contact Request*\n\n`;
              text += `*Name:* ${name}\n`;
              text += `*Phone:* ${phone}\n`;
              text += `*Email:* ${email}\n`;
              if (subject) text += `*Subject:* ${subject}\n`;
              text += `*Message:* ${message}`;

              const encodedMessage = encodeURIComponent(text);
              window.open(`https://wa.me/917603917369?text=${encodedMessage}`, "_blank");
              setSubmitted(true);
            }}
            className="relative p-8 sm:p-12 rounded-[2.5rem] bg-card border border-border shadow-2xl overflow-hidden"
          >
             <motion.div style={{ y: y2, rotate: rotateIcon }} className="absolute top-0 right-0 p-12 pointer-events-none opacity-[0.03]">
                <Send size={200} className="text-foreground" />
             </motion.div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 text-center relative z-10">
                <div className="mb-8 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Send size={48} className="animate-bounce" />
                </div>
                <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">Message Sent!</h3>
                <p className="mt-6 text-muted-foreground font-medium text-lg">We'll reach out to you within 24 hours.</p>
              </div>
            ) : (
              <div className="relative z-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Full Name", type: "text" },
                    { name: "phone", label: "Phone Number", type: "tel" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/70 ml-1">{field.label}</label>
                      <input
                        name={field.name}
                        type={field.type}
                        required
                        placeholder={field.label}
                        className="w-full h-14 sm:h-16 rounded-2xl bg-foreground/[0.03] border border-border px-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-xl transition-all duration-300 outline-none placeholder:text-muted-foreground/70"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/70 ml-1">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        className="w-full h-14 sm:h-16 rounded-2xl bg-foreground/[0.03] border border-border px-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-xl transition-all duration-300 outline-none placeholder:text-muted-foreground/70"
                    />
                </div>
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/70 ml-1">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        placeholder="Project subject?"
                        className="w-full h-14 sm:h-16 rounded-2xl bg-foreground/[0.03] border border-border px-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-xl transition-all duration-300 outline-none placeholder:text-muted-foreground/70"
                    />
                </div>
                <div className="space-y-2.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/70 ml-1">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="How can we help?"
                        className="w-full rounded-3xl bg-foreground/[0.03] border border-border p-7 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-xl transition-all duration-300 outline-none resize-none placeholder:text-muted-foreground/70"
                    />
                </div>
                <button
                  type="submit"
                  className="w-full h-16 sm:h-20 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-4"
                >
                  Send Inquiry <Send size={18} />
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
