export interface College {
  id: string;
  nameAr: string;
  nameEn: string;
  minAverage: number; // Minimum high school grade required in Iraq
  tuitionAr: string;
  tuitionEn: string;
  icon: string;
  bgGradient: string;
  departmentsAr: string[];
  departmentsEn: string[];
  descriptionAr: string;
  descriptionEn: string;
}

export interface NewsItem {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  date: string;
  summaryAr: string;
  summaryEn: string;
  imageUrl: string;
}

export interface RankingItem {
  nameAr: string;
  nameEn: string;
  rankAr: string;
  rankEn: string;
  year: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
}

export const COLLEGES_DATA: College[] = [
  {
    id: "dentistry",
    nameAr: "كلية طب الأسنان",
    nameEn: "College of Dentistry",
    minAverage: 80.0,
    tuitionAr: "7,500,000 دينار / سنوي",
    tuitionEn: "7,500,000 IQD / Year",
    icon: "Stethoscope",
    bgGradient: "from-blue-900 to-teal-950",
    departmentsAr: ["فرع جراحة الفم والوجه والفكين", "فرع طب الأسنان الوقائي والاطفال", "فرع معالجة الأسنان", "فرع صناعة الأسنان"],
    departmentsEn: ["Oral & Maxillofacial Surgery", "Pediatric & Preventive Dentistry", "Conservative Dentistry", "Prosthodontics"],
    descriptionAr: "تعد من الكليات الرائدة التي تضم عيادات تخصصية حديثة تقدم خدمات علاجية مجانية للمواطنين وتدريب سريري متكامل للطلبة.",
    descriptionEn: "One of the leading colleges housing state-of-the-art dental clinics providing free public healthcare services and exceptional clinical education."
  },
  {
    id: "pharmacy",
    nameAr: "كلية الصيدلة",
    nameEn: "College of Pharmacy",
    minAverage: 80.0,
    tuitionAr: "6,950,000 دينار / سنوي",
    tuitionEn: "6,950,000 IQD / Year",
    icon: "Pill",
    bgGradient: "from-emerald-900 to-teal-950",
    departmentsAr: ["فرع الكيمياء الصيدلانية", "فرع الصيدلانيات والتقنية الصيدلانية", "فرع الأدوية والسموم", "فرع العقاقير والنباتات الطبية"],
    departmentsEn: ["Pharmaceutical Chemistry", "Pharmaceutics & Technology", "Pharmacology & Toxicology", "Pharmacognosy & Medicinal Plants"],
    descriptionAr: "مختبرات تخصصية متطورة تهدف لبناء جيل من الصيادلة المؤهلين للعمل في القطاعين الطبي والصناعي والبحثي.",
    descriptionEn: "Equipped with advanced laboratories aiming to prepare pharmacists with expertise in clinical services, pharmaceutical industries, and academic research."
  },
  {
    id: "medicine",
    nameAr: "كلية الطب البشري",
    nameEn: "College of Medicine",
    minAverage: 90.0,
    tuitionAr: "11,500,000 دينار / سنوي",
    tuitionEn: "11,500,000 IQD / Year",
    icon: "HeartPulse",
    bgGradient: "from-cyan-950 to-blue-950",
    departmentsAr: ["فرع التشريح والأنسجة الأدمية", "فرع الكيمياء الحيوية الطبية", "فرع الفسلجة والفيزياء الطبية", "فرع علم الأدوية السريري", "فرع الطب الباطني والجراحة"],
    departmentsEn: ["Anatomy, Histology & Embryology", "Medical Biochemistry", "Physiology & Medical Physics", "Clinical Pharmacology", "Internal Medicine & Surgery"],
    descriptionAr: "منارة طبية في جنوب العراق تطبق أحدث أنظمة التعليم الطبي التفاعلي المتكامل بالشراكة مع الجامعات العالمية والمستشفيات التعليمية.",
    descriptionEn: "A flagship medical school in Southern Iraq, delivering integrated clinical curricula inspired by global standards in cooperation with leading research centers."
  },
  {
    id: "engineering",
    nameAr: "كلية الهندسة",
    nameEn: "College of Engineering",
    minAverage: 62.0,
    tuitionAr: "2,500,000 دينار / سنوي",
    tuitionEn: "2,500,000 IQD / Year",
    icon: "HardHat",
    bgGradient: "from-slate-900 to-cyan-950",
    departmentsAr: ["هندسة النفط والغاز", "هندسة الأجهزة الطبية", "هندسة تقنيات الحاسوب"],
    departmentsEn: ["Petroleum & Gas Engineering", "Medical Devices Engineering", "Computer Techniques Engineering"],
    descriptionAr: "توفر بيئة تعليمية هندسية ممتازة مع ورش عملية ومختبرات محاكاة حاسوبية فائقة الدقة تواكب متطلبات سوق العمل الهندسي والتطور البترولي.",
    descriptionEn: "Provides excellence in engineering studies, featuring advanced simulator labs and workshops targeting the region's oil, gas, and biomedical industries."
  },
  {
    id: "health-tech",
    nameAr: "كلية التقنيات الصحية والطبية",
    nameEn: "College of Health & Medical Technologies",
    minAverage: 62.0,
    tuitionAr: "3,250,000 دينار / سنوي",
    tuitionEn: "3,250,000 IQD / Year",
    icon: "Activity",
    bgGradient: "from-teal-900 to-emerald-950",
    departmentsAr: ["قسم تقنيات التخدير", "قسم تقنيات الأشعة والسونار", "قسم تقنيات التحليلات المرضية", "قسم تقنيات صناعة الأسنان", "قسم تقنيات البصريات"],
    departmentsEn: ["Anesthetic Technologies", "Radiology & Sonar Technologies", "Pathological Analyses", "Progsthodontic Technology", "Optics Technologies"],
    descriptionAr: "ترتكز الكلية على تلبية احتياجات المستشفيات والمراكز التخصصية من الملاكات الطبية التقنية المؤهلة بأعلى درجات المهارة والدقة الميدانية.",
    descriptionEn: "Focuses on providing clinical institutions with highly trained medical medical technologists holding outstanding analytical and clinical competence."
  },
  {
    id: "science",
    nameAr: "كلية العلوم",
    nameEn: "College of Science",
    minAverage: 60.0,
    tuitionAr: "1,500,000 دينار / سنوي",
    tuitionEn: "1,500,000 IQD / Year",
    icon: "FlaskConical",
    bgGradient: "from-indigo-950 to-purple-950",
    departmentsAr: ["قسم علوم الحياة (البيولوجي)", "قسم الكيمياء التطبيقية", "قسم الفيزياء والنانوتكنولوجي"],
    departmentsEn: ["Department of Biology", "Applied Chemistry", "Physics & Nanotechnology"],
    descriptionAr: "أبحاث علمية رصينة ومختبرات تخصصية تعمل على ربط العلوم النظرية بالتطبيقات العملية في معالجة المياه ومكافحة الأوبئة.",
    descriptionEn: "Pioneering pure sciences and nanotechnology research with specialized labs addressing biochemical analyses and regional ecology challenge studies."
  },
  {
    id: "nursing",
    nameAr: "كلية التمريض",
    nameEn: "College of Nursing",
    minAverage: 62.0,
    tuitionAr: "2,750,000 دينار / سنوي",
    tuitionEn: "2,750,000 IQD / Year",
    icon: "Heart",
    bgGradient: "from-sky-950 to-blue-950",
    departmentsAr: ["التمريض السريري والأساسي", "تمريض الصحة العامة وصحة المجتمع", "تمريض الأمومة والطفولة"],
    departmentsEn: ["Basic & Clinical Nursing", "Public Health & Community Nursing", "Maternal & Child Health Nursing"],
    descriptionAr: "إعداد ملاكات تمريضية مؤهلة لتوفير الرعاية الطبية الفائقة والإسهام الإيجابي في توعية وتطوير المجتمع الصحي العراقي.",
    descriptionEn: "Prepares nursing professionals capable of offering patient-focused premium healthcare and driving national preventive health campaigns."
  },
  {
    id: "law",
    nameAr: "كلية القانون",
    nameEn: "College of Law",
    minAverage: 57.0,
    tuitionAr: "1,600,000 دينار / سنوي",
    tuitionEn: "1,600,000 IQD / Year",
    icon: "Scale",
    bgGradient: "from-warm-gray-900 to-amber-950",
    departmentsAr: ["فرع القانون العام", "فرع القانون الخاص"],
    departmentsEn: ["Public Law Department", "Private Law Department"],
    descriptionAr: "تأهيل كوادر حقوقية وقضائية قادرة على إعلاء سلطة القانون وصياغة التشريعات القانونية ومستعدة للتحديات القانونية المعاصرة.",
    descriptionEn: "Nurturing outstanding legal minds, corporate advisors, and future judges equipped with deep comprehension of national legislation and international law."
  },
  {
    id: "physical-ed",
    nameAr: "كلية التربية البدنية وعلوم الرياضة",
    nameEn: "College of Physical Education",
    minAverage: 55.0,
    tuitionAr: "1,200,000 دينار / سنوي",
    tuitionEn: "1,200,000 IQD / Year",
    icon: "Trophy",
    bgGradient: "from-emerald-950 to-slate-900",
    departmentsAr: ["تدريس الألعاب الفردية والجماعية", "الفسلجة الرياضية والتدريب", "الإدارة والتنظيم الرياضي"],
    departmentsEn: ["Individual & Team Sports Instruction", "Sports Physiology & Training", "Sports Organization & Management"],
    descriptionAr: "تهتم بتنشئة جيل رياضي أكاديمي، يضم ملاعب أولمبية مغلقة وصالات تدريب معتمدة دولياً ومسارات تأهيل بدني متقدم للطلبة والفرق الرياضية.",
    descriptionEn: "Fostering athletic leadership through certified courses, and Olympic-grade sports structures, providing expert physical therapy and sports training."
  },
  {
    id: "tech-inst",
    nameAr: "المعهد التقني",
    nameEn: "Technical Institute",
    minAverage: 55.0,
    tuitionAr: "1,400,000 دينار / سنوي",
    tuitionEn: "1,400,000 IQD / Year",
    icon: "Cpu",
    bgGradient: "from-violet-950 to-blue-950",
    departmentsAr: ["قسم تقنيات أنظمة الحاسوب", "قسم المحاسبة المالي", "قسم التقنيات المختبرية"],
    departmentsEn: ["Computer Systems Technologies", "Financial Accounting", "Laboratory Techniques"],
    descriptionAr: "معهد مهني يركز على التطبيقات الميدانية والمهارات والتقنيات لتخريج كوادر وسيطة ذات مستويات أدائية ممتازة.",
    descriptionEn: "A vocational training division designed to bridge the practical skills gap, building technical talent ready for direct entry into the job market."
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    titleAr: "رئيس جامعة العين العراقية يفتتح مركز الأبحاث النانوية الأحدث في الفرات الأوسط",
    titleEn: "President of Al-Ayen University Opens the Most Modern Nanotechnology Research Center",
    categoryAr: "أبحاث علمية",
    categoryEn: "Scientific Research",
    date: "2026-06-10",
    summaryAr: "افتتح معالي رئيس الجامعة الدكتور شفيق شاكر المولى مركز الأبحاث النانوية والبيولوجية المتطورة، الهادف لربط البحث العلمي للأستاذة بصناعات الأدوية الفعالة وتطوير تكنولوجيا معالجة المياة ومكافحة الأورام الخبيثة.",
    summaryEn: "President Prof. Dr. Shafik Shaker Al-Mawla inaugurated the advanced Nanological and Bio-research facility, designed to foster academic innovations in eco-purification and high-targeting cancer drug delivery systems.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-2",
    titleAr: "تصنيف التايمز العالمي تدرج جامعة العين بالمرتبة الأولى كأفضل جامعة أهلية عراقية لعام 2026",
    titleEn: "Times Higher Education Ranks Al-Ayen University First Among Iraqi Private Universities",
    categoryAr: "تصنيفات عالمية",
    categoryEn: "Global Rankings",
    date: "2026-06-05",
    summaryAr: "أعلنت هيئة تصنيف التايمز للتنمية المستدامة فوز جامعة العين بالمركز الأول محلياً على مستوى الجامعات والكليات الأهلية وضمن المراتب المتقدمة عالمياً في مؤشر جودة التعليم ونظافة البيئة الحرمية الأكاديمية.",
    summaryEn: "The Times Higher Education (THE) Impact Rankings announced Al-Ayen University as the leading private institution in Iraq, reflecting its persistent efforts in clean energy and high-quality educational infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-3",
    titleAr: "كلية طب الأسنان تطلق حملتها السنوية الكبرى لعلاج الأيتام والعوائل المتعففة مجاناً",
    titleEn: "College of Dentistry Launches Annual Free Dental Care Campaign for Orphans and Low-Income Families",
    categoryAr: "خدمة المجتمع",
    categoryEn: "Community Service",
    date: "2026-05-28",
    summaryAr: "في إطار مبادراتها المجتمعية، نظمت العيادات التعليمية لكلية طب الأسنان حملة صحية مستدامة للأطفال الأيتام والعوائل ذات الدخل المحدود لتقديم خدمات الفحص وحشو وعلاج وزراعة الأسنان بالكامل دون أي رسوم.",
    summaryEn: "Aligning with its community framework, the academic polyclinics at the College of Dentistry launched a sustainable dental health initiative, offering comprehensive clinical care, treatment, and surgery absolutely free of charge.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-4",
    titleAr: "جامعة العين العراقية تبرم اتفاقية تبادل ثقافي متكامل مع جامعات بريطانية وأوروبية رصينة",
    titleEn: "Al-Ayen University Establishes Dual-Degree & Exchange Programmes with Prestigious European Universities",
    categoryAr: "شراكات أكاديمية",
    categoryEn: "Academic Alliances",
    date: "2026-05-15",
    summaryAr: "لتعزيز البحث المشترك وزمالات طلبة الدراسات الطبية والهندسية المتقدمة، وقعت الجامعة وثيقة تعاون استراتيجي مع جامعات بريطانية مرموقة، مما يتيح التبادل الفوري للمحاضرين وفرص التدريب المشتركة.",
    summaryEn: "To facilitate global exchange and shared scientific output for medical and smart engineering cohorts, Al-Ayen has formalised a bilateral educational fellowship pact with key British and European academic hubs.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
  }
];

