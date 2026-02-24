import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navbar
      "nav.features": "Features",
      "nav.pricing": "Pricing",
      "nav.enterprise": "Enterprise",
      "nav.getStarted": "Get Started",
      
      // Hero Section
      "hero.title": "Your WhatsApp, Powered by AI",
      "hero.subtitle": "The Digital Employee that speaks your customers' language. No apps, no friction, just results.",
      "hero.cta.primary": "Start Free Trial",
      "hero.cta.secondary": "See How It Works",
      "hero.stats.responses": "Average Response Time",
      "hero.stats.satisfaction": "Customer Satisfaction",
      "hero.stats.reduction": "Cost Reduction",
      
      // Pricing
      "pricing.title": "Simple Pricing, Powerful Results",
      "pricing.starter.name": "Starter",
      "pricing.starter.price": "RM159",
      "pricing.starter.period": "/month",
      "pricing.starter.description": "Perfect for small businesses starting with AI",
      "pricing.professional.name": "Professional",
      "pricing.professional.price": "RM299",
      "pricing.professional.period": "/month",
      "pricing.professional.description": "For growing businesses that need more power",
      "pricing.enterprise.name": "Enterprise",
      "pricing.enterprise.price": "Custom",
      "pricing.enterprise.description": "Tailored solutions for large organizations",
      "pricing.cta": "Get Started",
      "pricing.contact": "Contact Sales",
      
      // Contact Forms
      "contact.enterprise.title": "Enterprise Inquiries",
      "contact.enterprise.subtitle": "Let's discuss how Bijou AI can transform your business",
      "contact.partnership.title": "Partnership Opportunities",
      "contact.partnership.subtitle": "Collaborate with us to bring AI to more businesses",
      "contact.integration.title": "Integration Requests",
      "contact.integration.subtitle": "Tell us what integrations you need",
      
      "form.name": "Full Name",
      "form.email": "Email Address",
      "form.company": "Company Name",
      "form.phone": "Phone Number",
      "form.message": "Message",
      "form.submit": "Submit",
      "form.sending": "Sending...",
      "form.success": "Thank you! We'll be in touch within 24 hours.",
      "form.error": "Something went wrong. Please email us directly at",
      
      // Footer
      "footer.product": "Product",
      "footer.company": "Company",
      "footer.contact": "Contact Us",
      "footer.tagline": "The Digital Employee that understands your local customers. No apps, no friction, just results.",
      "footer.madeBy": "Made with 🤍 by",
      "footer.rights": "All rights reserved.",
    }
  },
  ms: {
    translation: {
      // Navbar
      "nav.features": "Ciri-ciri",
      "nav.pricing": "Harga",
      "nav.enterprise": "Perusahaan",
      "nav.getStarted": "Mulakan",
      
      // Hero Section
      "hero.title": "WhatsApp Anda, Dikuasakan AI",
      "hero.subtitle": "Pekerja Digital yang faham bahasa pelanggan anda. Tiada aplikasi, tiada leceh, hanya hasil.",
      "hero.cta.primary": "Cuba Percuma",
      "hero.cta.secondary": "Lihat Cara Ia Berfungsi",
      "hero.stats.responses": "Masa Respons Purata",
      "hero.stats.satisfaction": "Kepuasan Pelanggan",
      "hero.stats.reduction": "Pengurangan Kos",
      
      // Pricing
      "pricing.title": "Harga Mudah, Hasil Berkuasa",
      "pricing.starter.name": "Permulaan",
      "pricing.starter.price": "RM159",
      "pricing.starter.period": "/bulan",
      "pricing.starter.description": "Sesuai untuk perniagaan kecil yang bermula dengan AI",
      "pricing.professional.name": "Profesional",
      "pricing.professional.price": "RM299",
      "pricing.professional.period": "/bulan",
      "pricing.professional.description": "Untuk perniagaan berkembang yang perlukan lebih kuasa",
      "pricing.enterprise.name": "Perusahaan",
      "pricing.enterprise.price": "Tersuai",
      "pricing.enterprise.description": "Penyelesaian tersuai untuk organisasi besar",
      "pricing.cta": "Mulakan",
      "pricing.contact": "Hubungi Jualan",
      
      // Contact Forms
      "contact.enterprise.title": "Pertanyaan Perusahaan",
      "contact.enterprise.subtitle": "Mari berbincang bagaimana Bijou AI boleh transformasi perniagaan anda",
      "contact.partnership.title": "Peluang Kerjasama",
      "contact.partnership.subtitle": "Bekerjasama dengan kami untuk bawa AI ke lebih banyak perniagaan",
      "contact.integration.title": "Permintaan Integrasi",
      "contact.integration.subtitle": "Beritahu kami integrasi apa yang anda perlukan",
      
      "form.name": "Nama Penuh",
      "form.email": "Alamat E-mel",
      "form.company": "Nama Syarikat",
      "form.phone": "Nombor Telefon",
      "form.message": "Mesej",
      "form.submit": "Hantar",
      "form.sending": "Menghantar...",
      "form.success": "Terima kasih! Kami akan hubungi dalam 24 jam.",
      "form.error": "Ada masalah. Sila e-mel kami terus di",
      
      // Footer
      "footer.product": "Produk",
      "footer.company": "Syarikat",
      "footer.contact": "Hubungi Kami",
      "footer.tagline": "Pekerja Digital yang faham pelanggan tempatan anda. Tiada aplikasi, tiada leceh, hanya hasil.",
      "footer.madeBy": "Dibuat dengan 🤍 oleh",
      "footer.rights": "Hak cipta terpelihara.",
    }
  },
  zh: {
    translation: {
      // Navbar
      "nav.features": "功能",
      "nav.pricing": "价格",
      "nav.enterprise": "企业版",
      "nav.getStarted": "开始使用",
      
      // Hero Section
      "hero.title": "您的WhatsApp，由AI驱动",
      "hero.subtitle": "懂您客户语言的数字员工。无需应用程序，无需麻烦，只有成果。",
      "hero.cta.primary": "免费试用",
      "hero.cta.secondary": "了解运作方式",
      "hero.stats.responses": "平均响应时间",
      "hero.stats.satisfaction": "客户满意度",
      "hero.stats.reduction": "成本降低",
      
      // Pricing
      "pricing.title": "简单定价，强大成果",
      "pricing.starter.name": "入门版",
      "pricing.starter.price": "RM159",
      "pricing.starter.period": "/月",
      "pricing.starter.description": "适合开始使用AI的小型企业",
      "pricing.professional.name": "专业版",
      "pricing.professional.price": "RM299",
      "pricing.professional.period": "/月",
      "pricing.professional.description": "适合需要更多功能的成长型企业",
      "pricing.enterprise.name": "企业版",
      "pricing.enterprise.price": "定制",
      "pricing.enterprise.description": "为大型组织量身定制的解决方案",
      "pricing.cta": "开始使用",
      "pricing.contact": "联系销售",
      
      // Contact Forms
      "contact.enterprise.title": "企业咨询",
      "contact.enterprise.subtitle": "让我们讨论Bijou AI如何改变您的业务",
      "contact.partnership.title": "合作机会",
      "contact.partnership.subtitle": "与我们合作，将AI带给更多企业",
      "contact.integration.title": "集成请求",
      "contact.integration.subtitle": "告诉我们您需要哪些集成",
      
      "form.name": "全名",
      "form.email": "电子邮件地址",
      "form.company": "公司名称",
      "form.phone": "电话号码",
      "form.message": "留言",
      "form.submit": "提交",
      "form.sending": "发送中...",
      "form.success": "谢谢！我们会在24小时内联系您。",
      "form.error": "出了点问题。请直接发送电子邮件至",
      
      // Footer
      "footer.product": "产品",
      "footer.company": "公司",
      "footer.contact": "联系我们",
      "footer.tagline": "懂您本地客户的数字员工。无需应用程序，无需麻烦，只有成果。",
      "footer.madeBy": "由 🤍 制作",
      "footer.rights": "版权所有。",
    }
  },
  ta: {
    translation: {
      // Navbar
      "nav.features": "அம்சங்கள்",
      "nav.pricing": "விலை",
      "nav.enterprise": "நிறுவனம்",
      "nav.getStarted": "தொடங்குங்கள்",
      
      // Hero Section
      "hero.title": "உங்கள் WhatsApp, AI மூலம் இயக்கப்படுகிறது",
      "hero.subtitle": "உங்கள் வாடிக்கையாளர்களின் மொழியைப் பேசும் டிஜிட்டல் ஊழியர். பயன்பாடுகள் இல்லை, சிரமம் இல்லை, முடிவுகள் மட்டுமே.",
      "hero.cta.primary": "இலவச சோதனை",
      "hero.cta.secondary": "எப்படி வேலை செய்கிறது என்று பாருங்கள்",
      "hero.stats.responses": "சராசரி பதில் நேரம்",
      "hero.stats.satisfaction": "வாடிக்கையாளர் திருப்தி",
      "hero.stats.reduction": "செலவு குறைப்பு",
      
      // Pricing
      "pricing.title": "எளிய விலை, சக்திவாய்ந்த முடிவுகள்",
      "pricing.starter.name": "தொடக்கம்",
      "pricing.starter.price": "RM159",
      "pricing.starter.period": "/மாதம்",
      "pricing.starter.description": "AI உடன் தொடங்கும் சிறு வணிகங்களுக்கு ஏற்றது",
      "pricing.professional.name": "தொழில்முறை",
      "pricing.professional.price": "RM299",
      "pricing.professional.period": "/மாதம்",
      "pricing.professional.description": "அதிக சக்தி தேவைப்படும் வளரும் வணிகங்களுக்கு",
      "pricing.enterprise.name": "நிறுவனம்",
      "pricing.enterprise.price": "தனிப்பயன்",
      "pricing.enterprise.description": "பெரிய நிறுவனங்களுக்கு தனிப்பயனாக்கப்பட்ட தீர்வுகள்",
      "pricing.cta": "தொடங்குங்கள்",
      "pricing.contact": "விற்பனையைத் தொடர்பு கொள்ளுங்கள்",
      
      // Contact Forms
      "contact.enterprise.title": "நிறுவன விசாரணைகள்",
      "contact.enterprise.subtitle": "Bijou AI உங்கள் வணிகத்தை எவ்வாறு மாற்றும் என்பதை விவாதிப்போம்",
      "contact.partnership.title": "கூட்டாண்மை வாய்ப்புகள்",
      "contact.partnership.subtitle": "அதிக வணிகங்களுக்கு AI ஐக் கொண்டு வர எங்களுடன் ஒத்துழைக்கவும்",
      "contact.integration.title": "ஒருங்கிணைப்பு கோரிக்கைகள்",
      "contact.integration.subtitle": "உங்களுக்கு என்ன ஒருங்கிணைப்புகள் தேவை என்று சொல்லுங்கள்",
      
      "form.name": "முழு பெயர்",
      "form.email": "மின்னஞ்சல் முகவரி",
      "form.company": "நிறுவனத்தின் பெயர்",
      "form.phone": "தொலைபேசி எண்",
      "form.message": "செய்தி",
      "form.submit": "சமர்ப்பிக்கவும்",
      "form.sending": "அனுப்புகிறது...",
      "form.success": "நன்றி! நாங்கள் 24 மணி நேரத்திற்குள் தொடர்பு கொள்வோம்.",
      "form.error": "ஏதோ தவறு நடந்தது. தயவுசெய்து எங்களுக்கு நேரடியாக மின்னஞ்சல் அனுப்பவும்",
      
      // Footer
      "footer.product": "தயாரிப்பு",
      "footer.company": "நிறுவனம்",
      "footer.contact": "எங்களை தொடர்பு கொள்ளுங்கள்",
      "footer.tagline": "உங்கள் உள்ளூர் வாடிக்கையாளர்களைப் புரிந்து கொள்ளும் டிஜிட்டல் ஊழியர். பயன்பாடுகள் இல்லை, சிரமம் இல்லை, முடிவுகள் மட்டுமே.",
      "footer.madeBy": "🤍 உடன் தயாரிக்கப்பட்டது",
      "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    }
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Fallback to English if language not found
    supportedLngs: ['en', 'ms', 'zh', 'ta'],
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
      caches: ['localStorage'], // Save language preference
    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
