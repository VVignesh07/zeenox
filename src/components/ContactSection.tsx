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
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" ref={containerRef} className="relative py-12 md:py-32 bg-background overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest"
          >
            Contact Us
          </motion.span>
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
            Let's Forge Your <br />
            <span className="font-serif-accent italic text-primary">Digital Future.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed font-medium">
            Ready to scale? Whether it's high-end production or industrial-grade automation, we're here to engineer your growth.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:gap-20 lg:grid-cols-2 items-start">
          {/* Left — Info + Quick links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", text: "+91 7603917369" },
                { icon: Mail, label: "Email Us", text: "hello@zeenox.agency" },
                { icon: MapPin, label: "Visit Us", text: "vakkanangundu, 626104" },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="group flex items-center gap-6 p-6 card-apple hover:border-primary/20 transition-all duration-500">
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shadow-primary/5">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{label}</p>
                    <p className="text-lg font-bold text-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917603917369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-wider">WhatsApp</span>
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 group"
              >
                <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-wider">Book Call</span>
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

              // Construct the WhatsApp message text
              let text = `*New Contact Request*\n\n`;
              text += `*Name:* ${name}\n`;
              text += `*Phone:* ${phone}\n`;
              text += `*Email:* ${email}\n`;
              if (subject) text += `*Subject:* ${subject}\n`;
              text += `*Message:* ${message}`;

              // Encode the message
              const encodedMessage = encodeURIComponent(text);

              // Open WhatsApp
              window.open(`https://wa.me/917603917369?text=${encodedMessage}`, "_blank");

              setSubmitted(true);
            }}
            className="relative p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl"
          >
             <motion.div style={{ y: y2, rotate: rotateIcon }} className="absolute top-0 right-0 p-8 pointer-events-none opacity-[0.03]">
                <Send size={150} className="text-foreground" />
             </motion.div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center relative z-10">
                <div className="mb-6 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Send size={40} className="animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-4 text-muted-foreground font-medium">I'll personally get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="relative z-10 space-y-5">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Full Name", type: "text" },
                    { name: "phone", label: "Phone Number", type: "tel" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">{field.label}</label>
                      <input
                        name={field.name}
                        type={field.type}
                        required
                        placeholder={field.label}
                        className="w-full h-14 rounded-xl bg-foreground/[0.03] border border-border px-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-lg transition-all duration-300 outline-none placeholder:text-muted-foreground/40"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        className="w-full h-14 rounded-xl bg-foreground/[0.03] border border-border px-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-lg transition-all duration-300 outline-none placeholder:text-muted-foreground/40"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        placeholder="Project subject?"
                        className="w-full h-14 rounded-xl bg-foreground/[0.03] border border-border px-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-lg transition-all duration-300 outline-none placeholder:text-muted-foreground/40"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="How can we help?"
                        className="w-full rounded-2xl bg-foreground/[0.03] border border-border p-6 text-sm text-foreground focus:border-primary focus:bg-card focus:shadow-lg transition-all duration-300 outline-none resize-none placeholder:text-muted-foreground/40"
                    />
                </div>
                <button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-4"
                >
                  Send Message <Send size={18} />
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
