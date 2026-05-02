import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ ho_ten: '', so_dien_thoai: '', noi_dung: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.ho_ten || !form.so_dien_thoai) return setStatus('error');
    setLoading(true);
    try {
      await axios.post('/api/contacts', form);
      setStatus('success');
      setForm({ ho_ten: '', so_dien_thoai: '', noi_dung: '' });
    } catch { setStatus('error'); }
    setLoading(false);
  };

  return (
    <main>
      <div className="bg-gray-100 py-3">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Trang Chủ</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-primary font-bold">Liên Hệ</span>
          </div>
        </div>
      </div>

      <div className="relative h-40 bg-primary overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=250&fit=crop" alt="Liên hệ" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-black uppercase text-white">LIÊN HỆ – TƯ VẤN</h1>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-black uppercase text-primary border-b-2 border-primary pb-2 mb-6">THÔNG TIN LIÊN HỆ</h2>

              <div className="space-y-4">
                {[
                  { icon: 'fa-building', label: 'Trụ sở chính', val: 'Số 04 đường N5 Hoa Đào, KDC Hiệp Thành, Phường Hiệp Thành, Quận 12, TP.HCM' },
                  { icon: 'fa-map-marker-alt', label: 'VP giao dịch HCM', val: 'Tầng 3, Số 68, Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM' },
                  { icon: 'fa-phone-alt', label: 'Tổng đài', val: '(028).22.66.22.11', href: 'tel:02822662211' },
                  { icon: 'fa-mobile-alt', label: 'Hotline', val: '07.97.37.3456', href: 'tel:0797373456' },
                  { icon: 'fa-headset', label: 'Hotline miễn phí', val: '1800.888.992', href: 'tel:1800888992' },
                  { icon: 'fa-envelope', label: 'Email', val: 'dichvuankhang.vn@gmail.com', href: 'mailto:dichvuankhang.vn@gmail.com' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-3 bg-gray-50 rounded border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase mb-0.5">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-sm font-bold text-primary hover:underline">{item.val}</a>
                        : <div className="text-sm text-gray-700">{item.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Regional hotlines */}
              <div className="mt-6">
                <h3 className="font-black uppercase text-gray-700 mb-3 text-sm border-b pb-2">HOTLINE THEO KHU VỰC</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { kv: 'Hà Nội', tel: '0965.348.668' },
                    { kv: 'Quảng Bình', tel: '0941.699.911' },
                    { kv: 'Đà Nẵng', tel: '0935.262.878' },
                    { kv: 'Khánh Hòa', tel: '0979.275.798' },
                  ].map(r => (
                    <div key={r.kv} className="bg-primary/5 p-2 rounded border border-primary/20">
                      <div className="text-xs text-gray-500">{r.kv}</div>
                      <a href={`tel:${r.tel.replace(/\./g,'')}`} className="font-bold text-primary text-sm">{r.tel}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded overflow-hidden border border-gray-200">
                <iframe
                  title="Google Maps An Khang"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4!2d106.7!3d10.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVFAuSENN!5e0!3m2!1svi!2svn!4v1"
                  width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-black uppercase text-primary border-b-2 border-primary pb-2 mb-6">GỬI YÊU CẦU TƯ VẤN</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên <span className="text-red">*</span></label>
                    <input type="text" placeholder="Nhập họ và tên" value={form.ho_ten} onChange={e => setForm({...form, ho_ten: e.target.value})}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Số điện thoại <span className="text-red">*</span></label>
                    <input type="tel" placeholder="Nhập số điện thoại" value={form.so_dien_thoai} onChange={e => setForm({...form, so_dien_thoai: e.target.value})}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nội dung cần tư vấn</label>
                    <textarea placeholder="Mô tả yêu cầu của bạn..." rows={5} value={form.noi_dung} onChange={e => setForm({...form, noi_dung: e.target.value})}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
                  </div>
                  {status === 'success' && <div className="bg-green-50 border border-green-200 text-green-700 rounded p-3 text-sm"><i className="fas fa-check-circle mr-2"></i>Gửi thành công! Chúng tôi sẽ liên hệ sớm.</div>}
                  {status === 'error' && <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 text-sm"><i className="fas fa-exclamation-circle mr-2"></i>Vui lòng điền đầy đủ họ tên và số điện thoại.</div>}
                  <button type="submit" disabled={loading}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-black py-3 uppercase tracking-wider transition-colors disabled:opacity-60 rounded">
                    {loading ? <span><i className="fas fa-spinner fa-spin mr-2"></i>Đang gửi...</span> : <span><i className="fas fa-paper-plane mr-2"></i>Gửi Yêu Cầu Tư Vấn</span>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
