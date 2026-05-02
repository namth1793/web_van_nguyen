const db = require('./database');

// Seed services
const services = [
  { name: 'Vệ Sinh Công Nghiệp', slug: 've-sinh-cong-nghiep', description: 'Dịch vụ vệ sinh công nghiệp chuyên nghiệp, an toàn, hiệu quả cho nhà máy, xí nghiệp, khu công nghiệp toàn quốc.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 1 },
  { name: 'Vệ Sinh Nhà Ở', slug: 've-sinh-nha-o', description: 'Dịch vụ dọn vệ sinh nhà ở, căn hộ, tổng vệ sinh theo giờ hoặc theo gói chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 2 },
  { name: 'Vệ Sinh Nhà Xưởng', slug: 've-sinh-nha-xuong', description: 'Vệ sinh nhà xưởng, nhà máy, kho bãi theo quy trình chuẩn ISO, đảm bảo môi trường làm việc sạch sẽ.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 3 },
  { name: 'Vệ Sinh Ống Khói Bếp', slug: 've-sinh-ong-khoi-bep', description: 'Vệ sinh ống khói bếp, hệ thống hút mùi nhà hàng, khách sạn, bếp công nghiệp chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 4 },
  { name: 'Dịch Vụ Lau Kính', slug: 'dich-vu-lau-kinh', description: 'Lau kính tòa nhà, văn phòng, cao ốc bằng thiết bị chuyên dụng, đảm bảo an toàn tuyệt đối.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 5 },
  { name: 'Dịch Vụ Giặt Thảm', slug: 'dich-vu-giat-tham', description: 'Giặt thảm văn phòng, thảm khách sạn, thảm gia đình bằng máy móc hiện đại, sạch sâu, diệt khuẩn.', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 6 },
  { name: 'Cung Cấp Tạp Vụ Vệ Sinh', slug: 'cung-cap-tap-vu-ve-sinh', description: 'Cung cấp nhân viên tạp vụ vệ sinh theo ca, theo tháng cho văn phòng, tòa nhà, nhà máy.', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=500&fit=crop', group_name: 'tap-vu', sort_order: 7 },
  { name: 'Dịch Vụ Giặt Ghế', slug: 'dich-vu-giat-ghe', description: 'Giặt ghế sofa, ghế văn phòng, ghế ăn bằng công nghệ hiện đại, an toàn cho vải và da.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 8 },
  { name: 'Mài Và Đánh Bóng Sàn', slug: 'mai-va-danh-bong-san', description: 'Mài sàn đá, đánh bóng sàn đá marble, đá granite, sàn epoxy chuyên nghiệp, bền đẹp.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop', group_name: 've-sinh', sort_order: 9 },
];

const newsData = [
  { title: 'Dịch vụ giặt ghế sofa Tại Tuy Hòa, Giặt Tại Nhà, Sấy Khô, Diệt Khuẩn', slug: 'dich-vu-giat-ghe-sofa-tuy-hoa', excerpt: 'An Khang Clean cung cấp dịch vụ giặt ghế sofa tại Tuy Hòa với công nghệ hiện đại, sạch sâu, diệt khuẩn 99.9%, giá cả hợp lý.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-12-02' },
  { title: 'Dịch vụ giặt nệm tại Diên Khánh Tỉnh Khánh Hòa – An Khang Clean', slug: 'dich-vu-giat-nem-dien-khanh', excerpt: 'Giặt nệm tại Diên Khánh, Khánh Hòa với máy móc chuyên dụng. An Khang Clean cam kết vệ sinh sạch sẽ, diệt khuẩn, khử mùi hiệu quả.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-09-27' },
  { title: 'Dịch vụ giặt nệm Tây Hòa – Dịch vụ An Khang Clean', slug: 'dich-vu-giat-nem-tay-hoa', excerpt: 'Giặt nệm tại Tây Hòa, Phú Yên. Dịch vụ chuyên nghiệp, tận tâm từ An Khang Clean với công nghệ sấy khô nhanh, khử khuẩn triệt để.', image: 'https://images.unsplash.com/photo-1587552150688-c2c59b61a2f2?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-09-27' },
  { title: 'Dịch vụ vệ sinh công nghiệp tại Bình Dương – An Khang Clean', slug: 'dich-vu-ve-sinh-cong-nghiep-binh-duong', excerpt: 'Vệ sinh công nghiệp tại Bình Dương cho nhà máy, xí nghiệp, khu công nghiệp. An Khang Clean – đơn vị hàng đầu trong lĩnh vực vệ sinh chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-09-15' },
  { title: 'Vệ sinh nhà xưởng tại Đồng Nai – Giải pháp sạch cho nhà máy của bạn', slug: 've-sinh-nha-xuong-dong-nai', excerpt: 'An Khang Clean cung cấp dịch vụ vệ sinh nhà xưởng tại Đồng Nai chuyên nghiệp, đúng tiến độ, đảm bảo tiêu chuẩn vệ sinh an toàn lao động.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-08-20' },
  { title: 'Cung cấp nhân viên tạp vụ văn phòng tại TP.HCM – An Khang Clean', slug: 'cung-cap-tap-vu-van-phong-hcm', excerpt: 'Dịch vụ cung cấp nhân viên tạp vụ văn phòng tại TP.HCM theo giờ, theo ca, theo tháng. Đội ngũ được đào tạo bài bản, chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-08-10' },
  { title: 'Dịch vụ lau kính tòa nhà cao tầng tại Hà Nội – An Khang Clean', slug: 'dich-vu-lau-kinh-toa-nha-ha-noi', excerpt: 'Lau kính tòa nhà, cao ốc văn phòng tại Hà Nội với thiết bị an toàn hiện đại. An Khang Clean – đơn vị được tin tưởng hàng đầu.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-07-25' },
  { title: 'Quy trình vệ sinh sau xây dựng chuẩn An Khang – Sạch ngay lần đầu', slug: 'quy-trinh-ve-sinh-sau-xay-dung', excerpt: 'Quy trình vệ sinh sau xây dựng 6 bước chuẩn An Khang giúp công trình sạch sẽ, bàn giao đúng hạn, tiết kiệm chi phí tối đa.', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca5577?w=400&h=300&fit=crop', category: 'tin-tuc', created_at: '2025-07-10' },
];

const existing = db.prepare('SELECT COUNT(*) as c FROM services').get();
if (existing.c === 0) {
  const insertService = db.prepare(`INSERT OR REPLACE INTO services (name, slug, description, image, group_name, sort_order) VALUES (@name, @slug, @description, @image, @group_name, @sort_order)`);
  const insertNews = db.prepare(`INSERT OR REPLACE INTO news (title, slug, excerpt, image, category, created_at) VALUES (@title, @slug, @excerpt, @image, @category, @created_at)`);
  for (const s of services) insertService.run(s);
  for (const n of newsData) insertNews.run(n);
  console.log('✅ Seeded ankhang.db successfully!');
}
