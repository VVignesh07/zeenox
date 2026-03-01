import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-28">
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            ✦ Contact
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Get In Touch{" "}
            <span className="font-serif-accent gradient-text">Today</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Whether you're a startup looking to establish your brand or an established
            company aiming to unleash your online identity — let's make it happen.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Left — Info + Quick links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: "Call", text: "+91 7603917369" },
                { icon: Mail, label: "Email", text: "hello@zeenox.agency" },
                { icon: MapPin, label: "Location", text: "vakkanangundu, 626104" },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl p-4 card-dark card-dark-hover transition-all">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">{label}</p>
                    <p className="text-sm text-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://wa.me/917603917369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl p-4 card-dark card-dark-hover transition-all text-sm"
              >
                <MessageCircle size={18} className="text-primary" />
                <span className="text-foreground">Quick Connect via WhatsApp</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl p-4 card-dark card-dark-hover transition-all text-sm"
              >
                <Calendar size={18} className="text-primary" />
                <span className="text-foreground">Book a Call</span>
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
            className="flex flex-col gap-5 rounded-2xl p-8 card-dark glow-border"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <Send size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Leave a Message</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Full Name", type: "text" },
                    { name: "phone", label: "Phone Number", type: "tel" },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === field.name
                          ? "top-1 text-[10px] text-primary"
                          : "top-3.5 text-sm text-muted-foreground"
                          }`}
                      >
                        {field.label}*
                      </label>
                      <input
                        name={field.name}
                        type={field.type}
                        required
                        onFocus={() => setFocused(field.name)}
                        onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                        className="w-full rounded-lg border border-border bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "email"
                      ? "top-1 text-[10px] text-primary"
                      : "top-3.5 text-sm text-muted-foreground"
                      }`}
                  >
                    Email Address*
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    onFocus={() => setFocused("email")}
                    onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                    className="w-full rounded-lg border border-border bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "subject"
                      ? "top-1 text-[10px] text-primary"
                      : "top-3.5 text-sm text-muted-foreground"
                      }`}
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    onFocus={() => setFocused("subject")}
                    onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                    className="w-full rounded-lg border border-border bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "message"
                      ? "top-1 text-[10px] text-primary"
                      : "top-3.5 text-sm text-muted-foreground"
                      }`}
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    onFocus={() => setFocused("message")}
                    onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                    className="w-full resize-none rounded-lg border border-border bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg btn-primary-glow px-6 py-3.5 text-sm"
                >
                  Submit Now <Send size={16} />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
