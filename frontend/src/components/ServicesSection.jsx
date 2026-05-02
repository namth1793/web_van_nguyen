import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fallbackServices = [
  { id: 1, name: 'Vệ Sinh Công Nghiệp', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop', slug: 've-sinh-cong-nghiep' },
  { id: 2, name: 'Vệ Sinh Nhà Ở', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', slug: 've-sinh-nha-o' },
  { id: 3, name: 'Vệ Sinh Nhà Xưởng', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', slug: 've-sinh-nha-xuong' },
  { id: 4, name: 'Vệ Sinh Ống Khói Bếp', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop', slug: 've-sinh-ong-khoi-bep' },
  { id: 5, name: 'Dịch Vụ Lau Kính', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', slug: 'dich-vu-lau-kinh' },
  { id: 6, name: 'Dịch Vụ Giặt Thảm', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=600&h=400&fit=crop', slug: 'dich-vu-giat-tham' },
  { id: 7, name: 'Cung Cấp Tạp Vụ Vệ Sinh', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop', slug: 'cung-cap-tap-vu-ve-sinh' },
  { id: 8, name: 'Dịch Vụ Giặt Ghế', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop', slug: 'dich-vu-giat-ghe' },
  { id: 9, name: 'Mài Và Đánh Bóng Sàn', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', slug: 'mai-va-danh-bong-san' },
];

export default function ServicesSection() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    axios.get('/api/services').then(r => { if (r.data?.length) setServices(r.data); }).catch(() => {});
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">DỊCH VỤ NỔI BẬT</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            <strong>AN KHANG®</strong> là công ty chuyên cung cấp dịch vụ vệ sinh công nghiệp được quản lý bởi Tập Đoàn An Khang Việt Nam.
            Với việc cung cấp dịch vụ đa dạng và mạng lưới rộng khắp 63 tỉnh thành tại Việt Nam.
            <strong> AN KHANG®</strong> Tự hào là thương hiệu cung cấp dịch vụ làm sạch chuyên nghiệp nhất và an toàn nhất.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link key={s.id} to="/dich-vu" className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative overflow-hidden h-40 md:h-48">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-broom text-primary text-sm"></i>
                </div>
                <h3 className="font-bold text-sm text-gray-800 group-hover:text-primary transition-colors uppercase leading-tight">
                  {s.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/dich-vu" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 uppercase tracking-wider transition-colors">
            XEM TẤT CẢ DỊCH VỤ <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
