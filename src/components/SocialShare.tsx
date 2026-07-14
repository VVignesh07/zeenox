"use client";

import { useState } from "react";
import { Link2, Twitter, Linkedin, Facebook, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

const SocialShare = ({ url, title, className = "" }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: "hover:bg-sky-500 hover:text-white hover:border-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-800 hover:text-white hover:border-blue-800",
    }
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2 hidden sm:block">
        Share:
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`h-8 w-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground transition-all duration-300 ${link.color}`}
          title={`Share on ${link.name}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={14} />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="relative h-8 w-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
        title="Copy Link"
        aria-label="Copy Link"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <Check size={14} className="text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="link"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <Link2 size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default SocialShare;
