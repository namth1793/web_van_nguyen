import { useState } from 'react';

const tabs = [
  {
    label: 'Vệ Sinh Nhà Ở, Căn Hộ',
    hotline: '1800.888.992',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=380&fit=crop',
    items: [
      { loai: 'Căn hộ < 50m²', gia: 'Từ 500.000đ', note: 'Cơ bản' },
      { loai: 'Căn hộ 50–80m²', gia: 'Từ 700.000đ', note: 'Cơ bản' },
      { loai: 'Căn hộ 80–120m²', gia: 'Từ 900.000đ', note: 'Cơ bản' },
      { loai: 'Nhà cấp 4 < 100m²', gia: 'Từ 800.000đ', note: 'Theo giờ' },
      { loai: 'Nhà phố 2–3 tầng', gia: 'Từ 1.200.000đ', note: 'Trọn gói' },
      { loai: 'Biệt thự', gia: 'Liên hệ báo giá', note: 'Khảo sát thực tế' },
    ],
  },
  {
    label: 'Cung Cấp Tạp Vụ',
    hotline: '1800.8114',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&h=380&fit=crop',
    items: [
      { loai: 'Tạp vụ theo giờ (≥ 4h)', gia: 'Từ 35.000đ/giờ', note: 'Tối thiểu 4 giờ' },
      { loai: 'Tạp vụ theo ngày (8h)', gia: 'Từ 280.000đ/ngày', note: 'Có ăn trưa' },
      { loai: 'Tạp vụ cố định theo tháng', gia: 'Từ 5.500.000đ/tháng', note: 'Ca 8h/ngày' },
      { loai: 'Tạp vụ ca đêm', gia: 'Cộng thêm 30%', note: '22h–6h' },
      { loai: 'Tổ trưởng tạp vụ', gia: 'Từ 6.000.000đ/tháng', note: 'Quản lý ≥ 10 NV' },
    ],
  },
  {
    label: 'Vệ Sinh Nhà Xưởng',
    hotline: '1800.888.992',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=380&fit=crop',
    items: [
      { loai: 'Nhà xưởng < 500m²', gia: 'Liên hệ báo giá', note: 'Khảo sát thực tế' },
      { loai: 'Nhà xưởng 500–1000m²', gia: 'Liên hệ báo giá', note: 'Khảo sát thực tế' },
      { loai: 'Nhà xưởng > 1000m²', gia: 'Liên hệ báo giá', note: 'Hợp đồng dài hạn' },
      { loai: 'Vệ sinh định kỳ hàng tuần', gia: 'Tiết kiệm 15%', note: 'Ký hợp đồng' },
      { loai: 'Vệ sinh tổng hàng tháng', gia: 'Tiết kiệm 20%', note: 'Ký hợp đồng' },
    ],
  },
  {
    label: 'Vệ Sinh Công Trình',
    hotline: '1800.888.992',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=500&h=380&fit=crop',
    items: [
      { loai: 'Công trình < 100m²', gia: 'Từ 25.000đ/m²', note: 'Sau xây dựng' },
      { loai: 'Công trình 100–300m²', gia: 'Từ 20.000đ/m²', note: 'Sau xây dựng' },
      { loai: 'Công trình 300–1000m²', gia: 'Từ 15.000đ/m²', note: 'Sau xây dựng' },
      { loai: 'Công trình > 1000m²', gia: 'Liên hệ báo giá', note: 'Khảo sát thực tế' },
      { loai: 'Vệ sinh cao tầng', gia: 'Cộng thêm 20%', note: 'Tầng > 5' },
    ],
  },
  {
    label: 'Giặt Thảm, Giặt Ghế Sofa',
    hotline: '1800.888.992',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=380&fit=crop',
    items: [
      { loai: 'Giặt thảm (tại nhà)', gia: 'Từ 30.000đ/m²', note: 'Min 3m²' },
      { loai: 'Giặt ghế đơn/đôi', gia: 'Từ 150.000đ/cái', note: 'Tại nhà' },
      { loai: 'Giặt sofa 3 chỗ', gia: 'Từ 350.000đ', note: 'Tại nhà' },
      { loai: 'Giặt sofa góc (L)', gia: 'Từ 500.000đ', note: 'Tại nhà' },
      { loai: 'Giặt ghế văn phòng', gia: 'Từ 80.000đ/cái', note: 'Số lượng ≥ 10' },
    ],
  },
];

export default function PriceTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">BẢNG GIÁ DỊCH VỤ</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-sm text-gray-500">Giá tham khảo — liên hệ để được báo giá chính xác nhất</p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-2">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm font-bold uppercase transition-all border rounded ${
                i === active
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="bg-primary/5 border border-primary/20 p-3 rounded mb-4 flex items-center gap-3">
              <i className="fas fa-phone-alt text-red text-xl animate-pulse"></i>
              <div>
                <div className="text-xs text-gray-500">Hotline đặt dịch vụ 24/7</div>
                <a href={`tel:${tab.hotline.replace(/\./g, '')}`} className="text-red font-black text-xl block">{tab.hotline}</a>
                <a href="tel:0797373456" className="text-primary font-bold text-sm">07.97.37.3456</a>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xs text-primary font-bold">AN KHANG® – Chuyên gia làm sạch của bạn!</div>
              </div>
            </div>

            <table className="w-full price-table border border-gray-200">
              <thead>
                <tr>
                  <th className="text-left">Loại Dịch Vụ</th>
                  <th>Đơn Giá</th>
                  <th>Ghi Chú</th>
                </tr>
              </thead>
              <tbody>
                {tab.items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.loai}</td>
                    <td className="text-center font-bold text-primary">{item.gia}</td>
                    <td className="text-center text-gray-500 text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-3 text-xs text-gray-400 italic">
              * Giá trên chưa bao gồm VAT. Chi phí có thể thay đổi theo thực tế. Liên hệ để được khảo sát và báo giá miễn phí.
            </div>
          </div>
          <div className="rounded overflow-hidden">
            <img src={tab.image} alt={tab.label} className="w-full h-full object-cover max-h-80 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
