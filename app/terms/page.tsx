'use client';
import { useLanguage } from '@/context/LanguageContext';

const CONTENT = {
  en: {
    back: '← Back',
    title: 'Terms of Service',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Acceptance',
        body: 'By accessing knowly.uz, you agree to these Terms of Service. If you do not agree, please do not use this platform.',
      },
      {
        heading: '2. Free Educational Use',
        body: 'Knowly provides free educational content under Cambridge and Pearson standards. All content is intended for personal, non-commercial educational use only.',
      },
      {
        heading: '3. Content Ownership',
        body: 'All video lessons, materials, and platform designs are the property of Knowly or its contributing educators. You may not reproduce, redistribute, or use content commercially without written permission.',
      },
      {
        heading: '4. Student Conduct',
        body: 'Users agree to use the platform respectfully and not to attempt to disrupt, scrape, or abuse the service in any way.',
      },
      {
        heading: '5. Disclaimer',
        body: 'Knowly is provided "as is" without warranty of any kind. We strive for uptime and content quality but cannot guarantee uninterrupted access.',
      },
      {
        heading: '6. Contact',
        body: 'Questions? Contact us at ',
        email: 'contact@knowly.uz',
      },
    ],
  },
  uz: {
    back: '← Orqaga',
    title: 'Foydalanish Shartlari',
    updated: 'Oxirgi yangilanish: 2026-yil Aprel',
    sections: [
      {
        heading: '1. Qabul Qilish',
        body: 'knowly.uz saytiga kirib, siz ushbu Foydalanish Shartlarini qabul qilasiz. Agar rozilik bildirsangiz, platformadan foydalanmang.',
      },
      {
        heading: '2. Bepul Ta\'limiy Foydalanish',
        body: 'Knowly Cambridge va Pearson standartlari asosida bepul ta\'lim kontentini taqdim etadi. Barcha kontent faqat shaxsiy, tijorat bo\'lmagan maqsadlarda foydalanish uchun mo\'ljallangan.',
      },
      {
        heading: '3. Kontent Mulkchiligi',
        body: 'Barcha video darslar, materiallar va platforma dizayni Knowly yoki uning ustozlariga tegishli. Yozma ruxsatsiz kontent tijorat maqsadlarda qayta ishlatilishi yoki tarqatilishi mumkin emas.',
      },
      {
        heading: '4. O\'quvchi Xulq-Atvori',
        body: 'Foydalanuvchilar platformadan hurmat bilan foydalanishga va xizmatni buzishga, scraping qilishga yoki suiiste\'mol qilishga urinmaslikka rozi bo\'ladilar.',
      },
      {
        heading: '5. Javobgarlikdan Voz Kechish',
        body: 'Knowly "qanday bo\'lsa shunday" asosida kafolatsiz taqdim etiladi. Biz uzluksiz ishlash va kontent sifatiga intilamiz, ammo uzluksiz kirishni kafolatlay olmaymiz.',
      },
      {
        heading: '6. Bog\'lanish',
        body: 'Savollar? Bizga yozing: ',
        email: 'contact@knowly.uz',
      },
    ],
  },
};

export default function TermsPage() {
  const { language } = useLanguage();
  const t = CONTENT[language as 'en' | 'uz'] || CONTENT.uz;

  return (
    <main className="min-h-screen bg-[#F9FAFB] font-nunito pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm font-bold text-gray-400 hover:text-[#D92D20] mb-8 block transition-colors">
          {t.back}
        </a>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mb-2">{t.title}</h1>
        <p className="text-gray-400 text-sm font-bold mb-12">{t.updated}</p>
        <div className="space-y-10 text-gray-600 leading-relaxed">
          {t.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-extrabold text-[#101828] mb-3">{s.heading}</h2>
              <p>
                {s.body}
                {s.email && (
                  <a href={`mailto:${s.email}`} className="text-[#D92D20] font-bold">{s.email}</a>
                )}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
