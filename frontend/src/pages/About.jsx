import { Link } from 'react-router-dom';

const steps = [
  { num: 1, title: 'Tiếp nhận yêu cầu', desc: 'Qua hotline/zalo 079737.3456, xác minh, tư vấn, khảo sát, báo giá' },
  { num: 2, title: 'Khảo sát công trình', desc: 'Nhân viên đến tận nơi khảo sát trước khi thi công' },
  { num: 3, title: 'Báo giá', desc: 'Mức giá phù hợp, hỗ trợ báo giá cạnh tranh cho đấu thầu' },
  { num: 4, title: 'Tiến hành vệ sinh', desc: 'Đúng thời gian đã sắp xếp, đội ngũ chuyên nghiệp' },
  { num: 5, title: 'Nghiệm thu', desc: 'Báo cáo công việc, bàn giao hình ảnh, biên bản nghiệm thu' },
  { num: 6, title: 'Bàn giao và thanh toán', desc: 'Bàn giao công trình, thủ tục bảo hành, thanh toán, xuất hóa đơn' },
];

const services = [
  'Vệ Sinh Công Nghiệp', 'Vệ Sinh Nhà Xưởng', 'Vệ Sinh Sau Xây Dựng',
  'Dọn Vệ Sinh Nhà Ở', 'Vệ Sinh Ống Khói Bếp', 'Dịch Vụ Lau Kính',
  'Mài Sàn, Đánh Bóng Sàn', 'Dịch Vụ Giặt Thảm', 'Giặt Ghế Sofa',
];

const tapVu = [
  'Tạp Vụ Nhà Xưởng, Nhà Máy', 'Tạp Vụ Văn Phòng', 'Tạp Vụ Rạp Chiếu Phim',
  'Tạp Vụ Bệnh Viện', 'Tạp Vụ Chung Cư', 'Tạp Vụ Cảng, Sân Bay',
  'Tạp Vụ Trung Tâm Thể Thao', 'Tạp Vụ Trung Tâm Thương Mại', 'Giúp Việc Văn Phòng Theo Giờ',
];

export default function About() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Trang Chủ</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-primary font-bold">Giới Thiệu</span>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Main content */}
            <div className="md:col-span-9">
              <h1 className="text-2xl font-black uppercase text-primary border-b-2 border-primary pb-3 mb-6">GIỚI THIỆU</h1>

              <div className="mb-8 rounded overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=400&fit=crop" alt="An Khang Clean" className="w-full h-56 object-cover rounded" />
              </div>

              <div className="prose max-w-none text-gray-700 text-sm leading-relaxed space-y-4">
                <p>
                  <strong>ANKHANG®</strong> là thương hiệu thuộc <strong>CÔNG TY CỔ PHẦN TẬP ĐOÀN VỆ SINH CHUYÊN NGHIỆP AN KHANG</strong> là đơn vị cung cấp và quản lý, đào tạo về sản phẩm vệ sinh và cung cấp dịch vụ vệ sinh như: Tổng vệ sinh công trình sau xây dựng, vệ sinh nhà ở, vệ sinh nhà xưởng, vệ sinh kính văn phòng, tòa nhà, giặt ghế, thảm, cung cấp nhân viên tạp vụ, lắp đặt và bảo trì hệ thống ống khói bếp...vv
                </p>
                <p>
                  Với hệ thống mạng lưới trên toàn quốc và đội ngũ chuyên viên chuyên nghiệp. <strong>ANKHANG®</strong> sẽ là sự hợp tác an toàn nhất tới mọi khách hàng.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r">
                  <h2 className="text-lg font-black uppercase text-primary mb-3">II. TẦM NHÌN</h2>
                  <p>Trở thành một tập đoàn cung cấp dịch vụ hàng đầu tại Việt Nam, đồng thời tạo ra một quan điểm phát triển bền vững. Tăng cường đầu tư, nghiên cứu và không ngừng nâng cao cải tiến chất lượng dịch vụ, đảm bảo nhu cầu khách hàng luôn được đáp ứng nhanh nhất, chu đáo nhất, hiệu quả nhất với chi phí hợp lý nhất.</p>
                </div>

                <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r">
                  <h2 className="text-lg font-black uppercase text-accent mb-3">III. SỨ MỆNH</h2>
                  <p>Liên tục duy trì sự sáng tạo và phấn đấu cung cấp dịch vụ chất lượng cao với chi phí hợp lý. Đem lại lợi ích cả về vật chất lẫn tinh thần không những cho người lao động mà còn cả khách hàng và toàn xã hội.</p>
                  <p className="mt-2">Lấy khách hàng làm trọng tâm. Cam kết phấn đấu nhằm thỏa mãn tối đa nhu cầu khách hàng.</p>
                  <p className="mt-2">Cung cấp và tư vấn khách hàng những dịch vụ và sản phẩm tốt nhất thông qua phương châm kinh doanh <em className="text-accent font-bold">"chuyên nghiệp – hiệu quả – tận tâm"</em></p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-8 py-6 border-y border-gray-200">
                {[
                  { num: '63+', label: 'Tỉnh Thành', icon: 'fa-map-marker-alt' },
                  { num: '5000+', label: 'Nhân Viên', icon: 'fa-users' },
                  { num: '10+', label: 'Năm Kinh Nghiệm', icon: 'fa-calendar' },
                  { num: '10.000+', label: 'Khách Hàng', icon: 'fa-heart' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <i className={`fas ${s.icon} text-primary text-2xl mb-2 block`}></i>
                    <div className="text-xl font-black text-primary">{s.num}</div>
                    <div className="text-xs text-gray-500 uppercase">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="mt-8">
                <h2 className="text-xl font-black uppercase text-primary border-b-2 border-primary pb-2 mb-6">QUY TRÌNH LÀM VIỆC</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {steps.map((s) => (
                    <div key={s.num} className="flex gap-4 items-start p-4 bg-gray-50 rounded border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center flex-shrink-0 text-lg">{s.num}</div>
                      <div>
                        <div className="font-bold text-gray-800 mb-1">{s.title}</div>
                        <div className="text-sm text-gray-600">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-3 space-y-5">
              {/* Intro box */}
              <div className="bg-primary p-4 rounded text-white text-center">
                <i className="fas fa-broom text-4xl mb-3 block"></i>
                <div className="font-black text-lg mb-1">AN KHANG®</div>
                <div className="text-xs opacity-80 mb-3">Chuyên gia làm sạch của bạn!</div>
                <a href="tel:0797373456" className="block bg-white text-primary font-black py-2 rounded text-sm hover:bg-gray-100 transition-colors">
                  <i className="fas fa-phone-alt mr-2 animate-pulse"></i>0797.37.3456
                </a>
              </div>

              {/* Services list */}
              <div>
                <span className="widget-title">DỊCH VỤ VỆ SINH</span>
                <ul className="space-y-1">
                  {services.map(s => (
                    <li key={s}><Link to="/dich-vu" className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary py-1.5 border-b border-gray-100 transition-colors">
                      <i className="fas fa-angle-right text-primary text-xs"></i>{s}
                    </Link></li>
                  ))}
                </ul>
              </div>

              {/* Tạp vụ list */}
              <div>
                <span className="widget-title">CUNG CẤP TẠP VỤ</span>
                <ul className="space-y-1">
                  {tapVu.map(s => (
                    <li key={s}><Link to="/dich-vu" className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary py-1.5 border-b border-gray-100 transition-colors">
                      <i className="fas fa-angle-right text-primary text-xs"></i>{s}
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
