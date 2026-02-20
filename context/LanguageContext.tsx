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
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const lang = params.get('lang');
            return lang === 'uz' ? 'uz' : 'en';
        }
        return 'en';
    });

    // 2. Sync State with URL when URL changes manually
    useEffect(() => {
        const param = searchParams.get('lang');
        if (param === 'en' || param === 'uz') {
            setLanguage(param);
        }
    }, [searchParams]);

    // 3. On first load, if ?lang= is absent, redirect to add it
    useEffect(() => {
        const param = searchParams.get('lang');
        if (!param) {
            const params = new URLSearchParams(searchParams.toString());
            params.set('lang', language);
            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // intentionally runs once on mount

    const toggleLanguage = () => {
        const newLang = language === 'uz' ? 'en' : 'uz';
        setLanguage(newLang);

        // 4. Update URL without full reload
        const params = new URLSearchParams(searchParams.toString());
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
