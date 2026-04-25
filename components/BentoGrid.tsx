'use client';

import React from 'react';
import { GraduationCap, BookOpen, Star, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SmoothText from '@/components/ui/SmoothText';

export default function BentoGrid() {
    const { t, language } = useLanguage();
    const search = (q: string) => `https://learn.knowly.uz/search?q=${encodeURIComponent(q)}&lang=${language}`;

    return (
        <section id="curriculums" className="py-32 bg-[#F2F4F7]">
            <div className="w-full max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-nunito font-extrabold text-[#101828] mb-4">
                        <SmoothText>{t.bento.heading}</SmoothText> <span className="text-[#D92D20]"><SmoothText>{t.bento.headingAccent}</SmoothText></span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium"><SmoothText>{t.bento.subheading}</SmoothText></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">

                    {/* CARD 1: IGCSE */}
                    <a href={search('Cambridge IGCSE')} className="md:col-span-7 group relative overflow-hidden bg-[#D92D20] rounded-[2.5rem] p-10 text-white shadow-xl shadow-red-200 border-b-8 border-[#991B1B] hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <span className="bg-[#FDB022] text-[#7B2D08] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                                    <SmoothText>{t.bento.cards.igcse.badge}</SmoothText>
                                </span>
                            </div>
                            <div>
                                <h3 className="text-4xl font-extrabold mb-3"><SmoothText>{t.bento.cards.igcse.title}</SmoothText></h3>
                                <p className="text-red-100 font-medium text-lg max-w-sm"><SmoothText>{t.bento.cards.igcse.desc}</SmoothText></p>
                            </div>
                            <div className="flex items-center gap-3 font-bold opacity-80 mt-6">
                                <BookOpen className="w-5 h-5" />
                                <span><SmoothText>{t.bento.cards.igcse.subjects}</SmoothText></span>
                            </div>
                        </div>
                        <GraduationCap className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-10 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                    </a>

                    {/* CARD 2: A-LEVELS */}
                    <a href={search('A-Levels')} className="md:col-span-5 bg-white rounded-[2.5rem] p-10 text-[#101828] shadow-xl shadow-gray-200 border-b-8 border-gray-200 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="bg-red-50 p-4 rounded-2xl">
                                <Trophy className="w-8 h-8 text-[#D92D20]" />
                            </div>
                            <span className="bg-red-100 text-[#D92D20] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                                <SmoothText>{t.bento.cards.alevel.badge}</SmoothText>
                            </span>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-3xl font-extrabold mb-3"><SmoothText>{t.bento.cards.alevel.title}</SmoothText></h3>
                            <p className="text-gray-500 font-medium"><SmoothText>{t.bento.cards.alevel.desc}</SmoothText></p>
                        </div>
                        <div className="mt-8 w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div className="bg-[#D92D20] h-full w-3/4 rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 font-bold text-right"><SmoothText>{t.bento.cards.alevel.progress}</SmoothText></p>
                    </a>

                    {/* CARD 3: PEARSON */}
                    <a href={search('Pearson Edexcel')} className="md:col-span-5 bg-white rounded-[2.5rem] p-10 text-[#101828] shadow-xl shadow-gray-200 border-b-8 border-gray-200 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div>
                            <div className="bg-yellow-50 p-4 rounded-2xl w-fit mb-6">
                                <Star className="w-8 h-8 text-[#FDB022]" />
                            </div>
                            <h3 className="text-3xl font-extrabold mb-3"><SmoothText>{t.bento.cards.pearson.title}</SmoothText></h3>
                            <p className="text-gray-500 font-medium"><SmoothText>{t.bento.cards.pearson.desc}</SmoothText></p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-bold">
                            <span>🇬🇧 <SmoothText>{t.bento.cards.pearson.location}</SmoothText></span>
                        </div>
                    </a>

                    {/* CARD 4: LOWER SECONDARY */}
                    <a href={search('Lower Secondary')} className="md:col-span-7 bg-[#FDB022] rounded-[2.5rem] p-10 text-[#7B2D08] shadow-xl shadow-yellow-200 border-b-8 border-[#B54708] hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="bg-white/30 p-4 rounded-2xl backdrop-blur-sm">
                                <BookOpen className="w-8 h-8 text-[#7B2D08]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold mb-3"><SmoothText>{t.bento.cards.secondary.title}</SmoothText></h3>
                            <p className="text-[#7B2D08]/80 font-medium text-lg"><SmoothText>{t.bento.cards.secondary.desc}</SmoothText></p>
                        </div>
                        <span className="mt-6 w-fit bg-white text-[#7B2D08] px-6 py-3 rounded-xl font-extrabold">
                            <SmoothText>{t.bento.cards.secondary.button}</SmoothText>
                        </span>
                    </a>

                </div>
            </div>
        </section>
    );
}
