"use client";

import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Globe,
  Smartphone,
  Bot,
  Video,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import siteConfig from "@/data/siteConfig";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SERVICE_OPTIONS = [
  {
    value: "Website Development",
    label: "Website Development",
    badge: "Corporate & E-Com",
    icon: Globe,
  },
  {
    value: "Custom Web / Mobile App",
    label: "Custom Web / Mobile App & SaaS",
    badge: "Next.js & Flutter",
    icon: Smartphone,
  },
  {
    value: "Automation & WhatsApp CRM",
    label: "Automation & WhatsApp CRM (Autozee.ai)",
    badge: "Flows & APIs",
    icon: Bot,
  },
  {
    value: "Video Editing & Brand Production",
    label: "Video Editing & Brand Production",
    badge: "Reels & Commercials",
    icon: Video,
  },
  {
    value: "Digital Marketing & SEO",
    label: "Digital Marketing & Local SEO",
    badge: "Meta & Google Ads",
    icon: TrendingUp,
  },
  {
    value: "Not sure / Need Advice",
    label: "Not sure / Need Technical Advice",
    badge: "Free Consultation",
    icon: HelpCircle,
  },
];

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState<string>("Website Development");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    service: string;
    replyHours: number;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Capture UTM parameters from sessionStorage if available
  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    referrer: "",
  });

  useEffect(() => {
    try {
      setUtmData({
        utm_source: sessionStorage.getItem("utm_source") || "",
        utm_medium: sessionStorage.getItem("utm_medium") || "",
        utm_campaign: sessionStorage.getItem("utm_campaign") || "",
        referrer: sessionStorage.getItem("referrer") || (typeof document !== "undefined" ? document.referrer : ""),
      });
    } catch {
      // SessionStorage might be disabled in private mode
    }
  }, []);

  const bookingUrl =
    siteConfig.contact.bookingUrl && siteConfig.contact.bookingUrl.trim() !== ""
      ? siteConfig.contact.bookingUrl
      : `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        "Hi ZeenOx, I'd like to book a strategy call."
      )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      type: "contact",
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      service: (formData.get("service") as string) || "Not sure",
      message: (formData.get("message") as string) || "",
      website_hp: (formData.get("website_hp") as string) || "",
      ...utmData,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try WhatsApp.");
      }

      setSubmittedData({
        name: data.name || payload.name,
        service: payload.service,
        replyHours: data.replyExpectedHours || siteConfig.contact.responseTimeHours,
      });

      // Track lead event if dataLayer exists
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submit",
          service: payload.service,
        });
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred. Please contact us via WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  const getSuccessWhatsAppLink = () => {
    if (!submittedData) return `https://wa.me/${siteConfig.contact.whatsappNumber}`;
    const text = `Hi ZeenOx, my name is ${submittedData.name}. I just submitted an inquiry for ${submittedData.service} on your website and would like to chat now.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 md:py-32 bg-[#FAFAFC] overflow-hidden border-t border-black/[0.04]"
    >
      {/* Subtle Overhead Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#EBEBED] border border-black/[0.06] text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-2xs">
            Direct Studio Connection
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#1D1D1F] font-extrabold tracking-tight leading-[1.1] mb-4">
            Let's Engineer Your{" "}
            <span className="font-serif-accent italic text-primary">Next Phase.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#2D2D30] leading-relaxed max-w-xl mx-auto font-medium">
            Ready to upgrade your website, web/mobile app, or business automation? Reach out directly to our team in Tamil Nadu.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:gap-14 lg:grid-cols-12 items-start">
          {/* Left Column: Contact Details & Embedded Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="space-y-3">
              {[
                {
                  icon: Phone,
                  label: "Primary Phone",
                  text: siteConfig.contact.primaryPhone,
                  href: `tel:${siteConfig.contact.primaryPhone}`,
                },
                {
                  icon: Phone,
                  label: siteConfig.contact.secondaryContactLabel,
                  text: siteConfig.contact.secondaryPhone,
                  href: `tel:${siteConfig.contact.secondaryPhone}`,
                },
                {
                  icon: Mail,
                  label: "Email Support",
                  text: siteConfig.contact.email,
                  href: `mailto:${siteConfig.contact.email}`,
                },
                {
                  icon: MapPin,
                  label: "Studio Location",
                  text: siteConfig.contact.address.full,
                  href: siteConfig.contact.address.googleMapsDirectionsUrl,
                  external: true,
                },
              ].map(({ icon: Icon, label, text, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-500/30 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-xl bg-white border border-black/[0.04] text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 mt-0.5 shadow-xs">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5">{label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground leading-relaxed">{text}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Strategy Call & WhatsApp Fast Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hi ZeenOx! I'd like to discuss a project for my business."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={bookingUrl}
                target={siteConfig.contact.bookingUrl ? "_blank" : undefined}
                rel={siteConfig.contact.bookingUrl ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#F5F5F7] border border-black/[0.08] text-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#1D1D1F] hover:text-white hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                <Calendar size={16} className="text-primary" />
                <span>Book Strategy Call</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="p-4 rounded-[2.2rem] bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05),0_12px_36px_rgba(6,78,59,0.05)] overflow-hidden">
              <div className="flex items-center justify-between mb-2.5 px-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <MapPin size={12} className="text-primary" />
                  Virudhunagar HQ
                </span>
                <a
                  href={siteConfig.contact.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Get Directions <ExternalLink size={10} />
                </a>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-white border border-black/[0.04]">
                <iframe
                  title="ZeenOx Agency Office Location Map"
                  src={siteConfig.contact.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-[2.2rem] bg-[#F5F5F7] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.05),0_12px_36px_rgba(6,78,59,0.05)] relative overflow-hidden">
              {submittedData ? (
                /* Success State with WhatsApp Quick Follow-up */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Thank You, {submittedData.name}!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    We have received your project inquiry. Our technical lead will review your scope and respond within{" "}
                    <strong className="text-foreground">{submittedData.replyHours} business hours</strong>.
                  </p>

                  <div className="mt-8 p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm w-full max-w-sm">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">
                      Need an instant reply? Message Founder Arun directly:
                    </p>
                    <a
                      href={getSuccessWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
                    >
                      <MessageCircle size={16} />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* 4-Field Fast Lead Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      Start Your Project Inquiry
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                      Fast 60-second form. We value your privacy and reply within {siteConfig.contact.responseTimeHours} hours.
                    </p>
                  </div>

                  {/* Honeypot field (hidden from real users, catches automated bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">Leave this empty</label>
                    <input
                      id="website_hp"
                      name="website_hp"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* 1. Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="lead-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar"
                      className="w-full h-12 rounded-xl bg-white border border-black/[0.08] px-4 text-sm text-foreground focus:border-primary focus:shadow-sm outline-none transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* 2. Phone (Indian mobile format validation) */}
                  <div className="space-y-1.5">
                    <label htmlFor="lead-phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Mobile Number (WhatsApp Preferred) <span className="text-primary">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 flex items-center gap-2 pointer-events-none z-10 text-muted-foreground">
                        <span className="text-xs font-bold text-foreground">+91</span>
                        <span className="h-4 w-px bg-black/[0.12]" />
                      </div>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={15}
                        placeholder="98765 43210"
                        className="w-full h-12 rounded-xl bg-white border border-black/[0.08] pl-16 pr-4 text-sm text-foreground focus:border-primary focus:shadow-sm outline-none transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  {/* 3. Service Selection (Radix UI Custom Dropdown) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="lead-service" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        What do you need? <span className="text-primary">*</span>
                      </label>
                      <span className="text-[10px] text-muted-foreground/75 font-medium">Fast 24h turnaround</span>
                    </div>

                    <input type="hidden" name="service" value={selectedService} />

                    <Select value={selectedService} onValueChange={setSelectedService} name="service">
                      <SelectTrigger
                        id="lead-service"
                        className="w-full h-12 rounded-xl bg-white border border-black/[0.08] px-4 text-sm font-semibold text-foreground focus:border-primary focus:shadow-sm focus:ring-2 focus:ring-primary/15 outline-none transition-all cursor-pointer"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-2xl border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.12),0_10px_20px_rgba(6,78,59,0.06)] rounded-2xl p-1.5 z-50">
                        <SelectGroup>
                          <SelectLabel className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground/70 px-3 py-1.5">
                            Available Solutions
                          </SelectLabel>
                          {SERVICE_OPTIONS.map((opt) => {
                            const Icon = opt.icon;
                            return (
                              <SelectItem
                                key={opt.value}
                                value={opt.value}
                                className="rounded-xl py-2.5 px-3 text-xs sm:text-sm font-medium cursor-pointer transition-colors focus:bg-emerald-500/10 focus:text-primary data-[state=checked]:font-semibold data-[state=checked]:text-primary"
                              >
                                <div className="flex items-center justify-between w-full gap-2">
                                  <div className="flex items-center gap-2.5">
                                    <Icon className="h-4 w-4 text-primary shrink-0" />
                                    <span className="truncate">{opt.label}</span>
                                  </div>
                                  <span className="hidden sm:inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/[0.04] text-muted-foreground shrink-0">
                                    {opt.badge}
                                  </span>
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 4. Optional Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="lead-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Project Details or Goals (Optional)
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={3}
                      placeholder="Briefly describe what you want to achieve or your expected timeline..."
                      className="w-full rounded-xl bg-white border border-black/[0.08] p-4 text-sm text-foreground focus:border-primary focus:shadow-sm outline-none resize-none transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-500 font-semibold">{errorMessage}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-xl bg-primary text-white font-bold uppercase tracking-[0.15em] text-xs shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-muted-foreground mt-2 font-medium">
                    🔒 Guaranteed privacy. Zero spam. We never share your phone number.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
