'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { t, language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform shrink-0">
                    <Image
                        src="/logos/knowly-header.png"
                        alt="KNOWLY"
                        width={140}
                        height={48}
                        className="h-10 sm:h-12 w-auto"
                        priority
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 bg-gray-50 px-5 py-2 rounded-full border border-gray-200">
                    <a href="#curriculums" className="text-gray-600 font-bold hover:text-[#D92D20] transition-colors text-xs uppercase tracking-wide">
                        {t.header.curriculums}
                    </a>
                    <a href="#mission" className="text-gray-600 font-bold hover:text-[#D92D20] transition-colors text-xs uppercase tracking-wide">
                        {t.header.mission}
                    </a>
                    <a href="#teachers" className="text-gray-600 font-bold hover:text-[#D92D20] transition-colors text-xs uppercase tracking-wide">
                        {t.header.teachers}
                    </a>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-bold text-gray-700"
                    >
                        <span>{language === 'uz' ? '🇺🇿' : '🇬🇧'}</span>
                        <span>{t.header.languageName}</span>
                    </button>

                    <a
                        href={`https://learn.knowly.uz/?lang=${language}`}
                        className="bg-[#FDB022] text-[#7B2D08] px-5 py-2.5 rounded-xl font-extrabold hover:bg-[#F59E0B] transition-all border-b-4 border-[#D97706] active:border-b-0 active:translate-y-1 text-sm"
                    >
                        {t.header.getStarted}
                    </a>
                </div>

                {/* Mobile Right: Lang toggle + Hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                    >
                        <span>{language === 'uz' ? '🇺🇿' : '🇬🇧'}</span>
                    </button>
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="flex items-center justify-center w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 pt-3 flex flex-col gap-2 shadow-lg">
                    <a href="#curriculums" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#D92D20] transition-colors uppercase tracking-wide">
                        {t.header.curriculums}
                    </a>
                    <a href="#mission" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#D92D20] transition-colors uppercase tracking-wide">
                        {t.header.mission}
                    </a>
                    <a href="#teachers" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#D92D20] transition-colors uppercase tracking-wide">
                        {t.header.teachers}
                    </a>
                    <a
                        href={`https://learn.knowly.uz/?lang=${language}`}
                        className="mt-2 bg-[#FDB022] text-[#7B2D08] px-5 py-3 rounded-xl font-extrabold hover:bg-[#F59E0B] transition-all text-center text-sm border-b-4 border-[#D97706]"
                    >
                        {t.header.getStarted}
                    </a>
                </div>
            )}
        </header>
    );
}
