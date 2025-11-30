export default function DeepSpaceBackground() {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#1E2A3A' }}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(30, 42, 58, 1) 0%, rgba(40, 55, 75, 1) 50%, rgba(30, 42, 58, 1) 100%)'
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-1/3"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(70, 85, 105, 0.3) 0%, transparent 70%)'
        }}
      ></div>

      <div
        className="absolute bottom-0 right-0 w-2/3 h-1/2"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(55, 70, 90, 0.4) 0%, transparent 60%)'
        }}
      ></div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle-star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.6
          }}
        />
      ))}

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent 70%)'
        }}
      />

      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-12 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)'
        }}
      />
    </div>
  );
}
