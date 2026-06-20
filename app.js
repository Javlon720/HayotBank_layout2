/* -------------------------------------------------------------
 * Hayot Bank - Client Side Interactions & Calculations (app.js)
 * ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', async () => {
  
  // Fallback Translation Dictionary (loaded if offline/file:// CORS restrictions prevent fetching json files)
  const fallbackTranslations = {
    "uz": {
      "nav_home": "Asosiy",
      "nav_cards": "Kartalar",
      "nav_calc": "Kalkulyator",
      "nav_services": "Xizmatlar",
      "nav_rates": "Valyuta",
      "nav_faq": "Savollar",
      "omonat_ochish": "Karta buyurtma qilish",
      "kirish": "Kirish",
      "top_header_support": "Prestige Line: 1244",
      "top_header_license": "Markaziy Bank litsenziyasi № 254",
      "search_placeholder": "Qidiruv...",
      "hero_badge": "Hayot Bank • Halol va Aqlli Xususiy Bankchilik",
      "hero_title": "Mablag'laringiz uchun <br><span class=\"text-gradient\">zumraddek sof</span> va halol o'sish",
      "hero_description": "Boyligingizni Shariat tamoyillariga to'liq mos ravishda, yashirin komissiyalarsiz va oliy darajadagi shaffoflik bilan boshqaring. Biz an'analar va zamonaviy taraqqiyotning mukammal uyg'unligimiz.",
      "hero_title_2": "Oilangiz kelajagi va <br><span class=\"text-gradient\">halol sarmoya</span>",
      "hero_description_2": "Farzandlaringiz kelajagi va oilaviy jamg'armalaringizni foizsiz, Shariat qoidalariga to'liq mos ravishda ishonchli loyihalarga yo'naltiring. Kelajakni birgalikda quramiz.",
      "hero_btn_start": "Sarmoyani boshlash",
      "hero_btn_more": "Kengash fatvosi",
      "hero_stat_commission": "Sudxo'rlik (Ribo) foizlari",
      "sharia_badge": "Mustaqil Shariat Kengashi",
      "sharia_title": "Prestige Shariah Council",
      "footer_about": "Hayot Bank — Shariat Advisory Board nazorati ostida ishlaydigan premium raqamli islom banki. Litsenziya № 254.",
      "footer_heading_services": "Xizmatlar",
      "footer_heading_docs": "Hujjatlar",
      "footer_heading_subscribe": "Obuna bo'ling",
      "footer_link_microloans": "Murabaha Avto",
      "footer_link_deposits": "Mudaraba Jamg'armasi",
      "footer_link_cashback": "Prestige Halol Karta",
      "footer_link_exchange": "Valyuta konvertatsiyasi",
      "footer_link_licenses": "Shariat Fatvolari",
      "footer_link_rates": "Tariflar va komissiyalar",
      "footer_link_privacy": "Maxfiylik siyosati",
      "footer_link_terms": "Ommaviy oferta",
      "footer_subscribe_desc": "Islomiy moliya dunyosi va xususiy bank investitsiya hisobotlaridan xabardor bo'ling",
      "footer_subscribe_placeholder": "Elektron manzilingiz",
      "footer_subscribe_btn": "Yuborish",
      "footer_copyright": "&copy; 2026 Hayot Bank. Barcha huquqlar himoyalangan.",
      "footer_creator": "Sayt dizayni: Abdullaev Javlonbek",
      "services_badge": "Xizmatlarimiz",
      "services_title": "Halol Moliyaviy Yechimlar",
      "services_subtitle": "Biznesingiz taraqqiyoti va shaxsiy jamg'armalaringiz xavfsizligi uchun Shariat kengashi ma'qullagan premium bank xizmatlari",
      "fin_badge": "Onlayn Rasmiylashtirish",
      "fin_title": "Kreditni qanday rasmiylashtirish mumkin?",
      "fin_subtitle": "Uydan chiqmasdan, atigi 5 daqiqada Shariat tamoyillariga asoslangan halol moliyalashga (Murabaha) ariza bering",
      "fin_step1_title": "Summa va muddatni tanlang",
      "fin_step1_desc": "Kalkulyatorda o'zingizga kerakli mablag' va to'lov muddatini belgilang.",
      "fin_step2_title": "Shaxsingizni tasdiqlang",
      "fin_step2_desc": "Pasport yoki ID-karta hamda Face ID orqali tezkor va xavfsiz autentifikatsiyadan o'ting.",
      "fin_step3_title": "Skoring natijasini kuting",
      "fin_step3_desc": "Sun'iy intellektga asoslangan baholash tizimi 5 daqiqada arizangiz bo'yicha qaror qabul qiladi.",
      "fin_step4_title": "Mablag'ni qabul qiling",
      "fin_step4_desc": "Murabaha shartnomasi rasmiylashtirilib, pul o'sha zaxotiyoq kartangizga o'tkaziladi.",
      "mockup_title": "Tezkor Murabaha moliyalash",
      "mockup_badge": "0% Ribo",
      "mockup_amount_label": "Moliyalash summasi",
      "mockup_duration_label": "To'lov muddati",
      "mockup_markup_label": "Ustama foyda (Markup)",
      "mockup_payment_label": "Oylik to'lov",
      "mockup_total_label": "Jami qaytarish summasi",
      "mockup_btn_apply": "Ariza topshirish",
      "card1_title": "Biznesni moliyalash",
      "card1_subtitle": "Aylanma mablag'lar uchun",
      "card2_title": "Korporativ kartalar",
      "card2_subtitle": "Uzcard va Humo biznes uchun",
      "card3_title": "Islomiy lizing",
      "card3_subtitle": "Avtotransport va maxsus texnikalar",
      "card4_title": "Faktoring xizmati",
      "card4_subtitle": "Debitorlik qarzdorlikni qoplash",
      "card5_title": "Tijorat ipotekasi",
      "card5_subtitle": "Ofis va omborxonalar uchun",
      "card6_title": "Biznes omonatlari",
      "card6_subtitle": "Mudaraba sherikligida halol foyda",
      "card_btn_order": "Buyurtma berish",
      "card_btn_lizing": "Lizing olish",
      "card_btn_invest": "Joylashtirish",
      "card_btn_apply": "Ariza topshirish",
      "card1_detail1": "• Ustama: 10-14% yillik (Murabaha)",
      "card1_detail2": "• Muddat: 6 oydan 36 oygacha",
      "card1_detail3": "• Garov: Ko'chmas mulk yoki kafillik",
      "card1_detail4": "• Hujjatlar: Biznes reja va moliyaviy hisobotlar",
      "card2_detail1": "• Karta turi: Uzcard / Humo Business",
      "card2_detail2": "• Ochish: Bepul va tezkor",
      "card2_detail3": "• SMS-habar: Bepul ulanadi",
      "card2_detail4": "• Komissiya: To'lovlar uchun 0%",
      "card3_detail1": "• Shartnoma: Ijara Muntahiya Bittamlik",
      "card3_detail2": "• Boshlang'ich to'lov: 20% dan boshlab",
      "card3_detail3": "• Muddat: 1 yildan 5 yilgacha",
      "card3_detail4": "• Sug'urta: Takaful tizimi orqali",
      "card4_detail1": "• Moliyalash: Summaning 90% gacha",
      "card4_detail2": "• Rasmiylashtirish: 1 ish kunida",
      "card4_detail3": "• Garovsiz va kafillarsiz",
      "card4_detail4": "• Doimiy to'lovlar oqimi ta'minoti",
      "card5_detail1": "• Maqsad: Ofis va ombor sotib olish",
      "card5_detail2": "• Boshlang'ich to'lov: 25% dan boshlab",
      "card5_detail3": "• Muddat: 10 yilgacha (Murabaha)",
      "card5_detail4": "• Rasmiylashtirish: Qonuniy va halol",
      "card6_detail1": "• Shartnoma turi: Mudaraba shartnomasi",
      "card6_detail2": "• Taqsimot: 70% Investor / 30% Bank",
      "card6_detail3": "• Minimal summa: 10,000,000 UZS",
      "card6_detail4": "• Muddat: 3 oydan 24 oygacha",
      "tab_finance": "Moliyalash",
      "tab_deposit": "Jamg'arma",
      "mockup_title_deposit": "Halol Mudaraba jamg'armasi",
      "mockup_badge_deposit": "Sheriklik",
      "mockup_amount_label_deposit": "Sarmoya summasi",
      "mockup_duration_label_deposit": "Jamg'arish muddati",
      "mockup_markup_label_deposit": "Foyda taqsimoti (Investor/Bank)",
      "mockup_payment_label_deposit": "Kutilayotgan sof foyda",
      "mockup_total_label_deposit": "Jami kutilayotgan summa",
      "mockup_btn_apply_deposit": "Jamg'arishni boshlash",
      "cards_badge": "Eksklyuziv taklif",
      "cards_title": "Hayot Bank Premium Kartalari",
      "cards_subtitle": "Shariat talablariga to'liq javob beruvchi va sizga yuqori darajadagi qulayliklarni taqdim etuvchi halol premium kartalar",
      "card_humo_title": "Hayot Humo Prestige",
      "card_humo_desc": "O'zbekiston ichida barcha turdagi xaridlar uchun qulay va foydali to'lov vositasi.",
      "card_humo_feat1": "100% Halol (Ribo foizlarisiz)",
      "card_humo_feat2": "Hamkorlar tarmog'ida 5% gacha keshbek",
      "card_humo_feat3": "Bepul yetkazib berish (24 soat ichida)",
      "card_visa_title": "Hayot Visa Infinite",
      "card_visa_desc": "Butun dunyo bo'ylab sayohatlar va nufuzli xaridlar uchun eksklyuziv islomiy karta.",
      "card_visa_feat1": "Lounge Key (Aeroportlarda VIP zallar)",
      "card_visa_feat2": "Dunyo bo'ylab 0% yashirin komissiyalar",
      "card_visa_feat3": "Shaxsiy Premium Konsyerj xizmati 24/7",
      "card_virt_title": "Hayot Instant Virtual",
      "card_virt_desc": "Internet saytlarida xavfsiz xaridlar qilish uchun ilova ichida bir zumda ochiladigan karta.",
      "card_virt_feat1": "Atigi 10 soniyada ilovada ochiladi",
      "card_virt_feat2": "Mutlaqo bepul xizmat ko'rsatish",
      "card_virt_feat3": "Onlayn to'lovlar uchun 3D-Secure xavfsizlik",
      "card_btn_open_app": "Ilovada ochish",
      "about_badge": "Bank tarixi",
      "about_title": "Rivojlanish yo'limiz",
      "about_subtitle": "«HAYOT BANK» AJ tashkil etilgan kundan boshlab bugungi kungacha bosib o'tgan yutuqlari va muhim voqealari solnomasi",
      "history_2022_0_date": "31-avgust",
      "history_2022_0_desc": "O‘zbekiston Respublikasi Markaziy Bankining dastlabki litsenziyasi olindi",
      "history_2023_0_date": "16-mart",
      "history_2023_0_desc": "O‘zbekiston Respublikasi Markaziy bankidan litsenziya olindi",
      "history_2023_1_date": "1-aprel",
      "history_2023_1_desc": "«HAYOT BANK» AJ «O‘zbekiston Respublikasi Markaziy bankining Axborashlashtirish Bosh Markazi» DUK bilan shartnoma tuzdi.",
      "history_2023_2_date": "6-aprel",
      "history_2023_2_desc": "HUMO to‘lov tizimi bilan integratsiya",
      "history_2023_3_date": "17-aprel",
      "history_2023_3_desc": "UZCARD to‘lov tizimi bilan integratsiya",
      "history_2023_4_date": "1-may",
      "history_2023_4_desc": "«HAYOT BANK» AJ «Anor» 24/7 tezkor to’lovlar tizimini uladi",
      "history_2023_5_date": "1-iyun",
      "history_2023_5_desc": "«HAYOT BANK» AJ korporativ mijozlar uchun «Onlayn banking – ob.hayotbank.uz»ni ishga tushirdi",
      "history_2023_6_date": "2-iyun",
      "history_2023_6_desc": "“Oybek” – bank xizmatlari bo‘yicha birinchi markazimiz ochildi",
      "history_2023_7_date": "3-iyul",
      "history_2023_7_desc": "«HAYOT BANK» AJ O‘zbekiston Respublika valyuta birjasiga (O‘zRVB) barcha toifalar – “A”, “B” va “C” bo‘yicha qo‘shildi.",
      "history_2024_0_date": "3-yanvar",
      "history_2024_0_desc": "«HAYOT BANK» AJ korporativ mijozlar uchun «HAYOT BUSINESS» mobil bankingni ishga tushirdi.",
      "history_2024_1_date": "18-yanvar",
      "history_2024_1_desc": "«HAYOT BANK» AJ “O‘zbekiston” mehmonxonasida 24/7 rejimda ishlaydigan ayirboshlash shoxobchasini ishga tushirdi",
      "history_2024_2_date": "1-mart",
      "history_2024_2_desc": "«HAYOT BANK» AJ jismoniy shaxslar uchun «Hayot Bank» mobil ilovasini ishga tushirdi",
      "history_2024_3_date": "3-iyun",
      "history_2024_3_desc": "«HAYOT BANK» AJ NPS va CSI indekslari bo'yicha ko'rsatilayotgan xizmatlar sifati sertifikatini qo’lga kiritdi.",
      "history_2024_4_date": "7-iyun",
      "history_2024_4_desc": "UZCARD-Mastercard bank kartalari ishga tushirildi",
      "history_2024_5_date": "27-avgust",
      "history_2024_5_desc": "«HAYOT BANK» AJ Chirchiq shahrida BXOni ochdi.",
      "history_2024_6_date": "1-noyabr",
      "history_2024_6_desc": "«HAYOT BANK» AJ Samarqand shahrida BXMni ochdi!",
      "history_2024_7_date": "18-dekabr",
      "history_2024_7_desc": "«HAYOT BANK» AJ Qo’qon shahrida BXMni ochdi!",
      "history_2024_8_date": "19-dekabr",
      "history_2024_8_desc": "«HAYOT BANK» AJga milliy shkala bo’yicha “Barqaror” kredit reytingi berildi.",
      "history_2025_0_date": "10-yanvar",
      "history_2025_0_desc": "«HAYOT BANK» AJ Toshkent shahrida «Yashnobod» BXMni ochdi!",
      "conv_badge": "Qulayliklar",
      "conv_title": "Sizning qulayligingiz uchun xizmatlar",
      "conv_subtitle": "Biznesingiz samaradorligini oshirish va kundalik operatsiyalarni osonlashtirish uchun mo'ljallangan zamonaviy raqamli xizmatlar",
      "conv_soon": "Tez orada",
      "conv_sms_title": "SMS-xabarnoma",
      "conv_sms_desc": "Mablag'ingiz harakati haqida tezkor xabarnomalar oling va bank yangiliklaridan xabardor bo'ling",
      "conv_munis_title": "MUNIS to'lovlari",
      "conv_munis_desc": "Davlat va kommunal xizmatlar, jarimalarni to'lovlarni qabul qilish oddiy va ishonchli tizimi yordamida to'lang",
      "conv_ttt_title": "TTT to'lovlari",
      "conv_ttt_desc": "Banklararo to'lovlarni 24/7 vaqt rejimida amalga oshiring",
      "conv_chat_title": "Bank bilan chat",
      "conv_chat_desc": "Har qanday masalalarni bank vakillari bilan qulay yozishmalar orqali tezkor hal qilish",
      "conv_invoice_title": "To'lov talabnomasi",
      "conv_invoice_desc": "To'lovchilarga to'lov talabnomalarini online-banking orqali taqdim etish",
      "conv_kartoteka_title": "Kartoteka №2",
      "conv_kartoteka_desc": "Online-bankda kompaniya qarzdorliklari haqida tezkor xabar yetkazish",
      "conv_report_title": "Onlayn-hisobot",
      "conv_report_desc": "Hisob raqamdan ko'chirmalar, ma'lumotnomalar va hisobotlarni bankka bormasdan olish",
      "conv_finance_info_title": "Moliyalashtirish ma'lumotlari",
      "conv_finance_info_desc": "Qarzdorlik qoldig'i, keyingi to'lovlar va boshqa ma'lumotlarga onlayn ega bo'lish",
      "conv_consultant_title": "Onlayn-konsultant",
      "conv_consultant_desc": "Bank saytidan chiqmasdan turib har qanday savollarga to'liq javob olish",
      "conv_guide_title": "Mahsulotlar bo'yicha gid",
      "conv_guide_desc": "Bank barcha mahsulotlari va xizmatlari bo'yicha batafsil materiallar bir joyda",
      "conv_onec_title": "\"1C\" integratsiya",
      "conv_onec_desc": "Bank operatsiyalarini to'g'ridan-to'g'ri \"1C\" tizimlari orqali amalga oshiring"
    },
    "ru": {
      "nav_home": "Главная",
      "nav_cards": "Карты",
      "nav_calc": "Калькулятор",
      "nav_services": "Услуги",
      "nav_rates": "Валюты",
      "nav_faq": "Вопросы",
      "omonat_ochish": "Заказать карту",
      "kirish": "Войти",
      "top_header_support": "Prestige Line: 1244",
      "top_header_license": "Лицензия Центрального Банка № 254",
      "search_placeholder": "Поиск...",
      "hero_badge": "Hayot Bank • Халяльный и Умный Частный Банкинг",
      "hero_title": "Кристально чистый и <br><span class=\"text-gradient\">халяльный рост</span> активов",
      "hero_description": "Управляйте своим благосостоянием в полном соответствии с принципами Шариата, без скрытых комиссий и с безупречной прозрачностью. Мы — идеальный баланс традиций и современного прогресса.",
      "hero_title_2": "Будущее вашей семьи и <br><span class=\"text-gradient\">халяльные инвестиции</span>",
      "hero_description_2": "Направляйте семейные сбережения и будущее детей в надежные проекты без процентов, в строгом соответствии с Шариатом. Строим будущее вместе.",
      "hero_btn_start": "Начать инвестиции",
      "hero_btn_more": "Фетва совета",
      "hero_stat_commission": "Проценты ростовщичества (Риба)",
      "sharia_badge": "Независимый Шариатский совет",
      "sharia_title": "Prestige Shariah Council",
      "footer_about": "Hayot Bank — премиальный цифровой исламский банк под надзором Шариатского консультативного совета. Лицензия ЦБ № 254.",
      "footer_heading_services": "Услуги",
      "footer_heading_docs": "Документы",
      "footer_heading_subscribe": "Подпишитесь",
      "footer_link_microloans": "Мурабаха Авто",
      "footer_link_deposits": "Инвестиции Мудараба",
      "footer_link_cashback": "Халяльная Prestige Карта",
      "footer_link_exchange": "Конвертация валют",
      "footer_link_licenses": "Шариатские Фетвы",
      "footer_link_rates": "Тарифы и сборы",
      "footer_link_privacy": "Политика конфиденциальности",
      "footer_link_terms": "Публичная оферта",
      "footer_subscribe_desc": "Будьте в курсе новостей исламских финансов и эксклюзивных отчетов об инвестициях",
      "footer_subscribe_placeholder": "Электронная почта",
      "footer_subscribe_btn": "Отправить",
      "footer_copyright": "&copy; 2026 Hayot Bank. Все права защищены.",
      "footer_creator": "Дизайн сайта: Абдуллаев Жавлонбек",
      "services_badge": "Наши услуги",
      "services_title": "Халяльные финансовые решения",
      "services_subtitle": "Премиальные банковские услуги, одобренные Шариатским советом, для развития вашего бизнеса и сохранности личных сбережений",
      "fin_badge": "Онлайн Оформление",
      "fin_title": "Как оформить финансирование?",
      "fin_subtitle": "Подайте заявку на халяльное финансирование по принципам Шариата всего за 5 минут, не выходя из дома",
      "fin_step1_title": "Выберите сумму и срок",
      "fin_step1_desc": "Укажите необходимую сумму и срок оплаты на интерактивном калькуляторе.",
      "fin_step2_title": "Подтвердите личность",
      "fin_step2_desc": "Пройдите быструю и безопасную идентификацию по паспорту/ID-карте и Face ID.",
      "fin_step3_title": "Ожидайте решение скоринга",
      "fin_step3_desc": "Автоматизированная система оценки примет решение по вашей заявке в течение 5 минут.",
      "fin_step4_title": "Получите средства",
      "fin_step4_desc": "Договор Мурабаха оформляется онлайн, и деньги мгновенно зачисляются на вашу карту.",
      "mockup_title": "Быстрое финансирование Мурабаха",
      "mockup_badge": "0% Риба",
      "mockup_amount_label": "Сумма финансирования",
      "mockup_duration_label": "Срок оплаты",
      "mockup_markup_label": "Наценка банка (Markup)",
      "mockup_payment_label": "Ежемесячный платеж",
      "mockup_total_label": "Общая сумма к возврату",
      "mockup_btn_apply": "Подать заявку",
      "card1_title": "Финансирование бизнеса",
      "card1_subtitle": "Для оборотных средств",
      "card2_title": "Корпоративные карты",
      "card2_subtitle": "Uzcard и Humo для бизнеса",
      "card3_title": "Исламский лизинг",
      "card3_subtitle": "Автотранспорт и спецтехника",
      "card4_title": "Услуга факторинга",
      "card4_subtitle": "Покрытие дебиторской задолженности",
      "card5_title": "Коммерческая ипотека",
      "card5_subtitle": "Для офисов и складов",
      "card6_title": "Бизнес вклады",
      "card6_subtitle": "Халяльный доход в Мудараба",
      "card_btn_order": "Заказать",
      "card_btn_lizing": "Оформить лизинг",
      "card_btn_invest": "Разместить",
      "card_btn_apply": "Подать заявку",
      "card1_detail1": "• Наценка: 10-14% годовых (Мурабаха)",
      "card1_detail2": "• Срок: от 6 до 36 месяцев",
      "card1_detail3": "• Залог: Недвижимость или поручительство",
      "card1_detail4": "• Документы: Бизнес-план и фин. отчетность",
      "card2_detail1": "• Тип карты: Uzcard / Humo Business",
      "card2_detail2": "• Открытие: Бесплатно и быстро",
      "card2_detail3": "• SMS-информирование: Бесплатно",
      "card2_detail4": "• Комиссия: 0% за платежи",
      "card3_detail1": "• Договор: Иджара Мунтахия Биттамлик",
      "card3_detail2": "• Первоначальный взнос: от 20%",
      "card3_detail3": "• Срок: от 1 до 5 лет",
      "card3_detail4": "• Страхование: Через систему Такафул",
      "card4_detail1": "• Финансирование: до 90% от суммы",
      "card4_detail2": "• Оформление: за 1 рабочий день",
      "card4_detail3": "• Без залога и поручителей",
      "card4_detail4": "• Обеспечение постоянного потока платежей",
      "card5_detail1": "• Цель: Покупка офиса и склада",
      "card5_detail2": "• Первоначальный взнос: от 25%",
      "card5_detail3": "• Срок: до 10 лет (Мурабаха)",
      "card5_detail4": "• Оформление: Законно и халяльно",
      "card6_detail1": "• Тип договора: Договор Мудараба",
      "card6_detail2": "• Распределение: 70% инвестор / 30% банк",
      "card6_detail3": "• Минимальная сумма: 10 000 000 UZS",
      "card6_detail4": "• Срок: от 3 до 24 месяцев",
      "tab_finance": "Финансирование",
      "tab_deposit": "Сбережения",
      "mockup_title_deposit": "Халяльный вклад Мудараба",
      "mockup_badge_deposit": "Партнерство",
      "mockup_amount_label_deposit": "Сумма инвестиций",
      "mockup_duration_label_deposit": "Срок сбережения",
      "mockup_markup_label_deposit": "Распределение прибыли (Инвестор/Банк)",
      "mockup_payment_label_deposit": "Ожидаемая чистая прибыль",
      "mockup_total_label_deposit": "Итоговая ожидаемая сумма",
      "mockup_btn_apply_deposit": "Начать сбережение",
      "cards_badge": "Эксклюзивное предложение",
      "cards_title": "Премиальные карты Hayot Bank",
      "cards_subtitle": "Халяльные премиум-карты, полностью соответствующие требованиям Шариата и обеспечивающие высочайший уровень удобства",
      "card_humo_title": "Hayot Humo Prestige",
      "card_humo_desc": "Удобный и выгодный платежный инструмент для всех видов покупок внутри Узбекистана.",
      "card_humo_feat1": "100% Халяль (без процентов риба)",
      "card_humo_feat2": "Кэшбэк до 5% в партнерской сети",
      "card_humo_feat3": "Бесплатная доставка (в течение 24 часов)",
      "card_visa_title": "Hayot Visa Infinite",
      "card_visa_desc": "Эксклюзивная исламская карта для путешествий по всему миру и престижных покупок.",
      "card_visa_feat1": "Lounge Key (VIP-залы в аэропортах)",
      "card_visa_feat2": "0% скрытых комиссий по всему миру",
      "card_visa_feat3": "Личный консьерж-сервис класса премиум 24/7",
      "card_virt_title": "Hayot Instant Virtual",
      "card_virt_desc": "Карта, моментально открываемая в приложении для безопасных покупок в интернете.",
      "card_virt_feat1": "Открытие в приложении всего за 10 секунд",
      "card_virt_feat2": "Абсолютно бесплатное обслуживание",
      "card_virt_feat3": "Безопасность 3D-Secure для онлайн-платежей",
      "card_btn_open_app": "Открыть в приложении",
      "about_badge": "История банка",
      "about_title": "Путь развития",
      "about_subtitle": "Хроника достижений и ключевых событий АО «HAYOT BANK» с момента основания до сегодняшнего дня",
      "history_2022_0_date": "31 августа",
      "history_2022_0_desc": "Получение предварительной Лицензии Центрального банка Республики Узбекистан",
      "history_2023_0_date": "16 марта",
      "history_2023_0_desc": "Получение лицензии Центрального банка Республики Узбекистан",
      "history_2023_1_date": "1 апреля",
      "history_2023_1_desc": "АО «HAYOT BANK» заключил договор с ГУП «Главный центр информатизации Центрального банка Республики Узбекистан»",
      "history_2023_2_date": "6 апреля",
      "history_2023_2_desc": "Интеграция с платежной системой HUMO",
      "history_2023_3_date": "17 апреля",
      "history_2023_3_desc": "Интеграция с платежной системой UZCARD",
      "history_2023_4_date": "1 мая",
      "history_2023_4_desc": "АО «HAYOT BANK» подключил систему мгновенных платежей «Анор» 24/7",
      "history_2023_5_date": "1 июня",
      "history_2023_5_desc": "АО «HAYOT BANK» запустил «Онлайн Банкинг – ob.hayotbank.uz» для Корпоративных Клиентов",
      "history_2023_6_date": "2 июня",
      "history_2023_6_desc": "Открытие первого центра банковских услуг – «Ойбек»",
      "history_2023_7_date": "3 июля",
      "history_2023_7_desc": "АО «HAYOT BANK» присоединился к Узбекской Республиканской валютной бирже (УзРВБ) во все категории – «А», «B» и «С»",
      "history_2024_0_date": "3 января",
      "history_2024_0_desc": "АО «HAYOT BANK» запустил Мобильный Банкинг «HAYOT BUSINESS» для Корпоративных Клиентов.",
      "history_2024_1_date": "18 января",
      "history_2024_1_desc": "АО «HAYOT BANK» запустил обменный пункт 24/7 в гостинце Узбекистан",
      "history_2024_2_date": "1 марта",
      "history_2024_2_desc": "АО «HAYOT BANK» запустил Мобильный приложение «Hayot Bank» для физических лиц",
      "history_2024_3_date": "3 июня",
      "history_2024_3_desc": "АО «HAYOT BANK» получил сертификат качества оказываемых услуг по индексам NPS и CSI.",
      "history_2024_4_date": "7 июня",
      "history_2024_4_desc": "Запуск банковских карт UZCARD-Mastercard",
      "history_2024_5_date": "27 августа",
      "history_2024_5_desc": "АО «HAYOT BANK» открыл ОБУ в городе Чирчик",
      "history_2024_6_date": "1 ноября",
      "history_2024_6_desc": "АО «HAYOT BANK» открыл ЦБУ в городе Самарканд",
      "history_2024_7_date": "18 декабря",
      "history_2024_7_desc": "АО «HAYOT BANK» открыл ЦБУ в городе Коканд!",
      "history_2024_8_date": "19 декабря",
      "history_2024_8_desc": "АО «HAYOT BANK» присвоен рейтинг кредитоспособности по национальной шкале «Стабильный»",
      "history_2025_0_date": "10 января",
      "history_2025_0_desc": "АО «HAYOT BANK» открыл ЦБУ «Яшнабад» в городе Ташкент!",
      "conv_badge": "Удобства",
      "conv_title": "Услуги для вашего удобства",
      "conv_subtitle": "Современные цифровые услуги, разработанные для повышения эффективности вашего бизнеса и упрощения повседневных операций",
      "conv_soon": "Скоро",
      "conv_sms_title": "SMS-информирование",
      "conv_sms_desc": "Получайте мгновенные уведомления о движении ваших средств и будьте в курсе банковских новостей",
      "conv_munis_title": "Платежи MUNIS",
      "conv_munis_desc": "Оплачивайте государственные и коммунальные услуги, а также штрафы с помощью простой и надежной системы приема платежей",
      "conv_ttt_title": "Платежи ТТТ",
      "conv_ttt_desc": "Осуществляйте межбанковские переводы в режиме 24/7 в реальном времени",
      "conv_chat_title": "Чат с банком",
      "conv_chat_desc": "Оперативно решайте любые вопросы со специалистами банка через удобный онлайн-чат",
      "conv_invoice_title": "Платежное требование",
      "conv_invoice_desc": "Выставляйте платежные требования плательщикам через систему интернет-банкинга",
      "conv_kartoteka_title": "Картотека №2",
      "conv_kartoteka_desc": "Своевременное оповещение о задолженностях компании в онлайн-банке",
      "conv_report_title": "Онлайн-отчетность",
      "conv_report_desc": "Получайте выписки по счетам, справки и отчеты без необходимости посещения офиса банка",
      "conv_finance_info_title": "Информация о финансировании",
      "conv_finance_info_desc": "Получайте онлайн-доступ к остаткам задолженности, графику будущих платежей и другой информации",
      "conv_consultant_title": "Онлайн-консультант",
      "conv_consultant_desc": "Получайте исчерпывающие ответы на любые вопросы, не покидая сайт банка",
      "conv_guide_title": "Гид по продуктам",
      "conv_guide_desc": "Подробные материалы по всем продуктам и услугам банка собраны в одном месте",
      "conv_onec_title": "Интеграция с «1С»",
      "conv_onec_desc": "Проводите банковские операции непосредственно через ваши системы «1С»"
    },
    "en": {
      "nav_home": "Home",
      "nav_cards": "Cards",
      "nav_calc": "Calculator",
      "nav_services": "Services",
      "nav_rates": "Currencies",
      "nav_faq": "FAQ",
      "omonat_ochish": "Order Card",
      "kirish": "Sign In",
      "top_header_support": "Prestige Line: 1244",
      "top_header_license": "Licensed by the Central Bank of Uzbekistan No. 254",
      "search_placeholder": "Search...",
      "hero_badge": "Hayot Bank • Halal & Smart Private Banking",
      "hero_title": "Purely transparent and <br><span class=\"text-gradient\">halal wealth growth</span>",
      "hero_description": "Manage your assets in absolute compliance with Shariah principles, with no hidden commissions and premium transparency. We are the perfect harmony of traditions and digital progress.",
      "hero_title_2": "Your family's future and <br><span class=\"text-gradient\">halal investments</span>",
      "hero_description_2": "Direct your family savings and your children's future into reliable Shariah-compliant projects without interest. Building the future together.",
      "hero_btn_start": "Start Investing",
      "hero_btn_more": "Board Fatwa",
      "hero_stat_commission": "Usury (Riba) Interest",
      "sharia_badge": "Independent Shariah Board",
      "sharia_title": "Prestige Shariah Board",
      "footer_about": "Hayot Bank — premium digital Islamic bank supervised by the Shariah Advisory Board. Licensed by CBU No. 254.",
      "footer_heading_services": "Services",
      "footer_heading_docs": "Documents",
      "footer_heading_subscribe": "Subscribe",
      "footer_link_microloans": "Murabaha Auto",
      "footer_link_deposits": "Mudarabah Investments",
      "footer_link_cashback": "Halal Prestige Card",
      "footer_link_exchange": "Currency Exchange",
      "footer_link_licenses": "Shariah Fatwas",
      "footer_link_rates": "Tariffs and Fees",
      "footer_link_privacy": "Privacy Policy",
      "footer_link_terms": "Terms of Service",
      "footer_subscribe_desc": "Stay updated on Islamic finance news and exclusive private wealth investment reports",
      "footer_subscribe_placeholder": "Your email address",
      "footer_subscribe_btn": "Submit",
      "footer_copyright": "&copy; 2026 Hayot Bank. All rights reserved.",
      "footer_creator": "Site Design: Abdullaev Javlonbek",
      "services_badge": "Our Services",
      "services_title": "Halal Financial Solutions",
      "services_subtitle": "Shariah-compliant premium banking services for your business growth and personal wealth protection",
      "fin_badge": "Online Application",
      "fin_title": "How to Apply for Financing?",
      "fin_subtitle": "Apply for Shariah-compliant halal financing in just 5 minutes without leaving your home",
      "fin_step1_title": "Select Amount & Duration",
      "fin_step1_desc": "Choose your required amount and payment term using the interactive sliders.",
      "fin_step2_title": "Verify Your Identity",
      "fin_step2_desc": "Go through a fast and secure identity check using your passport/ID and Face ID.",
      "fin_step3_title": "Await Scoring Decision",
      "fin_step3_desc": "Our AI-powered scoring system will evaluate and decide on your request within 5 minutes.",
      "fin_step4_title": "Receive Your Funds",
      "fin_step4_desc": "The Murabaha contract is signed online, and funds are instantly credited to your card.",
      "mockup_title": "Instant Murabaha Financing",
      "mockup_badge": "0% Riba",
      "mockup_amount_label": "Financing Amount",
      "mockup_duration_label": "Payment Duration",
      "mockup_markup_label": "Bank Markup",
      "mockup_payment_label": "Monthly Payment",
      "mockup_total_label": "Total Repayment Amount",
      "mockup_btn_apply": "Submit Application",
      "card1_title": "Business Financing",
      "card1_subtitle": "For working capital",
      "card2_title": "Corporate Cards",
      "card2_subtitle": "Uzcard and Humo for business",
      "card3_title": "Islamic Leasing",
      "card3_subtitle": "Vehicles and machinery",
      "card4_title": "Factoring Services",
      "card4_subtitle": "Receivables financing",
      "card5_title": "Commercial Mortgage",
      "card5_subtitle": "For offices and warehouses",
      "card6_title": "Business Deposits",
      "card6_subtitle": "Halal profit in Mudarabah",
      "card_btn_order": "Order",
      "card_btn_lizing": "Get Leasing",
      "card_btn_invest": "Invest",
      "card_btn_apply": "Submit Application",
      "card1_detail1": "• Markup: 10-14% per annum (Murabaha)",
      "card1_detail2": "• Term: 6 to 36 months",
      "card1_detail3": "• Collateral: Real estate or guarantee",
      "card1_detail4": "• Documents: Business plan & financial statements",
      "card2_detail1": "• Card type: Uzcard / Humo Business",
      "card2_detail2": "• Opening: Free and fast",
      "card2_detail3": "• SMS notification: Free",
      "card2_detail4": "• Commission: 0% for payments",
      "card3_detail1": "• Contract: Ijarah Muntahiyah Bittamleek",
      "card3_detail2": "• Down payment: from 20%",
      "card3_detail3": "• Term: 1 to 5 years",
      "card3_detail4": "• Insurance: Via Takaful system",
      "card4_detail1": "• Financing: up to 90% of the amount",
      "card4_detail2": "• Processing: 1 business day",
      "card4_detail3": "• No collateral and no guarantors",
      "card4_detail4": "• Provision of constant cash flow",
      "card5_detail1": "• Purpose: Purchase of office and warehouse",
      "card5_detail2": "• Down payment: from 25%",
      "card5_detail3": "• Term: up to 10 years (Murabaha)",
      "card5_detail4": "• Processing: Legal and halal",
      "card6_detail1": "• Contract type: Mudarabah agreement",
      "card6_detail2": "• Distribution: 70% Investor / 30% Bank",
      "card6_detail3": "• Minimum amount: 10,000,000 UZS",
      "card6_detail4": "• Term: 3 to 24 months",
      "tab_finance": "Financing",
      "tab_deposit": "Savings",
      "mockup_title_deposit": "Halal Mudarabah Savings",
      "mockup_badge_deposit": "Partnership",
      "mockup_amount_label_deposit": "Investment Amount",
      "mockup_duration_label_deposit": "Savings Duration",
      "mockup_markup_label_deposit": "Profit Sharing (Investor/Bank)",
      "mockup_payment_label_deposit": "Expected Net Profit",
      "mockup_total_label_deposit": "Total Expected Amount",
      "mockup_btn_apply_deposit": "Start Saving",
      "cards_badge": "Exclusive Offer",
      "cards_title": "Hayot Bank Premium Cards",
      "cards_subtitle": "Halal premium cards that fully comply with Shariah requirements and offer you the highest level of convenience",
      "card_humo_title": "Hayot Humo Prestige",
      "card_humo_desc": "A convenient and profitable payment tool for all types of purchases within Uzbekistan.",
      "card_humo_feat1": "100% Halal (Zero usury interest)",
      "card_humo_feat2": "Up to 5% cashback on partner network",
      "card_humo_feat3": "Free delivery (within 24 hours)",
      "card_visa_title": "Hayot Visa Infinite",
      "card_visa_desc": "An exclusive Islamic card for worldwide travel and prestigious purchases.",
      "card_visa_feat1": "Lounge Key (VIP airport lounge access)",
      "card_visa_feat2": "0% hidden commissions worldwide",
      "card_visa_feat3": "Personal Premium Concierge service 24/7",
      "card_virt_title": "Hayot Instant Virtual",
      "card_virt_desc": "A card opened instantly in the app for secure online purchases.",
      "card_virt_feat1": "Opens in the app in just 10 seconds",
      "card_virt_feat2": "Absolutely free servicing",
      "card_virt_feat3": "3D-Secure safety for online payments",
      "card_btn_open_app": "Open in App",
      "about_badge": "History of the bank",
      "about_title": "Our Milestones",
      "about_subtitle": "Chronicle of achievements and key events of JSC «HAYOT BANK» from its foundation to the present day",
      "history_2022_0_date": "31 August",
      "history_2022_0_desc": "Obtaining a preliminary License from the Central Bank of the Republic of Uzbekistan",
      "history_2023_0_date": "16 March",
      "history_2023_0_desc": "Obtaining the license from the Central Bank of the Republic of Uzbekistan",
      "history_2023_1_date": "1 April",
      "history_2023_1_desc": "JSC «HAYOT BANK» concluded an agreement with the State Unitary Enterprise «Main informatization center of the Central Bank of the Republic of Uzbekistan»",
      "history_2023_2_date": "6 April",
      "history_2023_2_desc": "Integration with the HUMO payment system",
      "history_2023_3_date": "17 April",
      "history_2023_3_desc": "Integration with the UZCARD payment system",
      "history_2023_4_date": "1 May",
      "history_2023_4_desc": "JSC «HAYOT BANK» connected the instant payment system «Anor» 24/7",
      "history_2023_5_date": "1 June",
      "history_2023_5_desc": "JSC «HAYOT BANK» launched «Online Banking – ob.hayotbank.uz» for Corporate Clients",
      "history_2023_6_date": "2 June",
      "history_2023_6_desc": "Opening of the first banking services center «Oybek»",
      "history_2023_7_date": "3 July",
      "history_2023_7_desc": "JSC «HAYOT BANK» joined the Uzbek Republican Currency Exchange (UzEx) in all categories - «А», «B» and «С»",
      "history_2024_0_date": "3 January",
      "history_2024_0_desc": "JSC «HAYOT BANK» launched Mobile Banking «HAYOT BUSINESS» for Corporate Clients.",
      "history_2024_1_date": "18 January",
      "history_2024_1_desc": "«HAYOT BANK» JSC launched a 24/7 currency exchange office in the Uzbekistan Hotel.",
      "history_2024_2_date": "1 March",
      "history_2024_2_desc": "«HAYOT BANK» JSC launched the mobile application «Hayot Bank» for individuals.",
      "history_2024_3_date": "3 June",
      "history_2024_3_desc": "«HAYOT BANK» JSC received a service quality certificate based on NPS and CSI indices.",
      "history_2024_4_date": "7 July",
      "history_2024_4_desc": "Launch of UZCARD-Mastercard bank cards.",
      "history_2024_5_date": "27 August",
      "history_2024_5_desc": "«HAYOT BANK» JSC opened a bank services office in Chirchik city.",
      "history_2024_6_date": "1 November",
      "history_2024_6_desc": "«HAYOT BANK» JSC opened a BSC in Samarkand.",
      "history_2024_7_date": "18 December",
      "history_2024_7_desc": "«HAYOT BANK» JSC opened a BSC in Kokand!",
      "history_2024_8_date": "19 December",
      "history_2024_8_desc": "«HAYOT BANK» JSC assigned a \"Stable\" credit rating according to the national scale",
      "history_2025_0_date": "10 January",
      "history_2025_0_desc": "«HAYOT BANK» JSC opened «Yashnabad» BSC in Tashkent city!",
      "conv_badge": "Convenience",
      "conv_title": "Services for Your Convenience",
      "conv_subtitle": "Modern digital services designed to increase business efficiency and simplify daily operations",
      "conv_soon": "Soon",
      "conv_sms_title": "SMS Notification",
      "conv_sms_desc": "Receive instant alerts on your funds movement and stay updated with the latest bank news",
      "conv_munis_title": "MUNIS Payments",
      "conv_munis_desc": "Pay for government and utility services, or fines, easily and securely with our payment collection system",
      "conv_ttt_title": "TTT Payments",
      "conv_ttt_desc": "Execute interbank payments 24/7 in real-time mode",
      "conv_chat_title": "Chat with Bank",
      "conv_chat_desc": "Resolve any issues quickly through a convenient chat interface with bank representatives",
      "conv_invoice_title": "Payment Invoice",
      "conv_invoice_desc": "Submit payment invoices to payers directly via online banking system",
      "conv_kartoteka_title": "Kartoteka №2",
      "conv_kartoteka_desc": "Get instant notifications about company liabilities in your online banking dashboard",
      "conv_report_title": "Online Report",
      "conv_report_desc": "Retrieve account statements, certificates, and reports online without visiting the bank",
      "conv_finance_info_title": "Financing Info",
      "conv_finance_info_desc": "Access remaining debt balance, upcoming payments, and other details online",
      "conv_consultant_title": "Online Consultant",
      "conv_consultant_desc": "Get detailed answers to all your questions without leaving the bank's website",
      "conv_guide_title": "Product Guide",
      "conv_guide_desc": "Detailed materials on all bank products and services gathered in one place",
      "conv_onec_title": "1C Integration",
      "conv_onec_desc": "Conduct banking transactions directly from your 1C enterprise systems"
    }
  };

  // 1. Language & Translations Engine
  let translations = {};
  let currentLang = localStorage.getItem('lang') || 'uz';

  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Scan all data-translate elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      const translationSource = (translations && translations[lang]) ? translations : fallbackTranslations;
      if (translationSource[lang] && translationSource[lang][key]) {
        el.innerHTML = translationSource[lang][key];
      }
    });

    // Scan all placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      const key = el.getAttribute('data-translate-placeholder');
      const translationSource = (translations && translations[lang]) ? translations : fallbackTranslations;
      if (translationSource[lang] && translationSource[lang][key]) {
        el.placeholder = translationSource[lang][key];
      }
    });

    // Scan all aria labels
    document.querySelectorAll('[data-translate-aria]').forEach(el => {
      const key = el.getAttribute('data-translate-aria');
      const translationSource = (translations && translations[lang]) ? translations : fallbackTranslations;
      if (translationSource[lang] && translationSource[lang][key]) {
        el.setAttribute('aria-label', translationSource[lang][key]);
      }
    });

    // Dispatch custom event to notify other modules of language changes
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Language switcher dropdown listener
  const langDropdown = document.querySelector('.lang-dropdown-container');
  if (langDropdown) {
    const langCurrentText = langDropdown.querySelector('.lang-current');
    const langOptions = langDropdown.querySelectorAll('.lang-option');

    if (langCurrentText) {
      langCurrentText.textContent = currentLang.toUpperCase();
    }
    langOptions.forEach(opt => {
      if (opt.getAttribute('data-value') === currentLang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-value');
        localStorage.setItem('lang', selectedLang);
        
        if (langCurrentText) {
          langCurrentText.textContent = selectedLang.toUpperCase();
        }
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        updateLanguage(selectedLang);
      });
    });
  }

  // Fetch translation configs
  async function loadTranslations() {
    try {
      const [uzRes, ruRes, enRes] = await Promise.all([
        fetch('i18n/uz.json'),
        fetch('i18n/ru.json'),
        fetch('i18n/en.json')
      ]);
      if (!uzRes.ok || !ruRes.ok || !enRes.ok) throw new Error('Failed to fetch translations JSON files');
      const uz = await uzRes.json();
      const ru = await ruRes.json();
      const en = await enRes.json();
      translations = { uz, ru, en };
    } catch (err) {
      console.warn('Failed to load translations from JSON files (e.g. running locally via file:// CORS restrictions). Using fallback translations.', err);
      translations = fallbackTranslations;
    }
  }

  // 2. Navigation Header & Active Links Scroll Behavior
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Active nav links mapping on scroll
  window.addEventListener('scroll', () => {
    // Active nav links mapping on scroll
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 160)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu burger toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Hero Wide Landscape Slider Logic (Dynamic Image Scanning)
  async function initHeroSlider() {
    const slider = document.getElementById('hero');
    if (!slider) return;

    const wrapper = slider.querySelector('.slider-wrapper');
    const dotsContainer = slider.querySelector('.slider-dots');
    if (!wrapper) return;

    // Default fallback images
    let images = ['img/post/uzbek_professional.png', 'img/post/uzbek_family.png'];

    try {
      // Attempt to fetch directory listing
      const response = await fetch('img/post/');
      if (response.ok) {
        const text = await response.text();
        // Parse directory listing for images (handles double, single, and no quotes)
        const regex = /href=(?:"|')?([^"' >]+\.(?:png|jpe?g|webp|svg|gif))(?:"|')?/gi;
        let match;
        const foundImages = [];
        while ((match = regex.exec(text)) !== null) {
          const imgPath = match[1];
          // Extract only the filename from the path to avoid absolute/relative subfolder mismatches
          const filename = imgPath.substring(imgPath.lastIndexOf('/') + 1).split('?')[0].split('#')[0];
          const fullPath = 'img/post/' + filename;
          
          // Avoid duplicate entries
          if (!foundImages.includes(fullPath)) {
            foundImages.push(fullPath);
          }
        }
        console.log('Dynamic Slider scanned images:', foundImages);
        if (foundImages.length > 0) {
          images = foundImages;
        }
      }
    } catch (err) {
      console.warn('Using default slider images due to directory scan restriction:', err);
    }

    // Build slides HTML dynamically
    wrapper.innerHTML = '';
    images.forEach((img, idx) => {
      const titleKey = idx % 2 === 0 ? 'hero_title' : 'hero_title_2';
      const descKey = idx % 2 === 0 ? 'hero_description' : 'hero_description_2';
      
      const slideHTML = `
        <div class="slide ${idx === 0 ? 'active' : ''}">
          <div class="slide-bg-img" style="background-image: url('${img}');"></div>
          <div class="slide-overlay"></div>
          <div class="container slide-content-container">
            <div class="slide-content">
              <div class="badge animate-fade-in" data-translate="hero_badge">Hayot Bank • Halol va Aqlli Xususiy Bankchilik</div>
              <h1 class="hero-title animate-slide-up" data-translate="${titleKey}">Mablag'laringiz uchun</h1>
              <p class="hero-description animate-slide-up-delay" data-translate="${descKey}">Boyligingizni Shariat tamoyillariga to'liq mos ravishda boshqaring...</p>
              <div class="hero-btns animate-slide-up-delay-2">
                <a href="#" class="btn btn-secondary" data-translate="hero_btn_start">Sarmoyani boshlash</a>
                <a href="#" class="btn btn-outline-white" data-translate="hero_btn_more">Kengash fatvosi</a>
              </div>
            </div>
          </div>
        </div>
      `;
      wrapper.insertAdjacentHTML('beforeend', slideHTML);
    });

    // Build dots HTML dynamically
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      images.forEach((_, idx) => {
        const dotHTML = `<span class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`;
        dotsContainer.insertAdjacentHTML('beforeend', dotHTML);
      });
    }

    // Re-select slides and dots
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevArrow = slider.querySelector('.prev-arrow');
    const nextArrow = slider.querySelector('.next-arrow');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    let slideInterval = null;
    const intervalTime = 3000; // rotate every 3 seconds

    function showSlide(index) {
      // Clean classes
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Ensure index boundary
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;

      // Activate target slide and dot
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
      currentIndex = index;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoplay() {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
    }

    // Set event listeners
    if (nextArrow) {
      nextArrow.addEventListener('click', () => {
        nextSlide();
        startAutoplay(); // reset autoplay timer on click
      });
    }

    if (prevArrow) {
      prevArrow.addEventListener('click', () => {
        prevSlide();
        startAutoplay(); // reset autoplay timer on click
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
        startAutoplay(); // reset autoplay timer on click
      });
    });

    // Start Autoplay
    startAutoplay();
  }

  // 4. Live Rates Ticker Rotation (Top Header)
  const rateTickerList = [
    { currency: 'USD', flag: 'img/icon/flag-usa.svg', rate: '12,680' },
    { currency: 'EUR', flag: 'img/icon/flag-eu.svg', rate: '13,620' },
    { currency: 'RUB', flag: 'img/icon/flag-ru.svg', rate: '144.5' },
    { currency: 'GBP', flag: 'img/icon/flag-uk.svg', rate: '16,180' }
  ];

  let currentRateIndex = 1;
  const ratesLiveBadge = document.getElementById('rates-live-badge');
  const ratesLiveBadgeMobile = document.querySelector('.rates-live-badge-mobile');

  if (ratesLiveBadge || ratesLiveBadgeMobile) {
    const flagImg = ratesLiveBadge ? ratesLiveBadge.querySelector('.currency-flag') : null;
    const rateText = ratesLiveBadge ? ratesLiveBadge.querySelector('.live-rate-text') : null;
    
    const flagImgMobile = ratesLiveBadgeMobile ? ratesLiveBadgeMobile.querySelector('.currency-flag') : null;
    const rateTextMobile = ratesLiveBadgeMobile ? ratesLiveBadgeMobile.querySelector('.live-rate-text') : null;

    function rotateRates() {
      if (ratesLiveBadge) {
        ratesLiveBadge.style.opacity = '0';
        ratesLiveBadge.style.transform = 'translateY(-5px)';
      }
      if (ratesLiveBadgeMobile) {
        ratesLiveBadgeMobile.style.opacity = '0';
        ratesLiveBadgeMobile.style.transform = 'translateY(-5px)';
      }

      setTimeout(() => {
        const item = rateTickerList[currentRateIndex];
        
        if (ratesLiveBadge) {
          if (flagImg) {
            flagImg.src = item.flag;
            flagImg.alt = item.currency;
          }
          if (rateText) {
            rateText.textContent = `${item.currency} / UZS: ${item.rate}`;
          }
          ratesLiveBadge.style.opacity = '1';
          ratesLiveBadge.style.transform = 'translateY(0)';
        }

        if (ratesLiveBadgeMobile) {
          if (flagImgMobile) {
            flagImgMobile.src = item.flag;
            flagImgMobile.alt = item.currency;
          }
          if (rateTextMobile) {
            rateTextMobile.textContent = `${item.currency} / UZS: ${item.rate}`;
          }
          ratesLiveBadgeMobile.style.opacity = '1';
          ratesLiveBadgeMobile.style.transform = 'translateY(0)';
        }

        currentRateIndex = (currentRateIndex + 1) % rateTickerList.length;
      }, 300);
    }

    if (ratesLiveBadge) ratesLiveBadge.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    if (ratesLiveBadgeMobile) ratesLiveBadgeMobile.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    // Shift rate ticker every 2.5s
    setInterval(rotateRates, 2500);
  }

  // 5. Floating Chatbot Logic (Bottom Right)
  (function() {
    const chatbot = document.getElementById('chatbot-widget');
    if (!chatbot) return;

    const toggleBtn = document.getElementById('chat-toggle-btn');
    const closeBtn = document.getElementById('chat-close-btn');
    const windowEl = document.getElementById('chat-window');
    const bodyEl = document.getElementById('chat-window-body');
    const userInput = document.getElementById('chat-user-input');
    const sendBtn = document.getElementById('chat-send-btn');
    const badge = toggleBtn.querySelector('.chat-notification-badge');
    const quickReplies = document.getElementById('chat-quick-replies');

    // Switch default chat icon to Hayot Bank logo after 3 seconds (3000ms)
    setTimeout(() => {
      if (toggleBtn) {
        toggleBtn.classList.add('show-logo');
      }
    }, 3000);

    // Language specific responses
    const botResponses = {
      "uz": {
        "welcome": "Assalomu alaykum! Men Hayot Bank raqamli yordamchisiman. Sizga islomiy moliya va bank xizmatlari bo'yicha qanday yordam bera olaman?",
        "default": "Kechirasiz, bu savolni to'liq tushunmadim. Quyidagi kalit so'zlardan foydalanishingiz yoki tugmalarni bosishingiz mumkin: Murabaha, Mudaraba, Karta, Zakot.",
        "murabaha": "Murabaha - bu bankimiz tomonidan siz istagan tovar (masalan, avtomobil yoki uy)ni sotib olib, ustiga aniq foyda qo'shgan holda bo'lib-bo'lib to'lash sharti bilan sotishidir. Sudxo'rlik (ribo) aralashmaydi.",
        "mudaraba": "Mudaraba jamg'armasi - bu siz sarmoya kiritadigan va bank uni halol loyihalarda ishlatadigan sheriklikdir. Olingan real foyda oldindan kelishilgan nisbatda taqsimlanadi. Ribo foizlari 0%.",
        "card": "Prestige Halol Karta - bu Shariat talablariga to'liq javob beruvchi premium kartadir. Uni Hayot App orqali onlayn buyurtma qilsangiz, maxsus qutida Toshkent bo'ylab 24 soat ichida bepul yetkazib beramiz.",
        "zakat": "Zakot - bu islom dinining besh ruknidan biri bo'lib, yillik jamg'armaning 2.5% qismini ehson qilishdir. Hayot App ilovamizda avtomatik Zakot hisoblagich moduli mavjud."
      },
      "ru": {
        "welcome": "Здравствуйте! Я цифровой помощник Hayot Bank. Чем я могу помочь вам в вопросах исламских финансов и банковских услуг?",
        "default": "Извините, я не совсем понял ваш вопрос. Вы можете нажать на быстрые кнопки или написать слова: Мурабаха, Мудараба, Карта, Закят.",
        "murabaha": "Мурабаха — это торговое соглашение, при котором банк покупает нужный вам товар (авто, недвижимость), добавляет фиксированную наценку и продает его вам в рассрочку без скрытых процентов (риба).",
        "mudaraba": "Мудараба — это инвестиционное партнерство, где вы предоставляете капитал, а банк управляет им в халяльных проектах. Полученная прибыль делится в согласованных долях.",
        "card": "Халяльная карта Prestige — премиальная карта, соответствующая стандартам Шариата. Доставляется бесплатно в премиум-упаковке по Ташкенту в течение 24 часов после заказа в Hayot App.",
        "zakat": "Закят — обязательный ежегодный налог в размере 2.5% от сбережений. В приложении Hayot App встроен модуль автоматического калькулятора Закята."
      },
      "en": {
        "welcome": "Hello! I am Hayot Bank's digital assistant. How can I help you regarding Islamic finance and our banking services?",
        "default": "Sorry, I didn't quite catch that. You can click the quick response buttons or type: Murabaha, Mudarabah, Card, Zakat.",
        "murabaha": "Murabaha is a trade contract where the bank purchases the asset you request (car, property), adds a fixed profit markup, and sells it to you in installments. No interest (riba) is charged.",
        "mudaraba": "Mudarabah is a partnership where you provide capital and the bank invests it in halal projects. Actual profits are shared in a pre-agreed ratio. Usury interest is 0%.",
        "card": "Prestige Halal Card is a premium Shariah-compliant card. Order online via Hayot App and get free delivery in a premium box within 24 hours in Tashkent.",
        "zakat": "Zakat is one of the pillars of Islam, requiring donation of 2.5% of annual savings. Hayot App features an automated Zakat calculator module."
      }
    };

    function toggleChat() {
      const isActive = windowEl.classList.contains('active');
      if (isActive) {
        windowEl.classList.remove('active');
        toggleBtn.classList.remove('active');
      } else {
        windowEl.classList.add('active');
        toggleBtn.classList.add('active');
        // Clear notification badge
        if (badge) {
          badge.style.display = 'none';
        }
        // Update welcome message based on active language
        const welcomeText = document.getElementById('chat-welcome-text');
        if (welcomeText) {
          welcomeText.textContent = botResponses[currentLang].welcome;
        }
      }
    }

    if (toggleBtn) toggleBtn.addEventListener('click', toggleChat);
    if (closeBtn) closeBtn.addEventListener('click', toggleChat);

    // Allow external triggers to open chat (e.g. from nav links)
    document.querySelectorAll('a[href="#chatbot-widget"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        if (windowEl && !windowEl.classList.contains('active')) {
          toggleChat();
        }
      });
    });

    function appendMessage(text, isUser = false) {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${isUser ? 'user-bubble' : 'assistant-bubble'}`;
      bubble.textContent = text;
      
      // Remove quick replies container before appending new messages to keep feed neat, then append it back at the end
      if (quickReplies && !isUser) {
        bodyEl.removeChild(quickReplies);
      }

      bodyEl.appendChild(bubble);

      if (quickReplies && !isUser) {
        bodyEl.appendChild(quickReplies);
      }

      // Scroll to bottom
      bodyEl.scrollTop = bodyEl.scrollHeight;
    }

    function showTypingIndicator() {
      const indicator = document.createElement('div');
      indicator.className = 'typing-indicator';
      indicator.id = 'typing-indicator';
      indicator.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      `;
      
      if (quickReplies) {
        bodyEl.insertBefore(indicator, quickReplies);
      } else {
        bodyEl.appendChild(indicator);
      }
      bodyEl.scrollTop = bodyEl.scrollHeight;
    }

    function removeTypingIndicator() {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) {
        bodyEl.removeChild(indicator);
      }
    }

    function handleSend() {
      const text = userInput.value.trim();
      if (text === '') return;

      appendMessage(text, true);
      userInput.value = '';

      showTypingIndicator();

      // Simulate bot response with keyword matching
      setTimeout(() => {
        removeTypingIndicator();
        const lowerText = text.toLowerCase();
        let response = botResponses[currentLang].default;

        if (lowerText.includes('muraba') || lowerText.includes('avto') || lowerText.includes('mashina')) {
          response = botResponses[currentLang].murabaha;
        } else if (lowerText.includes('mudarab') || lowerText.includes('jamg') || lowerText.includes('invest') || lowerText.includes('mudaraba')) {
          response = botResponses[currentLang].mudaraba;
        } else if (lowerText.includes('kart') || lowerText.includes('prestig')) {
          response = botResponses[currentLang].card;
        } else if (lowerText.includes('zakot') || lowerText.includes('zakat')) {
          response = botResponses[currentLang].zakat;
        } else if (lowerText.includes('assalom') || lowerText.includes('salom') || lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('privet')) {
          response = botResponses[currentLang].welcome;
        }

        appendMessage(response, false);
      }, 1000);
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', handleSend);
    }

    if (userInput) {
      userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handleSend();
        }
      });
    }

    // Quick reply pills clicks
    if (quickReplies) {
      quickReplies.querySelectorAll('.quick-reply-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const keyword = pill.getAttribute('data-keyword');
          appendMessage(pill.textContent, true);
          showTypingIndicator();
          
          setTimeout(() => {
            removeTypingIndicator();
            const response = botResponses[currentLang][keyword] || botResponses[currentLang].default;
            appendMessage(response, false);
          }, 800);
        });
      });
    }

  })();

  // 6. Online Financing Calculator Logic
  (function() {
    const finAmount = document.getElementById('fin-amount');
    const finDuration = document.getElementById('fin-duration');
    const finAmountDisplay = document.getElementById('fin-amount-display');
    const finDurationDisplay = document.getElementById('fin-duration-display');
    const finMonthlyPayment = document.getElementById('fin-monthly-payment');
    const finTotalPayment = document.getElementById('fin-total-payment');
    const finApplyBtn = document.getElementById('fin-apply-btn');

    // Tab buttons
    const tabFinance = document.getElementById('tab-btn-finance');
    const tabDeposit = document.getElementById('tab-btn-deposit');
    const calcTitle = document.getElementById('calc-title');
    const calcBadge = document.getElementById('calc-badge');
    const sliderLabel1 = document.getElementById('slider-label-1');
    const sliderLabel2 = document.getElementById('slider-label-2');
    const sliderLimits1 = document.getElementById('slider-limits-1');
    const sliderLimits2 = document.getElementById('slider-limits-2');
    const resultLabel1 = document.getElementById('result-label-1');
    const resultLabel2 = document.getElementById('result-label-2');
    const resultLabel3 = document.getElementById('result-label-3');
    const resultValue1 = document.getElementById('result-value-1');

    if (!finAmount || !finDuration) return;

    let activeMode = 'finance';

    function calculateFinancing() {
      const amount = parseFloat(finAmount.value);
      const duration = parseFloat(finDuration.value);
      
      // Format currency
      if (finAmountDisplay) finAmountDisplay.textContent = amount.toLocaleString('uz-UZ') + ' UZS';
      
      // Format duration
      if (finDurationDisplay) {
        let durSuffix = 'oy';
        if (currentLang === 'ru') durSuffix = 'мес.';
        if (currentLang === 'en') durSuffix = duration === 1 ? 'month' : 'months';
        finDurationDisplay.textContent = duration + ' ' + durSuffix;
      }
      
      // Sync term display card
      const finTermDisplay = document.getElementById('fin-term-display');
      if (finTermDisplay) {
        let durSuffix = 'oy';
        if (currentLang === 'ru') durSuffix = 'мес.';
        if (currentLang === 'en') durSuffix = duration === 1 ? 'month' : 'months';
        finTermDisplay.textContent = duration + ' ' + durSuffix;
      }

      if (activeMode === 'finance') {
        // Fixed markup rate (12% per annum)
        const markupRate = 0.12; 
        const totalPayment = amount * (1 + markupRate * (duration / 12));
        const monthlyPayment = totalPayment / duration;

        if (resultValue1) resultValue1.textContent = "12%";
        if (finMonthlyPayment) finMonthlyPayment.textContent = Math.round(monthlyPayment).toLocaleString('uz-UZ') + ' UZS';
        if (finTotalPayment) finTotalPayment.textContent = Math.round(totalPayment).toLocaleString('uz-UZ') + ' UZS';
      } else {
        // Mudarabah expected profit yield (22% per annum)
        const expectedYield = 0.22;
        const expectedProfit = amount * expectedYield * (duration / 12);
        const totalPayment = amount + expectedProfit;

        if (resultValue1) resultValue1.textContent = "70% / 30%";
        if (finMonthlyPayment) finMonthlyPayment.textContent = Math.round(expectedProfit).toLocaleString('uz-UZ') + ' UZS';
        if (finTotalPayment) finTotalPayment.textContent = Math.round(totalPayment).toLocaleString('uz-UZ') + ' UZS';
      }
    }

    function updateLabels() {
      if (activeMode === 'finance') {
        if (calcTitle) calcTitle.setAttribute('data-translate', 'mockup_title');
        if (calcBadge) calcBadge.setAttribute('data-translate', 'mockup_badge');
        if (sliderLabel1) sliderLabel1.setAttribute('data-translate', 'mockup_amount_label');
        if (sliderLabel2) sliderLabel2.setAttribute('data-translate', 'mockup_duration_label');
        
        if (sliderLimits1) {
          sliderLimits1.innerHTML = `<span>1 mln UZS</span><span>100 mln UZS</span>`;
        }
        if (sliderLimits2) {
          let suffix = currentLang === 'uz' ? 'oy' : currentLang === 'ru' ? 'мес.' : 'months';
          sliderLimits2.innerHTML = `<span>3 ${suffix}</span><span>36 ${suffix}</span>`;
        }

        if (resultLabel1) resultLabel1.setAttribute('data-translate', 'mockup_markup_label');
        if (resultLabel2) resultLabel2.setAttribute('data-translate', 'mockup_payment_label');
        if (resultLabel3) resultLabel3.setAttribute('data-translate', 'mockup_total_label');
        if (finApplyBtn) finApplyBtn.setAttribute('data-translate', 'mockup_btn_apply');
      } else {
        if (calcTitle) calcTitle.setAttribute('data-translate', 'mockup_title_deposit');
        if (calcBadge) calcBadge.setAttribute('data-translate', 'mockup_badge_deposit');
        if (sliderLabel1) sliderLabel1.setAttribute('data-translate', 'mockup_amount_label_deposit');
        if (sliderLabel2) sliderLabel2.setAttribute('data-translate', 'mockup_duration_label_deposit');

        if (sliderLimits1) {
          sliderLimits1.innerHTML = `<span>5 mln UZS</span><span>500 mln UZS</span>`;
        }
        if (sliderLimits2) {
          let suffix = currentLang === 'uz' ? 'oy' : currentLang === 'ru' ? 'мес.' : 'months';
          sliderLimits2.innerHTML = `<span>3 ${suffix}</span><span>24 ${suffix}</span>`;
        }

        if (resultLabel1) resultLabel1.setAttribute('data-translate', 'mockup_markup_label_deposit');
        if (resultLabel2) resultLabel2.setAttribute('data-translate', 'mockup_payment_label_deposit');
        if (resultLabel3) resultLabel3.setAttribute('data-translate', 'mockup_total_label_deposit');
        if (finApplyBtn) finApplyBtn.setAttribute('data-translate', 'mockup_btn_apply_deposit');
      }
      
      // Overwrite static translations
      updateLanguage(currentLang);
    }

    if (tabFinance && tabDeposit) {
      tabFinance.addEventListener('click', () => {
        if (activeMode === 'finance') return;
        activeMode = 'finance';
        tabFinance.classList.add('active');
        tabDeposit.classList.remove('active');

        // Set limits for financing
        finAmount.min = "1000000";
        finAmount.max = "100000000";
        finAmount.step = "500000";
        finAmount.value = "15000000";

        finDuration.min = "3";
        finDuration.max = "36";
        finDuration.step = "1";
        finDuration.value = "12";

        updateLabels();
        calculateFinancing();
      });

      tabDeposit.addEventListener('click', () => {
        if (activeMode === 'deposit') return;
        activeMode = 'deposit';
        tabDeposit.classList.add('active');
        tabFinance.classList.remove('active');

        // Set limits for deposit
        finAmount.min = "5000000";
        finAmount.max = "500000000";
        finAmount.step = "5000000";
        finAmount.value = "50000000";

        finDuration.min = "3";
        finDuration.max = "24";
        finDuration.step = "3";
        finDuration.value = "12";

        updateLabels();
        calculateFinancing();
      });
    }

    finAmount.addEventListener('input', calculateFinancing);
    finDuration.addEventListener('input', calculateFinancing);

    // Apply button click
    if (finApplyBtn) {
      finApplyBtn.addEventListener('click', () => {
        let successMsg = '';
        if (activeMode === 'finance') {
          successMsg = currentLang === 'uz' ? 'Arizangiz qabul qilindi! Yaqin orada skoring natijasi sizga yuboriladi.' 
                : currentLang === 'ru' ? 'Ваша заявка принята! Результаты скоринга будут высланы в ближайшее время.' 
                : 'Your application has been received! Scoring results will be sent to you shortly.';
        } else {
          successMsg = currentLang === 'uz' ? 'Mudaraba hisobingiz muvaffaqiyatli tayyorlandi! Jamg\'arishni boshlash uchun ilovani yuklab oling.'
                : currentLang === 'ru' ? 'Ваш счет Мудараба успешно подготовлен! Скачайте приложение для внесения инвестиций.'
                : 'Your Mudarabah account is successfully prepared! Download the app to fund your investment.';
        }
        alert(successMsg);
      });
    }

    // Call on load
    calculateFinancing();
    
    // Bind to language changes (to update labels and suffixes)
    window.addEventListener('languageChanged', () => {
      updateLabels();
      calculateFinancing();
    });
  })();

  // 20. Service Cards Expand/Collapse Toggle
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    // Select both the circular chevron button and the rectangular desktop button (for wide cards)
    const toggleBtns = card.querySelectorAll('.card-btn-circular, .card-btn-rect');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isExpanded = card.classList.contains('expanded');
        
        // Collapse all other cards
        serviceCards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.classList.remove('expanded');
          }
        });
        
        // Toggle the clicked card
        if (isExpanded) {
          card.classList.remove('expanded');
        } else {
          card.classList.add('expanded');
          // Smooth scroll to the card if it's out of view after expanding
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 450);
        }
      });
    });
  });

  // 21. Interactive Marquee Slider
  const initMarqueeSlider = () => {
    const wrapper = document.querySelector('.marquee-wrapper');
    const track = document.querySelector('.marquee-track');
    
    if (!wrapper || !track) return;

    let isPaused = false;
    const scrollSpeed = 0.8; // Pixels per frame
    let autoScrollId = null;
    let pauseTimeout = null;
    let loopWidth = 0;

    // Remove the CSS animation to control via JS scrollLeft
    track.style.animation = 'none';

    // Calculate loop width based on the distance between the first card and the first duplicate card
    const calculateLoopWidth = () => {
      const cards = track.querySelectorAll('.convenience-card');
      const uniqueCount = cards.length / 2;
      if (uniqueCount > 0 && cards[uniqueCount]) {
        loopWidth = cards[uniqueCount].offsetLeft - cards[0].offsetLeft;
      } else {
        loopWidth = track.scrollWidth / 2;
      }
    };

    // Calculate on load and resize
    calculateLoopWidth();
    window.addEventListener('resize', calculateLoopWidth);

    // Loop logic function
    const step = () => {
      const isGridActive = document.getElementById('convenience').classList.contains('show-grid');
      if (!isPaused && !isGridActive) {
        if (loopWidth <= 0) calculateLoopWidth();
        wrapper.scrollLeft += scrollSpeed;
        
        // Endless loop wrapper scroll reset (fully seamless)
        if (wrapper.scrollLeft >= loopWidth) {
          wrapper.scrollLeft -= loopWidth;
        }
      }
      autoScrollId = requestAnimationFrame(step);
    };

    // Start auto-scroll
    autoScrollId = requestAnimationFrame(step);

    // Pause on hover
    wrapper.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    wrapper.addEventListener('mouseleave', () => {
      if (!pauseTimeout) {
        isPaused = false;
      }
    });

    // Touch events for mobile swiping support
    wrapper.addEventListener('touchstart', () => {
      isPaused = true;
      if (pauseTimeout) clearTimeout(pauseTimeout);
    }, { passive: true });
    
    wrapper.addEventListener('touchend', () => {
      pauseTimeout = setTimeout(() => {
        isPaused = false;
        pauseTimeout = null;
      }, 2500);
    }, { passive: true });
  };

  // 22. Convenience Grid View Toggle (Clones cards dynamically to avoid duplicate HTML)
  const initConvenienceViewToggle = () => {
    const toggleBtn = document.getElementById('btn-toggle-convenience');
    const section = document.getElementById('convenience');
    const track = document.querySelector('.marquee-track');
    const gridContainer = document.getElementById('convenience-grid');
    
    if (!toggleBtn || !section || !track || !gridContainer) return;

    // Clone only the first 11 unique cards from the marquee track
    const allCards = track.querySelectorAll('.convenience-card');
    const uniqueCount = allCards.length / 2; // 11
    
    for (let i = 0; i < uniqueCount; i++) {
      if (allCards[i]) {
        const clonedCard = allCards[i].cloneNode(true);
        clonedCard.removeAttribute('aria-hidden');
        gridContainer.appendChild(clonedCard);
      }
    }

    // Toggle view handler
    let isGridView = false;
    
    const updateButtonText = () => {
      if (isGridView) {
        toggleBtn.textContent = currentLang === 'uz' ? "Slayder ko'rinishi" : currentLang === 'ru' ? "Вид слайдера" : "Slider View";
      } else {
        toggleBtn.textContent = currentLang === 'uz' ? "Barchasi" : currentLang === 'ru' ? "Все услуги" : "All Services";
      }
    };

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isGridView = !isGridView;
      
      if (isGridView) {
        section.classList.add('show-grid');
      } else {
        section.classList.remove('show-grid');
      }
      updateButtonText();
    });

    // Bind to language changes to keep button text translated
    window.addEventListener('languageChanged', () => {
      updateButtonText();
    });
  };

  // 20. Interactive Timeline Logic
  function initTimeline() {
    const yearBtns = document.querySelectorAll('.timeline-year-btn');
    const yearContents = document.querySelectorAll('.timeline-year-content');
    
    if (yearBtns.length && yearContents.length) {
      yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetYear = btn.getAttribute('data-year');
          
          yearBtns.forEach(b => b.classList.remove('active'));
          yearContents.forEach(c => c.classList.remove('active'));
          
          btn.classList.add('active');
          const targetContent = document.getElementById(`content-${targetYear}`);
          if (targetContent) {
            targetContent.classList.add('active');
          }
        });
      });
    }
  }

  // Initialize and load
  await loadTranslations();
  await initHeroSlider();
  initMarqueeSlider();
  initConvenienceViewToggle();
  initTimeline();
  updateLanguage(currentLang);

});
