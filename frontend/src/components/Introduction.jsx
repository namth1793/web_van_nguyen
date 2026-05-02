import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left - Giới thiệu */}
          <div className="md:col-span-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border-4 border-primary shadow">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop" alt="An Khang" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase text-primary mb-3 border-b-2 border-primary pb-2">
                  GIỚI THIỆU VỀ AN KHANG®
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>AN KHANG®</strong> Chúng tôi tự hào về thương hiệu của mình thông qua chất lượng dịch vụ mà chúng tôi cung cấp.
                  Chúng tôi tin tưởng làm việc cùng nhau, không chỉ trong nội bộ công ty mà còn với khách hàng để có thể phát triển
                  các mối quan hệ bền chặt bên cạnh việc mang đến gói giải pháp bền vững.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Với hệ thống mạng lưới trên toàn quốc và đội ngũ vệ sinh chuyên nghiệp.
                  <strong> AN KHANG®</strong> sẽ là sự hợp tác an toàn nhất tới mọi khách hàng.
                </p>
                <Link to="/gioi-thieu" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2 text-sm uppercase tracking-wide transition-colors">
                  XEM CHI TIẾT <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-6">
              {[
                { icon: 'fa-building', num: '63+', label: 'Tỉnh Thành' },
                { icon: 'fa-users', num: '5000+', label: 'Nhân Viên' },
                { icon: 'fa-star', num: '10+', label: 'Năm Kinh Nghiệm' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <i className={`fas ${s.icon} text-primary text-xl`}></i>
                  </div>
                  <div className="text-2xl font-black text-primary">{s.num}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hợp tác */}
          <div className="md:col-span-4 bg-gray-50 p-5 rounded border border-gray-200">
            <h3 className="text-base font-black uppercase text-primary border-b-2 border-primary pb-2 mb-4">
              HỢP TÁC CÙNG AN KHANG®
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Thương hiệu <strong>AN KHANG®</strong> giờ đây đã trở thành bảo chứng chất lượng cho những công trình mang đẳng cấp quốc tế.
              Chúng tôi luôn cam kết mang lại dịch vụ tốt nhất với chi phí hợp lý nhất.
            </p>

            <div className="bg-primary/10 p-3 rounded mb-4 text-center">
              <div className="text-xs text-gray-500 mb-1">Hotline tư vấn 24/7</div>
              <a href="tel:0797373456" className="text-2xl font-black text-red block">
                <i className="fas fa-phone-alt mr-2 animate-pulse"></i>07.97.37.3456
              </a>
              <a href="tel:18008889922" className="text-sm text-primary font-bold block mt-1">1800.888.992 (miễn phí)</a>
            </div>

            <div className="flex gap-2">
              <a href="https://drive.google.com" target="_blank" rel="noreferrer"
                className="flex-1 bg-primary text-white text-xs font-bold py-2 text-center uppercase hover:bg-primary-dark transition-colors">
                HỒ SƠ NĂNG LỰC
              </a>
              <Link to="/chi-nhanh"
                className="flex-1 bg-accent text-white text-xs font-bold py-2 text-center uppercase hover:bg-green-700 transition-colors">
                CHI NHÁNH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
