import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealSectionProps {
    children: ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const RevealSection = ({ children, delay = 0, width = "100%" }: RevealSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div 
            ref={sectionRef}
            style={{ 
                position: "relative", 
                width,
                zIndex: 1
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                    duration: 0.8, 
                    delay,
                    ease: [0.16, 1, 0.3, 1] 
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealSection;