export const RANKINGS_DATA: RankingItem[] = [
  {
    nameAr: "تصنيف التايمز العالمي للتأثير (THE Impact)",
    nameEn: "Times Higher Education Impact Rankings",
    rankAr: "المرتبة الأولى محلياً للجامعات الأهلية",
    rankEn: "Ranked 1st Nationally (Private Universities)",
    year: "2025 - 2026",
    descriptionAr: "حققت الجامعة رقماً قياسياً في مؤشرات جودة التعليم والمحافظة على طاقة نظيفة والإيفاء بأهداف التنمية المستدامة للأمم المتحدة.",
    descriptionEn: "Al-Ayen excels in Sustainable Development Goals (SDGs), especially Quality Education, Health, and Affordable Clean Energy frameworks.",
    iconName: "Award"
  },
  {
    nameAr: "تصنيف ويبوميتركس الدولي لمستودعات البحوث",
    nameEn: "Webometrics Ranking of World Universities",
    rankAr: "ضمن أفضل 15 جامعة حكومية وأهلية في العراق",
    rankEn: "Top 15 Institutions (Public & Private) in Iraq",
    year: "2026",
    descriptionAr: "يقيس مدى وضوح الرؤية العلمية للجامعة وعدد البحوث المنشورة والمستشهد بها عالمياً في قواعد البيانات الدولية الرصينة.",
    descriptionEn: "Measures visibility, transparency, and research excellence by tracking thousands of peer-reviewed journal papers indexed internationally.",
    iconName: "Globe"
  },
  {
    nameAr: "تصنيف الـ UI GreenMetric العالمي للحرم الأخضر",
    nameEn: "UI GreenMetric World University Rankings",
    rankAr: "المرتبة الأولى في منطقة الفرات الأوسط للحرم الذكي",
    rankEn: "1st in Middle Euphrates Region (Smart Campus)",
    year: "2025",
    descriptionAr: "تصنيف دولي يقيم الحرم الجامعي حسب توفير المساحات الخضراء، إدارة استهلاك المياه والكهرباء، والبنية التحتية الصديقة للمحيط البيئي والمستدامة.",
    descriptionEn: "Highlights Al-Ayen's high scores in ecological infrastructure, water preservation, public wellness and reduction of carbon-footprint.",
    iconName: "Leaf"
  }
];

export const UNIVERSITY_STATS = {
  students: { count: "12,000+", labelAr: "طالب وطالبة", labelEn: "Students enrolled" },
  professors: { count: "650+", labelAr: "عضو هيئة تدريسية", labelEn: "Distinguished Faculty" },
  research: { count: "3,800+", labelAr: "بحث منشور عالمياً", labelEn: "Scopus Research Papers" },
  years: { count: "2017", labelAr: "سنة التأسيس", labelEn: "Year of Founding" }
};
