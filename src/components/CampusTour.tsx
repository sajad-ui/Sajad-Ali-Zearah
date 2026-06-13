import React, { useState } from 'react';
import { MapPin, Compass, Building, Send, CheckCircle2, ChevronRight, Info } from 'lucide-react';

interface CampusTourProps {
  lang: 'ar' | 'en';
}

interface Landmark {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  statAr: string;
  statEn: string;
  imageUrl: string;
}

export const CampusTour: React.FC<CampusTourProps> = ({ lang }) => {
  const [selectedLandmark, setSelectedLandmark] = useState<string>('nano-tower');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collegeInterest: 'medicine',
    message: '',
  });

  const landmarks: Landmark[] = [
    {
      id: 'nano-tower',
      nameAr: "برج أبحاث النانوتكنولوجي والصيدلة الجينية",
      nameEn: "Nanotechnology & Pharmacy Research Tower",
      descAr: "أول صرح علمي تخصصي متقدم في وسط وجنوب العراق يضم مجاهر وبنى صناعية دقيقة لاستخلاص مركبات الأدوية ومعالجة أمراض المنطقة الكروموسومية.",
      descEn: "The premier pharmaceutical and nanostructured research center in Southern Iraq, fostering chemical engineering and highly-targeted clinical therapeutics.",
      statAr: "١٢ مختبر تخصصي حاصل على شهادة الجودة ISO",
      statEn: "12 high-end laboratories holding ISO Quality certifications",
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'dental-hospital',
      nameAr: "المستشفى التعليمي لطب الأسنان",
      nameEn: "Dentistry University Hospital",
      descAr: "طاقة استيعابية كبرى تضم أكثر من ١٥٠ عيادة لتدريب الطلبة سريرياً وتقديم الرعاية الطبية المجانية للآلاف من الأسر المتعففة وأبناء المنطقة.",
      descEn: "A massive state-of-the-art clinical block housing 150+ dental chairs delivering direct dental operations, and charity healthcare programs for civilians.",
      statAr: "تقديم الخدمة الطبية لأكثر من ٢٠ ألف مراجع سنوياً مجاناً",
      statEn: "Serving more than 20,000 public outpatients annually for free",
      imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'olympic-stadium',
      nameAr: "المدينة الرياضية والمسبح الأولمبي المغلق",
      nameEn: "Sports Complex & Indoor Olympic Pool",
      descAr: "بنية تحتية متطورة لكلية التربية البدنية تشتمل على ملاعب مغلقة لكرة القدم، ومسبح أولمبي مدفأ لتدريب الطلاب والمشاركة في بطولات الجامعات العربية.",
      descEn: "Advanced athletic framework featuring standard indoor fields, heated competitive pool facilities and state-level sports training gears.",
      statAr: "مساحة ٢٥ ألف متر مربع مخصصة للرياضات الأولمبية",
      statEn: "25,000 m² dedicated purely to Olympic physical programs",
      imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'central-libs',
      nameAr: "المكتبة المركزية والقاعة الكبرى للمؤتمرات",
      nameEn: "Central Library & Majestic Conference Hall",
      descAr: "تضم آلاف المخطوطات الرقمية والكتب الورقية ومساحة هادئة تخدم طلبة البكالوريوس والدراسات العليا، بجانب قاعة لاستقبال العلماء والمفكرين الدوليين.",
      descEn: "Provides access to rich databases, science journals, and comfortable study rooms, beside an elite hall hosting high-profile international summits.",
      statAr: "أكثر من ٤٥ ألف كتاب ومخطوط تقني متاح رقمياً",
      statEn: "Over 45,000 research articles and academic books digitized",
      imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    // Mimic API post
  };

  const activeLandmark = landmarks.find(l => l.id === selectedLandmark) || landmarks[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Interactive Campus Landmarks (7 cols) */}
      <div id="campus-showcase" className="lg:col-span-7 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h4 className="font-serif text-xl font-bold text-oxford-blue mb-2 flex items-center gap-2">
          <Compass className="text-oxford-gold animate-spin-slow" size={20} style={{ animationDuration: '15s' }} />
          {lang === 'ar' ? 'المعالم التعليمية والصروح الحرمية' : 'The University Campus & Landmarks'}
        </h4>
        <p className="text-xs text-gray-500 mb-6">
          {lang === 'ar' 
            ? 'تتميز جامعة العين بامتلاكها أرقى بيئة معمارية جامعية تنافس جودة البنى التحتية للمؤسسات البريطانية والأوروبية بقلب مدينة الناصرية.' 
            : 'Al-Ayen University features premier academic architectural environments matching top global state-of-the-art parameters.'}
        </p>

        {/* Navigation Landmarks */}
        <div className="flex flex-wrap gap-2 mb-6">
          {landmarks.map((landmark) => (
            <button
              key={landmark.id}
              onClick={() => setSelectedLandmark(landmark.id)}
              className={`px-3 py-2 text-xs rounded-md font-semibold transition-all duration-200 border ${
                selectedLandmark === landmark.id 
                  ? 'bg-oxford-blue text-white border-oxford-blue hover:bg-oxford-navy' 
                  : 'bg-oxford-sand text-gray-700 border-gray-200 hover:border-oxford-gold hover:text-oxford-blue'
              }`}
            >
              {lang === 'ar' ? landmark.nameAr : landmark.nameEn}
            </button>
          ))}
        </div>

        {/* Live Active Showcase Landmark Card */}
        <div className="space-y-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md group">
            <img 
              src={activeLandmark.imageUrl} 
              alt={lang === 'ar' ? activeLandmark.nameAr : activeLandmark.nameEn}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-alayen-green text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow flex items-center gap-1">
              <Building size={12} />
              {lang === 'ar' ? 'مرفق معتمد' : 'Accredited Facility'}
            </div>
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
              <span className="text-xs text-oxford-gold font-bold font-serif uppercase tracking-wider">
                {lang === 'ar' ? 'البنية التحتية الذكية' : 'Smart Architecture'}
              </span>
              <h5 className="font-serif text-lg font-bold">
                {lang === 'ar' ? activeLandmark.nameAr : activeLandmark.nameEn}
              </h5>
            </div>
          </div>

          <div className="bg-oxford-sand/60 p-5 rounded-md border border-oxford-gold/15">
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {lang === 'ar' ? activeLandmark.descAr : activeLandmark.descEn}
            </p>
            <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-between gap-2 text-xs">
              <span className="text-gray-400 font-semibold uppercase tracking-wider">
                {lang === 'ar' ? 'الإحصائية التشغيلية:' : 'Operative Stat:'}
              </span>
              <span className="text-alayen-green font-bold text-end">
                {lang === 'ar' ? activeLandmark.statAr : activeLandmark.statEn}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form (5 cols) */}
      <div id="inquiry" className="lg:col-span-5 bg-gradient-to-br from-oxford-blue to-oxford-navy text-white p-6 md:p-8 rounded-lg shadow-lg relative border border-oxford-gold/15">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <MapPin size={180} />
        </div>

        <h4 className="font-serif text-xl font-bold mb-1 flex items-center gap-2">
          <Compass className="text-oxford-gold" size={20} />
          {lang === 'ar' ? 'طلب التقديم والتواصل المباشر' : 'Admissions Query Office'}
        </h4>
        <p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">
          {lang === 'ar' 
            ? 'سجل اهتمامك الآن من خلال النموذج أدناه ليقوم ممثل من شؤون التسجيل وقبول الطلبة بالاتصال بك وترتيب زيارة ميدانية لك لأقسام كليات جامعة العين العراقية.' 
            : 'Register your interest today. An academic counselor of Al-Ayen University recruitment board will contact you shortly to review guidelines and schedule a private visit.'}
        </p>

        {formSubmitted ? (
          <div className="bg-emerald-950/40 border border-emerald-500/40 p-6 rounded-md text-center text-white flex flex-col items-center justify-center space-y-4 py-12 animate-fade-in-up">
            <CheckCircle2 size={42} className="text-emerald-400" />
            <h5 className="font-serif text-lg font-bold">
              {lang === 'ar' ? 'تم تسجيل اهتمامك بنجاح!' : 'Application Received Successfully!'}
            </h5>
            <p className="text-xs text-gray-300 leading-relaxed">
              {lang === 'ar' 
                ? `شكراً لك، ${formData.name}. تم إرسال طلبك للكلية المعنية. سيقوم أحد مسؤولي التسجيل بالتواصل معك على الرقم ${formData.phone} قريباً.` 
                : `Thank you, ${formData.name}. Your details have been delivered to our admissions desk. A coordinator will dial ${formData.phone} shortly.`}
            </p>
            <button 
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: '', phone: '', email: '', collegeInterest: 'medicine', message: '' });
              }}
              className="text-xs font-semibold text-oxford-gold hover:underline mt-4 cursor-pointer"
            >
              {lang === 'ar' ? 'إرسال طلب جديد إضافي' : 'Submit another query'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {lang === 'ar' ? 'الاسم الثلاثي للطالب' : 'Full Name of Applicant'} <span className="text-red-400">*</span>
              </label>
              <input 
                type="text" 
                name="name"
                required
                placeholder={lang === 'ar' ? 'أدخل اسمك بالكامل' : 'e.g. Hassan Ahmed'}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-oxford-gold placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {lang === 'ar' ? 'رقم الهاتف (الواتساب مفضل)' : 'Phone (WhatsApp pref.)'} <span className="text-red-400">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="077XXXXXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-oxford-gold placeholder-gray-400 font-mono text-start"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-oxford-gold placeholder-gray-400 text-start"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {lang === 'ar' ? 'الكلية أو القسم المرغوب' : 'Division/College of Interest'}
              </label>
              <select 
                name="collegeInterest"
                value={formData.collegeInterest}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-oxford-navy border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-oxford-gold"
              >
                <option value="medicine">{lang === 'ar' ? 'كلية الطب البشري' : 'College of Medicine'}</option>
                <option value="dentistry">{lang === 'ar' ? 'كلية طب الأسنان' : 'College of Dentistry'}</option>
                <option value="pharmacy">{lang === 'ar' ? 'كلية الصيدلة' : 'College of Pharmacy'}</option>
                <option value="engineering">{lang === 'ar' ? 'كلية الهندسة' : 'College of Engineering'}</option>
                <option value="health-tech">{lang === 'ar' ? 'كلية التقنيات الصحية' : 'College of Health'}</option>
                <option value="science">{lang === 'ar' ? 'كلية العلوم' : 'College of Science'}</option>
                <option value="law">{lang === 'ar' ? 'كلية القانون' : 'College of Law'}</option>
                <option value="nursing">{lang === 'ar' ? 'كلية التمريض' : 'College of Nursing'}</option>
                <option value="physical-ed">{lang === 'ar' ? 'التربية البدنية وعلوم الرياضة' : 'College of Physical Education'}</option>
                <option value="tech-inst">{lang === 'ar' ? 'المعهد التقني' : 'Technical Institute'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {lang === 'ar' ? 'سؤالك أو رسالتك الخاصة' : 'Our Counselor Message / Query'}
              </label>
              <textarea 
                name="message"
                rows={3}
                placeholder={lang === 'ar' ? 'تكتب هنا أي استفسارات تخص الأقساط، الأقسام، النقل الاستثنائي...' : 'Write any specific inquiries about payments, credits transfer, schedule...'}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-oxford-gold placeholder-gray-400"
              />
            </div>

            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-oxford-gold hover:bg-white text-oxford-blue font-serif font-bold text-xs py-3 px-6 rounded-md shadow transition-all duration-300 transform active:scale-98 cursor-pointer uppercase tracking-wider"
            >
              <Send size={14} />
              {lang === 'ar' ? 'إرسال الطلب الآمن للتسجيل' : 'Submit Secured Inquiry File'}
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-2 text-[10px] text-gray-400">
          <Info size={12} className="text-oxford-gold flex-shrink-0" />
          <span>
            {lang === 'ar' 
              ? 'تلتزم أمانة القبول بخصوصية سرية ببياناتك بالامتثال لقانون حماية حق الطلاب والتشريعات العراقية لعام ٢٠١٦.' 
              : 'Our Registrar Office values absolute data confidentiality under federal standards.'}
          </span>
        </div>
      </div>
    </div>
  );
};
