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
      className={`fixed bottom-8 left-8 h-12 w-12 cursor-pointer transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <div className="relative w-full h-full">
        <svg
          className="transform -rotate-90 w-full h-full"
          width="100%"
          height="100%"
          viewBox="-4 -4 108 108"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            className="stroke-gray-200"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              stroke: '#7B5AFF',
              transition: 'stroke-dashoffset 10ms linear',
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset: `${307.919 - (progress * 307.919) / 100}`,
              fill: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round'
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: '#7B5AFF' }}
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" 
                  transform="rotate(-90 12 12)"/>
          </svg>
        </div>
      </div>
    </div>
  );
} 