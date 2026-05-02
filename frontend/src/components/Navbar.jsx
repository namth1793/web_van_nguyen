import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const dichVuMenu = [
  { name: 'Vệ Sinh Công Nghiệp', to: '/dich-vu' },
  { name: 'Vệ Sinh Nhà Xưởng', to: '/dich-vu' },
  { name: 'Vệ Sinh Sau Xây Dựng', to: '/dich-vu' },
  { name: 'Giặt Ghế Sofa, Ghế Văn Phòng', to: '/dich-vu' },
  { name: 'Dịch Vụ Giặt Thảm', to: '/dich-vu' },
  { name: 'Vệ Sinh Ống Khói Bếp', to: '/dich-vu' },
  { name: 'Dọn Vệ Sinh Nhà Ở', to: '/dich-vu' },
  { name: 'Dịch Vụ Lau Kính, Lau Alu', to: '/dich-vu' },
  { name: 'Mài Sàn, Đánh Bóng Sàn', to: '/dich-vu' },
];

const tapVuMenu = [
  { name: 'Tạp Vụ Văn Phòng', to: '/dich-vu' },
  { name: 'Tạp Vụ Nhà Máy', to: '/dich-vu' },
  { name: 'Tạp Vụ Tòa Nhà', to: '/dich-vu' },
  { name: 'Tạp Vụ Trường Học', to: '/dich-vu' },
  { name: 'Tạp Vụ Bến Cảng', to: '/dich-vu' },
  { name: 'Tạp Vụ Trung Tâm Thể Thao', to: '/dich-vu' },
  { name: 'Tạp Vụ Chung Cư', to: '/dich-vu' },
  { name: 'Tạp Vụ Rạp Chiếu Phim', to: '/dich-vu' },
  { name: 'Tạp Vụ Bệnh Viện', to: '/dich-vu' },
  { name: 'Tạp Vụ Ngân Hàng', to: '/dich-vu' },
];

