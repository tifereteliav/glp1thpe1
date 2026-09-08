import React from 'react';
import { Award, CheckCircle2, RefreshCw, FileCheck2, Sparkles, BookOpen, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Stage4Summary({ data, patient, onRestart, score }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{
        padding: '36px 30px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(224,242,254,0.9) 100%)',
        border: '2px solid rgba(2, 132, 199, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ background: '#e0f2fe', padding: '16px', borderRadius: '50%', color: '#0284c7' }}>
            <Award size={42} />
          </div>
        </div>
        <span className="badge badge-gold" style={{ fontSize: '1rem', padding: '8px 20px', marginBottom: '12px' }}>
          סיום הסימולציה הקלינית בהצלחה
        </span>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a', marginBottom: '10px' }}>
          סיכום קליני: ניהול סוכרת סוג 1 משולבת השמנה
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '750px', margin: '0 auto 20px auto', lineHeight: 1.6 }}>
          השלמתם בהצלחה את התרחיש הקליני של המטופל <strong>משה (בן 64)</strong>. להלן תובנות המפתח והניתוח הקליני המסכם.
        </p>

        {/* Score Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'white',
          padding: '12px 28px',
          borderRadius: '50px',
          boxShadow: '0 4px 15px rgba(2, 132, 199, 0.15)',
          border: '1px solid #bae6fd'
        }}>
          <Sparkles size={22} color="#0284c7" />
          <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.1rem' }}>
            ציון ביצוע קליני: {score.correct} מתוך {score.total} תשובות נכונות
          </span>
        </div>
      </div>

      {/* Highlights & Outcome Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700 }}>זמן בטווח היעד (TIR)</div>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#10b981', margin: '6px 0' }}>89%</div>
          <div style={{ fontSize: '0.85rem', color: '#047857' }}>מ-60% ל-89% תוך חודשים ספורים</div>
        </div>

        <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700 }}>אינדיקטור גליקמי (GMI)</div>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#0284c7', margin: '6px 0' }}>6.2%</div>
          <div style={{ fontSize: '0.85rem', color: '#0369a1' }}>שקול ערך ל-HbA1c של 6.2%</div>
        </div>

        <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700 }}>הפחתת מינון אינסולין</div>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#0d9488', margin: '6px 0' }}>-35%</div>
          <div style={{ fontSize: '0.85rem', color: '#0f766e' }}>מ-120 יח' ליום ל-58-60 יח' בזאלי</div>
        </div>

        <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700 }}>בטיחות היפוגליקמית</div>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#7e22ce', margin: '6px 0' }}>0%</div>
          <div style={{ fontSize: '0.85rem', color: '#6b21a8' }}>0% היפוגליקמיה חמורה (&lt;54)</div>
        </div>
      </div>

      {/* Core Clinical Takeaways */}
      <div className="glass-card" style={{ padding: '30px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={24} color="#0284c7" />
          עקרונות מנחים לפרקטיקה הרפואית:
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {data.takeaways.map((item, idx) => (
            <div key={idx} style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start'
            }}>
              <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Follow-up Plan */}
      <div className="glass-card" style={{ padding: '28px', background: '#f0fdf4', border: '1.5px solid #a7f3d0' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065f46', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HeartPulse size={24} color="#10b981" />
          הנחיות המשך מעקב עבור משה:
        </h3>
        <ul style={{ paddingRight: '24px', color: '#047857', lineHeight: 1.7, fontSize: '1rem' }}>
          <li>המשך מינון אחזקתי של Wegovy 2.4 mg אחת לשבוע + Degludec 58-60 יחידות ליום.</li>
          <li>ניטור רציף במערכת Libre 2 עם בדיקת שכיחות היפוגליקמיות לילה.</li>
          <li>מעקב תקופתי אחר בדיקת דם סמוי בצואה, תפקודי כליות (ACR & GFR), ופרופיל ליפידים.</li>
          <li>ייעוץ דיאטני מתמשך לשימור מסת שריר והתאמת תזונה בשבתות וחגים.</li>
        </ul>
      </div>

      {/* Restart Simulation Button */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={onRestart} className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.15rem' }}>
          <RefreshCw size={22} />
          התחל את הסימולציה מחדש
        </button>
      </div>

    </div>
  );
}
