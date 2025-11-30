interface GrassCornerDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function GrassCornerDecoration({ position }: GrassCornerDecorationProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0 rotate-90';
      case 'bottom-left':
        return 'bottom-0 left-0 -rotate-90';
      case 'bottom-right':
        return 'bottom-0 right-0 rotate-180';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} w-32 h-32 pointer-events-none`}>
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g>
          <path d="M8 110 Q10 85 12 60 Q13 50 15 40" stroke="#8b6f47" strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
          <ellipse cx="10" cy="42" rx="1.5" ry="3" fill="#d4af37" opacity="0.8" transform="rotate(-45 10 42)"/>
          <ellipse cx="12" cy="43" rx="1.5" ry="3" fill="#c9a832" opacity="0.75" transform="rotate(-40 12 43)"/>
          <ellipse cx="14" cy="44" rx="1.5" ry="3" fill="#d4af37" opacity="0.8" transform="rotate(-48 14 44)"/>
          <ellipse cx="11" cy="46" rx="1.5" ry="3" fill="#b8941f" opacity="0.75" transform="rotate(-50 11 46)"/>
          <ellipse cx="13" cy="47" rx="1.5" ry="3" fill="#d4af37" opacity="0.8" transform="rotate(-42 13 47)"/>
          <ellipse cx="15" cy="48" rx="1.5" ry="3" fill="#c9a832" opacity="0.75" transform="rotate(-46 15 48)"/>
        </g>

        <g>
          <path d="M15 110 Q18 80 22 55 Q24 45 28 35" stroke="#8b6f47" strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
          <ellipse cx="23" cy="37" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-38 23 37)"/>
          <ellipse cx="25" cy="38" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-35 25 38)"/>
          <ellipse cx="27" cy="39" rx="1.5" ry="3" fill="#b8941f" opacity="0.8" transform="rotate(-42 27 39)"/>
          <ellipse cx="24" cy="41" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-40 24 41)"/>
          <ellipse cx="26" cy="42" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-37 26 42)"/>
          <ellipse cx="28" cy="43" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-39 28 43)"/>
        </g>

        <g>
          <path d="M24 110 Q28 78 33 50 Q36 40 40 30" stroke="#8b6f47" strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
          <ellipse cx="36" cy="32" rx="1.5" ry="3" fill="#d4af37" opacity="0.8" transform="rotate(-32 36 32)"/>
          <ellipse cx="38" cy="33" rx="1.5" ry="3" fill="#b8941f" opacity="0.75" transform="rotate(-30 38 33)"/>
          <ellipse cx="39" cy="34" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-35 39 34)"/>
          <ellipse cx="37" cy="36" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-33 37 36)"/>
          <ellipse cx="39" cy="37" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-31 39 37)"/>
          <ellipse cx="40" cy="38" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-34 40 38)"/>
        </g>

        <g>
          <path d="M34 110 Q39 75 45 48 Q48 38 53 25" stroke="#8b6f47" strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
          <ellipse cx="49" cy="27" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-28 49 27)"/>
          <ellipse cx="51" cy="28" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-25 51 28)"/>
          <ellipse cx="52" cy="29" rx="1.5" ry="3" fill="#b8941f" opacity="0.8" transform="rotate(-30 52 29)"/>
          <ellipse cx="50" cy="31" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-27 50 31)"/>
          <ellipse cx="52" cy="32" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-26 52 32)"/>
          <ellipse cx="53" cy="33" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-29 53 33)"/>
        </g>

        <g>
          <path d="M45 110 Q51 72 58 43 Q62 33 68 20" stroke="#8b6f47" strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
          <ellipse cx="63" cy="22" rx="1.5" ry="3" fill="#d4af37" opacity="0.8" transform="rotate(-22 63 22)"/>
          <ellipse cx="65" cy="23" rx="1.5" ry="3" fill="#c9a832" opacity="0.75" transform="rotate(-20 65 23)"/>
          <ellipse cx="66" cy="24" rx="1.5" ry="3" fill="#b8941f" opacity="0.8" transform="rotate(-25 66 24)"/>
          <ellipse cx="64" cy="26" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-23 64 26)"/>
          <ellipse cx="66" cy="27" rx="1.5" ry="3" fill="#c9a832" opacity="0.8" transform="rotate(-21 66 27)"/>
          <ellipse cx="68" cy="28" rx="1.5" ry="3" fill="#d4af37" opacity="0.75" transform="rotate(-24 68 28)"/>
        </g>
      </svg>
    </div>
  );
}
