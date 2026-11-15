import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface ContactModalProps {
  target: 'daotao' | 'cvht' | 'ctsv' | null;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ target, onClose }) => {
  const { student } = useAuth();
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!target) return null;

  const targetTitles = {
    daotao: 'Gửi Yêu Cầu Hỗ Trợ Tới Phòng Đào Tạo',
    cvht: `Đặt Lịch Gặp Cố Vấn Học Tập (${student?.advisor.name})`,
    ctsv: 'Gửi Thắc Mắc Tới Phòng Công Tác Sinh Viên',
  };

  const targetDescriptions = {
    daotao: 'Phòng Đào Tạo sẽ tiếp nhận thông tin và phản hồi qua số điện thoại/email của phụ huynh trong vòng 1-2 ngày làm việc.',
    cvht: 'Cố vấn học tập sẽ liên hệ trực tiếp với phụ huynh để thống nhất thời gian gặp mặt (trực tiếp tại trường hoặc qua Google Meet).',
    ctsv: 'Phòng CTSV sẽ hỗ trợ giải đáp thắc mắc về học bổng, bảo hiểm y tế và các thủ tục sinh viên trong vòng 24 giờ làm việc.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim() || !content.trim()) {
      alert('Vui lòng điền đầy đủ thông tin để nhà trường thuận tiện liên hệ lại.');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      alert('✅ Yêu cầu kết nối của quý phụ huynh đã được gửi thành công!\nCán bộ nhà trường sẽ liên hệ lại sớm nhất.');
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center transition"
          aria-label="Đóng"
        >
          ✕
        </button>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight mb-1">
          {targetTitles[target]}
        </h3>
        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          {targetDescriptions[target]}
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="text-4xl animate-bounce">📤</div>
            <div className="font-bold text-teal-800 text-sm">Đang chuyển tiếp thông tin tới phòng ban...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Họ và tên phụ huynh <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Văn A"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-ueh-primary/30 focus:border-ueh-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Số điện thoại liên hệ <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ví dụ: 0912 345 678"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-ueh-primary/30 focus:border-ueh-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Thông tin sinh viên xác nhận
              </label>
              <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs text-slate-700">
                Sinh viên: <strong>{student?.name}</strong> (MSSV: <strong>{student?.code}</strong>)
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nội dung cần hỗ trợ / trao đổi <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={4}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Mô tả cụ thể thắc mắc hoặc thời gian mong muốn gặp mặt..."
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-ueh-primary/30 focus:border-ueh-primary resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-bold bg-ueh-primary hover:bg-ueh-dark text-white rounded-xl shadow transition"
              >
                Gửi yêu cầu ngay
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
