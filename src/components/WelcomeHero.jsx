import React from 'react';
import { DoorOpen, Stethoscope, Activity, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';

export default function WelcomeHero({ onStart }) {
  return (
    <div style={{
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative'
    }}>
      <div className="glass-card floating-element" style={{
        maxWidth: '900px',
        width: '100%',
        padding: '50px 40px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.92)',
        border: '1px solid rgba(2, 132, 199, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(13, 148, 136, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        {/* Header Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <span className="badge badge-blue" style={{ fontSize: '1rem', padding: '8px 20px' }}>
            <Sparkles size={18} color="#0284c7" />
            סימולציה קלינית מתקדמת
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 900,
          color: '#0f172a',
          lineHeight: 1.25,
          marginBottom: '20px',
          letterSpacing: '-0.5px'
        }}>
          ברוכים הבאים לסימולציית טיפול ב<span style={{ color: '#0284c7' }}>סוכרת סוג 1</span> ו<span style={{ color: '#0d9488' }}>השמנה</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.25rem',
          color: '#475569',
          maxWidth: '720px',
          margin: '0 auto 35px auto',
          lineHeight: 1.6
        }}>
          הצטרפו לביקור במרפאה של <strong style={{ color: '#0f172a' }}>משה (בן 64)</strong>. במהלך הסימולציה נחשוף בהדרגה את נתוני המטופל ונבצע חשיבה קלינית בהתאם לנתוני הביקור.
        </p>

        {/* Clinical Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '40px',
          textAlign: 'right'
        }}>
          <div style={{
            background: 'white',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ background: '#e0f2fe', padding: '10px', borderRadius: '12px' }}>
              <UserCheck size={24} color="#0284c7" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>פרופיל מטופל מורכב</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>T1D + השמנה (BMI 33)</div>
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ background: '#ccfbf1', padding: '10px', borderRadius: '12px' }}>
              <Activity size={24} color="#0d9488" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>חיישן סוכר Libre 2</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>ניתוח TIR & %CV</div>
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ background: '#fef3c7', padding: '10px', borderRadius: '12px' }}>
              <Stethoscope size={24} color="#d97706" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>שאלות והתנסות</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>פתרון דילמות קליניות</div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div>
          <button 
            onClick={onStart}
            className="btn-primary glow-btn"
            style={{
              padding: '18px 48px',
              fontSize: '1.25rem',
              letterSpacing: '0.3px'
            }}
          >
            <DoorOpen size={28} />
            התחל סימולציה (כניסה למרפאה)
          </button>
        </div>
      </div>
    </div>
  );
}
