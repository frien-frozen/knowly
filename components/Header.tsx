'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { t, language, toggleLanguage } = useLanguage();

    // Handle Get Started button click
    const handleGetStarted = () => {
        window.location.href = `https://learn.knowly.uz/?lang=${language}`;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-24 bg-white/90 backdrop-blur-lg border-b border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* 1. LOGO AREA */}
                <div className="flex items-center cursor-pointer hover:scale-105 transition-transform">
                    <Image
                        src="/logos/knowly-header.png"
                        alt="KNOWLY"
                        width={180}
                        height={60}
                        className="h-14 w-auto"
                        priority
                    />
                </div>

                {/* 2. NAV LINKS (Centered) */}
                <nav className="hidden md:flex items-center gap-8 bg-gray-50 px-6 py-2 rounded-full border border-gray-200">
                    <a href="#curriculums" className="text-gray-600 font-bold hover:text-[#D92D20] transition-colors text-sm uppercase tracking-wide">
                        {t.header.curriculums}
                    </a>
                    <a href="#mission" className="text-gray-600 font-bold hover:text-[#D92D20] transition-colors text-sm uppercase tracking-wide">
                        {t.header.mission}
                    </a>
                    <a href="#teachers" className="text-gray-600 font-bold hover:text-[#D92D20] transition-colors text-sm uppercase tracking-wide">
                        {t.header.teachers}
                    </a>
                </nav>

                {/* 3. ACTIONS */}
                <div className="flex items-center gap-4">

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-bold text-gray-700"
                    >
                        <span>{language === 'uz' ? '🇺🇿' : '🇬🇧'}</span>
                        <span className="hidden sm:inline">{t.header.languageName}</span>
                    </button>

                    {/* CTA Button */}
                    <button
                        onClick={handleGetStarted}
                        className="bg-[#FDB022] text-[#7B2D08] px-6 py-3 rounded-2xl font-extrabold hover:bg-[#F59E0B] transition-all border-b-4 border-[#D97706] active:border-b-0 active:translate-y-1"
                    >
                        {t.header.getStarted}
                    </button>

                </div>

            </div>
        </header>
    );
}
