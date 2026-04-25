'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Send, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, language } = useLanguage();
    const learnBase = `https://learn.knowly.uz/?lang=${language}`;
    const teachBase = `https://teacher.knowly.uz`;

    return (
        <footer id="footer" className="bg-[#101828] text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D92D20] via-[#FDB022] to-[#D92D20]"></div>

            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Col 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logos/kn-icon.png"
                                alt="KN"
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-lg"
                            />
                            <span className="text-2xl font-nunito font-extrabold tracking-tight">KNOWLY</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            {t.footer.tagline}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/knowly.uz" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://t.me/knowlyuz" aria-label="Telegram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com/@knowlyuz" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Learn */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.footer.sectionPlatform}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <a href={learnBase} className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.links.startLearning}
                                </a>
                            </li>
                            <li>
                                <a href={`https://learn.knowly.uz/search?q=IGCSE&lang=${language}`} className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.links.igcse}
                                </a>
                            </li>
                            <li>
                                <a href={`https://learn.knowly.uz/search?q=A-Levels&lang=${language}`} className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.links.alevels}
                                </a>
                            </li>
                            <li>
                                <a href={`https://learn.knowly.uz/search?q=Pearson&lang=${language}`} className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.links.pearson}
                                </a>
                            </li>
                            <li>
                                <a href={`https://learn.knowly.uz/search?q=Lower+Secondary&lang=${language}`} className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.links.secondary}
                                </a>
                            </li>
                            <li>
                                <a href="/#mission" className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.links.mission}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: For Teachers */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.footer.sectionTeachers}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <a href={`${teachBase}/apply`} className="hover:text-[#FDB022] transition-colors font-bold text-white">
                                    {t.footer.teacherLinks.apply}
                                </a>
                            </li>
                            <li>
                                <a href={`${teachBase}/login`} className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.teacherLinks.login}
                                </a>
                            </li>
                            <li>
                                <a href="/#teachers" className="hover:text-[#FDB022] transition-colors">
                                    {t.footer.teacherLinks.meetTeachers}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-6">{t.footer.sectionContact}</h4>

                        <a href="tel:+998944101777" className="flex items-center gap-3 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700">
                            <div className="w-9 h-9 rounded-full bg-[#FDB022]/10 flex items-center justify-center text-[#FDB022] shrink-0">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{t.footer.contactLabels.call}</p>
                                <p className="font-bold">+998 94 410 17 77</p>
                            </div>
                        </a>

                        <a href="mailto:contact@knowly.uz" className="flex items-center gap-3 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700">
                            <div className="w-9 h-9 rounded-full bg-[#D92D20]/10 flex items-center justify-center text-[#D92D20] shrink-0">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{t.footer.contactLabels.email}</p>
                                <p className="font-bold">contact@knowly.uz</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-800/50 border border-gray-700">
                            <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{t.footer.contactLabels.location}</p>
                                <p className="font-bold">Fergana, Uzbekistan</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>{t.footer.copyright}</p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-white">{t.footer.privacy}</a>
                        <a href="/terms" className="hover:text-white">{t.footer.terms}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
