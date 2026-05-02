import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Zalo */}
      <a href="https://zalo.me/0797373456" target="_blank" rel="noreferrer"
        className="float-btn" style={{ bottom: '160px' }} title="Chat Zalo">
        <svg viewBox="0 0 100 100" width="26" height="26" fill="white">
          <text y=".9em" fontSize="80" fontWeight="bold">Z</text>
        </svg>
      </a>

      {/* Hotline */}
      <a href="tel:0797373456"
        className="float-btn" style={{ bottom: '100px' }} title="Gọi ngay">
        <i className="fas fa-phone-alt animate-pulse"></i>
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="float-btn bg-gray-700 hover:bg-primary" style={{ bottom: '40px' }}
          title="Lên đầu trang"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

      {/* Hotline floating label */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
        <a href="tel:0797373456"
          className="bg-red text-white text-xs font-bold py-2 px-3 rounded-r shadow-lg flex items-center gap-2 hover:bg-red-700 transition-colors"
          style={{ writingMode: 'horizontal-tb' }}>
          <i className="fas fa-phone-alt animate-pulse"></i>
          <span>0797.37.3456</span>
        </a>
        <a href="https://zalo.me/0797373456" target="_blank" rel="noreferrer"
          className="bg-blue-500 text-white text-xs font-bold py-2 px-3 rounded-r shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
          <span className="font-black">Z</span>
          <span>Zalo</span>
        </a>
      </div>
    </>
  );
}