const mienNam = ['TP. Hồ Chí Minh', 'Đồng Nai', 'Bình Dương', 'Vũng Tàu', 'Bình Phước', 'Long An', 'Tiền Giang', 'Cần Thơ'];
const mienTrung = ['Đà Nẵng', 'Khánh Hòa (Nha Trang)', 'Quảng Bình', 'Nghệ An', 'Hà Tĩnh', 'Huế', 'Bình Định', 'Lâm Đồng (Đà Lạt)'];
const mienBac = ['Hà Nội', 'Hải Phòng', 'Quảng Ninh', 'Vĩnh Phúc', 'Bắc Ninh', 'Hưng Yên', 'Hải Dương', 'Nam Định'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const toggleMobile = (key) => setMobileExpanded(p => ({ ...p, [key]: !p[key] }));

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] border-b border-gray-200 hidden md:block">
        <div className="container flex items-center justify-between py-1">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <i className="fas fa-phone text-primary mr-1"></i>
            <span>Tổng đài: <strong className="text-primary">1800.888.992</strong></span>
            <span className="mx-2">|</span>
            <i className="fas fa-envelope text-primary mr-1"></i>
            <span>dichvuankhang.vn@gmail.com</span>
          </div>
          <div className="flex items-center topbar-menu">
            <Link to="/">Trang Chủ</Link>
            <Link to="/dich-vu">Dịch Vụ</Link>
            <Link to="/tin-tuc">Tin Tức Mới</Link>
            <Link to="/lien-he">Liên Hệ</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-primary z-50 ${sticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'} transition-all duration-300`}>
        <div className="container">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded p-1.5 w-14 h-14 flex items-center justify-center">
                  <i className="fas fa-broom text-primary text-2xl"></i>
                </div>
                <div>
                  <div className="text-white font-black text-xl leading-tight tracking-wide">AN KHANG®</div>
                  <div className="text-white/90 text-xs tracking-widest uppercase">Clean Professional</div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link to="/gioi-thieu" className="nav-link-item hover:bg-white/20 rounded px-3 py-2">Giới Thiệu</Link>

              {/* Dịch vụ dropdown */}
              <div className="nav-item">
                <Link to="/dich-vu" className="nav-link-item hover:bg-white/20 rounded px-3 py-2 flex items-center gap-1">
                  Dịch Vụ Của Chúng Tôi <i className="fas fa-chevron-down text-xs"></i>
                </Link>
                <div className="dropdown-menu">
                  {dichVuMenu.map((m) => (
                    <Link key={m.name} to={m.to}>{m.name}</Link>
                  ))}
                </div>
              </div>

              {/* Tạp vụ dropdown */}
              <div className="nav-item">
                <button className="nav-link-item hover:bg-white/20 rounded px-3 py-2 flex items-center gap-1 uppercase">
                  Cung Cấp Tạp Vụ <i className="fas fa-chevron-down text-xs"></i>
                </button>
                <div className="dropdown-menu">
                  {tapVuMenu.map((m) => (
                    <Link key={m.name} to={m.to}>{m.name}</Link>
                  ))}
                </div>
              </div>

              {/* Chi nhánh mega menu */}
              <div className="nav-item">
                <Link to="/chi-nhanh" className="nav-link-item hover:bg-white/20 rounded px-3 py-2 flex items-center gap-1">
                  Chi Nhánh <i className="fas fa-chevron-down text-xs"></i>
                </Link>
                <div className="mega-menu gap-6">
                  <div className="flex-1">
                    <div className="font-bold text-primary border-b border-primary pb-1 mb-2 uppercase text-sm">Miền Nam</div>
                    {mienNam.map(c => <Link key={c} to="/chi-nhanh" className="block text-sm text-gray-600 hover:text-primary py-0.5">{c}</Link>)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-primary border-b border-primary pb-1 mb-2 uppercase text-sm">Miền Trung</div>
                    {mienTrung.map(c => <Link key={c} to="/chi-nhanh" className="block text-sm text-gray-600 hover:text-primary py-0.5">{c}</Link>)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-primary border-b border-primary pb-1 mb-2 uppercase text-sm">Miền Bắc</div>
                    {mienBac.map(c => <Link key={c} to="/chi-nhanh" className="block text-sm text-gray-600 hover:text-primary py-0.5">{c}</Link>)}
                  </div>
                </div>
              </div>

              <a href="tel:0797373456" className="ml-2 bg-red text-white px-4 py-2 rounded font-bold text-sm flex items-center gap-2 hover:bg-red-700 transition-colors">
                <i className="fas fa-phone-alt animate-pulse"></i> 0797.37.3456
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button className="lg:hidden text-white text-2xl p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <Link to="/" className="block px-5 py-3 border-b text-gray-800 font-bold hover:text-primary">Trang Chủ</Link>
            <Link to="/gioi-thieu" className="block px-5 py-3 border-b text-gray-800 font-bold hover:text-primary">Giới Thiệu</Link>
            <div>
              <button onClick={() => toggleMobile('dv')} className="w-full text-left px-5 py-3 border-b font-bold text-gray-800 flex justify-between">
                Dịch Vụ <i className={`fas fa-chevron-${mobileExpanded.dv ? 'up' : 'down'} text-xs mt-1`}></i>
              </button>
              {mobileExpanded.dv && (
                <div className="bg-gray-50 pl-8">
                  {dichVuMenu.map(m => <Link key={m.name} to={m.to} className="block py-2 border-b text-sm text-gray-700 hover:text-primary">{m.name}</Link>)}
                </div>
              )}
            </div>
            <div>
              <button onClick={() => toggleMobile('tv')} className="w-full text-left px-5 py-3 border-b font-bold text-gray-800 flex justify-between">
                Cung Cấp Tạp Vụ <i className={`fas fa-chevron-${mobileExpanded.tv ? 'up' : 'down'} text-xs mt-1`}></i>
              </button>
              {mobileExpanded.tv && (
                <div className="bg-gray-50 pl-8">
                  {tapVuMenu.map(m => <Link key={m.name} to={m.to} className="block py-2 border-b text-sm text-gray-700 hover:text-primary">{m.name}</Link>)}
                </div>
              )}
            </div>
            <Link to="/chi-nhanh" className="block px-5 py-3 border-b text-gray-800 font-bold hover:text-primary">Chi Nhánh</Link>
            <Link to="/tin-tuc" className="block px-5 py-3 border-b text-gray-800 font-bold hover:text-primary">Tin Tức</Link>
            <Link to="/lien-he" className="block px-5 py-3 border-b text-gray-800 font-bold hover:text-primary">Liên Hệ</Link>
            <a href="tel:0797373456" className="block px-5 py-3 bg-red text-white font-bold text-center">
              <i className="fas fa-phone-alt mr-2"></i> Gọi ngay: 0797.37.3456
            </a>
          </div>
        )}
      </header>

      {/* Sticky spacer */}
      {sticky && <div className="h-[72px]"></div>}
    </>
  );
}
