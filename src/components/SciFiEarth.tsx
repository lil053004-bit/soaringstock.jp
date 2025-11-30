export default function SciFiEarth() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes pulse-ring {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }

          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
          }

          @keyframes grid-move {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
          }
        `}
      </style>

      {/* Gradient Fade Overlay at Top */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 30%, transparent 100%)',
          filter: 'blur(8px)'
        }}
      />

      {/* Half Earth Container */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] overflow-hidden">
        {/* Earth Core with Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.6), rgba(29, 78, 216, 0.8))',
            boxShadow: '0 0 100px rgba(59, 130, 246, 0.6), inset 0 0 100px rgba(0, 212, 255, 0.3)',
            animation: 'rotate-slow 60s linear infinite'
          }}
        >
          {/* Earth Surface Detail */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(34, 211, 238, 0.3) 0%, transparent 20%),
                radial-gradient(circle at 70% 50%, rgba(14, 165, 233, 0.4) 0%, transparent 25%),
                radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 30%)
              `,
              mixBlendMode: 'overlay'
            }}
          />

          {/* Grid Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40" style={{ animation: 'rotate-slow 40s linear infinite' }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <circle cx="300" cy="300" r="290" fill="url(#grid)" />
          </svg>

          {/* Latitude Lines */}
          {[0.2, 0.4, 0.6, 0.8].map((position, i) => (
            <div
              key={`lat-${i}`}
              className="absolute left-1/2 -translate-x-1/2 rounded-full border-2 border-cyan-400/30"
              style={{
                top: `${position * 100}%`,
                width: `${100 - position * 30}%`,
                height: '2px',
                transform: 'translateX(-50%) rotateX(60deg)',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)'
              }}
            />
          ))}

          {/* Longitude Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`lon-${i}`}
              className="absolute top-0 left-1/2 w-1 h-full origin-bottom"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.3), transparent)',
                transform: `translateX(-50%) rotate(${i * 22.5}deg)`,
                boxShadow: '0 0 5px rgba(0, 212, 255, 0.3)'
              }}
            />
          ))}
        </div>

        {/* Pulsing Rings */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full border-2 border-cyan-400/40"
          style={{
            animation: 'pulse-ring 3s ease-in-out infinite',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[660px] h-[660px] rounded-full border-2 border-blue-400/30"
          style={{
            animation: 'pulse-ring 3s ease-in-out infinite 0.5s',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
          }}
        />

        {/* Orbiting Satellites */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px]">
          {[...Array(3)].map((_, i) => (
            <div
              key={`satellite-${i}`}
              className="absolute top-1/2 left-1/2 w-2 h-2"
              style={{
                animation: `orbit ${15 + i * 5}s linear infinite ${i * 2}s`
              }}
            >
              <div
                className="w-2 h-2 rounded-full bg-cyan-400"
                style={{
                  boxShadow: '0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.6)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Atmospheric Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-t-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        {/* Energy Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              bottom: `${Math.random() * 200}px`,
              left: `${20 + Math.random() * 60}%`,
              animation: `pulse-ring ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
              boxShadow: '0 0 8px rgba(0, 212, 255, 0.8)',
              opacity: 0.6 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute bottom-0 w-px bg-gradient-to-t from-cyan-400 via-blue-400 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: '100%',
              animation: `grid-move 3s linear infinite ${i * 0.5}s`,
              boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
