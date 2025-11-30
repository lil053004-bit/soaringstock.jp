export default function FutureCube3D() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ perspective: '1000px' }}>
      <div
        className="absolute inset-0 animate-float-rotate-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-20deg) rotateY(20deg)'
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl border-2 border-neon-cyan/60 shadow-holographic-glow animate-glow-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 42, 58, 0.75) 0%, rgba(40, 55, 75, 0.7) 50%, rgba(55, 70, 90, 0.75) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.4), 0 0 80px rgba(168, 85, 247, 0.3), inset 0 0 60px rgba(0, 212, 255, 0.1)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40 opacity-60"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 120 L40 80 L50 70 L50 110 Z"
                fill="url(#kline1)"
                opacity="0.8"
              />
              <path
                d="M60 100 L60 60 L70 50 L70 90 Z"
                fill="url(#kline2)"
                opacity="0.8"
              />
              <path
                d="M80 140 L80 100 L90 90 L90 130 Z"
                fill="url(#kline3)"
                opacity="0.8"
              />
              <path
                d="M100 90 L100 50 L110 40 L110 80 Z"
                fill="url(#kline4)"
                opacity="0.8"
              />
              <path
                d="M120 130 L120 90 L130 80 L130 120 Z"
                fill="url(#kline5)"
                opacity="0.8"
              />
              <path
                d="M140 110 L140 70 L150 60 L150 100 Z"
                fill="url(#kline6)"
                opacity="0.8"
              />

              <line x1="40" y1="80" x2="50" y2="70" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
              <line x1="60" y1="60" x2="70" y2="50" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
              <line x1="80" y1="100" x2="90" y2="90" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
              <line x1="100" y1="50" x2="110" y2="40" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
              <line x1="120" y1="90" x2="130" y2="80" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
              <line x1="140" y1="70" x2="150" y2="60" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />

              <line x1="40" y1="120" x2="50" y2="110" stroke="#ff6b9d" strokeWidth="2" opacity="0.6" />
              <line x1="60" y1="100" x2="70" y2="90" stroke="#ff6b9d" strokeWidth="2" opacity="0.6" />
              <line x1="80" y1="140" x2="90" y2="130" stroke="#ff6b9d" strokeWidth="2" opacity="0.6" />
              <line x1="100" y1="90" x2="110" y2="80" stroke="#ff6b9d" strokeWidth="2" opacity="0.6" />
              <line x1="120" y1="130" x2="130" y2="120" stroke="#ff6b9d" strokeWidth="2" opacity="0.6" />
              <line x1="140" y1="110" x2="150" y2="100" stroke="#ff6b9d" strokeWidth="2" opacity="0.6" />

              <defs>
                <linearGradient id="kline1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="kline2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="kline3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b9d" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="kline4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="kline5" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="kline6" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b9d" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.25), transparent 70%)',
            }}
          />
        </div>

        <div className="absolute inset-0 rounded-2xl border border-neon-purple/20 animate-breathe"
          style={{
            animationDelay: '0.5s',
            backdropFilter: 'blur(5px)'
          }}
        />
      </div>
    </div>
  );
}
