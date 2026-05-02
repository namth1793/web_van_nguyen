import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&h=600&fit=crop',
    title: 'Dịch Vụ Vệ Sinh Nhà Xưởng',
    subtitle: 'Chuyên nghiệp – Hiệu quả – Tận tâm',
    link: '/dich-vu',
    linkText: 'Xem Dịch Vụ',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400&h=600&fit=crop',
    title: 'Vệ Sinh Nhà Ở Căn Hộ',
    subtitle: 'AN KHANG® – Chuyên gia làm sạch của bạn!',
    link: '/dich-vu',
    linkText: 'Đặt Dịch Vụ',
  },
  {
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1400&h=600&fit=crop',
    title: 'Cung Cấp Nhân Viên Tạp Vụ',
    subtitle: 'Mạng lưới rộng khắp 63 tỉnh thành toàn quốc',
    link: '/lien-he',
    linkText: 'Liên Hệ Ngay',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <div className="relative h-[400px] md:h-[520px] overflow-hidden group">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
            <div className="container">
              <div className="max-w-xl text-white">
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-3 drop-shadow-lg leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 text-white/90">{slide.subtitle}</p>
                <Link to={slide.link} className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 uppercase text-sm tracking-wider transition-colors">
                  {slide.linkText} <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
}
