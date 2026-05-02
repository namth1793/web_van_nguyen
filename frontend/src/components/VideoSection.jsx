export default function VideoSection() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black uppercase text-white mb-2">VIDEO GIỚI THIỆU AN KHANG®</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/90F1zdfj4I4"
              title="An Khang Clean - Dịch vụ vệ sinh chuyên nghiệp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-white/70 text-sm">AN KHANG® – Chuyên gia làm sạch của bạn! Mạng lưới rộng khắp 63 tỉnh thành toàn quốc.</p>
        </div>
      </div>
    </section>
  );
}
