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
      "hero.badge": "🎯 First 100 Customers: RM159/month (Limited Time)",
      "hero.title": "Your {{savingsAmount}} 24/7 Digital Employee for {{priceAmount}}",
      "hero.title.savingsAmount": "RM9,201/month",
      "hero.title.priceAmount": "Just RM159",
      "hero.subtitle": "Close sales at 2AM in fluent Manglish. Book viewings instantly. Send property brochures automatically. {{roi}} guaranteed for Malaysian SMEs.",
      "hero.subtitle.roi": "335% ROI",
      "hero.cta.trial": "Start Free Trial",
      "hero.cta.demo": "Book Demo",
      "hero.trustFooter": "✅ 14-day free trial • ✅ RM159 launch price • ✅ 335% ROI guaranteed",
      "hero.trustedBy": "Trusted & Backed By",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "PDPA Compliant",
      "hero.chatDemo.assistant": "Bijou Assistant",
      "hero.chatDemo.status": "Active • 02:45 AM",
      "hero.chatDemo.msg1": "Boss, can check property viewing? 2am liao but I excited.",
      "hero.chatDemo.msg2": "No prob boss! I still awake. Which area you looking? KLCC or Mont Kiara? 🏙️",
      "hero.chatDemo.msg3": "MK. Got balcony one.",
      "hero.chatDemo.msg4": "Got! Residensi 22, High Floor. I send you video brochure now. 📹",
      "hero.roiCard.title": "Monthly Savings",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "vs Junior Customer Service Agent",
      "hero.roiCard.roi": "335% ROI",
      
      // Pricing Section
      "pricing.badge": "💎 Limited Time Offer",
      "pricing.title": "Simple, Transparent Pricing",
      "pricing.subtitle": "Start with a {{trial}}. No credit card required. Cancel anytime.",
      "pricing.subtitle.trial": "14-day free trial",
      
      // Starter Plan
      "pricing.starter.name": "Starter",
      "pricing.starter.price": "159",
      "pricing.starter.originalPrice": "499",
      "pricing.starter.discount": "68% OFF",
      "pricing.starter.description": "Perfect for solo agents and small teams",
      "pricing.starter.badge": "FIRST 100 ONLY",
      "pricing.starter.limitedText": "⚡ Limited to first 100 customers only",
      "pricing.starter.features.0": "24/7 WhatsApp AI Agent",
      "pricing.starter.features.1": "Up to 500 conversations/month",
      "pricing.starter.features.2": "Basic lead qualification",
      "pricing.starter.features.3": "Property brochure automation",
      "pricing.starter.features.4": "Standard analytics",
      "pricing.starter.features.5": "Email support",
      
      // Professional Plan
      "pricing.professional.name": "Professional",
      "pricing.professional.price": "299",
      "pricing.professional.description": "For growing agencies & clinics",
      "pricing.professional.badge": "MOST POPULAR",
      "pricing.professional.features.0": "Everything in Starter, plus:",
      "pricing.professional.features.1": "Unlimited conversations",
      "pricing.professional.features.2": "Advanced playbook customization",
      "pricing.professional.features.3": "Multi-language support (Manglish, BM, English)",
      "pricing.professional.features.4": "CRM integration (coming soon)",
      "pricing.professional.features.5": "Priority WhatsApp support",
      "pricing.professional.features.6": "Custom branding options",
      
      // Enterprise Plan
      "pricing.enterprise.name": "Enterprise",
      "pricing.enterprise.price": "Custom",
      "pricing.enterprise.description": "For large teams & franchises",
      "pricing.enterprise.badge": "PREMIUM",
      "pricing.enterprise.features.0": "Everything in Professional, plus:",
      "pricing.enterprise.features.1": "Unlimited team members",
      "pricing.enterprise.features.2": "Dedicated account manager",
      "pricing.enterprise.features.3": "Custom AI training on your data",
      "pricing.enterprise.features.4": "White-label solution",
      "pricing.enterprise.features.5": "SLA guarantee (99.9% uptime)",
      "pricing.enterprise.features.6": "24/7 phone + WhatsApp support",
      
      "pricing.cta.trial": "Start Free Trial",
      "pricing.cta.contact": "Contact Sales",
      "pricing.guarantee.title": "335% ROI Guarantee",
      "pricing.guarantee.subtitle": "If Bijou doesn't save you at least 3x your subscription cost, we'll refund 100%",
      
      // Case Studies Section
      "cases.title": "Real Results",
      "cases.subtitle": "See how businesses are automating growth with Bijou.",
      
      // Real Estate Case Study
      "cases.realEstate.company": "KL Metro Properties",
      "cases.realEstate.industry": "Real Estate Agency",
      "cases.realEstate.stat1.value": "0%",
      "cases.realEstate.stat1.label": "Missed Calls",
      "cases.realEstate.stat2.value": "+40%",
      "cases.realEstate.stat2.label": "Leads Qualified",
      "cases.realEstate.quote": "Before Bijou, we lost leads every time we were in a viewing. Now, Bijou answers instantly, sends the brochure, and books the next viewing. It's like having a super-agent.",
      "cases.realEstate.cta": "Read Full Case Study",
      
      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "Dental Specialist",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "No-Show Rate",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "Booking Availability",
      "cases.healthcare.quote": "Our nurses used to spend hours calling patients to confirm slots. Bijou does it automatically on WhatsApp. Patients love it, and our chairs are always full.",
      "cases.healthcare.cta": "Read Full Case Study",
      
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
      "hero.badge": "🎯 100 Pelanggan Pertama: RM159/bulan (Tawaran Terhad)",
      "hero.title": "{{savingsAmount}} Pekerja Digital 24/7 Anda untuk {{priceAmount}}",
      "hero.title.savingsAmount": "RM9,201/bulan",
      "hero.title.priceAmount": "Cuma RM159",
      "hero.subtitle": "Tutup jualan pukul 2 pagi dalam Manglish yang lancar. Buat temujanji viewing segera. Hantar brosur hartanah automatik. {{roi}} dijamin untuk PKS Malaysia.",
      "hero.subtitle.roi": "ROI 335%",
      "hero.cta.trial": "Cuba Percuma",
      "hero.cta.demo": "Tempah Demo",
      "hero.trustFooter": "✅ Percubaan 14 hari percuma • ✅ Harga pelancaran RM159 • ✅ ROI 335% dijamin",
      "hero.trustedBy": "Dipercayai & Disokong Oleh",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "Mematuhi PDPA",
      "hero.chatDemo.assistant": "Pembantu Bijou",
      "hero.chatDemo.status": "Aktif • 02:45 AM",
      "hero.chatDemo.msg1": "Boss, boleh check property viewing? 2am dah tapi excited nak tengok.",
      "hero.chatDemo.msg2": "Tak masalah boss! Saya masih jaga. Area mana nak cari? KLCC atau Mont Kiara? 🏙️",
      "hero.chatDemo.msg3": "MK. Yang ada balcony.",
      "hero.chatDemo.msg4": "Ada! Residensi 22, Tingkat Tinggi. Saya hantar video brochure sekarang. 📹",
      "hero.roiCard.title": "Penjimatan Bulanan",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "berbanding Ejen Khidmat Pelanggan Junior",
      "hero.roiCard.roi": "ROI 335%",
      
      // Pricing Section
      "pricing.badge": "💎 Tawaran Masa Terhad",
      "pricing.title": "Harga Mudah, Telus",
      "pricing.subtitle": "Mulakan dengan {{trial}}. Tiada kad kredit diperlukan. Batalkan bila-bila masa.",
      "pricing.subtitle.trial": "percubaan percuma 14 hari",
      
      // Starter Plan
      "pricing.starter.name": "Permulaan",
      "pricing.starter.price": "159",
      "pricing.starter.originalPrice": "499",
      "pricing.starter.discount": "68% DISKAUN",
      "pricing.starter.description": "Sesuai untuk ejen solo dan pasukan kecil",
      "pricing.starter.badge": "100 PERTAMA SAHAJA",
      "pricing.starter.limitedText": "⚡ Terhad kepada 100 pelanggan pertama sahaja",
      "pricing.starter.features.0": "Ejen AI WhatsApp 24/7",
      "pricing.starter.features.1": "Sehingga 500 perbualan/bulan",
      "pricing.starter.features.2": "Kelayakan petunjuk asas",
      "pricing.starter.features.3": "Automasi brosur hartanah",
      "pricing.starter.features.4": "Analitik standard",
      "pricing.starter.features.5": "Sokongan e-mel",
      
      // Professional Plan
      "pricing.professional.name": "Profesional",
      "pricing.professional.price": "299",
      "pricing.professional.description": "Untuk agensi & klinik yang berkembang",
      "pricing.professional.badge": "PALING POPULAR",
      "pricing.professional.features.0": "Semua dalam Permulaan, tambah:",
      "pricing.professional.features.1": "Perbualan tanpa had",
      "pricing.professional.features.2": "Penyesuaian playbook lanjutan",
      "pricing.professional.features.3": "Sokongan berbilang bahasa (Manglish, BM, English)",
      "pricing.professional.features.4": "Integrasi CRM (akan datang)",
      "pricing.professional.features.5": "Sokongan WhatsApp keutamaan",
      "pricing.professional.features.6": "Pilihan penjenamaan tersuai",
      
      // Enterprise Plan
      "pricing.enterprise.name": "Perusahaan",
      "pricing.enterprise.price": "Tersuai",
      "pricing.enterprise.description": "Untuk pasukan besar & francais",
      "pricing.enterprise.badge": "PREMIUM",
      "pricing.enterprise.features.0": "Semua dalam Profesional, tambah:",
      "pricing.enterprise.features.1": "Ahli pasukan tanpa had",
      "pricing.enterprise.features.2": "Pengurus akaun khusus",
      "pricing.enterprise.features.3": "Latihan AI tersuai pada data anda",
      "pricing.enterprise.features.4": "Penyelesaian white-label",
      "pricing.enterprise.features.5": "Jaminan SLA (99.9% uptime)",
      "pricing.enterprise.features.6": "Sokongan telefon + WhatsApp 24/7",
      
      "pricing.cta.trial": "Cuba Percuma",
      "pricing.cta.contact": "Hubungi Jualan",
      "pricing.guarantee.title": "Jaminan ROI 335%",
      "pricing.guarantee.subtitle": "Jika Bijou tak jimat sekurang-kurangnya 3x kos langganan anda, kami pulangkan 100%",
      
      // Case Studies Section
      "cases.title": "Hasil Sebenar",
      "cases.subtitle": "Lihat bagaimana perniagaan mengautomasi pertumbuhan dengan Bijou.",
      
      // Real Estate Case Study
      "cases.realEstate.company": "KL Metro Properties",
      "cases.realEstate.industry": "Agensi Hartanah",
      "cases.realEstate.stat1.value": "0%",
      "cases.realEstate.stat1.label": "Panggilan Terlepas",
      "cases.realEstate.stat2.value": "+40%",
      "cases.realEstate.stat2.label": "Petunjuk Layak",
      "cases.realEstate.quote": "Sebelum Bijou, kami kehilangan petunjuk setiap kali di viewing. Sekarang, Bijou jawab serta-merta, hantar brosur, dan book viewing seterusnya. Macam ada super-ejen.",
      "cases.realEstate.cta": "Baca Kajian Kes Penuh",
      
      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "Pakar Pergigian",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "Kadar Tak Hadir",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "Ketersediaan Tempahan",
      "cases.healthcare.quote": "Jururawat kami dulu habis jam panggil pesakit untuk confirm slot. Bijou buat automatik di WhatsApp. Pesakit suka, dan kerusi kami sentiasa penuh.",
      "cases.healthcare.cta": "Baca Kajian Kes Penuh",
      
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
      "hero.badge": "🎯 前100名客户: RM159/月 (限时优惠)",
      "hero.title": "您的{{savingsAmount}} 24/7数字员工 只需{{priceAmount}}",
      "hero.title.savingsAmount": "RM9,201/月",
      "hero.title.priceAmount": "仅需RM159",
      "hero.subtitle": "凌晨2点用流利的马来式英语成交销售。即时预约看房。自动发送房产手册。为马来西亚中小企业保证{{roi}}。",
      "hero.subtitle.roi": "335% 投资回报率",
      "hero.cta.trial": "免费试用",
      "hero.cta.demo": "预约演示",
      "hero.trustFooter": "✅ 14天免费试用 • ✅ RM159发布价 • ✅ 335%投资回报率保证",
      "hero.trustedBy": "信任与支持方",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "符合PDPA规范",
      "hero.chatDemo.assistant": "Bijou助手",
      "hero.chatDemo.status": "活跃 • 02:45 AM",
      "hero.chatDemo.msg1": "老板，可以check property viewing吗？2am了但我很excited。",
      "hero.chatDemo.msg2": "没问题老板！我还醒着。你要找哪个区？KLCC还是Mont Kiara？🏙️",
      "hero.chatDemo.msg3": "MK。有balcony的。",
      "hero.chatDemo.msg4": "有！Residensi 22，高楼层。我现在发给你视频手册。📹",
      "hero.roiCard.title": "每月节省",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "相比初级客服专员",
      "hero.roiCard.roi": "335% 投资回报率",
      
      // Pricing Section
      "pricing.badge": "💎 限时优惠",
      "pricing.title": "简单透明的定价",
      "pricing.subtitle": "以{{trial}}开始。无需信用卡。随时取消。",
      "pricing.subtitle.trial": "14天免费试用",
      
      // Starter Plan
      "pricing.starter.name": "入门版",
      "pricing.starter.price": "159",
      "pricing.starter.originalPrice": "499",
      "pricing.starter.discount": "68% 折扣",
      "pricing.starter.description": "适合独立代理和小团队",
      "pricing.starter.badge": "仅限前100名",
      "pricing.starter.limitedText": "⚡ 仅限前100名客户",
      "pricing.starter.features.0": "24/7 WhatsApp AI代理",
      "pricing.starter.features.1": "每月最多500次对话",
      "pricing.starter.features.2": "基础潜在客户筛选",
      "pricing.starter.features.3": "房产手册自动化",
      "pricing.starter.features.4": "标准分析",
      "pricing.starter.features.5": "电子邮件支持",
      
      // Professional Plan
      "pricing.professional.name": "专业版",
      "pricing.professional.price": "299",
      "pricing.professional.description": "适合成长中的代理机构和诊所",
      "pricing.professional.badge": "最受欢迎",
      "pricing.professional.features.0": "入门版所有功能，另加：",
      "pricing.professional.features.1": "无限对话",
      "pricing.professional.features.2": "高级playbook定制",
      "pricing.professional.features.3": "多语言支持（马来式英语、马来语、英语）",
      "pricing.professional.features.4": "CRM集成（即将推出）",
      "pricing.professional.features.5": "优先WhatsApp支持",
      "pricing.professional.features.6": "自定义品牌选项",
      
      // Enterprise Plan
      "pricing.enterprise.name": "企业版",
      "pricing.enterprise.price": "定制",
      "pricing.enterprise.description": "适合大型团队和特许经营",
      "pricing.enterprise.badge": "高级版",
      "pricing.enterprise.features.0": "专业版所有功能，另加：",
      "pricing.enterprise.features.1": "无限团队成员",
      "pricing.enterprise.features.2": "专属客户经理",
      "pricing.enterprise.features.3": "基于您的数据定制AI训练",
      "pricing.enterprise.features.4": "白标解决方案",
      "pricing.enterprise.features.5": "SLA保证（99.9%正常运行时间）",
      "pricing.enterprise.features.6": "24/7电话+WhatsApp支持",
      
      "pricing.cta.trial": "免费试用",
      "pricing.cta.contact": "联系销售",
      "pricing.guarantee.title": "335% 投资回报率保证",
      "pricing.guarantee.subtitle": "如果Bijou未能为您节省至少3倍订阅费用，我们将100%退款",
      
      // Case Studies Section
      "cases.title": "真实成果",
      "cases.subtitle": "了解企业如何通过Bijou自动化增长。",
      
      // Real Estate Case Study
      "cases.realEstate.company": "KL Metro Properties",
      "cases.realEstate.industry": "房地产代理",
      "cases.realEstate.stat1.value": "0%",
      "cases.realEstate.stat1.label": "漏接电话",
      "cases.realEstate.stat2.value": "+40%",
      "cases.realEstate.stat2.label": "潜在客户筛选",
      "cases.realEstate.quote": "在使用Bijou之前，每次看房时我们都会失去潜在客户。现在，Bijou立即回复、发送手册并预约下次看房。就像有一个超级代理。",
      "cases.realEstate.cta": "阅读完整案例研究",
      
      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "牙科专家",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "爽约率",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "预约可用性",
      "cases.healthcare.quote": "我们的护士过去要花数小时打电话确认时段。Bijou在WhatsApp上自动完成。患者喜欢，我们的座位总是满的。",
      "cases.healthcare.cta": "阅读完整案例研究",
      
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
      "hero.badge": "🎯 முதல் 100 வாடிக்கையாளர்கள்: RM159/மாதம் (வரையறுக்கப்பட்ட காலம்)",
      "hero.title": "உங்கள் {{savingsAmount}} 24/7 டிஜிட்டல் ஊழியர் {{priceAmount}} மட்டுமே",
      "hero.title.savingsAmount": "RM9,201/மாதம்",
      "hero.title.priceAmount": "வெறும் RM159",
      "hero.subtitle": "காலை 2 மணிக்கு சரளமான Manglish-இல் விற்பனையை முடியுங்கள். உடனடியாக காட்சி சந்திப்புகளை பதிவு செய்யுங்கள். சொத்து தகவல் புத்தகங்களை தானாக அனுப்புங்கள். மலேசிய SMEக்களுக்கு {{roi}} உத்தரவாதம்.",
      "hero.subtitle.roi": "335% ROI",
      "hero.cta.trial": "இலவச சோதனை தொடங்கவும்",
      "hero.cta.demo": "டெமோ பதிவு செய்யவும்",
      "hero.trustFooter": "✅ 14 நாள் இலவச சோதனை • ✅ RM159 வெளியீட்டு விலை • ✅ 335% ROI உத்தரவாதம்",
      "hero.trustedBy": "நம்பிக்கை & ஆதரவு",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "PDPA இணங்குதல்",
      "hero.chatDemo.assistant": "Bijou உதவியாளர்",
      "hero.chatDemo.status": "செயலில் • 02:45 AM",
      "hero.chatDemo.msg1": "Boss, property viewing check பண்ண முடியுமா? 2am ஆகிவிட்டது ஆனால் excited ஆக இருக்கிறேன்.",
      "hero.chatDemo.msg2": "பிரச்சனை இல்லை boss! நான் இன்னும் விழித்திருக்கிறேன். எந்த பகுதியை தேடுகிறீர்கள்? KLCC அல்லது Mont Kiara? 🏙️",
      "hero.chatDemo.msg3": "MK. Balcony உள்ளது.",
      "hero.chatDemo.msg4": "உள்ளது! Residensi 22, உயர் தளம். இப்போது வீடியோ brochure அனுப்புகிறேன். 📹",
      "hero.roiCard.title": "மாதாந்திர சேமிப்பு",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "ஜூனியர் வாடிக்கையாளர் சேவை அதிகாரியுடன் ஒப்பிடும்போது",
      "hero.roiCard.roi": "335% ROI",
      
      // Pricing Section
      "pricing.badge": "💎 வரையறுக்கப்பட்ட கால சலுகை",
      "pricing.title": "எளிய, வெளிப்படையான விலை",
      "pricing.subtitle": "{{trial}} உடன் தொடங்குங்கள். கிரெடிட் கார்டு தேவையில்லை. எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்.",
      "pricing.subtitle.trial": "14 நாள் இலவச சோதனை",
      
      // Starter Plan
      "pricing.starter.name": "தொடக்கம்",
      "pricing.starter.price": "159",
      "pricing.starter.originalPrice": "499",
      "pricing.starter.discount": "68% தள்ளுபடி",
      "pricing.starter.description": "தனி முகவர்கள் மற்றும் சிறு குழுக்களுக்கு ஏற்றது",
      "pricing.starter.badge": "முதல் 100 மட்டும்",
      "pricing.starter.limitedText": "⚡ முதல் 100 வாடிக்கையாளர்களுக்கு மட்டும்",
      "pricing.starter.features.0": "24/7 WhatsApp AI முகவர்",
      "pricing.starter.features.1": "மாதத்திற்கு 500 உரையாடல்கள் வரை",
      "pricing.starter.features.2": "அடிப்படை லீட் தகுதிப்பெறுதல்",
      "pricing.starter.features.3": "சொத்து தகவல் புத்தக தானியங்கு",
      "pricing.starter.features.4": "நிலையான பகுப்பாய்வு",
      "pricing.starter.features.5": "மின்னஞ்சல் ஆதரவு",
      
      // Professional Plan
      "pricing.professional.name": "தொழில்முறை",
      "pricing.professional.price": "299",
      "pricing.professional.description": "வளரும் நிறுவனங்கள் & கிளினிக்குகளுக்கு",
      "pricing.professional.badge": "மிகவும் பிரபலமானது",
      "pricing.professional.features.0": "தொடக்கத்தில் உள்ள அனைத்தும், கூடுதலாக:",
      "pricing.professional.features.1": "வரம்பற்ற உரையாடல்கள்",
      "pricing.professional.features.2": "மேம்பட்ட playbook தனிப்பயனாக்கம்",
      "pricing.professional.features.3": "பல மொழி ஆதரவு (Manglish, BM, English)",
      "pricing.professional.features.4": "CRM ஒருங்கிணைப்பு (விரைவில் வரும்)",
      "pricing.professional.features.5": "முன்னுரிமை WhatsApp ஆதரவு",
      "pricing.professional.features.6": "தனிப்பயன் பிராண்டிங் விருப்பங்கள்",
      
      // Enterprise Plan
      "pricing.enterprise.name": "நிறுவனம்",
      "pricing.enterprise.price": "தனிப்பயன்",
      "pricing.enterprise.description": "பெரிய குழுக்கள் & உரிமையாளர்களுக்கு",
      "pricing.enterprise.badge": "பிரீமியம்",
      "pricing.enterprise.features.0": "தொழில்முறையில் உள்ள அனைத்தும், கூடுதலாக:",
      "pricing.enterprise.features.1": "வரம்பற்ற குழு உறுப்பினர்கள்",
      "pricing.enterprise.features.2": "பிரத்யேக கணக்கு மேலாளர்",
      "pricing.enterprise.features.3": "உங்கள் தரவில் தனிப்பயன் AI பயிற்சி",
      "pricing.enterprise.features.4": "வெள்ளை-லேபிள் தீர்வு",
      "pricing.enterprise.features.5": "SLA உத்தரவாதம் (99.9% uptime)",
      "pricing.enterprise.features.6": "24/7 தொலைபேசி + WhatsApp ஆதரவு",
      
      "pricing.cta.trial": "இலவச சோதனை தொடங்கவும்",
      "pricing.cta.contact": "விற்பனையைத் தொடர்பு கொள்ளவும்",
      "pricing.guarantee.title": "335% ROI உத்தரவாதம்",
      "pricing.guarantee.subtitle": "Bijou குறைந்தபட்சம் உங்கள் சந்தா கட்டணத்தின் 3x சேமிக்கவில்லை என்றால், நாங்கள் 100% திரும்பப் பெறுவோம்",
      
      // Case Studies Section
      "cases.title": "உண்மையான முடிவுகள்",
      "cases.subtitle": "Bijou உடன் வணிகங்கள் வளர்ச்சியை எவ்வாறு தானியங்குபடுத்துகின்றன என்பதைப் பாருங்கள்.",
      
      // Real Estate Case Study
      "cases.realEstate.company": "KL Metro Properties",
      "cases.realEstate.industry": "ரியல் எஸ்டேட் ஏஜென்சி",
      "cases.realEstate.stat1.value": "0%",
      "cases.realEstate.stat1.label": "தவறிய அழைப்புகள்",
      "cases.realEstate.stat2.value": "+40%",
      "cases.realEstate.stat2.label": "தகுதிபெற்ற லீட்ஸ்",
      "cases.realEstate.quote": "Bijou க்கு முன், நாங்கள் பார்வையில் இருக்கும் போதெல்லாம் லீட்ஸை இழந்தோம். இப்போது, Bijou உடனடியாக பதிலளிக்கிறது, தகவல் புத்தகத்தை அனுப்புகிறது, அடுத்த பார்வையை பதிவு செய்கிறது. சூப்பர் ஏஜென்ட் இருப்பது போல்.",
      "cases.realEstate.cta": "முழு வழக்கு ஆய்வைப் படிக்கவும்",
      
      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "பல் மருத்துவ நிபுணர்",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "வராத விகிதம்",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "பதிவு கிடைக்கும் தன்மை",
      "cases.healthcare.quote": "எங்கள் செவிலியர்கள் முன்பு நோயாளிகளை அழைத்து ஸ்லாட்களை உறுதிப்படுத்த மணிநேரங்களை செலவிட்டனர். Bijou WhatsApp இல் தானாகவே செய்கிறது. நோயாளிகள் விரும்புகிறார்கள், மற்றும் எங்கள் நாற்காலிகள் எப்போதும் நிரம்பியுள்ளன.",
      "cases.healthcare.cta": "முழு வழக்கு ஆய்வைப் படிக்கவும்",
      
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
