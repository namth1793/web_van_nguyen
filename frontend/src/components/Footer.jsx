import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [gioi_tinh, setGioiTinh] = useState('nam');
  const [subStatus, setSubStatus] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await axios.post('/api/subscribers', { email, gioi_tinh });
      setSubStatus('success');
      setEmail('');
    } catch {
      setSubStatus('error');
    }
  };

  return (
    <>
      {/* Footer 1 */}
      <footer className="bg-[#f4f4f4] py-10 border-t border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="widget-title">CHĂM SÓC KHÁCH HÀNG</span>
              <ul className="space-y-2">
                {['Thông tin liên hệ', 'Dịch vụ bảo hành', 'Hướng dẫn thanh toán', 'Giải quyết khiếu nại'].map(l => (
                  <li key={l}><Link to="/lien-he" className="footer-link text-sm hover:text-primary transition-colors block py-0.5">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <span className="widget-title">CHÍNH SÁCH</span>
              <ul className="space-y-2">
                {['Biểu phí vận chuyển', 'Điều khoản sử dụng dịch vụ', 'Chính sách bảo mật', 'Quy định đặt dịch vụ'].map(l => (
                  <li key={l}><Link to="/lien-he" className="footer-link text-sm hover:text-primary transition-colors block py-0.5">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <span className="widget-title">VỀ CHÚNG TÔI</span>
              <ul className="space-y-2">
                {[['Giới thiệu', '/gioi-thieu'], ['Dịch vụ vệ sinh', '/dich-vu'], ['Hệ thống chi nhánh', '/chi-nhanh'], ['Tin tức', '/tin-tuc']].map(([l, to]) => (
                  <li key={l}><Link to={to} className="footer-link text-sm hover:text-primary transition-colors block py-0.5">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <span className="widget-title">ĐĂNG KÝ NHẬN TIN</span>
              <p className="text-xs text-gray-500 mb-3">Nhận thông tin khuyến mãi và tin tức mới nhất từ An Khang®</p>
              <form onSubmit={subscribe} className="space-y-2">
                <div className="flex gap-3 text-sm">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gt" value="nam" checked={gioi_tinh==='nam'} onChange={() => setGioiTinh('nam')} className="accent-primary" />Nam
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gt" value="nu" checked={gioi_tinh==='nu'} onChange={() => setGioiTinh('nu')} className="accent-primary" />Nữ
                  </label>
                </div>
                <input type="email" placeholder="Nhập địa chỉ email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-primary" />
                <button type="submit" className="w-full bg-primary text-white font-bold py-2 text-sm hover:bg-primary-dark transition-colors rounded">
                  ĐĂNG KÝ
                </button>
                {subStatus === 'success' && <p className="text-xs text-green-600">Đăng ký thành công!</p>}
                {subStatus === 'error' && <p className="text-xs text-red-600">Email đã đăng ký hoặc có lỗi.</p>}
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer 2 */}
      <footer className="bg-[#828282] text-white py-10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary rounded p-2">
                  <i className="fas fa-broom text-white text-xl"></i>
                </div>
                <div>
                  <div className="font-black text-xl text-white">AN KHANG®</div>
                  <div className="text-xs text-gray-300 uppercase tracking-widest">Clean Professional</div>
                </div>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                <strong>CÔNG TY CỔ PHẦN TẬP ĐOÀN VỆ SINH CHUYÊN NGHIỆP AN KHANG</strong> – Chuyên cung cấp dịch vụ vệ sinh công nghiệp, tạp vụ, vệ sinh nhà ở, nhà xưởng trên toàn quốc.
              </p>
              <div className="space-y-1.5 text-sm text-gray-200">
                <div><i className="fas fa-map-marker-alt text-primary mr-2"></i>Số 04 đường N5 Hoa Đào, KDC Hiệp Thành, Q.12, TP.HCM</div>
                <div><i className="fas fa-building text-primary mr-2"></i>Tầng 3, Số 68, Đường Nguyễn Huệ, Q.1, HCM</div>
                <div><i className="fas fa-phone-alt text-primary mr-2"></i><a href="tel:0797373456" className="text-red-300 font-bold">07.97.37.3456</a></div>
                <div><i className="fas fa-headset text-primary mr-2"></i>Tổng đài: <a href="tel:1800888992" className="text-primary font-bold">1800.888.992</a></div>
                <div><i className="fas fa-envelope text-primary mr-2"></i>dichvuankhang.vn@gmail.com</div>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://zalo.me/0797373456" target="_blank" rel="noreferrer" className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-black">Zalo</span>
                </a>
                <a href="#" className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a href="#" className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                  <i className="fab fa-youtube text-sm"></i>
                </a>
              </div>
            </div>

            {/* Branch list */}
            <div>
              <h4 className="text-[#1d7ec3] font-black uppercase text-sm mb-4 border-b border-gray-600 pb-2">HỆ THỐNG VỆ SINH AN KHANG</h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-200">
                {['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Đồng Nai', 'Khánh Hòa', 'Cần Thơ', 'Quảng Bình', 'Nghệ An', 'Hải Phòng', 'Lâm Đồng', 'Vũng Tàu', 'Long An', 'Tiền Giang', 'Huế', 'Bình Định'].map(c => (
                  <Link key={c} to="/chi-nhanh" className="flex items-center gap-1 hover:text-primary transition-colors py-0.5">
                    <i className="fas fa-circle" style={{fontSize:'4px'}}></i>{c}
                  </Link>
                ))}
              </div>
              <Link to="/chi-nhanh" className="mt-3 inline-block text-xs text-primary hover:underline">Xem thêm 47+ tỉnh thành →</Link>
            </div>

            {/* Payment */}
            <div>
              <h4 className="text-[#1d7ec3] font-black uppercase text-sm mb-4 border-b border-gray-600 pb-2">CÁCH THỨC THANH TOÁN</h4>
              <div className="space-y-3 text-sm text-gray-200">
                <div className="bg-gray-700 rounded p-3">
                  <div className="font-bold text-white mb-1"><i className="fas fa-university text-primary mr-2"></i>Chuyển khoản ngân hàng</div>
                  <div className="text-xs space-y-1">
                    <div>Tên TK: <strong className="text-white">Nguyễn Trường An</strong></div>
                    <div>Số TK: <strong className="text-white">3693693696789</strong></div>
                    <div>Ngân hàng: <strong className="text-white">MB-BANK</strong></div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="font-bold text-white mb-1"><i className="fas fa-credit-card text-primary mr-2"></i>Thanh toán tiền mặt</div>
                  <div className="text-xs">POS tại: Số 68, Nguyễn Huệ, Phường Bến Nghé, Quận 1</div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="font-bold text-white mb-1"><i className="fas fa-mobile-alt text-primary mr-2"></i>Ví điện tử</div>
                  <div className="text-xs">Zalo Pay, Momo: <strong className="text-white">0797.37.3456</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Absolute footer */}
      <div className="bg-[#0a0a0a] py-4 text-center text-gray-400 text-xs">
        Copyright 2026 © TẬP ĐOÀN ISS ( ISS GROUP ) | Mã số DN: 0316270965 – Sở KH-ĐT TP.HCM
      </div>
    </>
  );
}
