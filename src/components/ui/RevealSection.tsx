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

    // 3D Parallax Scrolling Transforms (More refined 'cylindrical' feel)
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
    const z = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

    return (
        <div 
            ref={sectionRef}
            style={{ 
                position: "relative", 
                width, 
                perspective: "1500px",
                zIndex: 1
            }}
        >
            <motion.div
                style={{ 
                    rotateX,
                    opacity,
                    scale,
                    z,
                    y,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center"
                }}
                className="will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealSection;
