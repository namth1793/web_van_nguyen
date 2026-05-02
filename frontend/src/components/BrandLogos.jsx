import { useState, useEffect } from 'react';

const brands = [
  { name: 'Vingroup', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Vingroup_logo.svg/200px-Vingroup_logo.svg.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png' },
  { name: 'Lotte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lotte_logo.svg/200px-Lotte_logo.svg.png' },
  { name: 'Aeon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AEON_logo.svg/200px-AEON_logo.svg.png' },
  { name: 'Unilever', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Unilever.svg/200px-Unilever.svg.png' },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bosch-logo.svg/200px-Bosch-logo.svg.png' },
  { name: 'Nestle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nestl%C3%A9.svg/200px-Nestl%C3%A9.svg.png' },
];

export default function BrandLogos() {
  const [offset, setOffset] = useState(0);
  const total = brands.length;

  useEffect(() => {
    const timer = setInterval(() => setOffset(o => (o + 1) % total), 2500);
    return () => clearInterval(timer);
  }, [total]);

  const visible = [...brands, ...brands].slice(offset, offset + 5);

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-6">
          <h3 className="text-base font-black uppercase text-gray-500 tracking-widest">ĐỐI TÁC CỦA CHÚNG TÔI</h3>
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-10 overflow-hidden">
          {visible.map((b, i) => (
            <div key={`${b.name}-${i}`} className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={b.logo} alt={b.name} className="h-10 md:h-12 object-contain max-w-[120px]"
                onError={e => { e.target.style.display='none'; }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
