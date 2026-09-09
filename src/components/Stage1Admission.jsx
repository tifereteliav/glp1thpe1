import React, { useState } from 'react';
import { User, Activity, FileText, ShieldAlert, HeartPulse, ChevronDown, ChevronUp, Pill, Stethoscope, BarChart2, CheckCircle2, Footprints, ArrowLeft } from 'lucide-react';
import QuizComponent from './QuizComponent';

export default function Stage1Admission({ data, patient, onNext }) {
  // State for interactive collapsible sections (ALL CLOSED BY DEFAULT)
  const [openSections, setOpenSections] = useState({
    history: false,
    physical: false,
    labs: false,
    meds: false
  });

  // State for progressive questions flow in Stage 1
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // 0 = Question 1a (Diagnosis), 1 = Question 1b (GLP1 Rationale)

  const [showDocModal, setShowDocModal] = useState(false);
  const [activeDocImage, setActiveDocImage] = useState(null);

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
            <div style={{ fontWeight: 800, color: '#0284c7', fontSize: '1.1rem' }}>Double Diabetes (T1D + BMI 33.96)</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Portrait & Demographics | Right Collapsible Clinical Accordions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Left Column: Portrait & Patient Description + Family Background */}
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
            padding: '20px',
            borderRadius: '16px',
            border: '1.5px solid #bae6fd',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.05)'
          }}>
            <div style={{ fontWeight: 800, color: '#0369a1', fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={20} color="#0284c7" />
              תיאור המטופל והרקע המשפחתי:
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.96rem', color: '#334155', lineHeight: 1.5 }}>
              <div>• <strong>שם וגיל:</strong> {patient.name}, בן {patient.age}</div>
              <div>• <strong>מצב משפחתי:</strong> {patient.maritalStatus}</div>
              <div>• <strong>תעסוקה ורקע:</strong> {patient.occupation}</div>
              <div>• <strong>היסטוריית סוכרת:</strong> {patient.diabetesHistory}</div>
              <div style={{ background: '#fef3c7', padding: '10px 14px', borderRadius: '12px', color: '#92400e', fontWeight: 800, marginTop: '4px' }}>
                • <strong>סיפור משפחתי:</strong> {patient.familyHistory}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Interactive Toggle Collapsible Buttons/Cards (CLOSED BY DEFAULT) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Collapsible 1: מחלות רקע של המטופל */}
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
            <button
              onClick={() => toggleSection('history')}
              style={{
                width: '100%',
                padding: '18px 24px',
                background: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'right'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#fee2e2', padding: '8px', borderRadius: '10px', color: '#ef4444' }}>
                  <ShieldAlert size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    מחלות רקע של המטופל
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>לחץ לפתיחה/סגירה • סוכרת 2003, יתר לחץ דם, CVA ועוד</span>
                </div>
              </div>
              {openSections.history ? <ChevronUp size={22} color="#64748b" /> : <ChevronDown size={22} color="#64748b" />}
            </button>

            {openSections.history && (
              <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #f1f5f9' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '16px' }}>
                  {patient.medicalHistory.map((item, idx) => (
                    <div key={idx} style={{
                      background: '#f8fafc',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>{item.name}</span>
                      <span className="badge badge-blue" style={{ fontSize: '0.78rem', padding: '2px 8px' }}>{item.year}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '14px', textAlign: 'left' }}>
                  <button onClick={() => openDoc('/labs/מחלות רקע.jpeg')} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                    <ShieldAlert size={14} />
                    צפה בגיליון מחלות רקע מקורי
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Collapsible 2: בדיקה גופנית */}
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
            <button
              onClick={() => toggleSection('physical')}
              style={{
                width: '100%',
                padding: '18px 24px',
                background: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'right'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#e0f2fe', padding: '8px', borderRadius: '10px', color: '#0284c7' }}>
                  <Stethoscope size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    בדיקה גופנית ומדדי סימנים חיוניים
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>לחץ לפתיחה/סגירה • לחץ דם, משקל, BMI, עישון ובדיקת כפות רגליים</span>
                </div>
              </div>
              {openSections.physical ? <ChevronUp size={22} color="#64748b" /> : <ChevronDown size={22} color="#64748b" />}
            </button>

            {openSections.physical && (
              <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #f1f5f9' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '16px', marginBottom: '16px' }}>
                  <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>לחץ דם</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{patient.physicalExam.bloodPressure}</div>
                  </div>

                  <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>דופק</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{patient.physicalExam.pulse}</div>
                  </div>

                  <div style={{ background: '#fff7ed', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ffedd5' }}>
                    <div style={{ fontSize: '0.82rem', color: '#c2410c', fontWeight: 600 }}>משקל וגובה</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ea580c' }}>{patient.physicalExam.weight} | {patient.physicalExam.height}</div>
                  </div>

                  <div style={{ background: '#fef3c7', padding: '12px 16px', borderRadius: '12px', border: '1px solid #fde68a' }}>
                    <div style={{ fontSize: '0.82rem', color: '#b45309', fontWeight: 600 }}>BMI (מדד מסת גוף)</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#d97706' }}>{patient.physicalExam.bmi}</div>
                    <div style={{ fontSize: '0.75rem', color: '#92400e' }}>היקף מותניים: {patient.physicalExam.waist}</div>
                  </div>

                  <div style={{ background: '#f0fdf4', padding: '12px 16px', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
                    <div style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>הרגל עישון</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} />
                      {patient.physicalExam.smoking}
                    </div>
                  </div>

                  <div style={{ background: '#fcf5ff', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
                    <div style={{ fontSize: '0.82rem', color: '#6b21a8', fontWeight: 600 }}>בדיקת עיניים (רטינה)</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#7e22ce' }}>
                      {patient.physicalExam.eyeExam}
                    </div>
                  </div>
                </div>

                {/* Foot Exam Special Box */}
                <div style={{
                  background: '#f0f9ff',
                  border: '1.5px solid #bae6fd',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <Footprints size={24} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 800, color: '#0369a1', fontSize: '0.95rem', marginBottom: '2px' }}>
                      בדיקת כפות רגליים:
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#1e293b', lineHeight: 1.5 }}>
                      {patient.physicalExam.footExam}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Collapsible 3: בדיקות מעבדה של המטופל */}
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
            <button
              onClick={() => toggleSection('labs')}
              style={{
                width: '100%',
                padding: '18px 24px',
                background: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'right'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#ccfbf1', padding: '8px', borderRadius: '10px', color: '#0d9488' }}>
                  <Activity size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    בדיקות מעבדה של המטופל
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>לחץ לפתיחה/סגירה • A1C כולל גרף היסטורי RTL, LDL, C-Peptide, GAD, GFR, ACR</span>
                </div>
              </div>
              {openSections.labs ? <ChevronUp size={22} color="#64748b" /> : <ChevronDown size={22} color="#64748b" />}
            </button>

            {openSections.labs && (
              <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #f1f5f9' }}>
                
                {/* Lab Gauges Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '16px', marginBottom: '20px' }}>
                  
                  <div style={{ background: '#f0f9ff', padding: '14px', borderRadius: '14px', border: '1px solid #bae6fd' }}>
                    <div style={{ fontSize: '0.82rem', color: '#0369a1', fontWeight: 700 }}>A1C נוכחי</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0284c7' }}>{patient.baselineLabs.a1c}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>תחת מינון אינסולין גבוה</div>
                  </div>

                  <div style={{ background: '#f0fdf4', padding: '14px', borderRadius: '14px', border: '1px solid #a7f3d0' }}>
                    <div style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 700 }}>LDL נוכחי</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10b981' }}>{patient.baselineLabs.ldl}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>תחת Atorvastatin 80mg</div>
                  </div>

                  <div style={{ background: '#fefce8', padding: '14px', borderRadius: '14px', border: '1px solid #fef08a' }}>
                    <div style={{ fontSize: '0.82rem', color: '#a16207', fontWeight: 700 }}>ACR (חלבון בשתן)</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ca8a04', marginTop: '6px' }}>{patient.baselineLabs.acr}</div>
                  </div>

                  <div style={{ background: '#fcf5ff', padding: '14px', borderRadius: '14px', border: '1px solid #e9d5ff' }}>
                    <div style={{ fontSize: '0.82rem', color: '#6b21a8', fontWeight: 700 }}>C-PEPTIDE</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#7e22ce' }}>{patient.baselineLabs.cPeptide}</div>
                  </div>

                  <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 700 }}>GAD (נוגדנים)</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{patient.baselineLabs.gad}</div>
                  </div>

                  <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 700 }}>eGFR (תפקוד כליות)</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f766e' }}>{patient.baselineLabs.gfr}</div>
                  </div>

                </div>

                {/* Exact RTL A1C History Graph (2003 on Right -> 2026 on Left) */}
                <div style={{
                  background: '#ffffff',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1.5px solid #cbd5e1',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <BarChart2 size={20} color="#0284c7" />
                      היסטוריית A1C (משנת 2003 עד 2026 נוכחי):
                    </div>
                    <button onClick={() => openDoc('/labs/A1C.jpeg')} className="btn-primary" style={{ fontSize: '0.9rem', padding: '10px 18px' }}>
                      <FileText size={16} />
                      צפה בגרף ובטבלת A1C המקורית
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Collapsible 4: טיפול תרופתי נוכחי (ללא וויגובי ובלי כפתור לפתיחת תמונת תרופות מקורית) */}
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
            <button
              onClick={() => toggleSection('meds')}
              style={{
                width: '100%',
                padding: '18px 24px',
                background: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                textAlign: 'right'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#fef3c7', padding: '8px', borderRadius: '10px', color: '#d97706' }}>
                  <Pill size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    טיפול תרופתי נוכחי בביקור
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>לחץ לפתיחה/סגירה • אינסולין בזאלי ובולוס (כ-120 יח' ליום), תרופות לחץ דם, כולסטרול והגנה</span>
                </div>
              </div>
              {openSections.meds ? <ChevronUp size={22} color="#64748b" /> : <ChevronDown size={22} color="#64748b" />}
            </button>

            {openSections.meds && (
              <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                  {patient.medicationsBaselineCurrent.map((med, idx) => (
                    <div key={idx} style={{
                      background: '#f8fafc',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem' }}>{med.name}</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{med.purpose}</div>
                      </div>
                      <span className="badge badge-gold" style={{ fontSize: '0.82rem' }}>{med.dose}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Progressive Stage 1 Questions Section */}
      <div style={{ marginTop: '10px' }}>
        {activeQuestionIndex === 0 ? (
          <div>
            <QuizComponent key={data.question1.id} question={data.question1} />
            <div style={{ textAlign: 'left', marginTop: '16px' }}>
              <button 
                onClick={() => setActiveQuestionIndex(1)}
                className="btn-primary"
                style={{ padding: '16px 36px', fontSize: '1.1rem' }}
              >
                מעבר לשאלה הבאה
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <QuizComponent key={data.question2.id} question={data.question2} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <button 
                onClick={() => setActiveQuestionIndex(0)}
                className="btn-secondary"
                style={{ padding: '12px 24px' }}
              >
                → חזרה לשאלה הקודמת
              </button>
              <button 
                onClick={onNext}
                className="btn-primary"
                style={{ padding: '16px 40px' }}
              >
                התקדמות לשלב הבא ←
              </button>
            </div>
          </div>
        )}
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
