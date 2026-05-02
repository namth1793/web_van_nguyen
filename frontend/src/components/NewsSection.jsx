import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fallback = [
  { id: 1, title: 'Dịch vụ giặt ghế sofa Tại Tuy Hòa, Giặt Tại Nhà, Sấy Khô, Diệt Khuẩn', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', created_at: '2025-12-02' },
  { id: 2, title: 'Dịch vụ giặt nệm tại Diên Khánh Tỉnh Khánh Hòa – An Khang Clean', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop', created_at: '2025-09-27' },
  { id: 3, title: 'Dịch vụ giặt nệm Tây Hòa – Dịch vụ An Khang Clean', image: 'https://images.unsplash.com/photo-1587552150688-c2c59b61a2f2?w=400&h=300&fit=crop', created_at: '2025-09-27' },
  { id: 4, title: 'Dịch vụ vệ sinh công nghiệp tại Bình Dương – An Khang Clean', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop', created_at: '2025-09-15' },
  { id: 5, title: 'Vệ sinh nhà xưởng tại Đồng Nai – Giải pháp sạch cho nhà máy của bạn', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop', created_at: '2025-08-20' },
  { id: 6, title: 'Cung cấp nhân viên tạp vụ văn phòng tại TP.HCM – An Khang Clean', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop', created_at: '2025-08-10' },
  { id: 7, title: 'Dịch vụ lau kính tòa nhà cao tầng tại Hà Nội – An Khang Clean', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', created_at: '2025-07-25' },
  { id: 8, title: 'Quy trình vệ sinh sau xây dựng chuẩn An Khang – Sạch ngay lần đầu', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=400&h=300&fit=crop', created_at: '2025-07-10' },
];

function formatDate(d) {
  const dt = new Date(d);
  return `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}`;
}

export default function NewsSection() {
  const [news, setNews] = useState(fallback);

  useEffect(() => {
    axios.get('/api/news?limit=8').then(r => { if (r.data?.length) setNews(r.data); }).catch(() => {});
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">TIN TỨC NỔI BẬT</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {news.map((n) => (
            <Link key={n.id} to="/tin-tuc" className="news-card bg-white rounded overflow-hidden border border-gray-100">
              <div className="overflow-hidden h-40">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3">
                <div className="text-xs text-gray-400 mb-1.5 flex items-center gap-1">
                  <i className="fas fa-calendar text-primary"></i>
                  {formatDate(n.created_at)}
                </div>
                <h4 className="news-title text-sm font-bold text-gray-800 leading-snug line-clamp-3 transition-colors">
                  {n.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/tin-tuc" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 uppercase tracking-wider transition-all">
            XEM TẤT CẢ TIN TỨC <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
