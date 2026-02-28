import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="font-display text-[120px] font-bold leading-none gradient-text glow-text sm:text-[180px]"
        >
          404
        </motion.h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full btn-outline-glow px-6 py-3 text-sm"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full btn-primary-glow px-6 py-3 text-sm"
          >
            <Home size={16} /> Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
