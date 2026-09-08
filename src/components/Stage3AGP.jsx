import React, { useState } from 'react';
import { Activity, BarChart2, ShieldCheck, CheckCircle2, FileText, Zap } from 'lucide-react';
import QuizComponent from './QuizComponent';

export default function Stage3AGP({ data, onNext, onPrev }) {
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeDocImage, setActiveDocImage] = useState(null);

  const openDoc = (path) => {
    setActiveDocImage(path);
    setShowDocModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ padding: '24px 30px', borderRight: '6px solid #10b981' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '8px' }}>{data.badge} • {data.date}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{data.title}</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '4px' }}>{data.subtitle}</p>
          </div>
          <div style={{ background: '#d1fae5', padding: '12px 20px', borderRadius: '16px', border: '1px solid #a7f3d0' }}>
            <span style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 600 }}>הישג גליקמי TIR</span>
            <div style={{ fontWeight: 900, color: '#059669', fontSize: '1.4rem' }}>89% בטווח היעד!</div>
          </div>
        </div>
      </div>

      {/* Main Sensor Statistics Dashboard */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ background: '#d1fae5', padding: '10px', borderRadius: '12px', color: '#059669' }}>
            <BarChart2 size={26} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
              מדדי חיישן FreeStyle Libre 2 (תקופת דיווח: 14 ימים, 97% זמן פעיל)
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>נתונים מתוך דוח AGP מאוגוסט 2026</p>
          </div>
        </div>

        {/* Primary Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '18px',
          marginBottom: '30px'
        }}>
          
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #a7f3d0',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.88rem', color: '#047857', fontWeight: 700 }}>זמן בטווח היעד (TIR 70-180)</div>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#10b981', margin: '4px 0' }}>89%</div>
            <div style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 600 }}>↑ יעד קליני בינלאומי: &gt; 70%</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #bae6fd',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.88rem', color: '#0369a1', fontWeight: 700 }}>סוכר ממוצע</div>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0284c7', margin: '4px 0' }}>121</div>
            <div style={{ fontSize: '0.82rem', color: '#0284c7', fontWeight: 600 }}>mg/dL (GMI המשוער 6.2%)</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #e9d5ff',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.88rem', color: '#6b21a8', fontWeight: 700 }}>שונות גלוקוז (%CV)</div>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#7e22ce', margin: '4px 0' }}>32.2%</div>
            <div style={{ fontSize: '0.82rem', color: '#7e22ce', fontWeight: 600 }}>יציבות מצוינת (&lt; 36%)</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fff1f2 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #fecdd3',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.88rem', color: '#9f1239', fontWeight: 700 }}>היפוגליקמיה (&lt;70)</div>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#e11d48', margin: '4px 0' }}>3%</div>
            <div style={{ fontSize: '0.82rem', color: '#e11d48', fontWeight: 600 }}>אירועים קלים בלבד (0% &lt;54)</div>
          </div>

        </div>

        {/* Visual Progress Bar of Time In Ranges */}
        <div style={{
          background: '#f8fafc',
          padding: '24px',
          borderRadius: '18px',
          border: '1px solid #e2e8f0',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 700, fontSize: '0.95rem' }}>
            <span>חלוקת זמן בטווחים (Time in Ranges Bar):</span>
            <span style={{ color: '#059669' }}>יציבות מופתית במטופל T1D</span>
          </div>

          {/* Bar */}
          <div style={{
            height: '28px',
            width: '100%',
            borderRadius: '14px',
            overflow: 'hidden',
            display: 'flex',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ width: '8%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 800 }} title="גבוה 181-250 (8%)">8%</div>
            <div style={{ width: '89%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.85rem', fontWeight: 800 }} title="טווח יעד 70-180 (89%)">89% בטווח היעד (70-180 mg/dL)</div>
            <div style={{ width: '3%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.7rem', fontWeight: 800 }} title="נמוך 54-69 (3%)">3%</div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '12px', fontSize: '0.85rem', color: '#475569', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', background: '#f59e0b', borderRadius: '3px' }} />
              גבוה (181-250 mg/dL): 8%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '3px' }} />
              טווח יעד (70-180 mg/dL): 89%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '3px' }} />
              נמוך (54-69 mg/dL): 3%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', background: '#991b1b', borderRadius: '3px' }} />
              נמוך מאוד (&lt;54 mg/dL): 0%
            </div>
          </div>
        </div>

        {/* View Document Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => openDoc('/labs/ביקור אוגוסט.jpeg')} className="btn-secondary">
            <FileText size={16} />
            צפה במסמך ביקור אוגוסט מלא
          </button>
          <button onClick={() => openDoc('/labs/פרופיל AGP8.26.jpeg')} className="btn-secondary">
            <BarChart2 size={16} />
            צפה בגרף פרופיל AGP אוגוסט
          </button>
          <button onClick={() => openDoc('/labs/AGP8.26.jpeg')} className="btn-secondary">
            <Activity size={16} />
            צפה בדף סטטיסטיקת AGP
          </button>
        </div>

      </div>

      {/* Interactive Quiz #3 */}
      <QuizComponent question={data.question} />

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <button onClick={onPrev} className="btn-secondary" style={{ padding: '14px 28px' }}>
          → חזרה לשלב 2
        </button>
        <button onClick={onNext} className="btn-primary" style={{ padding: '16px 40px' }}>
          התקדמות לשלב הבא ←
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
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>גרף / מסמך AGP מקורי</h4>
              <button 
                onClick={() => setShowDocModal(false)}
                style={{ background: '#f1f5f9', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
              >
                סגור
              </button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', textAlign: 'center' }}>
              <img src={activeDocImage} alt="מסמך AGP" style={{ maxWidth: '100%', borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
