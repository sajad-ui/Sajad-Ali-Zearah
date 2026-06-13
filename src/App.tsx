import React, { useState, useEffect } from 'react';
import { 
  Menu, X, BookOpen, GraduationCap, Building, Award, HeartPulse, 
  Stethoscope, Pill, HardHat, Activity, FlaskConical, Heart, Scale, 
  Trophy, Cpu, Globe, Leaf, Search, ArrowLeftRight, ChevronRight, 
  MapPin, Phone, Mail, Sparkles, ExternalLink, Users, Bookmark, FileText, ChevronLeft
} from 'lucide-react';
import { COLLEGES_DATA, NEWS_DATA, RANKINGS_DATA, UNIVERSITY_STATS, College, NewsItem } from './data';
import { ClockWidget } from './components/ClockWidget';
import { AdmissionCalculator } from './components/AdmissionCalculator';
import { CampusTour } from './components/CampusTour';
import { AlAyenLogo } from './components/AlAyenLogo';
import { InteractiveWaveBackground } from './components/InteractiveWaveBackground';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>('all');
  const [newsSearchTerm, setNewsSearchTerm] = useState<string>('');
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  // Synchronize document orientation with the active language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' 
      ? 'جامعة العين العراقية | صرح أكاديمي رائد' 
      : 'Al-Ayen Iraqi University | Leading Academic Institution';
  }, [lang]);

  // Rotatory high-end academic announcement headlines
  const announcements = lang === 'ar' ? [
    "شؤون قبول الطلاب: بوابات التقديم والقبول المركزي لعام 2026 مفتوحة وعبر الأثير بالكامل حالياً.",
    "الإنجاز العراقي الرائد: جامعة العين تتلقى شكر رئيس الوزراء لمساهماتها بأبحاث النانو المتقدمة.",
    "شراكة دولية: توقيع بروتوكولات الزمالة في طب وجراحة الفم والأسنان مع الهيئات الملكية ببريطانيا."
  ] : [
    "Registrar Board: Unified digital portal for autumn 2026 admissions is now active state-wide.",
    "National Honor: Prime Minister commends Al-Ayen's genomic studies and clean campus indices.",
    "Royal Fellowships: Inception of clinical oral surgery internships alongside British Royal boards."
  ];

  useEffect(() => {
    const slideDuration = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(slideDuration);
  }, [announcements.length]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const getIcon = (iconName: string) => {
    const size = 22;
    const style = "text-oxford-gold";
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className={style} size={size} />;
      case 'Pill': return <Pill className={style} size={size} />;
      case 'HeartPulse': return <HeartPulse className={style} size={size} />;
      case 'HardHat': return <HardHat className={style} size={size} />;
      case 'Activity': return <Activity className={style} size={size} />;
      case 'FlaskConical': return <FlaskConical className={style} size={size} />;
      case 'Heart': return <Heart className={style} size={size} />;
      case 'Scale': return <Scale className={style} size={size} />;
      case 'Trophy': return <Trophy className={style} size={size} />;
      case 'Cpu': return <Cpu className={style} size={size} />;
      case 'Award': return <Award className={style} size={size} />;
      case 'Globe': return <Globe className={style} size={size} />;
      case 'Leaf': return <Leaf className={style} size={size} />;
      default: return <GraduationCap className={style} size={size} />;
    }
  };

  // Filter News
  const filteredNews = NEWS_DATA.filter((news) => {
    const categoryMatches = selectedNewsCategory === 'all' || 
      (selectedNewsCategory === 'research' && ['أبحاث علمية', 'Scientific Research'].includes(news.categoryAr) || ['أبحاث علمية', 'Scientific Research'].includes(news.categoryEn)) ||
      (selectedNewsCategory === 'rankings' && ['تصنيفات عالمية', 'Global Rankings'].includes(news.categoryAr) || ['تصنيفات عالمية', 'Global Rankings'].includes(news.categoryEn)) ||
      (selectedNewsCategory === 'society' && ['خدمة المجتمع', 'Community Service'].includes(news.categoryAr) || ['خدمة المجتمع', 'Community Service'].includes(news.categoryEn));

    const query = newsSearchTerm.toLowerCase();
    const textMatches = !newsSearchTerm || 
      news.titleAr.toLowerCase().includes(query) || 
      news.titleEn.toLowerCase().includes(query) ||
      news.summaryAr.toLowerCase().includes(query) ||
      news.summaryEn.toLowerCase().includes(query);

    return categoryMatches && textMatches;
  });

  return (
    <div className={`min-h-screen font-sans flex flex-col justify-between selection:bg-oxford-gold selection:text-oxford-blue ${lang === 'ar' ? 'font-sans' : 'font-sans'} relative overflow-hidden`}>
      
      {/* Dynamic Cursor-responsive Waves and Spawning Ripples Background */}
      <InteractiveWaveBackground />

      {/* 1. CLOCK & CAMPUS ACTIVE STATUS TICKER */}
      <ClockWidget lang={lang} />

      {/* 2. MAJESTIC DESKTOP HERO NAVIGATION BAR (Oxford Crest & Structure) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-oxford-blue/10 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          
          {/* Logo Brand Frame with Authentic Al-Ayen Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-10">
            <AlAyenLogo className="w-12 h-12" color="#002147" />

            {/* Bilingual Display Name of Al-Ayen */}
            <div className="flex flex-col text-start">
              <span className="font-serif font-extrabold text-base md:text-lg text-oxford-blue leading-tight tracking-wide border-b border-oxford-gold/35 group-hover:text-alayen-green transition-colors">
                {lang === 'ar' ? 'جامعة العين العراقية' : 'AL-AYEN UNIVERSITY'}
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-wider font-bold">
                {lang === 'ar' ? 'صرح جامعي عراقي عريق بتصميم أكسفورد' : 'Iraqi Prestigious Heritage • Est. 2017'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Oxford Layout) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-700 tracking-wider uppercase">
            <a href="#about" className="hover:text-oxford-gold hover:underline transition-all">
              {lang === 'ar' ? 'عن الجامعة' : 'About'}
            </a>
            <a href="#colleges-grid-view" className="hover:text-oxford-gold hover:underline transition-all">
              {lang === 'ar' ? 'الكليات والتحضير' : 'Colleges'}
            </a>
            <a href="#rankings-timeline" className="hover:text-oxford-gold hover:underline transition-all">
              {lang === 'ar' ? 'الريادة والتصنيفات' : 'Rankings'}
            </a>
            <a href="#admissions-calculator" className="hover:text-oxford-gold hover:underline transition-all text-alayen-green bg-alayen-green/5 px-2.5 py-1 rounded">
              {lang === 'ar' ? 'حاسبة القبول والمعدلات' : 'Eligibility Tools'}
            </a>
            <a href="#news-portal" className="hover:text-oxford-gold hover:underline transition-all">
              {lang === 'ar' ? 'الأخبار والأبحاث' : 'Publications'}
            </a>
            <a href="#campus-showcase" className="hover:text-oxford-gold hover:underline transition-all">
              {lang === 'ar' ? ' جولة المعالم' : 'Campus Infrastructure'}
            </a>
          </nav>

          {/* Right Action Widgets (Lang Switch, CTA) */}
          <div className="flex items-center gap-3">
            {/* Lang Switch Button */}
            <button 
              id="lang-switch-toggle"
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded border border-oxford-blue text-xs font-bold flex items-center gap-1.5 hover:bg-oxford-blue hover:text-white transition-all cursor-pointer relative overflow-hidden"
              title="Toggle Bilingual/عربي"
            >
              <Globe size={13} className="animate-spin-slow" style={{ animationDuration: '10s' }} />
              <span className="font-serif">{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Quick Admissions Button */}
            <a 
              href="#inquiry"
              className="bg-oxford-blue hover:bg-oxford-gold text-white hover:text-oxford-blue px-3.5 py-1.5 md:px-4 md:py-2 text-xs font-bold rounded shadow transition-all duration-300 hidden sm:inline-block font-serif text-center uppercase tracking-wider"
            >
              {lang === 'ar' ? 'التقديم الفوري حجز مقعد' : 'Apply to 2026'}
            </a>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-600 hover:text-oxford-blue hover:bg-gray-100 rounded lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 3. ROTATORY HEADLINE TELEVISION TICKER */}
        <div className="bg-oxford-blue text-white py-1.5 px-4 overflow-hidden text-xs relative flex items-center">
          <div className="z-10 bg-oxford-gold text-oxford-blue font-bold px-2 py-0.5 rounded mr-3 text-[10px] uppercase tracking-widest shrink-0">
            {lang === 'ar' ? 'عاجل أكاديمي' : 'Bulletin'}
          </div>
          <div className="w-full relative h-4 overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500 transform-none select-none text-gray-200 truncate font-semibold font-sans">
              {announcements[announcementIndex]}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Sidebar */}
        {mobileMenuOpen && (
          <div className="lg:hidden p-4 bg-white border-t border-gray-100 flex flex-col gap-3 font-semibold text-xs text-gray-700 animate-fade-in-up shadow">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-oxford-blue">
              {lang === 'ar' ? 'عن الجامعة' : 'About Al-Ayen'}
            </a>
            <a href="#colleges-grid-view" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-oxford-blue">
              {lang === 'ar' ? 'كليات الجامعة المعتمدة' : 'Academic Colleges'}
            </a>
            <a href="#rankings-timeline" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-oxford-blue">
              {lang === 'ar' ? 'الريادة والتصنيفات الدولية' : 'World Rankings'}
            </a>
            <a href="#admissions-calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 text-alayen-green font-bold">
              {lang === 'ar' ? 'حاسبة القبول والمعدلات لعام 2026' : 'Eligibility & Tuition Calculator'}
            </a>
            <a href="#news-portal" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-oxford-blue">
              {lang === 'ar' ? 'الأخبار والبحوث العلمية' : 'News & Publications'}
            </a>
            <a href="#campus-showcase" onClick={() => setMobileMenuOpen(false)} className="py-2 text-oxford-blue">
              {lang === 'ar' ? 'جولة الحرم الجامعي' : 'Campus Landmarks'}
            </a>
          </div>
        )}
      </header>

      {/* 4. HERITAGE HERO STAGE (Deep Oxford Blue & Historic Architecture) */}
      <section id="about" className="relative bg-gradient-to-br from-oxford-navy via-oxford-blue to-[#133d6b] text-white py-16 md:py-24 overflow-hidden border-b-8 border-oxford-gold">
        
        {/* Academic Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 font-serif text-[14vw] pointer-events-none select-none leading-none tracking-widest font-black">
          AL-AYEN UNIVERSITY
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Slogan & Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-oxford-gold/15 text-oxford-gold px-3.5 py-1 rounded-full text-xs font-bold border border-oxford-gold/30">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>
                {lang === 'ar' ? 'رؤية معمارية وأكاديمية مستوحاة من عراقة أكسفورد' : 'Aesthetic legacy aligned with Oxford excellence'}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight pt-2">
              {lang === 'ar' ? (
                <>
                  منارة المعرفة في الفرات الأوسط <br/>
                  <span className="text-oxford-gold">وريادة البحث وتكنولوجيا المستقبل</span>
                </>
              ) : (
                <>
                  Southern Iraq’s Flagship Hub <br/>
                  <span className="text-oxford-gold">for Global Research & Medicine</span>
                </>
              )}
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              {lang === 'ar' ? (
                "جامعة العين العراقية؛ تأسست عام ٢٠١٧ بمدينة الناصرية عاصمة محافظة ذي قار العلمية، كرمز للتطور الأكاديمي والتعليم الطبي والهندسي الرصين. نجمع بين منهجيات البحث الرصينة وبنية البناء الساحرة لنوفر للأجيال القادمة مهارات استثنائية وعالمية."
              ) : (
                "Al-Ayen University; founded in 2017 in Nasiriyah, Dhi Qar Province, as a vibrant symbol of clinical care medical advancement and high-technology informatics. Merging rich scientific rigor, modern smart infrastructure and community-first clinical programs."
              )}
            </p>

            {/* Quick Action links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a 
                href="#admissions-calculator"
                className="bg-oxford-gold hover:bg-white text-oxford-blue font-serif font-bold text-xs py-3.5 px-6 rounded shadow-lg transition-all duration-300 transform active:scale-97 uppercase tracking-wider"
              >
                {lang === 'ar' ? 'اضغط هنا لحساب معدلك وقبولاتك فوراً' : 'Calibrate Your High-School Average'}
              </a>
              <a 
                href="#colleges-grid-view"
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-serif font-bold text-xs py-3.5 px-6 rounded transition-all duration-300 uppercase tracking-widest"
              >
                {lang === 'ar' ? 'استكشف تخصصات الكليات' : 'Browse Academic Divisions'}
              </a>
            </div>
          </div>

          {/* Majestic Interactive Numbers Panel (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/10 shadow-2xl relative space-y-6">
            <h3 className="font-serif text-base font-bold text-oxford-gold tracking-wider uppercase border-b border-white/10 pb-3 flex items-center justify-between">
              <span>{lang === 'ar' ? 'جامعة العين في أرقام' : 'AUI Key Pillars'}</span>
              <span className="text-[10px] text-gray-400 font-mono">2017 - 2026</span>
            </h3>

            <div className="grid grid-cols-2 gap-6">
              
              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-white block tracking-tight">
                  {UNIVERSITY_STATS.students.count}
                </span>
                <span className="text-xs text-gray-300 font-medium block">
                  {lang === 'ar' ? UNIVERSITY_STATS.students.labelAr : UNIVERSITY_STATS.students.labelEn}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-oxford-gold block tracking-tight">
                  {UNIVERSITY_STATS.professors.count}
                </span>
                <span className="text-xs text-gray-300 font-medium block">
                  {lang === 'ar' ? UNIVERSITY_STATS.professors.labelAr : UNIVERSITY_STATS.professors.labelEn}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-white block tracking-tight">
                  {UNIVERSITY_STATS.research.count}
                </span>
                <span className="text-xs text-gray-300 font-medium block">
                  {lang === 'ar' ? UNIVERSITY_STATS.research.labelAr : UNIVERSITY_STATS.research.labelEn}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-oxford-gold block tracking-tight">
                  {UNIVERSITY_STATS.years.count}
                </span>
                <span className="text-xs text-gray-300 font-medium block">
                  {lang === 'ar' ? UNIVERSITY_STATS.years.labelAr : UNIVERSITY_STATS.years.labelEn}
                </span>
              </div>

            </div>

            <div className="bg-black/20 p-4 rounded text-[11px] text-gray-300 leading-relaxed border-s-4 border-oxford-gold">
              {lang === 'ar' ? (
                "⭐️ تصنف جامعة العين الشريك الأكاديمي الأول لمؤسسة Scopus لنشر المعارف البحثية الطبية والهندسية في جنوب العراق."
              ) : (
                "⭐️ Ranked 1st private entity in research production output globally indexed inside Elsevier Scopus networks in central-south Iraq."
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE ACADEMIC SHIELD AND DYNAMIC ADMISSION CHECKER */}
      <section className="py-12 bg-oxford-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AdmissionCalculator lang={lang} />
        </div>
      </section>

      {/* 6. PRESIDENT MESSAGE SECTION (Editorial Oxford Portrait Layout) */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Framed Academic Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-oxford-gold rounded-lg translate-x-4 translate-y-4 -z-10" />
            
            <div className="border-4 border-oxford-blue rounded-lg bg-gray-50 overflow-hidden shadow-xl aspect-[3/4] relative group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Prof. Dr. Shafik Shaker" 
                className="object-cover w-full h-full object-top transform group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-oxford-blue via-oxford-blue/90 to-transparent p-6 text-white">
                <span className="text-[10px] text-oxford-gold font-bold uppercase tracking-wider block">
                  {lang === 'ar' ? 'رئاسة جامعة العين' : 'Administration Office'}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {lang === 'ar' ? 'الأستاذ الدكتور شفيق شاكر المولى' : 'Prof. Dr. Shafik Shaker Al-Mawla'}
                </h4>
                <p className="text-xs text-gray-300">
                  {lang === 'ar' ? 'رئيس جامعة العين العراقية' : 'Chancellor of Al-Ayen Iraqi University'}
                </p>
              </div>
            </div>
          </div>

          {/* Key Message (7 cols) */}
          <div id="rector-address" className="lg:col-span-7 space-y-6">
            <h4 className="font-serif text-xs font-bold text-oxford-gold uppercase tracking-widest">
              {lang === 'ar' ? 'كلمة رئيس الجامعة الاستراتيجية' : 'Chancellor\'s Keynote'}
            </h4>
            <h2 className="font-serif text-2xl md:text-4xl text-oxford-blue font-bold tracking-tight">
              {lang === 'ar' ? 'نحو تخريج عقليات تبتكر ولا تكتفي بالتكرار' : 'Nurturing Intellects That Innovate, Rather Than Duplicate'}
            </h2>
            
            <div className="relative font-sans text-gray-700 leading-relaxed space-y-4">
              <div className="absolute -top-4 -right-6 font-serif text-8xl text-oxford-gold/15 pointer-events-none">“</div>
              <p className="text-sm">
                {lang === 'ar' ? (
                  "إن بناء الحرم الجامعي لجامعة العين العراقية وفق أرقى الأنماط المعمارية الأبوية المعززة بأحدث متطلبات تكنولوجيا القرن الحادي والعشرين لم يكن ترفاً معمارياً، بل منهجاً لغرس الالتزام والعظمة الأكاديمية والترسيخ العلمي في وجدان طلبتنا وباحثينا."
                ) : (
                  "Constructing Al-Ayen University campus in Nasiriyah in deep alignment with historical academic architectural structures was a conscious pathway. It instills absolute scientific rigor, discipline, and scholarly dignity in our students and researchers."
                )}
              </p>
              <p className="text-sm">
                {lang === 'ar' ? (
                  "لقد وهبنا جل طاقتنا لبناء مستشفيات طب أسنان تخصصية متطورة، ومختبرات تخدير وأشعة ونانوتكنولوجي فريدة في الفرات الأوسط لتحقيق غايتين؛ أولاً: تدريب طلبتنا تدريباً إكلينيكياً رصيناً، وثانياً: الإيفاء بمسؤوليتنا نحو المجتمع العراقي الكريم من خلال تقديم رعاية صحية وطبية مجانية تماماً للمرضى من العوائل الكريمة والأيتام."
                ) : (
                  "We have dedicated immense resources into state-of-the-art dental clinical centers and specialized nanotechnology laboratories with a dual mission: to grant our cohorts unmatched clinical experience, and to fulfill our civic duty by offering top-tier diagnostic services absolutely free of cost to community members and orphans."
                )}
              </p>
            </div>

            {/* Signature & Goals */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="font-serif text-sm">
                <span className="font-bold text-oxford-blue block">أ.د. شفيق شاكر المولى</span>
                <span className="text-xs text-gray-500">
                  {lang === 'ar' ? 'تحت رعاية وزارة التعليم العالي والبحث العلمي' : 'Under the Authority of the MoHE of Iraq'}
                </span>
              </div>
              <div className="border-e-2 border-oxford-gold h-10 mx-2" />
              <div className="flex items-center gap-1.5 bg-alayen-green/10 text-alayen-green px-3 py-1.5 rounded-full text-xs font-semibold">
                <GraduationCap size={15} />
                <span>
                  {lang === 'ar' ? 'هدفنا: التميز البحثي والتعليم المنتج' : 'Fostering Dynamic Science Partnerships'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. HIGHEST ACADEMIC CATEGORY GRID - THE COLLEGES GRID */}
      <section id="colleges-grid-view" className="py-16 bg-oxford-sand/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h4 className="font-serif text-xs font-bold text-oxford-gold uppercase tracking-widest">
              {lang === 'ar' ? 'تخصصات المعرفة والعلوم المتكاملة' : 'The Academic Faculty'}
            </h4>
            <h2 className="font-serif text-3xl md:text-4xl text-oxford-blue font-bold tracking-tight">
              {lang === 'ar' ? 'كليات جامعة العين العراقية المعتمدة' : 'Al-Ayen University Accredited Colleges'}
            </h2>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              {lang === 'ar' 
                ? 'استكشف تخصصات الكليات والأقسام العلمية، الرسوم السنوية، والمسارات الأكاديمية والمشاريع المنشرة لعام 2026.' 
                : 'Browse through our premium clinical, mathematical, and humanitarian faculties delivering accredited bachelor programs.'}
            </p>
          </div>

          {/* Grid Layout of Colleges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLEGES_DATA.map((college) => {
              const baseIcon = getIcon(college.icon);
              return (
                <div 
                  key={college.id} 
                  id={`college-item-${college.id}`}
                  onClick={() => setSelectedCollege(college)}
                  className="bg-white rounded-lg border border-gray-100 hover:border-oxford-gold/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
                >
                  <div className="p-6">
                    {/* College Identity Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                      <div className="p-2.5 rounded bg-oxford-blue/5 group-hover:bg-oxford-blue group-hover:text-white text-oxford-blue transition-colors duration-300">
                        {baseIcon}
                      </div>
                      <span className="text-[11px] font-bold text-alayen-green bg-alayen-green/10 px-2.5 py-1 rounded-full font-mono">
                        {lang === 'ar' ? `معدل %${college.minAverage}` : `Min %${college.minAverage}`}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-oxford-blue group-hover:text-alayen-green transition-colors">
                      {lang === 'ar' ? college.nameAr : college.nameEn}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed font-sans">
                      {lang === 'ar' ? college.descriptionAr : college.descriptionEn}
                    </p>

                    {/* Departments list preview */}
                    <div className="mt-4 pt-3 border-t border-dashed border-gray-100">
                      <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider mb-1.5">
                        {lang === 'ar' ? 'فروع الأقسام المتاحة:' : 'Available Departments:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5 max-h-[80px] overflow-hidden">
                        {(lang === 'ar' ? college.departmentsAr : college.departmentsEn).slice(0, 3).map((dept, idx) => (
                          <span key={idx} className="bg-gray-50 text-[10px] text-gray-600 px-2 py-0.5 rounded border border-gray-100">
                            {dept}
                          </span>
                        ))}
                        {(lang === 'ar' ? college.departmentsAr : college.departmentsEn).length > 3 && (
                          <span className="text-[10px] text-oxford-gold font-bold self-center">
                            +{lang === 'ar' ? 'المزيد' : 'More'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Pricing footer indicators */}
                  <div className="bg-oxford-sand px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs font-sans">
                    <span className="text-gray-400 font-semibold">{lang === 'ar' ? 'القسط الدراسي:' : 'Tuition:'}</span>
                    <span className="text-oxford-blue font-bold tracking-tight">
                      {lang === 'ar' ? college.tuitionAr : college.tuitionEn}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* College Details Dynamic Modal (Overlay) */}
          {selectedCollege && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
              <div 
                className="bg-white rounded-lg border border-oxford-gold/40 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Title Banner */}
                <div className="bg-oxford-blue p-6 md:p-8 text-white relative">
                  <button 
                    onClick={() => setSelectedCollege(null)}
                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded p-1 cursor-pointer transition-colors"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-center gap-3 mb-2">
                    {getIcon(selectedCollege.icon)}
                    <span className="text-[10px] bg-alayen-green text-white font-bold px-2 rounded font-mono uppercase tracking-widest">
                      {lang === 'ar' ? `المعدل المطلوب: %${selectedCollege.minAverage}` : `Required: %${selectedCollege.minAverage}`}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold">
                    {lang === 'ar' ? selectedCollege.nameAr : selectedCollege.nameEn}
                  </h3>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-oxford-gold tracking-widest mb-2 border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
                      <BookOpen size={14} />
                      {lang === 'ar' ? 'نظرة أكاديمية تفصيلية' : 'Academic Profile Description'}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-sans">
                      {lang === 'ar' ? selectedCollege.descriptionAr : selectedCollege.descriptionEn}
                    </p>
                  </div>

                  {/* List of Departments */}
                  <div>
                    <h4 className="text-xs font-bold uppercase text-oxford-gold tracking-widest mb-3 border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
                      <GraduationCap size={14} />
                      {lang === 'ar' ? 'الأقسام والفروع الأكاديمية الصالح للتقديم إليها' : 'Academic Departments & Program Majors'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(lang === 'ar' ? selectedCollege.departmentsAr : selectedCollege.departmentsEn).map((dept, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-oxford-sand border border-gray-100 rounded-md text-xs font-semibold text-oxford-blue">
                          <span className="w-1.5 h-1.5 rounded-full bg-alayen-green" />
                          <span>{dept}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tuition & Cost detail */}
                  <div className="bg-alayen-green/5 border border-alayen-green/15 p-4 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-gray-400 block font-semibold">{lang === 'ar' ? 'الرسوم السنوية الرسمية للعام الدراسي ٢٠٢٦:' : 'Annual Official Tuition for 2026 Academic Year:'}</span>
                      <span className="text-base text-alayen-green font-bold tracking-tight">
                        {lang === 'ar' ? selectedCollege.tuitionAr : selectedCollege.tuitionEn}
                      </span>
                    </div>

                    <a 
                      href="#admissions-calculator"
                      onClick={() => setSelectedCollege(null)}
                      className="bg-oxford-blue hover:bg-oxford-gold text-white hover:text-oxford-blue font-serif font-bold py-2.5 px-4 rounded text-center transition-all duration-200"
                    >
                      {lang === 'ar' ? 'احسب المنح والتخفيض ومؤهل قبولك' : 'Calculate Custom Scholarship'}
                    </a>
                  </div>
                </div>

                {/* Modal footer Close */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedCollege(null)}
                    className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-oxford-blue cursor-pointer"
                  >
                    {lang === 'ar' ? 'إغلاق التفاصيل' : 'Close Academic Details'}
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* 8. PRESTIGIOUS ACCREDITATIONS & TIMELINE */}
      <section id="rankings-timeline" className="py-16 bg-gradient-to-br from-[#0c2f56] to-oxford-navy text-white relative border-y-4 border-oxford-gold">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h4 className="font-serif text-xs font-bold text-oxford-gold uppercase tracking-widest">
              {lang === 'ar' ? 'الريادة الأكاديمية والاعتراف الدولي' : 'Global Standing & Quality Benchmarks'}
            </h4>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-tight">
              {lang === 'ar' ? 'تصنيفات ومراكز جامعة العين الدولية' : 'World University Accreditations & Timelines'}
            </h2>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              {lang === 'ar' 
                ? 'تلتزم جامعة العين بالنشر العلمي الرصين وحيازة الاعتماديات العالمية لتطوير قدرة الخريج العراقي على المنافسة دولياً.' 
                : 'Al-Ayen benchmarks its programs against prestigious global indexes, consistently placing first among regional research portfolios.'}
            </p>
          </div>

          {/* Timeline Cards of Rankings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RANKINGS_DATA.map((rank, i) => (
              <div 
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-oxford-gold/40 transition-all duration-300 relative space-y-4 shadow-xl"
              >
                {/* Large Background Counter */}
                <span className="absolute top-4 right-4 text-oxford-gold text-xs font-mono font-bold uppercase tracking-widest border border-oxford-gold/20 px-2 py-0.5 rounded">
                  {rank.year}
                </span>

                <div className="p-2.5 rounded bg-oxford-gold/15 text-oxford-gold inline-block">
                  {rank.iconName === 'Award' ? <Award size={24} /> : rank.iconName === 'Globe' ? <Globe size={24} /> : <Leaf size={24} />}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-base font-bold text-gray-100">
                    {lang === 'ar' ? rank.nameAr : rank.nameEn}
                  </h3>
                  <span className="text-xs text-oxford-gold font-bold block">
                    {lang === 'ar' ? rank.rankAr : rank.rankEn}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {lang === 'ar' ? rank.descriptionAr : rank.descriptionEn}
                </p>
              </div>
            ))}
          </div>

          {/* Web of Science citation info */}
          <div className="bg-black/20 border border-white/5 rounded-lg p-6 md:p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs text-oxford-gold font-bold uppercase tracking-widest font-mono">
                {lang === 'ar' ? 'قاعدة بيانات Elsevier Scopus' : 'Scopus Analytics 2026'}
              </span>
              <h3 className="font-serif text-xl font-bold">
                {lang === 'ar' ? 'المساهم العلمي رقم ١ للجامعات الأهلية العراقية' : 'The #1 Scientific Developer in Private Higher Education in Iraq'}
              </h3>
              <p className="text-xs text-gray-300 max-w-2xl font-sans">
                {lang === 'ar' 
                  ? 'بعدد بحوث سريرية وهندسية يتخطى الـ ٣٨٠٠ ورقة منشورة ومستشهد بها، تتفرد جامعة العين بصناعة منافذ المعرفة الأكاديمية ومشاريع النانوتكنولوجي بجنوب العراق بالتشارك مع دور النشر العالمية.' 
                  : 'With an outstanding catalog exceeding 3,800 peer-reviewed journal papers, Al-Ayen dominates critical informatics and nanotech indexes, elevating sovereign research assets.'}
              </p>
            </div>
            <a 
              href="https://scopus.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-oxford-gold hover:bg-white text-oxford-blue px-5 py-3 rounded font-serif font-bold text-xs whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{lang === 'ar' ? 'عرض السجل البحثي في سكوبس' : 'Verify Scopus Portfolio'}</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* 9. ACADEMIC NEWS & PRESS RELEASES PORTAL */}
      <section id="news-portal" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <h4 className="font-serif text-xs font-bold text-oxford-gold uppercase tracking-widest">
                {lang === 'ar' ? 'المركز الصحفي والنشاط العام' : 'Press & Academic Publications'}
              </h4>
              <h2 className="font-serif text-3xl md:text-4xl text-oxford-blue font-bold tracking-tight">
                {lang === 'ar' ? 'آخر المستجدات والإنجازات العلمية' : 'Al-Ayen Information Hub & Press'}
              </h2>
            </div>

            {/* News Categories Filters */}
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { id: 'all', ar: 'جميع الأخبار', en: 'Show All' },
                { id: 'research', ar: 'أبحاث علمية', en: 'Research' },
                { id: 'rankings', ar: 'تصنيفات دولية', en: 'Rankings' },
                { id: 'society', ar: 'خدمة المجتمع', en: 'Community Service' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedNewsCategory(category.id)}
                  className={`px-3 py-1.5 rounded font-semibold transition-all duration-200 border ${
                    selectedNewsCategory === category.id 
                      ? 'bg-oxford-blue text-white border-oxford-blue' 
                      : 'bg-oxford-sand text-gray-700 border-gray-200 hover:border-oxford-gold hover:text-oxford-blue'
                  }`}
                >
                  {lang === 'ar' ? category.ar : category.en}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar inside news */}
          <div className="relative max-w-md mb-8">
            <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder={lang === 'ar' ? 'بحث سريع في الأخبار العاجلة...' : 'Search news headlines...'}
              value={newsSearchTerm}
              onChange={(e) => setNewsSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-oxford-gold text-start"
            />
          </div>

          {/* Dynamic News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((news) => (
              <div 
                key={news.id}
                className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
              >
                {/* News Image Block (5 cols) */}
                <div className="sm:col-span-5 relative h-48 sm:h-auto">
                  <img 
                    src={news.imageUrl} 
                    alt={lang === 'ar' ? news.titleAr : news.titleEn}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-oxford-blue text-white text-[9px] font-bold tracking-wider rounded px-2 py-0.5 shadow">
                    {lang === 'ar' ? news.categoryAr : news.categoryEn}
                  </div>
                </div>

                {/* News Copy block (7 cols) */}
                <div className="sm:col-span-12 p-4 sm:col-span-7 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono font-bold block">{news.date}</span>
                    <h3 className="font-serif text-sm font-bold text-oxford-blue leading-tight hover:text-oxford-gold cursor-pointer">
                      {lang === 'ar' ? news.titleAr : news.titleEn}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed font-sans">
                      {lang === 'ar' ? news.summaryAr : news.summaryEn}
                    </p>
                  </div>

                  <a 
                    href="#news-portal"
                    onClick={() => alert(lang === 'ar' ? `${news.titleAr}\n\nبيان التفاصيل الكاملة متوفر ضمن قسم العلاقات الثقافية في جامعة العين` : `${news.titleEn}\n\nFull transcript available at registrar board bulletin.`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-oxford-gold hover:text-oxford-blue"
                  >
                    <span>{lang === 'ar' ? 'اقرأ المقال بالكامل' : 'Read Full Release'}</span>
                    {lang === 'ar' ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                  </a>
                </div>
              </div>
            ))}
            
            {filteredNews.length === 0 && (
              <div className="col-span-2 text-center py-12 text-gray-400 text-sm">
                ⚠️ {lang === 'ar' ? 'لا توجد نتائج بحث تطابق مدخلاتك.' : 'No news found matching your parameters.'}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 10. INTERACTIVE TOUR AND DIRECT INQUIRY OFFICE */}
      <section className="py-16 bg-oxford-sand/60 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <CampusTour lang={lang} />
        </div>
      </section>

      {/* 11. ROYAL OXFORD COLOR-SCHEME COHESIVE FOOTER FOOTNOTE */}
      <footer className="bg-oxford-navy text-white pt-16 pb-8 border-t-8 border-oxford-gold">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 pb-12 mb-8">
          
          {/* Logo brand grid info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* Authentic Al-Ayen Crest Symbol */}
              <AlAyenLogo className="w-10 h-10" color="#c5a059" />

              <div>
                <h4 className="font-serif font-bold text-sm tracking-wide text-oxford-gold">
                  {lang === 'ar' ? 'جامعة العين العراقية' : 'AL-AYEN IRAQI UNIVERSITY'}
                </h4>
                <span className="text-[9px] text-gray-400 font-mono text-start block">
                  {lang === 'ar' ? 'ذي قار، الناصرية - جمهورية العراق' : 'Dhi Qar, Nasiriyah, Republic of Iraq'}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              {lang === 'ar' 
                ? 'مؤسسة أكاديمية عراقية خاصة معترفة رسمياً من وزارة التعليم العالي والبحث العلمي العراقية، تأسست لتقديم أعلى معايير الريادة التكنولوجية والتعليم السريري.' 
                : 'An elite private university officially accredited by the Ministry of Higher Education and Scientific Research of the Republic of Iraq, offering supreme global research parameters.'}
            </p>
          </div>

          {/* Quick links columns (2 cols) */}
          <div className="md:col-span-2 space-y-4 text-xs font-sans">
            <h5 className="font-semibold text-oxford-gold uppercase tracking-wider">
              {lang === 'ar' ? 'الأقسام السريعة' : 'Major Divisions'}
            </h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">{lang === 'ar' ? 'عن الجامعة' : 'University Overview'}</a></li>
              <li><a href="#colleges-grid-view" className="hover:text-white">{lang === 'ar' ? 'كلياتنا ومعدلاتها' : 'Colleges Catalog'}</a></li>
              <li><a href="#rankings-timeline" className="hover:text-white">{lang === 'ar' ? 'الاعتماديات والريادة' : 'Accreditations'}</a></li>
              <li><a href="#admissions-calculator" className="hover:text-white">{lang === 'ar' ? 'حاسبة القبول الرقمية' : 'Student Eligibility'}</a></li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-4 text-xs font-sans">
            <h5 className="font-semibold text-oxford-gold uppercase tracking-wider">
              {lang === 'ar' ? 'أمانة التسجيل والاتصال' : 'Admissions Inquiry Portal'}
            </h5>
            <ul className="space-y-2.5 text-gray-400">
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-oxford-gold shrink-0" />
                <span className="text-start">{lang === 'ar' ? 'العراق، الناصرية، الطريق السريع' : 'Highways, Nasiriyah city, Iraq'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-oxford-gold shrink-0" />
                <span className="font-mono text-start">07800060303 / 07800060404</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-oxford-gold shrink-0" />
                <span className="font-mono text-start">sajad@alayen.edu.iq</span>
              </li>
            </ul>
          </div>

          {/* Community Care declaration (3 cols) */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h5 className="font-semibold text-oxford-gold uppercase tracking-wider">
              {lang === 'ar' ? 'مبادرة الخدمة المجانية' : 'Civic Responsibility'}
            </h5>
            <p className="text-gray-400 leading-relaxed font-sans">
              {lang === 'ar' 
                ? 'تلتزم كلية طب الأسنان بتقديم كافة المعالجات والعمليات السنية لأبناء شهداء القوات الأمنية، الحشد الشعبي، والأيتام مجاناً بنسبة ١٠٠٪.' 
                : 'Our Dentistry clinics provide dental operations and general cosmetic corrections to families of security forces, martyrs, and orphans free of charge.'}
            </p>
          </div>

        </div>

        {/* Closing copyright footnote */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center text-xs text-gray-500 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 {lang === 'ar' ? 'جامعة العين العراقية. كافة الحقوق محفوظة لأمانة النظم الإلكترونية' : 'Al-Ayen Iraqi University. State rights reserved.'}
          </p>
          <div className="flex items-center gap-4 text-[10px] text-gray-600">
            <span>{lang === 'ar' ? 'تم التصميم بالتزامن العالي مع أكسفورد' : 'Designed in compliance with Oxford Digital templates'}</span>
            <span>•</span>
            <span>{lang === 'ar' ? 'وزارة التعليم العالي والبحث العلمي العراقية' : 'Iraqi MoHE Accredited'}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
