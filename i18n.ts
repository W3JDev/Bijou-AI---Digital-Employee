import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

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
      "hero.badge": "🚀 RM0 to start — no credit card, no WABA needed",
      "hero.title.part1": "Your WhatsApp goes",
      "hero.title.savingsAmount": "offline at 10pm.",
      "hero.title.part2": "Your competitors'",
      "hero.title.priceAmount": "doesn't.",
      "hero.subtitle.part1":
        "Bijou is a Malaysian AI for WhatsApp & Telegram. Replies instantly in Manglish, books Cal.com appointments, qualifies leads automatically —",
      "hero.subtitle.roi": "while you sleep.",
      "hero.subtitle.part2": "",
      "hero.cta.trial": "Start Free — RM0",
      "hero.cta.demo": "Book Demo",
      "hero.trustFooter":
        "✅ 30-day money-back · ✅ No WABA needed · ✅ Cancel anytime",
      "hero.trustedBy": "Trusted & Backed By",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "PDPA Compliant",
      "hero.chatDemo.assistant": "Bijou Assistant",
      "hero.chatDemo.status": "Active • 02:45 AM",
      "hero.chatDemo.msg1":
        "Boss, can check property viewing? 2am liao but I excited.",
      "hero.chatDemo.msg2":
        "No prob boss! I still awake. Which area you looking? KLCC or Mont Kiara? 🏙️",
      "hero.chatDemo.msg3": "MK. Got balcony one.",
      "hero.chatDemo.msg4":
        "Got! Residensi 22, High Floor. I send you video brochure now. 📹",
      "hero.roiCard.title": "Monthly Savings",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "vs Junior Customer Service Agent",
      "hero.roiCard.roi": "335% ROI",

      // Pricing Section — Single PRO Tier (RM 249/month, updated March 2026)
      "pricing.badge": "💎 Honest, Simple Pricing",
      "pricing.title": "One Plan. Everything That's Live.",
      "pricing.subtitle.part1": "Backed by a",
      "pricing.subtitle.trial": "30-day money-back guarantee",
      "pricing.subtitle.part2": ". No contract. Cancel anytime.",

      // PRO Plan — Single Tier
      "pricing.pro.name": "PRO",
      "pricing.pro.price": "299",
      "pricing.pro.yearlyPrice": "2,990",
      "pricing.pro.yearlySaving": "Save RM598 — 2 months free",
      "pricing.pro.description": "Everything you need to never miss a lead",
      "pricing.pro.badge": "THE ONLY PLAN",
      "pricing.pro.features.0": "WhatsApp AI Agent — no WABA, no Meta fees",
      "pricing.pro.features.1": "Telegram AI Agent — same brain, same Manglish",
      "pricing.pro.features.2": "3,000 Conversations/month (~100/day)",
      "pricing.pro.features.3": "Full TRACE AI — 4-agent empathy pipeline",
      "pricing.pro.features.4": "Manglish + EN / BM / Mandarin / Tamil",
      "pricing.pro.features.5":
        "Cal.com Booking — create, check, cancel appointments",
      "pricing.pro.features.6": "Auto email confirmations to customers",
      "pricing.pro.features.7":
        "Lead Qualification — Hot / Warm / Cold auto-detection",
      "pricing.pro.features.8":
        "Escalation alerts — email you when AI can't handle it",
      "pricing.pro.features.9": "Knowledge Base — 50 FAQs / up to 2 documents",
      "pricing.pro.betaFeature": "",
      "pricing.pro.earlyAccessNote":
        "Pro customers get early access FREE when new features ship — multi-user seats, extra channels, SMS reminders & more.",

      // Add-ons Roadmap
      "pricing.addons.title": "Coming Q2–Q4 2026 (Paid Add-ons)",
      "pricing.addons.subtitle":
        "Every feature that ships = a revenue event. Pro customers get early access free.",

      // CTA + Enterprise footnote
      "pricing.cta.trial": "Start 30-Day Trial",
      "pricing.cta.contact": "Contact Sales",
      "pricing.cta.enterprise": "Contact us →",
      "pricing.cta.enterprisePrompt":
        "Need multi-team, multi-number, or a custom setup?",

      // Guarantee
      "pricing.guarantee.title": "30-Day Money-Back Guarantee",
      "pricing.guarantee.subtitle":
        "If Bijou doesn't deliver in 30 days, get 100% refunded — no questions asked",

      // LEGACY KEYS — kept for rollback reference, no longer rendered
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
      "pricing.professional.name": "Professional",
      "pricing.professional.price": "299",
      "pricing.professional.originalPrice": "799",
      "pricing.professional.discount": "63% OFF",
      "pricing.professional.savings": "Save RM500/month!",
      "pricing.professional.description": "For growing agencies & clinics",
      "pricing.professional.badge": "MOST POPULAR",
      "pricing.professional.features.0": "Everything in Starter, plus:",
      "pricing.professional.features.1": "Unlimited conversations",
      "pricing.professional.features.2": "Advanced playbook customization",
      "pricing.professional.features.3":
        "Multi-language support (Manglish, BM, English)",
      "pricing.professional.features.4": "CRM integration (coming soon)",
      "pricing.professional.features.5": "Priority WhatsApp support",
      "pricing.professional.features.6": "Custom branding options",
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
      "cases.realEstate.quote":
        "Before Bijou, we lost leads every time we were in a viewing. Now, Bijou answers instantly, sends the brochure, and books the next viewing. It's like having a super-agent.",
      "cases.realEstate.cta": "Read Full Case Study",

      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "Dental Specialist",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "No-Show Rate",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "Booking Availability",
      "cases.healthcare.quote":
        "Our nurses used to spend hours calling patients to confirm slots. Bijou does it automatically on WhatsApp. Patients love it, and our chairs are always full.",
      "cases.healthcare.cta": "Read Full Case Study",

      // Contact Forms
      "contact.enterprise.title": "Enterprise Inquiries",
      "contact.enterprise.subtitle":
        "Let's discuss how Bijou AI can transform your business",
      "contact.partnership.title": "Partnership Opportunities",
      "contact.partnership.subtitle":
        "Collaborate with us to bring AI to more businesses",
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
      "footer.tagline":
        "The Digital Employee that understands your local customers. No apps, no friction, just results.",
      "footer.madeBy": "Made with 🤍 by",
      "footer.rights": "All rights reserved.",
    },
  },
  ms: {
    translation: {
      // Navbar
      "nav.features": "Ciri-ciri",
      "nav.pricing": "Harga",
      "nav.enterprise": "Perusahaan",
      "nav.getStarted": "Mulakan",

      // Hero Section
      "hero.badge":
        "🚀 RM0 untuk mulakan — tiada kad kredit, tiada WABA diperlukan",
      "hero.title.part1": "WhatsApp anda",
      "hero.title.savingsAmount": "offline pada 10 malam.",
      "hero.title.part2": "Pesaing anda",
      "hero.title.priceAmount": "tidak.",
      "hero.subtitle.part1":
        "Bijou ialah AI Malaysia untuk WhatsApp & Telegram. Balas segera dalam Manglish, tempah temujanji Cal.com, kelayakan leads automatik —",
      "hero.subtitle.roi": "semasa anda tidur.",
      "hero.subtitle.part2": "",
      "hero.cta.trial": "Mulakan Percuma — RM0",
      "hero.cta.demo": "Tempah Demo",
      "hero.trustFooter":
        "✅ Wang dikembalikan dalam 30 hari · ✅ Tiada WABA diperlukan · ✅ Batal bila-bila masa",
      "hero.trustedBy": "Dipercayai & Disokong Oleh",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "Mematuhi PDPA",
      "hero.chatDemo.assistant": "Pembantu Bijou",
      "hero.chatDemo.status": "Aktif • 02:45 AM",
      "hero.chatDemo.msg1":
        "Boss, boleh check property viewing? 2am dah tapi excited nak tengok.",
      "hero.chatDemo.msg2":
        "Tak masalah boss! Saya masih jaga. Area mana nak cari? KLCC atau Mont Kiara? 🏙️",
      "hero.chatDemo.msg3": "MK. Yang ada balcony.",
      "hero.chatDemo.msg4":
        "Ada! Residensi 22, Tingkat Tinggi. Saya hantar video brochure sekarang. 📹",
      "hero.roiCard.title": "Penjimatan Bulanan",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "berbanding Ejen Khidmat Pelanggan Junior",
      "hero.roiCard.roi": "ROI 335%",

      // Pricing Section — Satu Peringkat PRO (RM 249/bulan, dikemaskini Mac 2026)
      "pricing.badge": "💎 Harga Jujur, Mudah",
      "pricing.title": "Satu Pelan. Semua Yang Sedia Ada.",
      "pricing.subtitle.part1": "Dijamin oleh",
      "pricing.subtitle.trial": "jaminan wang dikembalikan 30 hari",
      "pricing.subtitle.part2": ". Tiada kontrak. Batalkan bila-bila masa.",

      // Pelan PRO — Satu Peringkat
      "pricing.pro.name": "PRO",
      "pricing.pro.price": "299",
      "pricing.pro.yearlyPrice": "2,990",
      "pricing.pro.yearlySaving": "Jimat RM598 — 2 bulan percuma",
      "pricing.pro.description":
        "Semua yang anda perlukan supaya tiada petunjuk terlepas",
      "pricing.pro.badge": "SATU-SATUNYA PELAN",
      "pricing.pro.features.0":
        "Ejen AI WhatsApp — tanpa WABA, tanpa bayaran Meta",
      "pricing.pro.features.1": "Ejen AI Telegram — otak sama, Manglish sama",
      "pricing.pro.features.2": "3,000 Perbualan/bulan (~100/hari)",
      "pricing.pro.features.3": "AI TRACE Penuh — 4 ejen empati",
      "pricing.pro.features.4": "Manglish + EN / BM / Mandarin / Tamil",
      "pricing.pro.features.5":
        "Tempahan Cal.com — cipta, semak, batal temujanji",
      "pricing.pro.features.6": "E-mel pengesahan automatik kepada pelanggan",
      "pricing.pro.features.7":
        "Kelayakan Petunjuk — Pengesan Hot / Warm / Cold automatik",
      "pricing.pro.features.8":
        "Amaran eskalasi — e-mel anda apabila AI tidak dapat handle",
      "pricing.pro.features.9": "Pangkalan Pengetahuan — 50 FAQ / 2 dokumen",
      "pricing.pro.betaFeature": "",
      "pricing.pro.earlyAccessNote":
        "Pelanggan Pro mendapat akses awal PERCUMA apabila ciri baharu dilancarkan — tempat berbilang pengguna, saluran tambahan & lebih.",

      // Bahagian Tambahan
      "pricing.addons.title": "Akan Datang Q2–Q4 2026 (Tambahan Berbayar)",
      "pricing.addons.subtitle":
        "Setiap ciri baharu = peluang hasil. Pelanggan Pro dapat akses awal percuma.",

      "pricing.cta.trial": "Mulakan Percubaan 30 Hari",
      "pricing.cta.contact": "Hubungi Jualan",
      "pricing.cta.enterprise": "Hubungi kami →",
      "pricing.cta.enterprisePrompt":
        "Perlukan berbilang pengguna, nombor, atau setup tersuai?",

      "pricing.guarantee.title": "Jaminan Wang Dikembalikan 30 Hari",
      "pricing.guarantee.subtitle":
        "Jika Bijou tidak memberikan hasil dalam 30 hari, kami pulangkan 100% — tanpa soal",

      // KUNCI LAMA — untuk rujukan rollback, tidak dipaparkan lagi
      "pricing.starter.name": "Permulaan",
      "pricing.starter.price": "159",
      "pricing.starter.originalPrice": "499",
      "pricing.starter.discount": "68% DISKAUN",
      "pricing.starter.description": "Sesuai untuk ejen solo dan pasukan kecil",
      "pricing.starter.badge": "100 PERTAMA SAHAJA",
      "pricing.starter.limitedText":
        "⚡ Terhad kepada 100 pelanggan pertama sahaja",
      "pricing.starter.features.0": "Ejen AI WhatsApp 24/7",
      "pricing.starter.features.1": "Sehingga 500 perbualan/bulan",
      "pricing.starter.features.2": "Kelayakan petunjuk asas",
      "pricing.starter.features.3": "Automasi brosur hartanah",
      "pricing.starter.features.4": "Analitik standard",
      "pricing.starter.features.5": "Sokongan e-mel",
      "pricing.professional.name": "Profesional",
      "pricing.professional.price": "299",
      "pricing.professional.originalPrice": "799",
      "pricing.professional.discount": "63% DISKAUN",
      "pricing.professional.savings": "Jimat RM500/bulan!",
      "pricing.professional.description":
        "Untuk agensi & klinik yang berkembang",
      "pricing.professional.badge": "PALING POPULAR",
      "pricing.professional.features.0": "Semua dalam Permulaan, tambah:",
      "pricing.professional.features.1": "Perbualan tanpa had",
      "pricing.professional.features.2": "Penyesuaian playbook lanjutan",
      "pricing.professional.features.3":
        "Sokongan berbilang bahasa (Manglish, BM, English)",
      "pricing.professional.features.4": "Integrasi CRM (akan datang)",
      "pricing.professional.features.5": "Sokongan WhatsApp keutamaan",
      "pricing.professional.features.6": "Pilihan penjenamaan tersuai",
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

      // Case Studies Section
      "cases.title": "Hasil Sebenar",
      "cases.subtitle":
        "Lihat bagaimana perniagaan mengautomasi pertumbuhan dengan Bijou.",

      // Real Estate Case Study
      "cases.realEstate.company": "KL Metro Properties",
      "cases.realEstate.industry": "Agensi Hartanah",
      "cases.realEstate.stat1.value": "0%",
      "cases.realEstate.stat1.label": "Panggilan Terlepas",
      "cases.realEstate.stat2.value": "+40%",
      "cases.realEstate.stat2.label": "Petunjuk Layak",
      "cases.realEstate.quote":
        "Sebelum Bijou, kami kehilangan petunjuk setiap kali di viewing. Sekarang, Bijou jawab serta-merta, hantar brosur, dan book viewing seterusnya. Macam ada super-ejen.",
      "cases.realEstate.cta": "Baca Kajian Kes Penuh",

      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "Pakar Pergigian",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "Kadar Tak Hadir",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "Ketersediaan Tempahan",
      "cases.healthcare.quote":
        "Jururawat kami dulu habis jam panggil pesakit untuk confirm slot. Bijou buat automatik di WhatsApp. Pesakit suka, dan kerusi kami sentiasa penuh.",
      "cases.healthcare.cta": "Baca Kajian Kes Penuh",

      // Contact Forms
      "contact.enterprise.title": "Pertanyaan Perusahaan",
      "contact.enterprise.subtitle":
        "Mari berbincang bagaimana Bijou AI boleh transformasi perniagaan anda",
      "contact.partnership.title": "Peluang Kerjasama",
      "contact.partnership.subtitle":
        "Bekerjasama dengan kami untuk bawa AI ke lebih banyak perniagaan",
      "contact.integration.title": "Permintaan Integrasi",
      "contact.integration.subtitle":
        "Beritahu kami integrasi apa yang anda perlukan",

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
      "footer.tagline":
        "Pekerja Digital yang faham pelanggan tempatan anda. Tiada aplikasi, tiada leceh, hanya hasil.",
      "footer.madeBy": "Dibuat dengan 🤍 oleh",
      "footer.rights": "Hak cipta terpelihara.",
    },
  },
  zh: {
    translation: {
      // Navbar
      "nav.features": "功能",
      "nav.pricing": "价格",
      "nav.enterprise": "企业版",
      "nav.getStarted": "开始使用",

      // Hero Section
      "hero.badge": "🚀 RM0起步 — 无需信用卡，无需WABA",
      "hero.title.part1": "您的WhatsApp",
      "hero.title.savingsAmount": "晚上10点就下线。",
      "hero.title.part2": "竞争对手的",
      "hero.title.priceAmount": "不会。",
      "hero.subtitle.part1":
        "Bijou是针对WhatsApp和Telegram的马来西AI。用Manglish即时回复，预约Cal.com资讯，自动筛选潜在客户 —",
      "hero.subtitle.roi": "当您熟睡时。",
      "hero.subtitle.part2": "",
      "hero.cta.trial": "免费开始 — RM0",
      "hero.cta.demo": "预约演示",
      "hero.trustFooter": "✅ 30天退款保证 · ✅ 无需WABA · ✅ 随时取消",
      "hero.trustedBy": "信任与支持方",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "符合PDPA规范",
      "hero.chatDemo.assistant": "Bijou助手",
      "hero.chatDemo.status": "活跃 • 02:45 AM",
      "hero.chatDemo.msg1":
        "老板，可以check property viewing吗？2am了但我很excited。",
      "hero.chatDemo.msg2":
        "没问题老板！我还醒着。你要找哪个区？KLCC还是Mont Kiara？🏙️",
      "hero.chatDemo.msg3": "MK。有balcony的。",
      "hero.chatDemo.msg4":
        "有！Residensi 22，高楼层。我现在发给你视频手册。📹",
      "hero.roiCard.title": "每月节省",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison": "相比初级客服专员",
      "hero.roiCard.roi": "335% 投资回报率",

      // 定价部分 — 单一PRO套餐（RM 249/月，2026年3月更新）
      "pricing.badge": "💎 诚实透明定价",
      "pricing.title": "一个套餐。所有已上线功能。",
      "pricing.subtitle.part1": "享有",
      "pricing.subtitle.trial": "30天退款保证",
      "pricing.subtitle.part2": "。无合同。随时取消。",

      // PRO套餐 — 单一定价
      "pricing.pro.name": "PRO",
      "pricing.pro.price": "299",
      "pricing.pro.yearlyPrice": "2,990",
      "pricing.pro.yearlySaving": "节省RM598 — 免费使用2个月",
      "pricing.pro.description": "您需要的一切，永不错过任何线索",
      "pricing.pro.badge": "唯一方案",
      "pricing.pro.features.0": "WhatsApp AI代理 — 无需WABA，无Meta费用",
      "pricing.pro.features.1": "Telegram AI代理 — 相同大脑，相同马来式英语",
      "pricing.pro.features.2": "每月3,000次对话（约100次/天）",
      "pricing.pro.features.3": "完整TRACE AI — 4智能体共情管道",
      "pricing.pro.features.4": "Manglish + 英语/马来语/普通话/泰米尔语",
      "pricing.pro.features.5": "Cal.com预约 — 创建、查询、取消预约",
      "pricing.pro.features.6": "自动向客户发送预约确认邮件",
      "pricing.pro.features.7": "线索资格认定 — 自动热/温/冷检测",
      "pricing.pro.features.8": "升级警报 — AI无法处理时邮件给您",
      "pricing.pro.features.9": "知识库 — 50个FAQ / 最多2份文件",
      "pricing.pro.betaFeature": "",
      "pricing.pro.earlyAccessNote":
        "Pro客户可在新功能上线时免费获得早期访问权限 — 多用户席位、额外渠道等。",

      // 插件路线图
      "pricing.addons.title": "2026年Q2–Q4即将推出（付费插件）",
      "pricing.addons.subtitle":
        "每项新功能 = 一次收入机会。Pro客户优先免费体验。",

      "pricing.cta.trial": "开始30天试用",
      "pricing.cta.contact": "联系销售",
      "pricing.cta.enterprise": "联系我们 →",
      "pricing.cta.enterprisePrompt": "需要多用户、多号码或自定义方案？",

      "pricing.guarantee.title": "30天退款保证",
      "pricing.guarantee.subtitle":
        "如果Bijou在30天内未能达到预期，100%退款，无需解释",

      // 旧版密钥 — 保留供回滚参考，不再渲染
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
      "pricing.professional.name": "专业版",
      "pricing.professional.price": "299",
      "pricing.professional.originalPrice": "799",
      "pricing.professional.discount": "63% 折扣",
      "pricing.professional.savings": "每月节省RM500!",
      "pricing.professional.description": "适合成长中的代理机构和诊所",
      "pricing.professional.badge": "最受欢迎",
      "pricing.professional.features.0": "入门版所有功能，另加：",
      "pricing.professional.features.1": "无限对话",
      "pricing.professional.features.2": "高级playbook定制",
      "pricing.professional.features.3":
        "多语言支持（马来式英语、马来语、英语）",
      "pricing.professional.features.4": "CRM集成（即将推出）",
      "pricing.professional.features.5": "优先WhatsApp支持",
      "pricing.professional.features.6": "自定义品牌选项",
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
      "cases.realEstate.quote":
        "在使用Bijou之前，每次看房时我们都会失去潜在客户。现在，Bijou立即回复、发送手册并预约下次看房。就像有一个超级代理。",
      "cases.realEstate.cta": "阅读完整案例研究",

      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "牙科专家",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "爽约率",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "预约可用性",
      "cases.healthcare.quote":
        "我们的护士过去要花数小时打电话确认时段。Bijou在WhatsApp上自动完成。患者喜欢，我们的座位总是满的。",
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
      "footer.tagline":
        "懂您本地客户的数字员工。无需应用程序，无需麻烦，只有成果。",
      "footer.madeBy": "由 🤍 制作",
      "footer.rights": "版权所有。",
    },
  },
  ta: {
    translation: {
      // Navbar
      "nav.features": "அம்சங்கள்",
      "nav.pricing": "விலை",
      "nav.enterprise": "நிறுவனம்",
      "nav.getStarted": "தொடங்குங்கள்",

      // Hero Section
      "hero.badge":
        "🚀 RM0-இல் தொடங்கவும் — கிரெடிட் கார்டு தேவையில்லை, WABA தேவையில்லை",
      "hero.title.part1": "உங்கள் WhatsApp",
      "hero.title.savingsAmount": "இரவு 10 மணிக்கு offline.",
      "hero.title.part2": "உங்கள் போட்டி வியாபாரிதர்களுக்கு",
      "hero.title.priceAmount": "இல்லை.",
      "hero.subtitle.part1":
        "Bijou மலேசிய WhatsApp & Telegram-க்கான AI. Manglish-இல் தக்ஷணமாக பதில், Cal.com சந்திப்புகளை பதிவு செய்கிறது, leads தானாக தெரிவு செய்கிறது —",
      "hero.subtitle.roi": "நீங்கள் தூங்கும்போது.",
      "hero.subtitle.part2": "",
      "hero.cta.trial": "இலவசமாக தொடங்குங்கள் — RM0",
      "hero.cta.demo": "டெமோ பதிவு செய்யவும்",
      "hero.trustFooter":
        "✅ 30 நாள் பண திரும்பி உத்தரவாதம் · ✅ WABA தேவையில்லை · ✅ எப்போதும் ரத்து செய்யலாம்",
      "hero.trustedBy": "நம்பிக்கை & ஆதரவு",
      "hero.trust.mdec": "MDEC",
      "hero.trust.cradle": "Cradle",
      "hero.trust.pdpa": "PDPA இணங்குதல்",
      "hero.chatDemo.assistant": "Bijou உதவியாளர்",
      "hero.chatDemo.status": "செயலில் • 02:45 AM",
      "hero.chatDemo.msg1":
        "Boss, property viewing check பண்ண முடியுமா? 2am ஆகிவிட்டது ஆனால் excited ஆக இருக்கிறேன்.",
      "hero.chatDemo.msg2":
        "பிரச்சனை இல்லை boss! நான் இன்னும் விழித்திருக்கிறேன். எந்த பகுதியை தேடுகிறீர்கள்? KLCC அல்லது Mont Kiara? 🏙️",
      "hero.chatDemo.msg3": "MK. Balcony உள்ளது.",
      "hero.chatDemo.msg4":
        "உள்ளது! Residensi 22, உயர் தளம். இப்போது வீடியோ brochure அனுப்புகிறேன். 📹",
      "hero.roiCard.title": "மாதாந்திர சேமிப்பு",
      "hero.roiCard.amount": "RM9,201",
      "hero.roiCard.comparison":
        "ஜூனியர் வாடிக்கையாளர் சேவை அதிகாரியுடன் ஒப்பிடும்போது",
      "hero.roiCard.roi": "335% ROI",

      // விலை பிரிவு — ஒற்றை PRO திட்டம் (RM 249/மாதம், மார்ச் 2026 புதுப்பிக்கப்பட்டது)
      "pricing.badge": "💎 நேர்மையான, எளிய விலை",
      "pricing.title": "ஒரே ஒரு திட்டம். இப்போது உள்ள அனைத்தும்.",
      "pricing.subtitle.part1": "உத்தரவாதம்:",
      "pricing.subtitle.trial": "30 நாள் பணத்திரும்ப உத்தரவாதம்",
      "pricing.subtitle.part2":
        ". ஒப்பந்தம் இல்லை. எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்.",

      // PRO திட்டம் — ஒற்றை நிலை
      "pricing.pro.name": "PRO",
      "pricing.pro.price": "299",
      "pricing.pro.yearlyPrice": "2,990",
      "pricing.pro.yearlySaving": "RM598 சேமிக்கவும் — 2 மாதங்கள் இலவசம்",
      "pricing.pro.description":
        "எந்த வாய்ப்பும் தவற விடாமல் இருக்க தேவையான அனைத்தும்",
      "pricing.pro.badge": "ஒரே ஒரு திட்டம்",
      "pricing.pro.features.0":
        "WhatsApp AI — WABA இல்லாமல், Meta கட்டணம் இல்லாமல்",
      "pricing.pro.features.1": "Telegram AI — ஒரே மூளை, ஒரே Manglish",
      "pricing.pro.features.2": "மாதத்திற்கு 3,000 உரையாடல்கள் (~100/நாள்)",
      "pricing.pro.features.3": "முழு TRACE AI — 4-முகவர் பச்சாதாப குழாய்",
      "pricing.pro.features.4": "Manglish + EN / BM / மண்டரின் / தமிழ்",
      "pricing.pro.features.5":
        "Cal.com தேர்வு — பதிவு, சரிபார்க்கல், ரத்து செய்யலாம்",
      "pricing.pro.features.6":
        "பதிவு உறுதிப்படுத்தல் மின்னஞ்சல் தானாக அனுப்பப்படும்",
      "pricing.pro.features.7":
        "லீட் தகுதி — Hot / Warm / Cold தானியக்க கண்டறிதல்",
      "pricing.pro.features.8":
        "எஸ்கலேஷன் எமைல் — AI தடுமாறும்போது மின்னஞ்சல் வரும்",
      "pricing.pro.features.9": "அறிவுத் தளம் — 50 FAQ / மேல் 2 ஆவணங்கள்",
      "pricing.pro.betaFeature": "",
      "pricing.pro.earlyAccessNote":
        "Pro வாடிக்கையாளர்கள் புதிய அம்சங்கள் வெளியிடப்படும்போது இலவச ஆரம்ப அணுகல் பெறுவார்கள்.",

      // சேர்க்கை வரைபடம்
      "pricing.addons.title": "Q2–Q4 2026-இல் வரவிருக்கும் (கட்டண சேர்க்கைகள்)",
      "pricing.addons.subtitle":
        "ஒவ்வொரு புதிய அம்சமும் = வருவாய் நிகழ்வு. Pro வாடிக்கையாளர்கள் முதலில் இலவசமாக பெறுவார்கள்.",

      "pricing.cta.trial": "30 நாள் சோதனை தொடங்கவும்",
      "pricing.cta.contact": "விற்பனையைத் தொடர்பு கொள்ளவும்",
      "pricing.cta.enterprise": "எங்களை தொடர்பு கொள்ளுங்கள் →",
      "pricing.cta.enterprisePrompt":
        "பல பயனர்கள், பல எண்கள், அல்லது தனிப்பயன் அமைப்பு தேவையா?",

      "pricing.guarantee.title": "30 நாள் பணத்திரும்ப உத்தரவாதம்",
      "pricing.guarantee.subtitle":
        "30 நாட்களில் Bijou பலன் தரவில்லை என்றால், கேள்வியின்றி 100% திரும்பப் பெறுவோம்",

      // பழைய விசைகள் — rollback குறிப்புக்காக வைக்கப்பட்டுள்ளன, இனி பயன்படுத்தப்படவில்லை
      "pricing.starter.name": "தொடக்கம்",
      "pricing.starter.price": "159",
      "pricing.starter.originalPrice": "499",
      "pricing.starter.discount": "68% தள்ளுபடி",
      "pricing.starter.description":
        "தனி முகவர்கள் மற்றும் சிறு குழுக்களுக்கு ஏற்றது",
      "pricing.starter.badge": "முதல் 100 மட்டும்",
      "pricing.starter.limitedText":
        "⚡ முதல் 100 வாடிக்கையாளர்களுக்கு மட்டும்",
      "pricing.starter.features.0": "24/7 WhatsApp AI முகவர்",
      "pricing.starter.features.1": "மாதத்திற்கு 500 உரையாடல்கள் வரை",
      "pricing.starter.features.2": "அடிப்படை லீட் தகுதிப்பெறுதல்",
      "pricing.starter.features.3": "சொத்து தகவல் புத்தக தானியங்கு",
      "pricing.starter.features.4": "நிலையான பகுப்பாய்வு",
      "pricing.starter.features.5": "மின்னஞ்சல் ஆதரவு",
      "pricing.professional.name": "தொழில்முறை",
      "pricing.professional.price": "299",
      "pricing.professional.originalPrice": "799",
      "pricing.professional.discount": "63% தள்ளுபடி",
      "pricing.professional.savings": "மாதத்திற்கு RM500 சேமிக்கவும்!",
      "pricing.professional.description":
        "வளரும் நிறுவனங்கள் & கிளினிக்குகளுக்கு",
      "pricing.professional.badge": "மிகவும் பிரபலமானது",
      "pricing.professional.features.0":
        "தொடக்கத்தில் உள்ள அனைத்தும், கூடுதலாக:",
      "pricing.professional.features.1": "வரம்பற்ற உரையாடல்கள்",
      "pricing.professional.features.2": "மேம்பட்ட playbook தனிப்பயனாக்கம்",
      "pricing.professional.features.3":
        "பல மொழி ஆதரவு (Manglish, BM, English)",
      "pricing.professional.features.4": "CRM ஒருங்கிணைப்பு (விரைவில் வரும்)",
      "pricing.professional.features.5": "முன்னுரிமை WhatsApp ஆதரவு",
      "pricing.professional.features.6": "தனிப்பயன் பிராண்டிங் விருப்பங்கள்",
      "pricing.enterprise.name": "நிறுவனம்",
      "pricing.enterprise.price": "தனிப்பயன்",
      "pricing.enterprise.description": "பெரிய குழுக்கள் & உரிமையாளர்களுக்கு",
      "pricing.enterprise.badge": "பிரீமியம்",
      "pricing.enterprise.features.0":
        "தொழில்முறையில் உள்ள அனைத்தும், கூடுதலாக:",
      "pricing.enterprise.features.1": "வரம்பற்ற குழு உறுப்பினர்கள்",
      "pricing.enterprise.features.2": "பிரத்யேக கணக்கு மேலாளர்",
      "pricing.enterprise.features.3": "உங்கள் தரவில் தனிப்பயன் AI பயிற்சி",
      "pricing.enterprise.features.4": "வெள்ளை-லேபிள் தீர்வு",
      "pricing.enterprise.features.5": "SLA உத்தரவாதம் (99.9% uptime)",
      "pricing.enterprise.features.6": "24/7 தொலைபேசி + WhatsApp ஆதரவு",

      // Case Studies Section
      "cases.title": "உண்மையான முடிவுகள்",
      "cases.subtitle":
        "Bijou உடன் வணிகங்கள் வளர்ச்சியை எவ்வாறு தானியங்குபடுத்துகின்றன என்பதைப் பாருங்கள்.",

      // Real Estate Case Study
      "cases.realEstate.company": "KL Metro Properties",
      "cases.realEstate.industry": "ரியல் எஸ்டேட் ஏஜென்சி",
      "cases.realEstate.stat1.value": "0%",
      "cases.realEstate.stat1.label": "தவறிய அழைப்புகள்",
      "cases.realEstate.stat2.value": "+40%",
      "cases.realEstate.stat2.label": "தகுதிபெற்ற லீட்ஸ்",
      "cases.realEstate.quote":
        "Bijou க்கு முன், நாங்கள் பார்வையில் இருக்கும் போதெல்லாம் லீட்ஸை இழந்தோம். இப்போது, Bijou உடனடியாக பதிலளிக்கிறது, தகவல் புத்தகத்தை அனுப்புகிறது, அடுத்த பார்வையை பதிவு செய்கிறது. சூப்பர் ஏஜென்ட் இருப்பது போல்.",
      "cases.realEstate.cta": "முழு வழக்கு ஆய்வைப் படிக்கவும்",

      // Healthcare Case Study
      "cases.healthcare.company": "SmileCraft Dental",
      "cases.healthcare.industry": "பல் மருத்துவ நிபுணர்",
      "cases.healthcare.stat1.value": "-75%",
      "cases.healthcare.stat1.label": "வராத விகிதம்",
      "cases.healthcare.stat2.value": "24/7",
      "cases.healthcare.stat2.label": "பதிவு கிடைக்கும் தன்மை",
      "cases.healthcare.quote":
        "எங்கள் செவிலியர்கள் முன்பு நோயாளிகளை அழைத்து ஸ்லாட்களை உறுதிப்படுத்த மணிநேரங்களை செலவிட்டனர். Bijou WhatsApp இல் தானாகவே செய்கிறது. நோயாளிகள் விரும்புகிறார்கள், மற்றும் எங்கள் நாற்காலிகள் எப்போதும் நிரம்பியுள்ளன.",
      "cases.healthcare.cta": "முழு வழக்கு ஆய்வைப் படிக்கவும்",

      // Contact Forms
      "contact.enterprise.title": "நிறுவன விசாரணைகள்",
      "contact.enterprise.subtitle":
        "Bijou AI உங்கள் வணிகத்தை எவ்வாறு மாற்றும் என்பதை விவாதிப்போம்",
      "contact.partnership.title": "கூட்டாண்மை வாய்ப்புகள்",
      "contact.partnership.subtitle":
        "அதிக வணிகங்களுக்கு AI ஐக் கொண்டு வர எங்களுடன் ஒத்துழைக்கவும்",
      "contact.integration.title": "ஒருங்கிணைப்பு கோரிக்கைகள்",
      "contact.integration.subtitle":
        "உங்களுக்கு என்ன ஒருங்கிணைப்புகள் தேவை என்று சொல்லுங்கள்",

      "form.name": "முழு பெயர்",
      "form.email": "மின்னஞ்சல் முகவரி",
      "form.company": "நிறுவனத்தின் பெயர்",
      "form.phone": "தொலைபேசி எண்",
      "form.message": "செய்தி",
      "form.submit": "சமர்ப்பிக்கவும்",
      "form.sending": "அனுப்புகிறது...",
      "form.success": "நன்றி! நாங்கள் 24 மணி நேரத்திற்குள் தொடர்பு கொள்வோம்.",
      "form.error":
        "ஏதோ தவறு நடந்தது. தயவுசெய்து எங்களுக்கு நேரடியாக மின்னஞ்சல் அனுப்பவும்",

      // Footer
      "footer.product": "தயாரிப்பு",
      "footer.company": "நிறுவனம்",
      "footer.contact": "எங்களை தொடர்பு கொள்ளுங்கள்",
      "footer.tagline":
        "உங்கள் உள்ளூர் வாடிக்கையாளர்களைப் புரிந்து கொள்ளும் டிஜிட்டல் ஊழியர். பயன்பாடுகள் இல்லை, சிரமம் இல்லை, முடிவுகள் மட்டுமே.",
      "footer.madeBy": "🤍 உடன் தயாரிக்கப்பட்டது",
      "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Fallback to English if language not found
    supportedLngs: ["en", "ms", "zh", "ta"],
    detection: {
      order: ["localStorage", "navigator"], // Check localStorage first, then browser language
      caches: ["localStorage"], // Save language preference
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
