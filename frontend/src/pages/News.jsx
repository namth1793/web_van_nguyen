import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fallback = [
  { id: 1, title: 'Dịch vụ giặt ghế sofa Tại Tuy Hòa, Giặt Tại Nhà, Sấy Khô, Diệt Khuẩn', excerpt: 'An Khang Clean cung cấp dịch vụ giặt ghế sofa tại Tuy Hòa với công nghệ hiện đại, sạch sâu, diệt khuẩn 99.9%, giá cả hợp lý.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop', created_at: '2025-12-02', category: 'Giặt Ghế' },
  { id: 2, title: 'Dịch vụ giặt nệm tại Diên Khánh Tỉnh Khánh Hòa – An Khang Clean', excerpt: 'Giặt nệm tại Diên Khánh, Khánh Hòa với máy móc chuyên dụng. An Khang Clean cam kết vệ sinh sạch sẽ, diệt khuẩn, khử mùi hiệu quả.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop', created_at: '2025-09-27', category: 'Giặt Thảm' },
  { id: 3, title: 'Dịch vụ giặt nệm Tây Hòa – Dịch vụ An Khang Clean', excerpt: 'Giặt nệm tại Tây Hòa, Phú Yên. Dịch vụ chuyên nghiệp, tận tâm từ An Khang Clean với công nghệ sấy khô nhanh, khử khuẩn triệt để.', image: 'https://images.unsplash.com/photo-1587552150688-c2c59b61a2f2?w=600&h=400&fit=crop', created_at: '2025-09-27', category: 'Giặt Thảm' },
  { id: 4, title: 'Dịch vụ vệ sinh công nghiệp tại Bình Dương – An Khang Clean', excerpt: 'Vệ sinh công nghiệp tại Bình Dương cho nhà máy, xí nghiệp, khu công nghiệp. An Khang Clean – đơn vị hàng đầu trong lĩnh vực vệ sinh chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop', created_at: '2025-09-15', category: 'Vệ Sinh Công Nghiệp' },
  { id: 5, title: 'Vệ sinh nhà xưởng tại Đồng Nai – Giải pháp sạch cho nhà máy của bạn', excerpt: 'An Khang Clean cung cấp dịch vụ vệ sinh nhà xưởng tại Đồng Nai chuyên nghiệp, đúng tiến độ, đảm bảo tiêu chuẩn vệ sinh an toàn lao động.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', created_at: '2025-08-20', category: 'Vệ Sinh Nhà Xưởng' },
  { id: 6, title: 'Cung cấp nhân viên tạp vụ văn phòng tại TP.HCM – An Khang Clean', excerpt: 'Dịch vụ cung cấp nhân viên tạp vụ văn phòng tại TP.HCM theo giờ, theo ca, theo tháng. Đội ngũ được đào tạo bài bản, chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop', created_at: '2025-08-10', category: 'Tạp Vụ' },
  { id: 7, title: 'Dịch vụ lau kính tòa nhà cao tầng tại Hà Nội – An Khang Clean', excerpt: 'Lau kính tòa nhà, cao ốc văn phòng tại Hà Nội với thiết bị an toàn hiện đại. An Khang Clean – đơn vị được tin tưởng hàng đầu.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', created_at: '2025-07-25', category: 'Lau Kính' },
  { id: 8, title: 'Quy trình vệ sinh sau xây dựng chuẩn An Khang – Sạch ngay lần đầu', excerpt: 'Quy trình vệ sinh sau xây dựng 6 bước chuẩn An Khang giúp công trình sạch sẽ, bàn giao đúng hạn, tiết kiệm chi phí tối đa.', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=600&h=400&fit=crop', created_at: '2025-07-10', category: 'Vệ Sinh Công Trình' },
];

function formatDate(d) {
  const dt = new Date(d);
  return `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}`;
}

export default function News() {
  const [news, setNews] = useState(fallback);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/api/news?limit=20').then(r => { if (r.data?.length) setNews(r.data); }).catch(() => {});
  }, []);

  const filtered = news.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <div className="bg-gray-100 py-3">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Trang Chủ</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-primary font-bold">Tin Tức</span>
          </div>
        </div>
      </div>

      <div className="relative h-40 bg-primary overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=250&fit=crop" alt="Tin tức" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-black uppercase text-white">TIN TỨC MỚI NHẤT</h1>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Main */}
            <div className="md:col-span-9">
              {/* Search */}
              <div className="mb-6 flex gap-2">
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-white px-5 py-2.5 rounded font-bold text-sm">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              <div className="space-y-6">
                {filtered.map(n => (
                  <div key={n.id} className="flex gap-4 news-card bg-white rounded border border-gray-100 overflow-hidden p-0 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex-shrink-0 w-48 h-36 overflow-hidden">
                      <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-3 mb-2">
                        {n.category && <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded">{n.category}</span>}
                        <span className="text-xs text-gray-400"><i className="fas fa-calendar mr-1 text-primary"></i>{formatDate(n.created_at)}</span>
                      </div>
                      <h3 className="news-title font-black text-gray-800 mb-2 leading-snug group-hover:text-primary transition-colors">{n.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{n.excerpt}</p>
                      <Link to="/tin-tuc" className="mt-3 inline-block text-sm text-primary font-bold hover:underline">
                        Đọc tiếp <i className="fas fa-arrow-right ml-1 text-xs"></i>
                      </Link>
                    </div>
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    <i className="fas fa-search text-4xl mb-3 block"></i>
                    Không tìm thấy tin tức phù hợp
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-3 space-y-5">
              <div>
                <span className="widget-title">TIN TỨC MỚI NHẤT</span>
                <div className="space-y-3">
                  {news.slice(0, 5).map(n => (
                    <Link key={n.id} to="/tin-tuc" className="flex gap-2 group">
                      <img src={n.image} alt={n.title} className="w-16 h-12 object-cover rounded flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-gray-700 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{n.title}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{formatDate(n.created_at)}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hotline box */}
              <div className="bg-primary text-white rounded p-4 text-center">
                <i className="fas fa-phone-alt text-3xl mb-2 block animate-pulse"></i>
                <div className="font-black text-lg">0797.37.3456</div>
                <div className="text-xs opacity-80 mb-3">Hotline tư vấn 24/7</div>
                <Link to="/lien-he" className="block bg-white text-primary font-bold text-sm py-2 rounded hover:bg-gray-100 transition-colors">
                  Đặt Dịch Vụ Ngay
                </Link>
              </div>

              <div>
                <span className="widget-title">DANH MỤC TIN TỨC</span>
                <ul className="space-y-1">
                  {['Vệ Sinh Công Nghiệp', 'Vệ Sinh Nhà Xưởng', 'Tạp Vụ', 'Giặt Ghế – Giặt Thảm', 'Lau Kính', 'Vệ Sinh Công Trình'].map(c => (
                    <li key={c}><Link to="/tin-tuc" className="flex items-center justify-between text-sm text-gray-700 hover:text-primary py-1.5 border-b border-gray-100 transition-colors">
                      <span className="flex items-center gap-2"><i className="fas fa-angle-right text-primary text-xs"></i>{c}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-1.5 py-0.5 rounded">
                        {news.filter(n => n.category === c).length || Math.floor(Math.random()*3)+1}
                      </span>
                    </Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
