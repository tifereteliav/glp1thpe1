import React, { useState } from 'react';
import { Pill, ShieldCheck, ArrowDownRight, TrendingDown, FileText, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import QuizComponent from './QuizComponent';

export default function Stage2Titration({ data, onNext, onPrev }) {
  const wegovySteps = [
    { dose: "0.25 mg", status: "completed", label: "מינון התחלתי" },
    { dose: "0.5 mg", status: "completed", label: "שלב 2" },
    { dose: "1.0 mg", status: "completed", label: "שלב 3" },
    { dose: "1.7 mg", status: "active", label: "מינון נוכחי" },
    { dose: "2.4 mg", status: "next", label: "מינון יעד סופי" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ padding: '24px 30px', borderRight: '6px solid #0d9488' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '8px' }}>{data.badge} • {data.date}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{data.title}</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '4px' }}>{data.subtitle}</p>
          </div>
          <div style={{ background: '#ccfbf1', padding: '12px 20px', borderRadius: '16px', border: '1px solid #99f6e4' }}>
            <span style={{ fontSize: '0.85rem', color: '#0f766e', fontWeight: 600 }}>סטטוס מינון Wegovy</span>
            <div style={{ fontWeight: 800, color: '#0d9488', fontSize: '1.1rem' }}>1.7 mg (לקראת 2.4 mg)</div>
          </div>
        </div>
      </div>

      {/* Wegovy Titration Dose Scale Widget */}
      <div className="glass-card" style={{ padding: '24px', background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)', border: '2px solid #e9d5ff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Sparkles size={22} color="#7e22ce" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#581c87' }}>
            מד סולם מינוני Wegovy (Semaglutide) – תהליך טיטרציה מדורג
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          marginTop: '12px'
        }}>
          {wegovySteps.map((step, idx) => {
            const isActive = step.status === 'active';
            const isCompleted = step.status === 'completed';

            return (
              <div key={idx} style={{
                background: isActive ? '#7e22ce' : isCompleted ? '#f3e8ff' : '#f8fafc',
                color: isActive ? 'white' : isCompleted ? '#6b21a8' : '#64748b',
                padding: '16px 12px',
                borderRadius: '16px',
                border: isActive ? '2px solid #6b21a8' : isCompleted ? '1.5px solid #d8b4fe' : '1px solid #e2e8f0',
                textAlign: 'center',
                position: 'relative',
                boxShadow: isActive ? '0 6px 16px rgba(126, 34, 206, 0.25)' : 'none'
              }}>
                <div style={{ fontSize: '0.78rem', opacity: 0.9, fontWeight: 700, marginBottom: '4px' }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900 }}>
                  {step.dose}
                </div>
                {isCompleted && (
                  <div style={{ fontSize: '0.72rem', marginTop: '4px', fontWeight: 700, color: '#7e22ce' }}>
                    ✔ הושלם בהצלחה
                  </div>
                )}
                {isActive && (
                  <div style={{ fontSize: '0.75rem', marginTop: '4px', fontWeight: 800, background: 'rgba(255,255,255,0.25)', padding: '2px 8px', borderRadius: '10px' }}>
                    ▲ מינון פעיל במעקב
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Narrative Card */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Pill size={24} color="#0d9488" />
          מהלך המעקב הקליני והתאמת המינונים
        </h3>

        <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.7, marginBottom: '24px' }}>
          {data.summary}
        </p>

        {/* Comparison Grid: Dose Reductions & Adjustments */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '24px'
        }}>
          
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '18px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-purple">GLP-1 RA Escalation</span>
              <Sparkles size={20} color="#7e22ce" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#6b21a8', marginTop: '12px' }}>
              Wegovy 1.7 mg / 2.4 mg
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>
              סבילות טובה לטיפול, הפחתה ניכרת בתחושת הרעב ושיפור ברגישות לאינסולין
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '18px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-teal">אינסולין בזאלי (Degludec)</span>
              <ArrowDownRight size={20} color="#0d9488" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f766e', marginTop: '12px' }}>
              66 יחידות ← 58 יחידות
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>
              הפחתה מדורגת של כ-12% במינון הבזאלי למניעת היפוגליקמיות
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #bae6fd',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.05)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-blue">אינסולין מהיר (Novorapid)</span>
              <TrendingDown size={20} color="#0284c7" />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0369a1', marginTop: '12px' }}>
              35-40u ← 10-12u לארוחה
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#10b981', marginTop: '6px' }}>
              📉 ירידה דרמטית של ~70% במינון הבולוס!
            </div>
            <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '4px' }}>
              ממינון יומי של כ-120 יח' ליום (35-40u לארוחה) לירידה לכ-35 יח' ליום (10-12u לארוחה).
            </div>
          </div>

        </div>

        {/* Protocol Alert Box */}
        <div style={{
          background: '#fefce8',
          border: '1.5px solid #fde047',
          padding: '18px 24px',
          borderRadius: '16px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start'
        }}>
          <AlertCircle size={24} color="#ca8a04" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontWeight: 800, color: '#854d0e', fontSize: '1.05rem', marginBottom: '4px' }}>
              פרוטוקול בטיחות למניעת היפוגליקמיה:
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#a16207', lineHeight: 1.5 }}>
              במידה וערכי הסוכר בצום בבוקר יורדים מ-90 mg/dL, יש להוריד את מינון הטרגלודק (Degludec) ב-2 יחידות באופן מיידי. המטופל קיבל הדרכה מפורטת להחזקת סוכר זמין ולשימוש בחיישן Libre 2.
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Quiz #2 */}
      <QuizComponent question={data.question} />

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <button onClick={onPrev} className="btn-secondary" style={{ padding: '14px 28px' }}>
          → חזרה לשלב הקודם
        </button>
        <button onClick={onNext} className="btn-primary" style={{ padding: '16px 40px' }}>
          התקדמות לשלב הבא ←
        </button>
      </div>

    </div>
  );
}
