export default function QuoteSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 text-[200px] text-white font-serif leading-none">"</div>
        <div className="absolute bottom-0 right-0 text-[200px] text-white font-serif leading-none rotate-180">"</div>
      </div>
      <div className="container relative z-10 text-center">
        <i className="fas fa-quote-left text-white/30 text-5xl mb-6 block"></i>
        <p className="text-2xl md:text-3xl font-black text-white max-w-3xl mx-auto leading-relaxed">
          Thương hiệu <strong className="text-yellow-300">ANKHANG®</strong> giờ đây đã trở thành bảo chứng chất lượng cho những công trình mang đẳng cấp quốc tế.
        </p>
        <div className="mt-6 text-white/80 text-sm font-bold uppercase tracking-widest">
          — CÔNG TY CỔ PHẦN TẬP ĐOÀN VỆ SINH CHUYÊN NGHIỆP AN KHANG —
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {['Chuyên Nghiệp', 'Uy Tín', 'Tận Tâm'].map(v => (
            <div key={v} className="bg-white/20 text-white font-bold px-5 py-2 rounded-full text-sm border border-white/30">
              <i className="fas fa-check-circle mr-2 text-yellow-300"></i>{v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
