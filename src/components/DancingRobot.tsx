export default function DancingRobot() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <style>
        {`
          @keyframes dance-bounce {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(-5deg); }
            50% { transform: translateY(-5px) rotate(5deg); }
            75% { transform: translateY(-15px) rotate(-3deg); }
          }

          @keyframes wave-left {
            0%, 100% { transform: rotate(-20deg); }
            50% { transform: rotate(20deg); }
          }

          @keyframes wave-right {
            0%, 100% { transform: rotate(20deg); }
            50% { transform: rotate(-20deg); }
          }

          @keyframes blink {
            0%, 90%, 100% { opacity: 1; }
            95% { opacity: 0; }
          }

          @keyframes glow-pulse {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.6)); }
            50% { filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.9)); }
          }
        `}
      </style>

      <div
        className="absolute inset-0"
        style={{
          animation: 'dance-bounce 2s ease-in-out infinite, glow-pulse 2s ease-in-out infinite'
        }}
      >
        {/* Robot Body */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Head */}
          <div className="relative mb-2">
            <div
              className="w-24 h-24 rounded-2xl mx-auto"
              style={{
                background: 'linear-gradient(145deg, #1e3a8a, #3b82f6)',
                border: '3px solid rgba(0, 212, 255, 0.6)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 15px rgba(0, 212, 255, 0.2)'
              }}
            >
              {/* Eyes */}
              <div className="flex gap-4 justify-center pt-6">
                <div
                  className="w-4 h-4 rounded-full bg-cyan-400"
                  style={{
                    animation: 'blink 3s ease-in-out infinite',
                    boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)'
                  }}
                />
                <div
                  className="w-4 h-4 rounded-full bg-cyan-400"
                  style={{
                    animation: 'blink 3s ease-in-out infinite 0.1s',
                    boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)'
                  }}
                />
              </div>

              {/* Smile */}
              <div className="mt-3 flex justify-center">
                <div
                  className="w-12 h-6 border-b-4 border-cyan-400 rounded-b-full"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 212, 255, 0.5)'
                  }}
                />
              </div>

              {/* Antenna */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-1 h-6 bg-gradient-to-t from-blue-500 to-cyan-400"
                  style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
                />
                <div
                  className="w-3 h-3 rounded-full bg-cyan-400 absolute -top-1 left-1/2 -translate-x-1/2"
                  style={{
                    animation: 'glow-pulse 1s ease-in-out infinite',
                    boxShadow: '0 0 15px rgba(0, 212, 255, 0.9)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Body */}
          <div
            className="w-28 h-32 rounded-3xl mx-auto relative"
            style={{
              background: 'linear-gradient(145deg, #1e40af, #3b82f6)',
              border: '3px solid rgba(0, 212, 255, 0.6)',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 15px rgba(0, 212, 255, 0.2)'
            }}
          >
            {/* Chest Panel */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #0ea5e9, #06b6d4)',
                border: '2px solid rgba(0, 212, 255, 0.8)',
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.6), inset 0 0 10px rgba(0, 212, 255, 0.3)'
              }}
            >
              {/* AI Symbol */}
              <div className="text-white font-bold text-xl text-center pt-4"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                  fontFamily: 'monospace'
                }}
              >
                AI
              </div>
            </div>
          </div>

          {/* Left Arm */}
          <div
            className="absolute top-28 -left-8 w-6 h-20 rounded-full origin-top"
            style={{
              background: 'linear-gradient(145deg, #1e40af, #3b82f6)',
              border: '2px solid rgba(0, 212, 255, 0.6)',
              animation: 'wave-left 1s ease-in-out infinite',
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
            }}
          >
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
            />
          </div>

          {/* Right Arm */}
          <div
            className="absolute top-28 -right-8 w-6 h-20 rounded-full origin-top"
            style={{
              background: 'linear-gradient(145deg, #1e40af, #3b82f6)',
              border: '2px solid rgba(0, 212, 255, 0.6)',
              animation: 'wave-right 1s ease-in-out infinite',
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
            }}
          >
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
            />
          </div>

          {/* Legs */}
          <div className="flex gap-2 justify-center mt-2">
            <div
              className="w-5 h-14 rounded-full"
              style={{
                background: 'linear-gradient(145deg, #1e40af, #3b82f6)',
                border: '2px solid rgba(0, 212, 255, 0.6)',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
              }}
            >
              <div
                className="absolute bottom-0 w-6 h-3 rounded-full bg-cyan-400"
                style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
              />
            </div>
            <div
              className="w-5 h-14 rounded-full"
              style={{
                background: 'linear-gradient(145deg, #1e40af, #3b82f6)',
                border: '2px solid rgba(0, 212, 255, 0.6)',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
              }}
            >
              <div
                className="absolute bottom-0 w-6 h-3 rounded-full bg-cyan-400"
                style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dancing Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `glow-pulse ${1 + Math.random()}s ease-in-out infinite ${Math.random() * 2}s`,
              boxShadow: '0 0 8px rgba(0, 212, 255, 0.8)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
