'use client';

import React from 'react';
import { GraduationCap, BookOpen, Star, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SmoothText from '@/components/ui/SmoothText';

export default function BentoGrid() {
    const { t, language } = useLanguage();
    const search = (q: string) => `https://learn.knowly.uz/search?q=${encodeURIComponent(q)}&lang=${language}`;

    return (
        <section id="curriculums" className="py-16 sm:py-24 md:py-32 bg-[#F2F4F7]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-extrabold text-[#101828] mb-3 sm:mb-4">
                        <SmoothText>{t.bento.heading}</SmoothText> <span className="text-[#D92D20]"><SmoothText>{t.bento.headingAccent}</SmoothText></span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-500 font-medium px-4 sm:px-0"><SmoothText>{t.bento.subheading}</SmoothText></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:auto-rows-[minmax(280px,auto)]">

                    {/* CARD 1: IGCSE */}
                    <a href={search('Cambridge IGCSE')} className="md:col-span-7 group relative overflow-hidden bg-[#D92D20] rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 text-white shadow-xl shadow-red-200 border-b-8 border-[#991B1B] hover:-translate-y-2 transition-transform duration-300 min-h-[220px]">
                        <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                            <div className="flex justify-between items-start">
                                <div className="bg-white/20 p-3 sm:p-4 rounded-2xl backdrop-blur-sm">
                                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <span className="bg-[#FDB022] text-[#7B2D08] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm">
                                    <SmoothText>{t.bento.cards.igcse.badge}</SmoothText>
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-3"><SmoothText>{t.bento.cards.igcse.title}</SmoothText></h3>
                                <p className="text-red-100 font-medium text-sm sm:text-lg max-w-sm"><SmoothText>{t.bento.cards.igcse.desc}</SmoothText></p>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 font-bold opacity-80 text-xs sm:text-base">
                                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span><SmoothText>{t.bento.cards.igcse.subjects}</SmoothText></span>
                            </div>
                        </div>
                        <GraduationCap className="absolute -bottom-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 text-white opacity-10 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                    </a>

                    {/* CARD 2: A-LEVELS */}
                    <a href={search('A-Levels')} className="md:col-span-5 bg-white rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 text-[#101828] shadow-xl shadow-gray-200 border-b-8 border-gray-200 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
                        <div className="flex justify-between items-start">
                            <div className="bg-red-50 p-3 sm:p-4 rounded-2xl">
                                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#D92D20]" />
                            </div>
                            <span className="bg-red-100 text-[#D92D20] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                                <SmoothText>{t.bento.cards.alevel.badge}</SmoothText>
                            </span>
                        </div>
                        <div className="mt-6 sm:mt-8">
                            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3"><SmoothText>{t.bento.cards.alevel.title}</SmoothText></h3>
                            <p className="text-gray-500 font-medium text-sm sm:text-base"><SmoothText>{t.bento.cards.alevel.desc}</SmoothText></p>
                        </div>
                        <div className="mt-6 sm:mt-8 w-full bg-gray-100 rounded-full h-2.5 sm:h-3 overflow-hidden">
                            <div className="bg-[#D92D20] h-full w-3/4 rounded-full"></div>
                        </div>
                        <p className="text-[10px] sm:text-xs text-gray-400 mt-2 font-bold text-right"><SmoothText>{t.bento.cards.alevel.progress}</SmoothText></p>
                    </a>

                    {/* CARD 3: PEARSON */}
                    <a href={search('Pearson Edexcel')} className="md:col-span-5 bg-white rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 text-[#101828] shadow-xl shadow-gray-200 border-b-8 border-gray-200 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
                        <div>
                            <div className="bg-yellow-50 p-3 sm:p-4 rounded-2xl w-fit mb-4 sm:mb-6">
                                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDB022]" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3"><SmoothText>{t.bento.cards.pearson.title}</SmoothText></h3>
                            <p className="text-gray-500 font-medium text-sm sm:text-base"><SmoothText>{t.bento.cards.pearson.desc}</SmoothText></p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-sm sm:text-base mt-4">
                            <span>🇬🇧 <SmoothText>{t.bento.cards.pearson.location}</SmoothText></span>
                        </div>
                    </a>

                    {/* CARD 4: LOWER SECONDARY */}
                    <a href={search('Lower Secondary')} className="md:col-span-7 bg-[#FDB022] rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 text-[#7B2D08] shadow-xl shadow-yellow-200 border-b-8 border-[#B54708] hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
                        <div className="flex justify-between items-start">
                            <div className="bg-white/30 p-3 sm:p-4 rounded-2xl backdrop-blur-sm">
                                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#7B2D08]" />
                            </div>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3"><SmoothText>{t.bento.cards.secondary.title}</SmoothText></h3>
                            <p className="text-[#7B2D08]/80 font-medium text-sm sm:text-lg"><SmoothText>{t.bento.cards.secondary.desc}</SmoothText></p>
                        </div>
                        <span className="mt-4 sm:mt-6 w-fit bg-white text-[#7B2D08] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-extrabold text-sm sm:text-base">
                            <SmoothText>{t.bento.cards.secondary.button}</SmoothText>
                        </span>
                    </a>

                </div>
            </div>
        </section>
    );
}
