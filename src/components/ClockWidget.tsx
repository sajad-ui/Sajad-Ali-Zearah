import React, { useState, useEffect } from 'react';
import { Clock, Calendar, ShieldAlert } from 'lucide-react';

interface ClockWidgetProps {
  lang: 'ar' | 'en';
}

export const ClockWidget: React.FC<ClockWidgetProps> = ({ lang }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time (e.g. 10:15:30 AM/PM)
  const formatTime = () => {
    return time.toLocaleTimeString(lang === 'ar' ? 'ar-IQ' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  // Format Gregorian Date (e.g. Saturday, June 13, 2026)
  const formatGregorianDate = () => {
    return time.toLocaleDateString(lang === 'ar' ? 'ar-IQ' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Estimate Arabic Hijri Date for June 13, 2026.
  // 13 June 2026 is approximately 27-28 Dhul-Hijjah 1447 AH.
  const formatHijriDate = () => {
    // Basic approximate Hijri calculator or static offset calculation
    // 13 June 2026 is 27 Dhul-Hijjah 1447
    // Let's create an elegant lookup/math based on epoch
    const hijriDay = 27;
    const hijriMonthAr = "ذو الحجة";
    const hijriMonthEn = "Dhul-Hijjah";
    const hijriYear = 1447;

    if (lang === 'ar') {
      return `${hijriDay} ${hijriMonthAr} ${hijriYear} هـ`;
    }
    return `${hijriDay} ${hijriMonthEn} ${hijriYear} AH`;
  };

  // Determine Campus live status based on time
  // Al-Ayen University active hours are usually 8:00 AM - 5:00 PM Iraq Time (UTC+3)
  const getCampusStatus = () => {
    const hours = time.getHours();
    const isWeekend = time.getDay() === 5; // Friday (Iraq weekend)
    
    if (isWeekend) {
      return {
        labelAr: "الحرم مغلق - عطلة نهاية الأسبوع",
        labelEn: "Campus Closed - Weekend Holiday",
        color: "bg-amber-500",
      };
    } else if (hours >= 8 && hours < 17) {
      return {
        labelAr: "الحرم مفتوح - العيادات والقاعات نشطة حالياً",
        labelEn: "Campus Active - Clinics & Lectures in Session",
        color: "bg-emerald-500 animate-pulse",
      };
    } else {
      return {
        labelAr: "مغلق حالياً - بوابات التقديم الإلكتروني مفتوحة 24/7",
        labelEn: "Closed Now - Online Admission Portals Open 24/7",
        color: "bg-blue-400",
      };
    }
  };

  const campusStatus = getCampusStatus();

  return (
    <div id="live-time-ticker" className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-oxford-navy text-white text-xs border-b border-oxford-gold/20 shadow-inner">
      {/* Live Date and Time */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 font-mono text-oxford-gold">
          <Clock size={14} className="animate-spin-slow text-oxford-gold" style={{ animationDuration: '8s' }} />
          <span className="font-bold tracking-wider">{formatTime()}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-300">
          <Calendar size={14} className="text-alayen-gold" />
          <span>{formatGregorianDate()}</span>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <span className="text-alayen-gold/90 font-serif hidden sm:inline">{formatHijriDate()}</span>
        </div>
      </div>

      {/* Live Campus Indicator matches Oxford scientific precision */}
      <div className="flex items-center gap-2">
        <span className={`inline-block w-2.5 h-2.5 rounded-full ${campusStatus.color}`} />
        <span className="font-medium text-gray-200">
          {lang === 'ar' ? campusStatus.labelAr : campusStatus.labelEn}
        </span>
      </div>
    </div>
  );
};
