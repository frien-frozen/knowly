'use client';

import React from 'react';
import { Brain, Sparkles, Users, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Teachers() {
    const { t, language } = useLanguage();

    return (
        <section id="teachers" className="py-16 sm:py-24 bg-[#F2F4F7] relative overflow-hidden">

            {/* Background Doodles */}
            <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 border-8 border-white rounded-full opacity-50"></div>
            <div className="absolute bottom-20 right-10 w-32 sm:w-48 h-32 sm:h-48 bg-red-100 rounded-full blur-3xl opacity-50"></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                    <div className="inline-flex items-center gap-2 bg-white text-[#B54708] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 shadow-sm border border-gray-100">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{t.teachers.badge}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-extrabold text-[#101828] mb-4 sm:mb-6">
                        {t.teachers.heading} <br />
                        <span className="text-[#D92D20]">{t.teachers.headingAccent}</span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-500 font-medium leading-relaxed">
                        {t.teachers.description}
                    </p>
                </div>

                {/* The "Two Types of Teachers" Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-20">

                    {/* Card 1: The Expert Volunteer */}
                    <div className="group bg-white rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-gray-200 hover:border-[#D92D20]/30 transition-all shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-100/50">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F2F4F7] rounded-2xl flex items-center justify-center shadow-sm mb-5 sm:mb-8 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#D92D20]" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-3 sm:mb-4">{t.teachers.cardExpert.title}</h3>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                            {t.teachers.cardExpert.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.teachers.cardExpert.tags.map((tag) => (
                                <span key={tag} className="px-2.5 sm:px-3 py-1 bg-[#F2F4F7] rounded-lg text-xs sm:text-sm font-bold text-gray-600 border border-gray-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: The Student Mastermind */}
                    <div className="group bg-[#FFF4ED] rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-orange-100 hover:border-[#FDB022] transition-all shadow-xl shadow-orange-100/20 hover:shadow-orange-100/50">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDB022] rounded-2xl flex items-center justify-center shadow-sm mb-5 sm:mb-8 group-hover:scale-110 transition-transform">
                            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-[#7B2D08]" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#7B2D08] mb-3 sm:mb-4">{t.teachers.cardStudent.title}</h3>
                        <p className="text-[#9A3412] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                            {t.teachers.cardStudent.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.teachers.cardStudent.tags.map((tag) => (
                                <span key={tag} className="px-2.5 sm:px-3 py-1 bg-white/60 rounded-lg text-xs sm:text-sm font-bold text-[#9A3412]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Win-Win Banner */}
                <div className="relative bg-[#101828] rounded-[1.75rem] sm:rounded-[3rem] p-6 sm:p-12 overflow-hidden text-center md:text-left shadow-2xl shadow-gray-400">
                    <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[#D92D20] to-transparent opacity-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 text-[#FDB022] font-bold mb-3 sm:mb-4 justify-center md:justify-start">
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                <span className="uppercase tracking-wider text-xs sm:text-base">{t.teachers.banner.label}</span>
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 sm:mb-4">
                                {t.teachers.banner.title}
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                {t.teachers.banner.desc}
                            </p>
                        </div>

                        <a href={`https://teacher.knowly.uz/apply`} className="flex-shrink-0 group relative inline-flex items-center gap-2 sm:gap-3 bg-[#D92D20] text-white pl-5 sm:pl-8 pr-4 sm:pr-6 py-3 sm:py-4 rounded-2xl font-extrabold hover:bg-red-600 transition-all shadow-lg shadow-red-900/50 text-sm sm:text-base">
                            <span>{t.teachers.banner.button}</span>
                            <div className="bg-white/20 p-1.5 sm:p-2 rounded-xl group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
