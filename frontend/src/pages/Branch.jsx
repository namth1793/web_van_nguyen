import { Link } from 'react-router-dom';

const branches = {
  'MIỀN NAM': {
    color: 'bg-green-500',
    icon: 'fa-city',
    cities: [
      { city: 'TP. Hồ Chí Minh (Quận 1)', addr: 'Tầng 3, Số 68, Đường Nguyễn Huệ, Phường Bến Nghé, Q.1', tel: '(028).22.66.22.11' },
      { city: 'TP. Hồ Chí Minh (Quận 12)', addr: 'Số 04 đường N5 Hoa Đào, KDC Hiệp Thành, P. Hiệp Thành, Q.12', tel: '0797.37.3456' },
      { city: 'Bình Dương', addr: 'Khu vực Thủ Dầu Một, Bình Dương', tel: '0797.37.3456' },
      { city: 'Đồng Nai', addr: 'Khu vực Biên Hòa, Đồng Nai', tel: '0797.37.3456' },
      { city: 'Vũng Tàu', addr: 'Khu vực TP. Vũng Tàu, Bà Rịa – Vũng Tàu', tel: '0797.37.3456' },
      { city: 'Long An', addr: 'Khu vực Tân An, Long An', tel: '0797.37.3456' },
      { city: 'Tiền Giang', addr: 'Khu vực Mỹ Tho, Tiền Giang', tel: '0797.37.3456' },
      { city: 'Cần Thơ', addr: 'Khu vực Ninh Kiều, TP. Cần Thơ', tel: '0797.37.3456' },
      { city: 'Kiên Giang', addr: 'Khu vực Rạch Giá, Kiên Giang', tel: '0797.37.3456' },
      { city: 'Bình Phước', addr: 'Khu vực Đồng Xoài, Bình Phước', tel: '0797.37.3456' },
    ],
  },
  'MIỀN TRUNG & TÂY NGUYÊN': {
    color: 'bg-blue-500',
    icon: 'fa-mountain',
    cities: [
      { city: 'Đà Nẵng', addr: 'Khu vực Hải Châu, TP. Đà Nẵng', tel: '0935.262.878' },
      { city: 'Khánh Hòa (Nha Trang)', addr: 'Khu vực TP. Nha Trang, Khánh Hòa', tel: '0979.275.798' },
      { city: 'Quảng Bình', addr: 'Khu vực Đồng Hới, Quảng Bình', tel: '0941.699.911' },
      { city: 'Nghệ An', addr: 'Khu vực TP. Vinh, Nghệ An', tel: '0797.37.3456' },
      { city: 'Hà Tĩnh', addr: 'Khu vực TP. Hà Tĩnh', tel: '0797.37.3456' },
      { city: 'Huế', addr: 'Khu vực TP. Huế, Thừa Thiên Huế', tel: '0797.37.3456' },
      { city: 'Bình Định', addr: 'Khu vực Quy Nhơn, Bình Định', tel: '0797.37.3456' },
      { city: 'Lâm Đồng (Đà Lạt)', addr: 'Khu vực TP. Đà Lạt, Lâm Đồng', tel: '0797.37.3456' },
      { city: 'Phú Yên', addr: 'Khu vực Tuy Hòa, Phú Yên', tel: '0797.37.3456' },
    ],
  },
  'MIỀN BẮC': {
    color: 'bg-red-500',
    icon: 'fa-snowflake',
    cities: [
      { city: 'Hà Nội', addr: 'Khu vực Hoàn Kiếm, TP. Hà Nội', tel: '0965.348.668' },
      { city: 'Hải Phòng', addr: 'Khu vực Hồng Bàng, TP. Hải Phòng', tel: '0797.37.3456' },
      { city: 'Quảng Ninh', addr: 'Khu vực Hạ Long, Quảng Ninh', tel: '0797.37.3456' },
      { city: 'Bắc Ninh', addr: 'Khu vực TP. Bắc Ninh', tel: '0797.37.3456' },
      { city: 'Vĩnh Phúc', addr: 'Khu vực Vĩnh Yên, Vĩnh Phúc', tel: '0797.37.3456' },
      { city: 'Hưng Yên', addr: 'Khu vực Hưng Yên', tel: '0797.37.3456' },
      { city: 'Hải Dương', addr: 'Khu vực TP. Hải Dương', tel: '0797.37.3456' },
      { city: 'Nam Định', addr: 'Khu vực TP. Nam Định', tel: '0797.37.3456' },
      { city: 'Thái Nguyên', addr: 'Khu vực TP. Thái Nguyên', tel: '0797.37.3456' },
    ],
  },
};

export default function Branch() {
  return (
    <main>
      <div className="bg-gray-100 py-3">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Trang Chủ</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-primary font-bold">Chi Nhánh</span>
          </div>
        </div>
      </div>

      <div className="relative h-40 bg-primary overflow-hidden">
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=250&fit=crop" alt="Chi nhánh" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-3xl font-black uppercase">HỆ THỐNG CHI NHÁNH AN KHANG®</h1>
            <p className="text-sm mt-2 opacity-90">Mạng lưới rộng khắp 63 tỉnh thành toàn quốc</p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { num: '63+', label: 'Tỉnh Thành', icon: 'fa-map' },
              { num: '100+', label: 'Chi Nhánh', icon: 'fa-building' },
              { num: '5000+', label: 'Nhân Viên', icon: 'fa-users' },
            ].map(s => (
              <div key={s.label} className="text-center py-6 bg-primary/5 rounded border border-primary/20">
                <i className={`fas ${s.icon} text-primary text-3xl mb-2 block`}></i>
                <div className="text-2xl font-black text-primary">{s.num}</div>
                <div className="text-sm text-gray-500 uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {Object.entries(branches).map(([region, data]) => (
            <div key={region} className="mb-10">
              <div className={`flex items-center gap-3 text-white px-5 py-3 rounded-t mb-0 ${data.color}`}>
                <i className={`fas ${data.icon} text-xl`}></i>
                <h2 className="text-lg font-black uppercase">{region}</h2>
                <span className="ml-auto bg-white/20 px-2 py-0.5 rounded text-sm">{data.cities.length} chi nhánh</span>
              </div>
              <div className="grid md:grid-cols-2 gap-0 border border-t-0 border-gray-200 rounded-b overflow-hidden">
                {data.cities.map((b, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-0 hover:bg-primary/5 transition-colors`}>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-map-pin text-primary text-sm"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-800 text-sm">{b.city}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">{b.addr}</div>
                      <a href={`tel:${b.tel.replace(/[\.\-\s]/g, '')}`} className="text-xs text-primary font-bold mt-1 block hover:underline">
                        <i className="fas fa-phone-alt mr-1"></i>{b.tel}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-black uppercase mb-3">Không tìm thấy chi nhánh gần bạn?</h3>
            <p className="text-white/90 mb-5 text-sm">Hãy liên hệ hotline 24/7, chúng tôi sẽ điều phối nhân viên đến tận nơi cho bạn!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0797373456" className="bg-white text-primary font-black px-6 py-3 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
                <i className="fas fa-phone-alt animate-pulse"></i> 0797.37.3456
              </a>
              <Link to="/lien-he" className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-primary transition-colors">
                Gửi Yêu Cầu Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
