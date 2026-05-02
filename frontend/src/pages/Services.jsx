import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContactSection from '../components/ContactSection';

const fallback = [
  { id: 1, name: 'Vệ Sinh Công Nghiệp', description: 'Dịch vụ vệ sinh công nghiệp chuyên nghiệp, an toàn, hiệu quả cho nhà máy, xí nghiệp, khu công nghiệp toàn quốc.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 2, name: 'Vệ Sinh Nhà Ở', description: 'Dịch vụ dọn vệ sinh nhà ở, căn hộ, tổng vệ sinh theo giờ hoặc theo gói chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 3, name: 'Vệ Sinh Nhà Xưởng', description: 'Vệ sinh nhà xưởng, nhà máy, kho bãi theo quy trình chuẩn ISO, đảm bảo môi trường làm việc sạch sẽ.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 4, name: 'Vệ Sinh Ống Khói Bếp', description: 'Vệ sinh ống khói bếp, hệ thống hút mùi nhà hàng, khách sạn, bếp công nghiệp chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 5, name: 'Dịch Vụ Lau Kính', description: 'Lau kính tòa nhà, văn phòng, cao ốc bằng thiết bị chuyên dụng, đảm bảo an toàn tuyệt đối.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 6, name: 'Dịch Vụ Giặt Thảm', description: 'Giặt thảm văn phòng, thảm khách sạn, thảm gia đình bằng máy móc hiện đại, sạch sâu, diệt khuẩn.', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 7, name: 'Cung Cấp Tạp Vụ Vệ Sinh', description: 'Cung cấp nhân viên tạp vụ vệ sinh theo ca, theo tháng cho văn phòng, tòa nhà, nhà máy.', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop', group_name: 'tap-vu' },
  { id: 8, name: 'Dịch Vụ Giặt Ghế', description: 'Giặt ghế sofa, ghế văn phòng, ghế ăn bằng công nghệ hiện đại, an toàn cho vải và da.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop', group_name: 've-sinh' },
  { id: 9, name: 'Mài Và Đánh Bóng Sàn', description: 'Mài sàn đá, đánh bóng sàn đá marble, đá granite, sàn epoxy chuyên nghiệp, bền đẹp.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', group_name: 've-sinh' },
];

export default function Services() {
  const [services, setServices] = useState(fallback);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('/api/services').then(r => { if (r.data?.length) setServices(r.data); }).catch(() => {});
  }, []);

  const filtered = filter === 'all' ? services : services.filter(s => s.group_name === filter);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Trang Chủ</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-primary font-bold">Dịch Vụ</span>
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative h-48 bg-primary overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=300&fit=crop" alt="Dịch vụ" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-black uppercase">DỊCH VỤ CỦA CHÚNG TÔI</h1>
            <p className="text-sm mt-2 opacity-90">AN KHANG® – Chuyên gia làm sạch của bạn!</p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {[
              { key: 'all', label: 'Tất Cả Dịch Vụ' },
              { key: 've-sinh', label: 'Dịch Vụ Vệ Sinh' },
              { key: 'tap-vu', label: 'Cung Cấp Tạp Vụ' },
            ].map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)}
                className={`px-5 py-2 font-bold text-sm uppercase rounded transition-all border ${
                  filter === f.key ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
                }`}>
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <div key={s.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="overflow-hidden h-52">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-accent font-black uppercase text-base mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex gap-2">
                    <a href="tel:0797373456" className="flex-1 bg-primary text-white font-bold py-2 text-sm text-center rounded hover:bg-primary-dark transition-colors">
                      <i className="fas fa-phone-alt mr-1"></i> Đặt Dịch Vụ
                    </a>
                    <Link to="/lien-he" className="flex-1 border border-primary text-primary font-bold py-2 text-sm text-center rounded hover:bg-primary hover:text-white transition-colors">
                      Tư Vấn Ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">TẠI SAO CHỌN AN KHANG®?</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-certificate', title: 'Chuyên Nghiệp', desc: 'Đội ngũ nhân viên được đào tạo bài bản, trang thiết bị hiện đại, quy trình chuẩn ISO.' },
              { icon: 'fa-shield-alt', title: 'Uy Tín', desc: 'Hơn 10 năm kinh nghiệm, hàng nghìn khách hàng tin tưởng từ cá nhân đến doanh nghiệp lớn.' },
              { icon: 'fa-heart', title: 'Tận Tâm', desc: 'Luôn đặt lợi ích khách hàng lên hàng đầu, hỗ trợ 24/7, cam kết bảo hành dịch vụ.' },
              { icon: 'fa-map-marker-alt', title: 'Phủ Sóng Toàn Quốc', desc: 'Mạng lưới chi nhánh rộng khắp 63 tỉnh thành, phục vụ nhanh chóng mọi khu vực.' },
              { icon: 'fa-tag', title: 'Giá Hợp Lý', desc: 'Báo giá minh bạch, cạnh tranh, không phát sinh thêm chi phí ngoài hợp đồng.' },
              { icon: 'fa-recycle', title: 'Thân Thiện Môi Trường', desc: 'Sử dụng hóa chất vệ sinh an toàn, thân thiện môi trường, được kiểm định chất lượng.' },
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="font-black text-gray-800 uppercase mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
