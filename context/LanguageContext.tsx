'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { translations } from '@/utils/translations';

type Language = 'uz' | 'en';
type Translations = typeof translations.uz;

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // 1. Initialize state based on URL, default to 'uz'
    const [language, setLanguage] = useState<Language>(() => {
        // We can't access searchParams during server rendering, but in useEffect we can.
        // However, for useState initial value in Client Components, it runs on client.
        // Let's rely on the useEffect for the initial sync if needed, or better:
        // Try to get it if possible, but default to 'uz'.
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const lang = params.get('lang');
            return lang === 'en' ? 'en' : 'uz';
        }
        return 'uz';
    });

    // 2. Sync State with URL when URL changes manually
    useEffect(() => {
        const param = searchParams.get('lang');
        if (param === 'en' || param === 'uz') {
            setLanguage(param);
        }
    }, [searchParams]);

    const toggleLanguage = () => {
        const newLang = language === 'uz' ? 'en' : 'uz';
        setLanguage(newLang);

        // 3. Update URL without full reload
        const params = new URLSearchParams(searchParams.toString()); // Fix: Pass string or use existing structure
        params.set('lang', newLang);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
