import React, { useState } from 'react';
import { User, Activity, FileText, ShieldAlert, Award, ChevronDown, ChevronUp, Image as ImageIcon, HeartPulse } from 'lucide-react';
import QuizComponent from './QuizComponent';

export default function Stage1Admission({ data, patient, onNext }) {
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeDocImage, setActiveDocImage] = useState(null);

  const openDoc = (path) => {
    setActiveDocImage(path);
    setShowDocModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ padding: '24px 30px', borderRight: '6px solid #0284c7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>{data.badge} • {data.date}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{data.title}</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '4px' }}>{data.subtitle}</p>
          </div>
          <div style={{ background: '#f0f9ff', padding: '12px 20px', borderRadius: '16px', border: '1px solid #bae6fd' }}>
            <span style={{ fontSize: '0.85rem', color: '#0369a1', fontWeight: 600 }}>סטטוס קליני</span>
            <div style={{ fontWeight: 800, color: '#0284c7', fontSize: '1.1rem' }}>Double Diabetes (T1D + BMI 33)</div>
          </div>
        </div>
      </div>

      {/* Main Profile Grid: Patient Image + Demographic/Family under image & Medical Background Conditions on right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Left: Patient Portrait & Description + Family History */}
        <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="patient-image-container" style={{ height: '320px' }}>
            <img src={patient.image} alt="משה - מטופל במרפאה" />
            <div className="patient-image-badge">
              משה, בן 64 (במרפאה)
            </div>
          </div>

          {/* Patient Description & Family Background Box */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
            padding: '18px',
            borderRadius: '16px',
            border: '1.5px solid #bae6fd',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.05)'
          }}>
            <div style={{ fontWeight: 800, color: '#0369a1', fontSize: '1.05rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={18} color="#0284c7" />
              תיאור המטופל והרקע המשפחתי:
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: '#334155' }}>
              <div>• <strong>שם וגיל:</strong> {patient.name}, בן {patient.age}</div>
              <div>• <strong>מצב משפחתי:</strong> {patient.maritalStatus}</div>
              <div>• <strong>רקע ותעסוקה:</strong> {patient.occupation}</div>
              <div>• <strong>היסטוריית סוכרת:</strong> סוכרת ידועה מגיל 40 (כ-24 שנים)</div>
              <div style={{ background: '#fef3c7', padding: '8px 12px', borderRadius: '10px', color: '#92400e', fontWeight: 700, marginTop: '4px' }}>
                • <strong>סיפור משפחתי:</strong> {patient.familyHistory}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Background Diseases & Insulin History Card */}
        <div className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ background: '#fee2e2', padding: '10px', borderRadius: '12px', color: '#ef4444' }}>
                <ShieldAlert size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                מחלות רקע של המטופל
              </h3>
            </div>

            {/* Grid of Background Medical Conditions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
              {patient.medicalHistory.map((item, idx) => (
                <div key={idx} style={{
                  background: '#f8fafc',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.92rem' }}>{item.name}</span>
                  <span className="badge badge-blue" style={{ fontSize: '0.78rem', padding: '3px 8px' }}>{item.year}</span>
                </div>
              ))}
            </div>

            {/* Insulin & Treatment Path Box */}
            <div style={{ background: '#eff6ff', padding: '18px 20px', borderRadius: '16px', border: '1px solid #bfdbfe', marginBottom: '20px' }}>
              <div style={{ fontWeight: 800, color: '#1e40af', fontSize: '1.05rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={18} />
                מסלול הטיפול באינסולין והמלצות הביקור:
              </div>
              <ul style={{ paddingRight: '20px', color: '#1e3a8a', lineHeight: 1.6, fontSize: '0.95rem' }}>
                <li>בעבר טופל באינסולין <strong>Lantus 80 יחידות</strong> ו-Novorapid לפני ארוחות. סה"כ נזקק לכ-<strong>120 יחידות אינסולין ביום</strong>.</li>
                <li>בעקבות שינוי במקומות הזרקת אינסולין וטיטרציה ראשונית, נזקק ל-80 יחידות אינסולין ביום.</li>
                <li>בהמלצת ד"ר לוין: מעבר לאינסולין בזאלי <strong>Degludec (טרגלודק) 66 יחידות</strong> + התחלת זריקת <strong>Wegovy (Semaglutide)</strong> בטיטרציה.</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => openDoc('/labs/מחלות רקע.jpeg')} className="btn-secondary" style={{ fontSize: '0.9rem' }}>
              <ShieldAlert size={16} />
              צפה בגיליון מחלות רקע מקורי
            </button>
            <button onClick={() => openDoc('/labs/ביקור ראשון.jpeg')} className="btn-secondary" style={{ fontSize: '0.9rem' }}>
              <FileText size={16} />
              צפה במסמך ביקור ראשון מקורי
            </button>
          </div>
        </div>

      </div>

      {/* Blood Test & Lab Results Section */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ background: '#ccfbf1', padding: '10px', borderRadius: '12px', color: '#0d9488' }}>
            <Activity size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
              תוצאות בדיקות מעבדה ומדדים מטבוליים
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>בדיקות דם אחרונות בביקור הקבלה</p>
          </div>
        </div>

        {/* Primary Requested Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '18px',
          marginBottom: '28px'
        }}>
          
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #bae6fd',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#0369a1', fontWeight: 700 }}>A1C (איזון גליקמי)</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0284c7', margin: '4px 0' }}>
              {patient.baselineLabs.a1c}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>מאוזן יחסית אך תחת מינון אינסולין גבוה</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #a7f3d0',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.06)'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#047857', fontWeight: 700 }}>LDL (כולסטרול)</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#10b981', margin: '4px 0' }}>
              {patient.baselineLabs.ldl}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>תחת Atorvastatin 80mg (בטווח היעד)</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fefce8 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #fef08a',
            boxShadow: '0 4px 12px rgba(234, 179, 8, 0.06)'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#a16207', fontWeight: 700 }}>ACR (יחס חלבון/קראטינין)</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ca8a04', margin: '12px 0' }}>
              {patient.baselineLabs.acr}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>נדרש מעקב חוזר בשתן</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)',
            padding: '20px',
            borderRadius: '18px',
            border: '2px solid #ffedd5',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.06)'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#c2410c', fontWeight: 700 }}>BMI (מדד מסת גוף)</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ea580c', margin: '4px 0' }}>
              {patient.baselineLabs.bmi}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>משקל: 104 ק"ג | היקף מותניים: 92 ס"מ</div>
          </div>

        </div>

        {/* Secondary Detailed Biomarkers: C-Peptide & GAD */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          background: '#f8fafc',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0'
        }}>
          <div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>C-PEPTIDE (רזרבה פנקראטית)</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ef4444' }}>
              {patient.baselineLabs.cPeptide}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>חוסר אינסולין אנדוגני כמעט מוחלט</div>
          </div>

          <div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>GAD Antibodies (נוגדנים)</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#7e22ce' }}>
              {patient.baselineLabs.gad}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>מאשר אטיולוגיה אוטואימונית של סוכרת סוג 1</div>
          </div>

          <div>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>eGFR (תפקוד כליאתי)</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f766e' }}>
              {patient.baselineLabs.gfr}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>תפקוד כליאתי שמור</div>
          </div>
        </div>
      </div>

      {/* Interactive Quiz #1 */}
      <QuizComponent question={data.question} />

      {/* Navigation Button */}
      <div style={{ textAlign: 'left', marginTop: '10px' }}>
        <button onClick={onNext} className="btn-primary" style={{ padding: '16px 40px' }}>
          התקדמות לשלב 2: טיטרציית Wegovy ומעקב 3 חודשים ←
        </button>
      </div>

      {/* Original Document Viewer Modal */}
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
