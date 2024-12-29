import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      
      setIsVisible(winScroll > 50);
      setProgress(scrolled);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-8 left-16 h-14 w-14 cursor-pointer transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <div className="relative w-full h-full">
        <svg
          className="transform -rotate-90 w-full h-full absolute"
          width="100%"
          height="100%"
          viewBox="-8 -8 116 116"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            className="stroke-gray-300"
            fill="none"
            strokeWidth="4.5"
            style={{
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
            }}
          />
        </svg>

        <svg
          className="transform -rotate-90 w-full h-full absolute top-0 left-0"
          width="100%"
          height="100%"
          viewBox="-8 -8 116 116"
        >
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B6AFF" />
              <stop offset="100%" stopColor="#7B5AFF" />
            </linearGradient>
            <filter id="progressGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feOffset dx="0" dy="0" result="offsetBlur"/>
              <feMerge>
                <feMergeNode in="offsetBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="46"
            style={{
              stroke: 'url(#progressGradient)',
              filter: 'url(#progressGlow) drop-shadow(0 0 2px rgba(123, 90, 255, 0.6))',
              transition: 'stroke-dashoffset 10ms linear',
              strokeDasharray: '289.027, 289.027',
              strokeDashoffset: `${289.027 - (progress * 289.027) / 100}`,
              fill: 'none',
              strokeWidth: '4.5',
              strokeLinecap: 'round'
            }}
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className="drop-shadow-[0_2px_3px_rgba(123,90,255,0.4)]"
            style={{
              filter: 'drop-shadow(0 0 1px rgba(123, 90, 255, 0.5))'
            }}
          >
            <path
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              transform="rotate(-90 12 12)"
              fill="url(#progressGradient)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
} 