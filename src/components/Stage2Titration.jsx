import React, { useState } from 'react';
import { Pill, ShieldCheck, ArrowDownRight, TrendingDown, FileText, AlertCircle, Sparkles } from 'lucide-react';
import QuizComponent from './QuizComponent';

export default function Stage2Titration({ data, onNext, onPrev }) {
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeDocImage, setActiveDocImage] = useState(null);

  const openDoc = (path) => {
    setActiveDocImage(path);
    setShowDocModal(true);
  };

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
            background: 'white',
            padding: '20px',
            borderRadius: '18px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-blue">אינסולין מהיר (Novorapid)</span>
              <TrendingDown size={20} color="#0284c7" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0369a1', marginTop: '12px' }}>
              10-12 יחידות לפני ארוחות
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>
              ירידה במינון הבולוס עקב ירידה בצריכת הקלוריות והאטה בריקון הקיבה
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

        {/* View Document Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
          <button onClick={() => openDoc('/labs/ביקור14.7.jpeg')} className="btn-secondary">
            <FileText size={16} />
            צפה במסמך ביקור 14/07 מקורי
          </button>
          <button onClick={() => openDoc('/labs/ביקור 28.7.jpeg')} className="btn-secondary">
            <FileText size={16} />
            צפה במסמך ביקור 28/07 מקורי
          </button>
          <button onClick={() => openDoc('/labs/ביקור לאחר 3 חודשים.jpeg')} className="btn-secondary">
            <FileText size={16} />
            צפה במסמך מעקב 3 חודשים
          </button>
        </div>

      </div>

      {/* Interactive Quiz #2 */}
      <QuizComponent question={data.question} />

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <button onClick={onPrev} className="btn-secondary" style={{ padding: '14px 28px' }}>
          → חזרה לשלב 1
        </button>
        <button onClick={onNext} className="btn-primary" style={{ padding: '16px 40px' }}>
          התקדמות לשלב 3: ניתוח מדדי חיישן Libre (AGP) ←
        </button>
      </div>

      {/* Document Modal */}
      {showDocModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              padding: '16px 24px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center'
            }}>
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>מסמך רפואי מקורי</h4>
              <button 
                onClick={() => setShowDocModal(false)}
                style={{ background: '#f1f5f9', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
              >
                סגור
              </button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', textAlign: 'center' }}>
              <img src={activeDocImage} alt="מסמך רפואי" style={{ maxWidth: '100%', borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
