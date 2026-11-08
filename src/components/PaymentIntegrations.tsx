"use client";

import { motion } from "framer-motion";
import { 
  FaStripe, 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcPaypal, 
  FaApplePay, 
  FaGooglePay 
} from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

const paymentMethods = [
  { name: "Stripe", icon: FaStripe, size: 60 },
  { name: "Razorpay", icon: SiRazorpay, size: 40 },
  { name: "PayPal", icon: FaCcPaypal, size: 40 },
  { name: "Apple Pay", icon: FaApplePay, size: 55 },
  { name: "Google Pay", icon: FaGooglePay, size: 55 },
  { name: "Visa", icon: FaCcVisa, size: 45 },
  { name: "Mastercard", icon: FaCcMastercard, size: 45 },
];

const PaymentIntegrations = () => {
  return (
    <section className="relative py-16 border-y border-white/5 bg-background overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-0 w-64 h-32 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-64 h-32 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2">
                Global <span className="text-primary">Payment</span> Gateways
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Seamlessly accept payments worldwide with our secure, pre-built integrations for e-commerce and SaaS platforms.
            </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <motion.div 
                className="flex gap-4 sm:gap-8 md:gap-12 items-center whitespace-nowrap pl-4 sm:pl-8 md:pl-12 py-2"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
                {/* Duplicate the array twice for seamless looping */}
                {[...paymentMethods, ...paymentMethods, ...paymentMethods].map((method, i) => (
                    <div 
                        key={`${method.name}-${i}`} 
                        className="flex items-center justify-center h-16 sm:h-20 px-5 sm:px-8 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 text-foreground/50 hover:text-foreground cursor-default group"
                    >
                        <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <method.icon size={method.size} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default PaymentIntegrations;
