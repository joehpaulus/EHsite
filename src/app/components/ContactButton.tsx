'use client';

export default function ContactButton() {
  return (
    <a
      href="mailto:contact@italianteacher.com"
      className="btn btn-lg text-white px-5 py-3 rounded-pill shadow"
      style={{ 
        fontSize: '1.1rem',
        backgroundColor: '#009246', // Italian green
        border: '2px solid #009246',
        fontWeight: '600',
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#007a3d';
        e.currentTarget.style.borderColor = '#007a3d';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#009246';
        e.currentTarget.style.borderColor = '#009246';
      }}
    >
      Contact Me to Schedule
    </a>
  );
} 