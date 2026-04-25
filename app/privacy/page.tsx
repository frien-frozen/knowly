'use client';
import { useLanguage } from '@/context/LanguageContext';

const CONTENT = {
  en: {
    back: '← Back',
    title: 'Privacy Policy',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'When you browse knowly.uz, we do not require account registration. We may collect anonymous usage data (page views, search queries) solely to improve the platform experience.',
      },
      {
        heading: '2. How We Use Your Information',
        body: 'Any data collected is used only to understand how students interact with the platform and to improve content quality and search relevance.',
      },
      {
        heading: '3. Cookies',
        body: 'We use minimal, non-tracking cookies for language preferences and session state. We do not use advertising or third-party tracking cookies.',
      },
      {
        heading: '4. Data Sharing',
        body: 'We do not sell, rent, or share any user data with third parties. Educator profile information (name, bio, photo) is displayed on learn.knowly.uz as part of course content.',
      },
      {
        heading: '5. Your Rights',
        body: 'You may contact us at any time to request information about any data we hold or to request its deletion.',
      },
      {
        heading: '6. Contact',
        body: 'Questions? Reach us at ',
        email: 'contact@knowly.uz',
      },
    ],
  },
  uz: {
    back: '← Orqaga',
    title: 'Maxfiylik Siyosati',
    updated: 'Oxirgi yangilanish: 2026-yil Aprel',
    sections: [
      {
        heading: '1. Biz To\'playdigan Ma\'lumotlar',
        body: 'knowly.uz saytida ro\'yxatdan o\'tish talab etilmaydi. Platformani yaxshilash uchun anonim foydalanish statistikasi (sahifa ko\'rishlari, qidiruv so\'rovlari) to\'planishi mumkin.',
      },
      {
        heading: '2. Ma\'lumotlardan Foydalanish',
        body: 'To\'plangan ma\'lumotlar faqat o\'quvchilar platformadan qanday foydalanishini tushunish va darslar sifatini yaxshilash uchun ishlatiladi.',
      },
      {
        heading: '3. Cookie Fayllar',
        body: 'Biz faqat til sozlamalari va sessiya uchun minimal cookie fayllardan foydalanamiz. Reklama yoki uchinchi tomon kuzatuv cookie fayllari ishlatilmaydi.',
      },
      {
        heading: '4. Ma\'lumotlarni Ulashish',
        body: 'Biz foydalanuvchi ma\'lumotlarini hech qanday uchinchi tomonga sotmaymiz yoki oshkor etmaymiz. Ustoz profil ma\'lumotlari (ism, bio, rasm) learn.knowly.uz da dars kontenti sifatida ko\'rsatiladi.',
      },
      {
        heading: '5. Huquqlaringiz',
        body: 'Siz istalgan vaqt bizda mavjud ma\'lumotlar haqida ma\'lumot olish yoki ularni o\'chirish uchun murojaat qilishingiz mumkin.',
      },
      {
        heading: '6. Bog\'lanish',
        body: 'Savollar? Bizga yozing: ',
        email: 'contact@knowly.uz',
      },
    ],
  },
};

export default function PrivacyPage() {
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
