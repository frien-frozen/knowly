'use client';

import React from 'react';
import { Brain, Sparkles, Users, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Teachers() {
    const { t } = useLanguage();

    return (
        <section id="teachers" className="py-24 bg-[#F2F4F7] relative overflow-hidden">

            {/* Background Doodles */}
            <div className="absolute top-20 left-10 w-32 h-32 border-8 border-white rounded-full opacity-50"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-100 rounded-full blur-3xl opacity-50"></div>

            <div className="w-full max-w-7xl mx-auto px-6 relative">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-white text-[#B54708] px-4 py-1.5 rounded-full font-extrabold text-sm uppercase tracking-wider mb-6 shadow-sm border border-gray-100">
                        <Users className="w-4 h-4" />
                        <span>{t.teachers.badge}</span>
                    </div>
                    <h2 className="text-5xl font-nunito font-extrabold text-[#101828] mb-6">
                        {t.teachers.heading} <br />
                        <span className="text-[#D92D20]">{t.teachers.headingAccent}</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">
                        {t.teachers.description}
                    </p>
                </div>

                {/* The "Two Types of Teachers" Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

                    {/* Card 1: The Expert Volunteer (Now WHITE to pop against Gray BG) */}
                    <div className="group bg-white rounded-[2.5rem] p-10 border border-gray-200 hover:border-[#D92D20]/30 transition-all shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-100/50">
                        <div className="w-16 h-16 bg-[#F2F4F7] rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-8 h-8 text-[#D92D20]" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-[#101828] mb-4">{t.teachers.cardExpert.title}</h3>
                        <p className="text-gray-500 text-lg leading-relaxed mb-6">
                            {t.teachers.cardExpert.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.teachers.cardExpert.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-[#F2F4F7] rounded-lg text-sm font-bold text-gray-600 border border-gray-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: The Student Mastermind (Kept Warm/White mix) */}
                    <div className="group bg-[#FFF4ED] rounded-[2.5rem] p-10 border border-orange-100 hover:border-[#FDB022] transition-all shadow-xl shadow-orange-100/20 hover:shadow-orange-100/50">
                        <div className="w-16 h-16 bg-[#FDB022] rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                            <Brain className="w-8 h-8 text-[#7B2D08]" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-[#7B2D08] mb-4">{t.teachers.cardStudent.title}</h3>
                        <p className="text-[#9A3412] text-lg leading-relaxed mb-6">
                            {t.teachers.cardStudent.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.teachers.cardStudent.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/60 rounded-lg text-sm font-bold text-[#9A3412]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Win-Win Banner */}
                <div className="relative bg-[#101828] rounded-[3rem] p-12 overflow-hidden text-center md:text-left shadow-2xl shadow-gray-400">
                    <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[#D92D20] to-transparent opacity-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 text-[#FDB022] font-bold mb-4 justify-center md:justify-start">
                                <Zap className="w-5 h-5 fill-current" />
                                <span className="uppercase tracking-wider">{t.teachers.banner.label}</span>
                            </div>
                            <h3 className="text-4xl font-extrabold text-white mb-4">
                                {t.teachers.banner.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {t.teachers.banner.desc}
                            </p>
                        </div>

                        <a href="https://teacher.knowly.uz" className="flex-shrink-0 group relative inline-flex items-center gap-3 bg-[#D92D20] text-white pl-8 pr-6 py-4 rounded-2xl font-extrabold hover:bg-red-600 transition-all shadow-lg shadow-red-900/50">
                            <span>{t.teachers.banner.button}</span>
                            <div className="bg-white/20 p-2 rounded-xl group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
