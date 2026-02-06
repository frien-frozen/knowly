'use client';

import React from 'react';
import Header from '@/components/Header';

import BentoGrid from '@/components/BentoGrid';
import Teachers from '@/components/Teachers';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';
import SmoothText from '@/components/ui/SmoothText';
import { useLanguage } from '@/context/LanguageContext';
import { Search, Sparkles } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = React.useState('');

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const query = encodeURIComponent(searchQuery.trim());
      window.location.href = `https://learn.knowly.uz/search?q=${query}&lang=${language}`;
    } else {
      // If empty, just redirect to app homepage
      window.location.href = `https://learn.knowly.uz/?lang=${language}`;
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="min-h-screen bg-[#F2F4F7] font-nunito overflow-x-hidden selection:bg-red-200">
      <Header />

      {/* HERO SECTION - Centered & Gradient */}
      <section className="relative pt-56 pb-32 px-6 overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-[#FDB022]" />
            <span className="text-sm font-bold text-gray-600"><SmoothText>{t.hero.badge}</SmoothText></span>
          </div>

          {/* Headlines - 3D Logo Effect in Text */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#101828] mb-6 tracking-tight leading-tight">
            <SmoothText>{t.hero.titleMain}</SmoothText> <br />
            <span className="relative inline-block text-[#D92D20] drop-shadow-sm">
              <SmoothText>{t.hero.titleAccent}</SmoothText>
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#FDB022]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
            <SmoothText>{t.hero.subtitle}</SmoothText>
          </p>

          {/* Search Bar - Bouncy & Functional */}
          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-0 bg-red-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white p-2 rounded-full shadow-2xl shadow-gray-200/50 border-2 border-gray-100 focus-within:border-[#D92D20] transition-all transform hover:-translate-y-1">
              <Search className="w-6 h-6 text-gray-400 ml-6" />
              <input
                key={t.hero.searchPlaceholder}
                type="text"
                placeholder={t.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-4 text-lg font-bold text-gray-700 placeholder-gray-400 outline-none bg-transparent rounded-full"
              />
              <button
                onClick={handleSearch}
                className="bg-[#D92D20] text-white px-8 py-4 rounded-full font-extrabold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                <SmoothText>{t.hero.searchButton}</SmoothText>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CURRICULUMS */}
      <BentoGrid />

      {/* MISSION & VISION */}
      <Mission />

      {/* TEACHERS & MASTERMINDS */}
      <Teachers />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
