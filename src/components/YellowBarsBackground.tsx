export default function YellowBarsBackground() {
  const bars = Array.from({ length: 15 }, (_, i) => ({
    left: `${5 + (i * 6.5)}%`,
    height: `${50 + (i % 3) * 20}%`,
    delay: `${(i % 5) * 0.3}s`,
    duration: `${2.5 + (i % 3) * 0.5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>
        {`
          @keyframes bar-wave {
            0%, 100% {
              transform: translateY(0) scaleY(1);
              opacity: 0.25;
            }
            50% {
              transform: translateY(-15px) scaleY(1.1);
              opacity: 0.4;
            }
          }

          @keyframes bar-pulse {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.35;
            }
          }
        `}
      </style>
      {bars.map((bar, index) => (
        <div
          key={index}
          className="absolute bottom-0"
          style={{
            left: bar.left,
            width: '8px',
            height: bar.height,
            background: 'linear-gradient(to top, rgba(37, 99, 235, 0.3), rgba(37, 99, 235, 0.15))',
            animation: `bar-wave ${bar.duration} ease-in-out infinite, bar-pulse ${bar.duration * 1.5}s ease-in-out infinite`,
            animationDelay: bar.delay,
            borderRadius: '4px 4px 0 0',
            boxShadow: '0 0 10px rgba(37, 99, 235, 0.2)',
          }}
        />
      ))}
    </div>
  );
}
