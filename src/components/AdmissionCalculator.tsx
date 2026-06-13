import React, { useState, useMemo } from 'react';
import { COLLEGES_DATA, College } from '../data';
import { BadgeCheck, ShieldAlert, Sparkles, HelpCircle, Calculator, Info, FileSpreadsheet, ArrowLeftRight } from 'lucide-react';

interface AdmissionCalculatorProps {
  lang: 'ar' | 'en';
}

export const AdmissionCalculator: React.FC<AdmissionCalculatorProps> = ({ lang }) => {
  const [gpa, setGpa] = useState<number>(82.5);
  const [branch, setBranch] = useState<string>('biology'); // biology, applied, literary, vocational, general_sci
  
  // Special Iraqi discount categories
  const [isMartyrFamily, setIsMartyrFamily] = useState<boolean>(false);
  const [isMedicalStaffChild, setIsMedicalStaffChild] = useState<boolean>(false);
  const [hasSiblingInAlAyen, setHasSiblingInAlAyen] = useState<boolean>(false);

  // Check compatibility of high school branch with college
  const isBranchCompatible = (collegeId: string, studentBranch: string): boolean => {
    switch (collegeId) {
      case 'medicine':
      case 'dentistry':
      case 'pharmacy':
      case 'nursing':
        return ['biology', 'general_sci'].includes(studentBranch);
      case 'health-tech':
        return ['biology', 'general_sci', 'applied'].includes(studentBranch);
      case 'engineering':
        return ['applied', 'biology', 'general_sci'].includes(studentBranch);
      case 'science':
        return ['biology', 'applied', 'general_sci'].includes(studentBranch);
      case 'law':
        return ['literary', 'biology', 'applied', 'general_sci'].includes(studentBranch);
      case 'physical-ed':
        return true; // All branches allowed for sports science in private colleges
      case 'tech-inst':
        return ['biology', 'applied', 'vocational', 'general_sci'].includes(studentBranch);
      default:
        return true;
    }
  };

  // Extract base numerical tuition fee from string
  const parseBaseTuition = (tuitionStr: string): number => {
    // E.g. "7,500,000 دينار / سنوي" -> 7500000
    const numbers = tuitionStr.replace(/[^0-9]/g, '');
    return parseInt(numbers) || 0;
  };

  // Calculate dynamic scholarship & discount tuition
  const calculatedColleges = useMemo(() => {
    return COLLEGES_DATA.map((college) => {
      const compatible = isBranchCompatible(college.id, branch);
      const gradeEligible = gpa >= college.minAverage;
      const eligible = compatible && gradeEligible;

      // Base Tuition calculation
      const baseTuitionValue = parseBaseTuition(college.tuitionAr);

      // Discount rules:
      // High score academic discount:
      let academicDiscountPercent = 0;
      if (gpa >= 95) {
        academicDiscountPercent = 0.15; // 15% off
      } else if (gpa >= 90) {
        academicDiscountPercent = 0.10; // 10% off
      } else if (gpa >= 85) {
        academicDiscountPercent = 0.05; // 5% off
      }

      // Special circumstances stack (capped at 20% total discount according to Iraqi MoHE rules)
      let specialDiscountPercent = 0;
      if (isMartyrFamily) specialDiscountPercent += 0.10; // 10%
      if (isMedicalStaffChild) specialDiscountPercent += 0.05; // 5%
      if (hasSiblingInAlAyen) specialDiscountPercent += 0.05; // 5%

      const totalDiscount = Math.min(0.25, academicDiscountPercent + specialDiscountPercent);
      const discountedValue = Math.round(baseTuitionValue * (1 - totalDiscount));

      // String representation of tuition
      const formatTuition = (val: number) => {
        return val.toLocaleString('en-US') + (lang === 'ar' ? ' دينار عراقي' : ' IQD');
      };

      return {
        ...college,
        compatible,
        gradeEligible,
        eligible,
        discountPercent: Math.round(totalDiscount * 100),
        discountedTuition: formatTuition(discountedValue),
        originalTuitionFormatted: formatTuition(baseTuitionValue),
        gradeDeficit: college.minAverage - gpa,
      };
    });
  }, [gpa, branch, isMartyrFamily, isMedicalStaffChild, hasSiblingInAlAyen, lang]);

  // Aggregate stats
  const eligibleCount = calculatedColleges.filter(c => c.eligible).length;

  return (
    <div id="admissions-calculator" className="bg-white border border-oxford-gold/30 rounded-lg shadow-xl overflow-hidden transition-all duration-300">
      {/* Header Panel (Academic Oxford Accent) */}
      <div className="bg-gradient-to-r from-oxford-blue to-oxford-navy p-6 md:p-8 text-white relative">
        <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-8xl pointer-events-none">AUI</div>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="text-oxford-gold animate-bounce-slow" size={24} />
          <span className="text-xs uppercase tracking-widest text-oxford-gold font-bold">
            {lang === 'ar' ? 'البوابة التفاعلية للطلبة الجدد' : 'Interactive Admissions Portal'}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
          {lang === 'ar' ? 'حاسبة القبول الرقمية ومعدلات 2026' : 'AUI Digital Admission & Scholarship Calculator'}
        </h3>
        <p className="text-gray-300 text-sm mt-2 max-w-2xl font-sans leading-relaxed">
          {lang === 'ar' 
            ? 'تتيح لك هذه الحاسبة المتطورة إمكانية التحقق الفوري من الكليات المتاحة لمعدلك الدراسي فرعك الدراسي وحساب الخصومات الدراسية المعتمدة لجامعة العين لعام 2026.' 
            : 'Check your eligibility criteria for various academic divisions at Al-Ayen University, verify high-school branch compatibility, and estimate standard scholarships.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-gray-100">
        {/* Left Inputs Panel (5 cols) */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-oxford-sand/60 border-e border-gray-100">
          <h4 className="font-serif text-lg font-bold text-oxford-blue mb-6 flex items-center gap-2 border-b border-oxford-gold/20 pb-2">
            <Sparkles size={18} className="text-oxford-gold" />
            {lang === 'ar' ? 'أدخل معلوماتك الدراسية' : 'Enter Your Credentials'}
          </h4>

          {/* GPA/Average selector */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">
                {lang === 'ar' ? 'معدل الثانوية العامة (البكالوريا)' : 'High School Final Average'}
              </label>
              <div className="bg-oxford-blue text-white px-3 py-1 rounded font-mono font-bold text-sm">
                %{gpa.toFixed(1)}
              </div>
            </div>
            
            <input 
              type="range" 
              min="50" 
              max="100" 
              step="0.1" 
              value={gpa} 
              onChange={(e) => setGpa(parseFloat(e.target.value))}
              className="w-full accent-oxford-blue h-2 bg-gray-200 rounded-lg cursor-pointer appearance-none"
            />
            
            <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
              <span>%50</span>
              <span>%75</span>
              <span>%100</span>
            </div>

            <div className="mt-2.5">
              <input 
                type="number" 
                min="50" 
                max="100" 
                step="0.1"
                value={gpa} 
                onChange={(e) => {
                  let val = parseFloat(e.target.value);
                  if (isNaN(val)) val = 50;
                  if (val > 100) val = 100;
                  setGpa(val);
                }}
                className="w-24 px-2 py-1 border border-oxford-gold/40 rounded text-center text-sm font-mono font-bold text-oxford-blue bg-white focus:outline-none focus:ring-2 focus:ring-oxford-gold"
              />
              <span className="text-xs text-gray-500 ms-2 font-sans">
                {lang === 'ar' ? '← يمكنك الكتابة يدوياً بدقة' : '← Or type precisely'}
              </span>
            </div>
          </div>

          {/* High School Branch */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {lang === 'ar' ? 'الفرع الأكاديمي للثانوية العامة' : 'Baccalaureate Academic Branch'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'biology', ar: 'الأحيائي / العلمي', en: 'Biology / Sci' },
                { id: 'applied', ar: 'التطبيقي', en: 'Applied Sci' },
                { id: 'literary', ar: 'الأدبي', en: 'Literary' },
                { id: 'vocational', ar: 'المهني / متميز', en: 'Vocational' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBranch(item.id)}
                  className={`px-3 py-2.5 text-xs text-start rounded-md border font-semibold transition-all duration-200 ${
                    branch === item.id 
                      ? 'bg-oxford-blue text-white border-oxford-blue shadow-md' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-oxford-gold'
                  }`}
                >
                  {lang === 'ar' ? item.ar : item.en}
                </button>
              ))}
            </div>
          </div>

          {/* Special Discounts Checkboxes (Iraqi admissions feature) */}
          <div className="bg-white p-4 rounded-md border border-oxford-gold/20 shadow-sm space-y-4">
            <h5 className="text-xs font-bold uppercase text-oxford-gold tracking-widest flex items-center gap-1.5 border-b border-gray-100 pb-2">
              <Info size={14} />
              {lang === 'ar' ? 'فئات الخصم والدعم الإضافي' : 'Admissions Support Factors'}
            </h5>
            
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={isMartyrFamily}
                onChange={(e) => setIsMartyrFamily(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-oxford-blue rounded cursor-pointer"
              />
              <span className="text-xs text-gray-600 leading-normal">
                {lang === 'ar' ? 'من ذوي الشهداء الدرجة الأولى (خصم رقابي ١٠٪)' : 'Immediate Family of Martyrs (10% standard grant)'}
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={isMedicalStaffChild}
                onChange={(e) => setIsMedicalStaffChild(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-oxford-blue rounded cursor-pointer"
              />
              <span className="text-xs text-gray-600 leading-normal">
                {lang === 'ar' ? 'أبناء الكوادر الطبية والصحية والتدريسية (خصم ٥٪)' : 'Children of Health Sector / Academic Faculty (5% bonus)'}
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={hasSiblingInAlAyen}
                onChange={(e) => setHasSiblingInAlAyen(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-oxford-blue rounded cursor-pointer"
              />
              <span className="text-xs text-gray-600 leading-normal">
                {lang === 'ar' ? 'دي الأخ/الأخت يدرس حالياً في جامعة العين (خصم الأخوة ٥٪)' : 'Having Sibling Currently in Al-Ayen (5% sibling discount)'}
              </span>
            </label>
          </div>

          <div className="mt-6 p-4 rounded-md bg-alayen-green/10 border border-alayen-green/20 text-xs text-alayen-green">
            <p className="leading-relaxed">
              💡 <strong>{lang === 'ar' ? 'ملاحظة هامة:' : 'Notice:'}</strong> {lang === 'ar' 
                ? 'تلتزم جامعة العين العراقية بتوجيهات وزارة التعليم العالي والبحث العلمي بجمهورية العراق. يحصل الطلبة الثلاثة الأوائل المتميزين على الحافز الاستحقاقي بوزارة التعليم للإعفاء الكامل بنسبة 100%.' 
                : 'Top-ranking national students are eligible for direct scholarships granting full tuition waivers up to 100% via national Higher Education ministries.'}
            </p>
          </div>
        </div>

        {/* Right Outcomes Panel (7 cols) */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-6">
              <h4 className="font-serif text-lg font-bold text-oxford-blue">
                {lang === 'ar' ? 'نتائج القبول وفرصك الدراسية' : 'Your Eligibility Forecast'}
              </h4>
              <div className="bg-alayen-green/10 text-alayen-green px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5">
                <BadgeCheck size={16} />
                <span>
                  {lang === 'ar' 
                    ? `مؤهل للتقديم على ${eligibleCount} من أصل ${calculatedColleges.length} كليات` 
                    : `Eligible for ${eligibleCount} of ${calculatedColleges.length} Academic Divisions`}
                </span>
              </div>
            </div>

            {/* List of Colleges Eligibility */}
            <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
              {calculatedColleges.map((college) => {
                const isSelectedAndEligible = college.eligible;
                return (
                  <div 
                    key={college.id} 
                    className={`border rounded-lg p-4 transition-all duration-200 ${
                      isSelectedAndEligible 
                        ? 'border-alayen-green/40 bg-white hover:shadow-md' 
                        : 'border-red-100 bg-red-50/20 opacity-75'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-semibold text-oxford-blue">
                            {lang === 'ar' ? college.nameAr : college.nameEn}
                          </span>
                          <span className="text-xs text-gray-400 font-mono">({lang === 'ar' ? 'معدل القبول:' : 'Req.'} %{college.minAverage})</span>
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-1 max-w-md line-clamp-1">
                          {lang === 'ar' ? college.descriptionAr : college.descriptionEn}
                        </p>
                      </div>

                      {/* Status Badges */}
                      <div>
                        {isSelectedAndEligible ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold px-2 py-1 rounded">
                            <BadgeCheck size={12} />
                            {lang === 'ar' ? 'مؤهل بالقسط المخفض' : 'Eligible'}
                          </span>
                        ) : !college.compatible ? (
                          <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[10px] uppercase font-bold px-2 py-1 rounded whitespace-nowrap">
                            <ArrowLeftRight size={12} />
                            {lang === 'ar' ? 'الفرع غير متطابق' : 'Branch Mismatch'}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-[10px] uppercase font-bold px-2 py-1 rounded whitespace-nowrap">
                            <ShieldAlert size={12} />
                            {lang === 'ar' ? `بحاجة لـ +${college.gradeDeficit.toFixed(1)}%` : `Needs +${college.gradeDeficit.toFixed(1)}%`}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Financial & Duration Details (Only shown if compatible branch) */}
                    {college.compatible && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3 pt-3 border-t border-gray-100 text-xs font-sans">
                        <div>
                          <span className="text-gray-400 block">{lang === 'ar' ? 'سلسلة الرسوم الأصلية:' : 'Original Tuition:'}</span>
                          <span className="font-mono text-gray-600 line-through">{college.originalTuitionFormatted}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-bold text-oxford-blue">
                            {lang === 'ar' ? `قسطك بتخفيض ${college.discountPercent}%:` : `Tuition with ${college.discountPercent}% Off:`}
                          </span>
                          <span className="font-mono text-alayen-green font-bold">{college.discountedTuition}</span>
                        </div>
                        <div className="hidden sm:block">
                          <span className="text-gray-400 block">{lang === 'ar' ? 'مدة الدراسة:' : 'Study Plan:'}</span>
                          <span className="text-oxford-blue font-semibold">
                            {college.id === 'medicine' ? (lang === 'ar' ? '٦ سنوات' : '6 Years')
                             : college.id === 'dentistry' || college.id === 'pharmacy' ? (lang === 'ar' ? '٥ سنوات' : '5 Years')
                             : college.id === 'tech-inst' ? (lang === 'ar' ? 'سنتان دبلوم' : '2 Years (Diploma)')
                             : (lang === 'ar' ? '٤ سنوات بكالوريوس' : '4 Years (BSc)')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action button inside outcomes */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <a 
              href="#inquiry"
              className="w-full inline-flex items-center justify-center gap-2 bg-oxford-blue hover:bg-oxford-gold text-white hover:text-oxford-blue font-serif font-bold text-sm py-3 px-6 rounded-md shadow-md transition-all duration-300 transform active:scale-98"
            >
              <FileSpreadsheet size={16} />
              {lang === 'ar' ? 'تفاصيل حجز مقعد دراسي والتقديم السريع لعام 2026' : 'Secure Campus Seat & Pre-Register for 2026'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
