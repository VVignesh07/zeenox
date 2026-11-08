"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("zeenox_lang") as Language;
      if (saved === "en" || saved === "ta") {
        setLang(saved);
      }
    } catch {
      // Ignore
    }
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("zeenox_lang", newLang);
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    changeLang(lang === "en" ? "ta" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: changeLang,
        t: translations[lang] || translations.en,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

