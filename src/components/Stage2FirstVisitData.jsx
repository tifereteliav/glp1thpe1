import React, { useState } from 'react';
import { Cpu, Usb, FileText, Activity, ShieldAlert, HeartPulse, CheckCircle2, ArrowLeft, Pill, Dumbbell, Apple, Info, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import QuizComponent from './QuizComponent';

export default function Stage2FirstVisitData({ data, onNext, onPrev }) {
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeDocImage, setActiveDocImage] = useState(null);
  const [showInjectionDetail, setShowInjectionDetail] = useState(false);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const openDoc = (path) => {
    setActiveDocImage(path);
    setShowDocModal(true);
  };

  const openQuestionsData = [
    {
      q: "1. האם המטופל עומד ביעד האיזון שלו?",
      a: "לכאורה, A1C של 6.7% נראה מצוין ומתחת ליעד המקובל (<7.0%). אולם, המטופל נזקק למינוני אינסולין עצומים (סה\"כ כ-200 יחידות ביום: 80 בזאלי + כ-120 בולוס), סובל מהשמנה דרגה 1 (BMI 33.96), וחווה תנודתיות סוכר עקב תנגודת היקפית קשה וליפודוסטרופיה. לכן האיזון אינו איכותי או בטוח בטווח הארוך."
    },
    {
      q: "2. האם הטיפול שהמטופל מקבל מספיק אופטימלי למצב שלו?",
      a: "לא. המטופל נמצא בעומס אינסולינוטרפי קשה המנציח עלייה במשקל ותנגודת לאינסולין. אינסולין Lantus (80u) אינו מספק כיסוי בזאלי שטוח מספיק במטופל זה, וספיגת האינסולין נפגעת עקב הזרקה לתוך גושי ליפודוסטרופיה בבטן."
    },
    {
      q: "3. איזה שינויים אפשר ונדרש לבצע? ולמה?",
      a: "א. החלפת אינסולין בזאלי ל-Degludec (טרגלודק 66u) לשיפור היציבות והפחתת היפוגליקמיות לילה.\nב. הוספת תרופה מקבוצת GLP-1 RA (Wegovy 0.25mg) להורדת משקל, הפחתת תאבון והפחתת תנגודת לאינסולין.\nג. הדרכת הזרקות ורוטציה לרוחב 4 אצבעות מהטבור לכיוון המותן ועד למותניים עצמן.\nד. הדרכה לפעילות גופנית אירובית+אנאירובית ומעקב דיאטנית."
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Header Banner - Clean Title "שלב 2" */}
      <div className="glass-card" style={{ padding: '24px 30px', borderRight: '6px solid #0284c7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>{data.badge} • {data.date}</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>שלב 2</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '4px' }}>ביקור ראשון (חלק ב') - פברואר 2026</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Libre USB Cable Reader Widget & Injection Site Assessment */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        
        {/* Card 1: Blue Libre Reader with Yellow USB Cable & Data Download */}
        <div className="glass-card" style={{
          padding: '24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
          border: '2px solid #bae6fd',
          display: 'flex',
          flexDirection: 'column',
          justify: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-blue">ניטור רציף • פברואר 2026</span>
              <Usb size={22} color="#0284c7" />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              הורדת נתוני קורא Libre (פברואר 2026)
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.5, marginBottom: '20px' }}>
              חיבור קורא ה-Libre הכחול בכבל USB צהוב למחשב המרפאה לפריקת נתוני הסוכר הרציפים מחודש פברואר.
            </p>

            {/* Visual Graphic Representation of Blue Libre Reader + Yellow Cable + Computer */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #cbd5e1',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-around',
              gap: '12px',
              marginBottom: '20px'
            }}>
              {/* Blue Libre Reader */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '80px',
                  background: 'linear-gradient(180deg, #0284c7 0%, #0369a1 100%)',
                  borderRadius: '14px',
                  margin: '0 auto 6px auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justify: 'center',
                  color: 'white',
                  boxShadow: '0 4px 10px rgba(2, 132, 199, 0.3)',
                  border: '2px solid #38bdf8'
                }}>
                  <div style={{ width: '36px', height: '42px', background: '#e0f2fe', borderRadius: '6px', margin: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0369a1', fontSize: '0.7rem', fontWeight: 900 }}>
                    Libre
                  </div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                </div>
                <span style={{ fontSize: '0.78rem', color: '#0369a1', fontWeight: 700 }}>קורא כחול</span>
              </div>

              {/* Yellow Cable Wire Visual */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                <div style={{ height: '4px', background: '#eab308', width: '100%', borderRadius: '2px', boxShadow: '0 0 6px rgba(234,179,8,0.5)' }} />
                <span style={{ fontSize: '0.75rem', color: '#854d0e', fontWeight: 700, background: '#fef9c3', padding: '2px 8px', borderRadius: '10px' }}>
                  כבל צהוב
                </span>
              </div>

              {/* Clinic Computer Terminal */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '65px',
                  background: '#f8fafc',
                  border: '2.5px solid #64748b',
                  borderRadius: '10px',
                  margin: '0 auto 6px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#0284c7',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <Cpu size={28} color="#0284c7" />
                </div>
                <span style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 700 }}>מחשב מרפאה</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => openDoc('/labs/AGP2.26.jpeg')} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              <FileText size={18} />
              צפה בדף נתוני Libre פברואר מקורי (AGP)
            </button>
            <button onClick={() => openDoc('/labs/פרופיל AGP2.26.jpeg')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
              <Activity size={16} />
              צפה בפרופיל הגרפי פברואר מקורי
            </button>
          </div>
        </div>

        {/* Card 2: Insulin Injection Site Examination & Horizontal 4-finger Width Rule */}
        <div className="glass-card" style={{
          padding: '24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)',
          border: '2px solid #fed7aa',
          display: 'flex',
          flexDirection: 'column',
          justify: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-gold">בדיקה פיזיקלית • אזורי הזרקה</span>
              <ShieldAlert size={22} color="#ea580c" />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              בדיקת מקומות הזרקת אינסולין וטכניקה
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.5, marginBottom: '16px' }}>
              מדידת 4 אצבעות לרוחב מהטבור לכיוון המותן. אזור ההזרקה המותר מתחיל מסיום הזרת ונמשך עד למותן עצמה.
            </p>

            {/* Abdomen Injection Diagram Image */}
            <div style={{ textAlign: 'center', marginBottom: '16px', background: 'white', padding: '10px', borderRadius: '16px', border: '1px solid #fed7aa' }}>
              <img
                src="/abdomen_injection.png"
                alt="תרשים בטן - אזורי הזרקה לרוחב מהטבור וליפודוסטרופיה"
                style={{ maxHeight: '170px', width: 'auto', borderRadius: '10px', margin: '0 auto' }}
              />
              <div style={{ fontSize: '0.78rem', color: '#c2410c', fontWeight: 700, marginTop: '6px' }}>
                איור: 4 אצבעות לרוחב מהטבור לכיוון המותן + הדגמת גוש ליפודוסטרופיה
              </div>
            </div>

            {/* Action Trigger Button */}
            <button
              onClick={() => setShowInjectionDetail(prev => !prev)}
              className="btn-secondary"
              style={{
                width: '100%',
                justify: 'center',
                padding: '12px',
                background: showInjectionDetail ? '#ffedd5' : 'white',
                borderColor: '#fdba74',
                color: '#c2410c',
                fontWeight: 800
              }}
            >
              <Info size={18} />
              {showInjectionDetail ? 'הסתר ממצאי בדיקת הזרקות' : 'בדיקת מקומות הזרקה וצורת הזרקת אינסולין'}
            </button>

            {/* Revealed Findings Box */}
            {showInjectionDetail && (
              <div style={{
                marginTop: '14px',
                background: '#fef2f2',
                border: '1.5px solid #fecdd3',
                borderRadius: '14px',
                padding: '14px 16px',
                color: '#9f1239'
              }}>
                <div style={{ fontWeight: 800, fontSize: '0.98rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldAlert size={18} color="#ef4444" />
                  ממצא קליני: הזרקה לתוך גוש ליפודוסטרופיה
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#be123c' }}>
                  המטופל מזריק לפעמים לתוך <strong>גוש ליפודוסטרופיה (Lipodystrophy)</strong> שנוצר מהזרקות חוזרות באותו מקום. הזרקה לתוך הצלקת גורמת לספיגת אינסולין בלתי צפויה ולתנודות סוכר.
                </div>
                <div style={{ marginTop: '8px', background: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', color: '#15803d', border: '1px solid #bbf7d0' }}>
                  ✔ הדרכה: 4 אצבעות ממוקמות לרוחב מהטבור לכיוון המותן. ניתן להזריק מסיום הזרת (קצה 4 האצבעות) ועד למותן עצמה, כולל במותן!
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Section: Open Clinical Reflection Questions */}
      <div className="glass-card" style={{ padding: '26px', borderRight: '5px solid #6b21a8', background: '#faf5ff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ background: '#f3e8ff', color: '#7e22ce', padding: '10px', borderRadius: '12px' }}>
            <HelpCircle size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
              דילמה וחשיבה קלינית - שאלות פתוחות
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>לחץ על כל שאלה לצפייה בניתוח והנמקה קלינית</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {openQuestionsData.map((item, idx) => {
            const isOpen = openQuestionIndex === idx;

            return (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '14px',
                border: '1px solid #e9d5ff',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenQuestionIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: isOpen ? '#f3e8ff' : 'white',
                    border: 'none',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'right',
                    fontWeight: 800,
                    color: '#581c87',
                    fontSize: '1rem'
                  }}
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <div style={{ padding: '16px 20px', fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, borderTop: '1px solid #f3e8ff', whiteSpace: 'pre-line' }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section: Treatment Updates & Lifestyle Guidance */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Pill size={24} color="#0284c7" />
          שינויים בטיפול התרופתי והנחיות אורח חיים (ביקור ראשון)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          
          <div style={{ background: '#f0f9ff', padding: '18px', borderRadius: '16px', border: '1px solid #bae6fd' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0369a1', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
              <Pill size={18} />
              החלפת אינסולין בזאלי
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0284c7', marginBottom: '4px' }}>
              Degludec (טרגלודק) 66u
            </div>
            <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.4 }}>
              אינסולין Lantus הוחלף ב-Degludec והורד המינון ל-66 יחידות פעם ביום להבטחת פרופיל בזאלי שטוח ויציב.
            </div>
          </div>

          <div style={{ background: '#fcf5ff', padding: '18px', borderRadius: '16px', border: '1px solid #e9d5ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b21a8', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
              <HeartPulse size={18} />
              התחלת Wegovy (Semaglutide)
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#7e22ce', marginBottom: '4px' }}>
              0.25 mg פעם בשבוע
            </div>
            <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.4 }}>
              התחלת מינון התחלתי נמוך 0.25 מ"ג. המטופל הודרך על ביצוע טיטרציה הדרגתית בהתאם לסבילות ותופעות לוואי.
            </div>
          </div>

          <div style={{ background: '#f0fdf4', padding: '18px', borderRadius: '16px', border: '1px solid #a7f3d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#047857', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
              <Dumbbell size={18} />
              פעילות גופנית מותאמת
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>
              אירובי + אנאירובי
            </div>
            <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.4 }}>
              המטופל הודרך על ביצוע פעילות גופנית אירובית ואנאירובית משולבת לשיפור רגישות לאינסולין.
            </div>
          </div>

          <div style={{ background: '#fefce8', padding: '18px', borderRadius: '16px', border: '1px solid #fef08a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a16207', fontWeight: 800, fontSize: '1rem', marginBottom: '6px' }}>
              <Apple size={18} />
              ייעוץ ותמיכה תזונתית
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ca8a04', marginBottom: '4px' }}>
              מעקב דיאטנית קלינית
            </div>
            <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.4 }}>
              המטופל הודרך והופנה למעקב קבוע אצל דיאטנית קלינית להתאמת תזונה מבוקרת פחמימות.
            </div>
          </div>

        </div>
      </div>

      {/* Stage 2 Question */}
      <QuizComponent key={data.question.id} question={data.question} />

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <button onClick={onPrev} className="btn-secondary" style={{ padding: '14px 28px' }}>
          → חזרה לשלב 1
        </button>
        <button onClick={onNext} className="btn-primary" style={{ padding: '16px 40px' }}>
          התקדמות לשלב הבא ←
        </button>
      </div>

      {/* Document Viewer Modal */}
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
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>מסמך / נתוני Libre פברואר מקורי</h4>
              <button 
                onClick={() => setShowDocModal(false)}
                style={{ background: '#f1f5f9', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
              >
                סגור
              </button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', textAlign: 'center' }}>
              <img src={activeDocImage} alt="נתוני דוח Libre פברואר" style={{ maxWidth: '100%', borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
