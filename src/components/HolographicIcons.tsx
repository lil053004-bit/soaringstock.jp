export default function HolographicIcons() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-icon">
          <div className="w-12 h-12 md:w-16 md:h-16 -translate-x-6 md:-translate-x-8 -translate-y-6 md:-translate-y-8">
            <div className="relative w-full h-full backdrop-blur-md rounded-lg border-2 border-neon-cyan/70 shadow-neon-cyan flex items-center justify-center animate-float-subtle" style={{ background: 'rgba(30, 42, 58, 0.75)' }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-icon" style={{ animationDelay: '-3.75s' }}>
          <div className="w-12 h-12 md:w-16 md:h-16 -translate-x-6 md:-translate-x-8 -translate-y-6 md:-translate-y-8">
            <div className="relative w-full h-full backdrop-blur-md rounded-lg border-2 border-neon-purple/70 shadow-neon-purple flex items-center justify-center animate-float-subtle" style={{ animationDelay: '0.5s', background: 'rgba(40, 55, 75, 0.75)' }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16M8 12H16" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-icon" style={{ animationDelay: '-7.5s' }}>
          <div className="w-12 h-12 md:w-16 md:h-16 -translate-x-6 md:-translate-x-8 -translate-y-6 md:-translate-y-8">
            <div className="relative w-full h-full backdrop-blur-md rounded-full border-2 border-neon-pink/70 shadow-neon-pink flex items-center justify-center animate-float-subtle" style={{ animationDelay: '1s', background: 'rgba(55, 70, 90, 0.75)' }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#ff6b9d" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="#ff6b9d" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="2" fill="#ff6b9d"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-icon" style={{ animationDelay: '-11.25s' }}>
          <div className="w-12 h-12 md:w-16 md:h-16 -translate-x-6 md:-translate-x-8 -translate-y-6 md:-translate-y-8">
            <div className="relative w-full h-full backdrop-blur-md rounded-lg border-2 border-neon-cyan/70 shadow-neon-cyan flex items-center justify-center animate-float-subtle" style={{ animationDelay: '1.5s', background: 'rgba(30, 42, 58, 0.75)' }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12C3 12 6 5 12 5C18 5 21 12 21 12C21 12 18 19 12 19C6 19 3 12 3 12Z" stroke="#00d4ff" strokeWidth="2"/>
                <path d="M2 12H6M18 12H22M12 2V6M12 18V22" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
