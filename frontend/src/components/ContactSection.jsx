import { useState } from 'react';
import axios from 'axios';

export default function ContactSection() {
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
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section className="py-14 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">LIÊN HỆ – TƯ VẤN ĐẶT DỊCH VỤ</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm">
              Bạn là người có nhu cầu và mong muốn được chuyên gia chúng tôi tư vấn về dịch vụ sản phẩm?
              Hãy để lại thông tin, chúng tôi sẽ liên hệ trong vòng 24h.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên <span className="text-red">*</span></label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  value={form.ho_ten}
                  onChange={e => setForm({...form, ho_ten: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Số điện thoại <span className="text-red">*</span></label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  value={form.so_dien_thoai}
                  onChange={e => setForm({...form, so_dien_thoai: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nội dung cần tư vấn</label>
                <textarea
                  placeholder="Mô tả yêu cầu của bạn (diện tích, loại dịch vụ, địa chỉ...)"
                  rows={4}
                  value={form.noi_dung}
                  onChange={e => setForm({...form, noi_dung: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded p-3 text-sm">
                  <i className="fas fa-check-circle mr-2"></i>Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 text-sm">
                  <i className="fas fa-exclamation-circle mr-2"></i>Vui lòng điền đầy đủ họ tên và số điện thoại.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-dark text-white font-black py-3 uppercase tracking-wider transition-colors disabled:opacity-60 rounded"
              >
                {loading ? <span><i className="fas fa-spinner fa-spin mr-2"></i>Đang gửi...</span> : <span><i className="fas fa-paper-plane mr-2"></i>Gửi Yêu Cầu Tư Vấn</span>}
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center border-t pt-5">
              {[
                { icon: 'fa-phone-alt', label: 'Hotline', val: '0797.37.3456', href: 'tel:0797373456' },
                { icon: 'fa-headset', label: 'Tổng đài', val: '1800.888.992', href: 'tel:1800888992' },
                { icon: 'fa-envelope', label: 'Email', val: 'dichvuankhang.vn@gmail.com', href: 'mailto:dichvuankhang.vn@gmail.com' },
              ].map(c => (
                <a key={c.label} href={c.href} className="group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto mb-1 transition-colors">
                    <i className={`fas ${c.icon} text-primary group-hover:text-white transition-colors`}></i>
                  </div>
                  <div className="text-xs text-gray-500">{c.label}</div>
                  <div className="text-xs font-bold text-gray-700 group-hover:text-primary transition-colors">{c.val}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
