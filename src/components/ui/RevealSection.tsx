import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
    children: ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const RevealSection = ({ children, delay = 0.2, width = "100%" }: RevealSectionProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealSection;
