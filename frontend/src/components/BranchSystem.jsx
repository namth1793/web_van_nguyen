import { useState } from 'react';
import { Link } from 'react-router-dom';

const branches = {
  'KHU VỰC MIỀN NAM': [
    'TP. Hồ Chí Minh (Quận 1)', 'TP. Hồ Chí Minh (Quận 12)', 'Đồng Nai', 'Bình Dương',
    'Vũng Tàu', 'Bình Phước', 'Tây Ninh', 'Long An', 'Tiền Giang', 'Đồng Tháp',
    'Cần Thơ', 'Hậu Giang', 'Kiên Giang', 'Cà Mau',
  ],
  'KHU VỰC MIỀN TRUNG': [
    'Đà Nẵng', 'Khánh Hòa (Nha Trang)', 'Quảng Bình', 'Nghệ An', 'Hà Tĩnh',
    'Huế', 'Bình Định', 'Lâm Đồng (Đà Lạt)', 'Phú Yên', 'Quảng Ngãi',
  ],
  'KHU VỰC MIỀN BẮC': [
    'Hà Nội', 'Hải Phòng', 'Quảng Ninh', 'Vĩnh Phúc', 'Bắc Ninh',
    'Hưng Yên', 'Hải Dương', 'Nam Định', 'Phú Thọ', 'Thái Nguyên',
  ],
};

const recentNews = [
  { title: 'Dịch vụ giặt ghế sofa Tại Tuy Hòa, Giặt Tại Nhà, Sấy Khô, Diệt Khuẩn', date: '02/12/2025', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&h=60&fit=crop' },
  { title: 'Dịch vụ giặt nệm tại Diên Khánh Tỉnh Khánh Hòa – An Khang Clean', date: '27/09/2025', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=80&h=60&fit=crop' },
  { title: 'Vệ sinh nhà xưởng tại Đồng Nai – Giải pháp sạch cho nhà máy của bạn', date: '20/08/2025', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=60&fit=crop' },
  { title: 'Cung cấp nhân viên tạp vụ văn phòng tại TP.HCM – An Khang Clean', date: '10/08/2025', img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=80&h=60&fit=crop' },
  { title: 'Dịch vụ lau kính tòa nhà cao tầng tại Hà Nội – An Khang Clean', date: '25/07/2025', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=60&fit=crop' },
];

export default function BranchSystem() {
  const [openBranch, setOpenBranch] = useState('KHU VỰC MIỀN NAM');

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* News list */}
          <div>
            <h3 className="text-lg font-black uppercase text-dark border-b-2 border-primary pb-2 mb-5">
              <i className="fas fa-newspaper text-primary mr-2"></i>TIN TỨC
            </h3>
            <div className="space-y-3">
              {recentNews.map((n, i) => (
                <Link key={i} to="/tin-tuc" className="flex gap-3 group">
                  <img src={n.img} alt={n.title} className="w-20 h-15 object-cover rounded flex-shrink-0 group-hover:opacity-90 transition-opacity" style={{height:'56px'}} />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors leading-snug line-clamp-2">{n.title}</h4>
                    <span className="text-xs text-gray-400 mt-1 block"><i className="fas fa-calendar mr-1 text-primary"></i>{n.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Branch accordion */}
          <div>
            <h3 className="text-lg font-black uppercase text-dark border-b-2 border-primary pb-2 mb-5">
              <i className="fas fa-map-marker-alt text-primary mr-2"></i>HỆ THỐNG AN KHANG®
            </h3>
            <div className="space-y-2">
              {Object.entries(branches).map(([region, cities]) => (
                <div key={region} className="border border-gray-200 rounded">
                  <button
                    onClick={() => setOpenBranch(openBranch === region ? '' : region)}
                    className={`w-full flex items-center justify-between px-4 py-3 font-bold text-sm uppercase transition-colors ${
                      openBranch === region ? 'bg-primary text-white' : 'bg-gray-50 text-gray-700 hover:bg-primary/10'
                    }`}
                  >
                    <span><i className="fas fa-map-pin mr-2"></i>{region}</span>
                    <i className={`fas fa-chevron-${openBranch === region ? 'up' : 'down'} text-xs`}></i>
                  </button>
                  {openBranch === region && (
                    <div className="p-3 grid grid-cols-2 gap-1">
                      {cities.map((c) => (
                        <Link key={c} to="/chi-nhanh" className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-primary py-0.5">
                          <i className="fas fa-circle text-primary" style={{fontSize:'5px'}}></i>{c}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/chi-nhanh" className="inline-block bg-primary text-white font-bold px-6 py-2 text-sm uppercase hover:bg-primary-dark transition-colors">
                <i className="fas fa-map mr-2"></i>XEM TẤT CẢ CHI NHÁNH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
