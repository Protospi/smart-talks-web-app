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

    // Initialize SmartTalks widget
    const script = document.createElement('script');
    script.innerHTML = `
      !function(s,m,a,r,t,talks){
        s[a]=s[a]||function(){(s[a].q=s[a].q||[]).push(arguments)};
        const c=m.createElement(r);
        c.async=!0,
        c.src="https://cdn.jsdelivr.net/npm/@smarttalks.ai/widget/lib/index.js";
        const f=m.getElementsByTagName(r)[0];
        f.parentNode.insertBefore(c,f);
        const w=m.createElement(a);
        w.id="6772e8823aa640186b7c72b2",
        m.body.append(w)
      }(window,document,"smarttalks-widget","script");
    `;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`fixed bottom-8 left-8 h-14 w-14 cursor-pointer transition-opacity duration-300 z-50 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <div className="relative w-full h-full">
          <svg
            className="transform -rotate-90 w-full h-full absolute"
            width="100%"
            height="100%"
            viewBox="-2 -2 104 104"
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-gray-300"
              fill="none"
              strokeWidth="6"
              style={{
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
              }}
            />
          </svg>

          <svg
            className="transform -rotate-90 w-full h-full absolute top-0 left-0"
            width="100%"
            height="100%"
            viewBox="-2 -2 104 104"
          >
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B7AFF" />
                <stop offset="50%" stopColor="#7B5AFF" />
                <stop offset="100%" stopColor="#6B4AFF" />
              </linearGradient>
              <linearGradient id="lightEffect" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="46"
              style={{
                stroke: 'url(#progressGradient)',
                transition: 'stroke-dashoffset 10ms linear',
                strokeDasharray: '289.027, 289.027',
                strokeDashoffset: `${289.027 - (progress * 289.027) / 100}`,
                fill: 'none',
                strokeWidth: '4',
                strokeLinecap: 'round'
              }}
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              style={{
                stroke: 'url(#lightEffect)',
                strokeDasharray: '289.027, 289.027',
                strokeDashoffset: `${289.027 - (progress * 289.027) / 100}`,
                fill: 'none',
                strokeWidth: '4',
                strokeLinecap: 'round',
                mixBlendMode: 'soft-light'
              }}
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
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
      {/* The SmartTalks widget will be automatically inserted by the script */}
    </>
  );
} 