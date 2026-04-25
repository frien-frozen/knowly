'use client';

import React from 'react';
import { Play, Heart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Mission() {
    const { t } = useLanguage();

    return (
        <section id="mission" className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

                    {/* LEFT: The Video Value Prop */}
                    <div className="relative">
                        <div className="relative bg-gray-900 rounded-[1.5rem] sm:rounded-[2.5rem] p-3 sm:p-4 shadow-2xl shadow-gray-200 border-4 sm:border-8 border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="aspect-video bg-[#D92D20] rounded-[1rem] sm:rounded-[1.5rem] flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#D92D20] fill-[#D92D20]" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl flex items-center gap-2">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] sm:text-xs font-bold text-gray-800">{t.mission.videoBadge}</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-6 sm:top-10 -left-6 sm:-left-10 w-full h-full bg-[#FDB022] rounded-[1.5rem] sm:rounded-[2.5rem] -rotate-3"></div>
                    </div>

                    {/* RIGHT: The Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-red-50 text-[#D92D20] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
                            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D92D20]" />
                            <span>{t.mission.badge}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-extrabold text-[#101828] mb-4 sm:mb-6 leading-tight">
                            {t.mission.title} <br />
                            <span className="text-[#D92D20]">{t.mission.titleAccent}</span>
                        </h2>

                        <p className="text-base sm:text-xl text-gray-500 mb-6 sm:mb-8 leading-relaxed">
                            {t.mission.description}
                        </p>

                        <div className="space-y-3 sm:space-y-4">
                            {t.mission.points.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 sm:gap-4 group">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors shrink-0">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 sm:mt-10 bg-[#101828] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 text-sm sm:text-base">
                            {t.mission.button}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
