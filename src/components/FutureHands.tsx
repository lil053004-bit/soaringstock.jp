export default function FutureHands() {
  return (
    <>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
        <div className="relative w-48 h-64 animate-hand-sway">
          <svg
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-40"
          >
            <defs>
              <linearGradient id="handGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            <path
              d="M 180 250 Q 160 240, 150 220 Q 140 200, 140 180 L 140 120 Q 140 100, 130 90 Q 120 80, 100 80 L 80 80"
              stroke="url(#handGradientLeft)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M 140 180 L 140 140 Q 140 130, 150 125 L 165 120"
              stroke="#00d4ff"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />

            <path
              d="M 140 150 L 150 145 Q 160 140, 170 145 L 180 150"
              stroke="#00d4ff"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />

            <path
              d="M 140 170 L 150 165 Q 160 160, 170 165 L 175 168"
              stroke="#a855f7"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />

            <ellipse cx="100" cy="80" rx="8" ry="8" fill="#00d4ff" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </ellipse>

            <circle cx="140" cy="180" r="6" fill="#a855f7" opacity="0.5" />
            <circle cx="165" cy="120" r="5" fill="#00d4ff" opacity="0.5" />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent blur-2xl"></div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
        <div className="relative w-48 h-64 animate-hand-sway" style={{ animationDelay: '-2.5s' }}>
          <svg
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-40"
          >
            <defs>
              <linearGradient id="handGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ff6b9d" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            <path
              d="M 20 250 Q 40 240, 50 220 Q 60 200, 60 180 L 60 120 Q 60 100, 70 90 Q 80 80, 100 80 L 120 80"
              stroke="url(#handGradientRight)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M 60 180 L 60 140 Q 60 130, 50 125 L 35 120"
              stroke="#a855f7"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />

            <path
              d="M 60 150 L 50 145 Q 40 140, 30 145 L 20 150"
              stroke="#a855f7"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />

            <path
              d="M 60 170 L 50 165 Q 40 160, 30 165 L 25 168"
              stroke="#ff6b9d"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />

            <ellipse cx="100" cy="80" rx="8" ry="8" fill="#a855f7" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </ellipse>

            <circle cx="60" cy="180" r="6" fill="#ff6b9d" opacity="0.5" />
            <circle cx="35" cy="120" r="5" fill="#a855f7" opacity="0.5" />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-l from-neon-purple/10 to-transparent blur-2xl"></div>
        </div>
      </div>
    </>
  );
}
