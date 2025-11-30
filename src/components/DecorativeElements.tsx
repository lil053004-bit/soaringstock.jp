export default function DecorativeElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[15%] left-[8%] w-20 h-20 bg-soft-pink-300 rounded-full opacity-70 animate-float-1" />
      <div className="absolute top-[25%] right-[12%] w-24 h-24 bg-mint-300 rounded-full opacity-65 animate-float-2" />
      <div className="absolute bottom-[30%] left-[15%] w-16 h-16 bg-peach-300 rounded-full opacity-60 animate-float-3" />
      <div className="absolute top-[40%] right-[8%] w-14 h-14 bg-soft-pink-200 rounded-full opacity-70 animate-float-1" style={{ animationDelay: '1s' }} />

      <svg className="absolute top-[18%] right-[20%] w-8 h-8 text-peach-500 opacity-90 animate-twinkle" style={{ animationDelay: '0.5s' }}>
        <path d="M3 0 L3.5 2.5 L6 3 L3.5 3.5 L3 6 L2.5 3.5 L0 3 L2.5 2.5 Z" fill="currentColor" />
      </svg>

      <svg className="absolute top-[35%] left-[18%] w-6 h-6 text-mint-500 opacity-85 animate-twinkle" style={{ animationDelay: '1.2s' }}>
        <path d="M2.5 0 L3 2 L5 2.5 L3 3 L2.5 5 L2 3 L0 2.5 L2 2 Z" fill="currentColor" />
      </svg>

      <svg className="absolute bottom-[25%] right-[25%] w-9 h-9 text-soft-pink-500 opacity-80 animate-twinkle" style={{ animationDelay: '0.8s' }}>
        <path d="M3.5 0 L4 2.5 L6.5 3.5 L4 4.5 L3.5 7 L3 4.5 L0.5 3.5 L3 2.5 Z" fill="currentColor" />
      </svg>

      <svg className="absolute top-[12%] left-[25%] w-5 h-5 text-peach-400 opacity-85 animate-twinkle" style={{ animationDelay: '1.5s' }}>
        <path d="M2 0 L2.5 1.5 L4 2 L2.5 2.5 L2 4 L1.5 2.5 L0 2 L1.5 1.5 Z" fill="currentColor" />
      </svg>

      <svg className="absolute bottom-[35%] left-[10%] w-6 h-6 text-mint-400 opacity-90 animate-twinkle" style={{ animationDelay: '2s' }}>
        <path d="M2.5 0 L3 2 L5 2.5 L3 3 L2.5 5 L2 3 L0 2.5 L2 2 Z" fill="currentColor" />
      </svg>

      <div className="absolute top-[28%] left-[5%] w-4 h-4 bg-soft-pink-400 rounded-full opacity-75 animate-float-2" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[40%] right-[15%] w-5 h-5 bg-peach-400 rounded-full opacity-70 animate-float-3" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[45%] right-[5%] w-4 h-4 bg-mint-400 rounded-full opacity-80 animate-float-1" style={{ animationDelay: '1.8s' }} />

      <div className="absolute top-[22%] left-[30%] w-10 h-3 bg-soft-pink-300 rounded-full opacity-60 rotate-45 animate-float-subtle" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-[28%] right-[10%] w-8 h-3 bg-mint-300 rounded-full opacity-65 -rotate-45 animate-float-subtle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[38%] left-[12%] w-9 h-3 bg-peach-300 rounded-full opacity-55 rotate-12 animate-float-subtle" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}
