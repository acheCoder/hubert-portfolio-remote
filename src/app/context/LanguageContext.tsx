import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';

import esJson from '@/locales/es.json';
import enJson from '@/locales/en.json';
import plJson from '@/locales/pl.json';

export type Language = 'es' | 'en' | 'pl';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
  tArray: (path: string) => string[];
  tList: <T = Record<string, string>>(path: string) => T[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const locales: Record<Language, Record<string, unknown>> = { es: esJson, en: enJson, pl: plJson };

function resolve(obj: unknown, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : path;
}

function resolveArray(obj: unknown, path: string): string[] {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return [];
    current = (current as Record<string, unknown>)[key];
  }
  return Array.isArray(current) ? current : [];
}

function resolveRaw(obj: unknown, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('hubert-lang');
    return (stored as Language) || 'es';
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('hubert-lang', newLang);
    document.documentElement.setAttribute('lang', newLang);
  }, []);

  // Listen for CustomEvent from Navbar (submodule-agnostic)
  useEffect(() => {
    const handler = (e: Event) => {
      const lang = (e as CustomEvent<Language>).detail;
      if (lang) setLang(lang);
    };
    window.addEventListener('change-language', handler);
    return () => window.removeEventListener('change-language', handler);
  }, [setLang]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = useCallback(
    (path: string): string => {
      const value = resolve(locales[lang], path);
      if (value !== path) return value;
      return resolve(locales['es'], path);
    },
    [lang],
  );

  const tArray = useCallback(
    (path: string): string[] => {
      const arr = resolveArray(locales[lang], path);
      if (arr.length) return arr;
      return resolveArray(locales['es'], path);
    },
    [lang],
  );

  const tList = useCallback(
    <T = Record<string, string>>(path: string): T[] => {
      const raw = resolveRaw(locales[lang], path);
      if (Array.isArray(raw) && raw.length) return raw as T[];
      const fallback = resolveRaw(locales['es'], path);
      return Array.isArray(fallback) ? (fallback as T[]) : [];
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t, tArray, tList }), [lang, setLang, t, tArray, tList]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
