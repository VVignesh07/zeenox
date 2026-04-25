import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealSectionProps {
    children: ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const RevealSection = ({ children, delay = 0, width = "100%" }: RevealSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Substantive Parallax (Parallel Scrolling) without shrinking the content
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

    return (
        <div 
            ref={sectionRef}
            style={{ 
                position: "relative", 
                width,
                perspective: "1200px",
                zIndex: 1
            }}
        >
            <motion.div
                style={{ 
                    y,
                    opacity,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                transition={{ 
                    duration: 0.8, 
                    delay,
                    ease: "easeOut"
                }}
                className="will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealSection;
