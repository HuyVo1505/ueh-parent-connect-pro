import React from 'react';
import { useAuth } from '../../context/AuthContext';

interface TabParentCareProps {
  onOpenChat: () => void;
  onOpenContactModal: (target: 'daotao' | 'cvht' | 'ctsv') => void;
}

export const TabParentCare: React.FC<TabParentCareProps> = ({
  onOpenChat,
  onOpenContactModal,
}) => {
  const { student } = useAuth();

  if (!student) return null;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <div className="text-xs font-bold text-ueh-primary uppercase tracking-widest mb-1">
          NHÓM TÍNH NĂNG 02
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Chăm Sóc Phụ Huynh Người Học
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Hỗ trợ phụ huynh giải đáp thắc mắc và kết nối nhanh chóng với nhà trường khi cần thiết.
        </p>
      </div>

      {/* 1. AI Chat Assistant Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>🤖</span>
            <span>AI Trợ Lý Phụ Huynh (24/7)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Hệ thống AI sẵn sàng giải đáp các thắc mắc về quy chế, học phí, chính sách hỗ trợ sinh viên 24/7 mà không cần chờ đợi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 border border-amber-200 rounded-xl p-4">
            <div className="text-2xl mb-1.5">💬</div>
            <h4 className="font-bold text-sm text-slate-900 mb-1">Giải đáp tức thì</h4>
            <p className="text-xs text-slate-600">
              Hỏi nhanh về quy chế vắng, học phí, học bổng, lịch học, chính sách hỗ trợ sinh viên...
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-200 rounded-xl p-4">
            <div className="text-2xl mb-1.5">⏱️</div>
            <h4 className="font-bold text-sm text-slate-900 mb-1">Phản hồi 24/7</h4>
            <p className="text-xs text-slate-600">
              Không cần xếp hàng hay chờ giờ hành chính, nhận câu trả lời chính xác ngay lập tức.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 border border-indigo-200 rounded-xl p-4">
            <div className="text-2xl mb-1.5">🔒</div>
            <h4 className="font-bold text-sm text-slate-900 mb-1">Bảo mật & Tôn trọng</h4>
            <p className="text-xs text-slate-600">
              Thông tin trao đổi bảo mật, tôn trọng quyền riêng tư và sự tự lập của con cái.
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md transition transform active:scale-95"
          >
            <span>💬</span>
            <span>Mở AI Trợ Lý Phụ Huynh Ngay</span>
          </button>
        </div>
      </div>

      {/* 2. Emergency & Administrative Contacts */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>📞</span>
            <span>Cổng Kết Nối Trực Tiếp – Phòng Đào Tạo & Cố Vấn Học Tập</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Trong trường hợp khẩn cấp hoặc cần hỗ trợ chính thức, phụ huynh kết nối thẳng tới các đơn vị phụ trách:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phòng Đào Tạo */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">🎓</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Phòng Đào Tạo</h4>
                  <span className="text-xs text-slate-500">Quản lý học vụ, kết quả và quy chế thi</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Giải quyết các vấn đề đăng ký học phần, điểm thi, bảo lưu, chuyển ngành hoặc thủ tục tốt nghiệp.
              </p>
              <div className="space-y-1 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/70">
                <div>📍 Cơ sở A: 59C Nguyễn Đình Chiểu, Q.3, TP.HCM</div>
                <div>📞 Điện thoại: <strong>028 3829 4617</strong></div>
                <div>✉️ Email: <strong>daotao@ueh.edu.vn</strong></div>
                <div>⏰ Giờ làm việc: 7:30 – 11:30 | 13:30 – 17:00 (T2–T6)</div>
              </div>
            </div>
            <button
              onClick={() => onOpenContactModal('daotao')}
              className="w-full bg-ueh-primary hover:bg-ueh-dark text-white font-semibold text-xs py-2.5 rounded-lg transition"
            >
              📧 Gửi yêu cầu tới Phòng Đào Tạo
            </button>
          </div>

          {/* Cố Vấn Học Tập (CVHT) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">👨‍🏫</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Cố Vấn Học Tập (CVHT)
                  </h4>
                  <span className="text-xs text-slate-500">Đồng hành trực tiếp cùng sinh viên</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Người phụ trách hỗ trợ định hướng lộ trình học tập, tư vấn khi con gặp khó khăn hoặc cảnh báo học vụ.
              </p>
              <div className="space-y-1 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/70">
                <div>👤 Họ và tên: <strong>{student.advisor.name}</strong></div>
                <div>📞 Số điện thoại: <strong>{student.advisor.phone}</strong></div>
                <div>✉️ Email: <strong>{student.advisor.email}</strong></div>
                <div>⏰ Tiếp phụ huynh theo lịch hẹn đăng ký trước</div>
              </div>
            </div>
            <button
              onClick={() => onOpenContactModal('cvht')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs py-2.5 rounded-lg transition"
            >
              📞 Đặt lịch hẹn gặp CVHT
            </button>
          </div>

          {/* Phòng Công Tác Sinh Viên (CTSV) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">🏥</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Phòng Công Tác Sinh Viên</h4>
                  <span className="text-xs text-slate-500">Chính sách, học bổng & đời sống sinh viên</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hỗ trợ học bổng, chính sách miễn giảm, bảo hiểm y tế, ký túc xá và hoạt động rèn luyện.
              </p>
              <div className="space-y-1 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/70">
                <div>📍 Phòng A.001 – Cơ sở A UEH</div>
                <div>📞 Điện thoại: <strong>028 3829 4111</strong></div>
                <div>✉️ Email: <strong>ctsv@ueh.edu.vn</strong></div>
                <div>⏰ Giờ làm việc: 7:30 – 17:00 (T2–T6)</div>
              </div>
            </div>
            <button
              onClick={() => onOpenContactModal('ctsv')}
              className="w-full bg-ueh-primary hover:bg-ueh-dark text-white font-semibold text-xs py-2.5 rounded-lg transition"
            >
              📧 Liên hệ Phòng CTSV
            </button>
          </div>

          {/* Hỗ Trợ Khẩn Cấp 24/7 */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">🆘</span>
                <div>
                  <h4 className="font-bold text-rose-900 text-sm sm:text-base">Đường Dây Nóng Khẩn Cấp 24/7</h4>
                  <span className="text-xs text-rose-700">Dành cho trường hợp cấp bách về sức khỏe / an toàn</span>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Hỗ trợ ngay lập tức khi phát sinh sự cố về y tế, tâm lý cấp bách hoặc tình huống an ninh trường học.
              </p>
              <div className="space-y-1 text-xs text-slate-800 bg-white p-3 rounded-lg border border-rose-200">
                <div>🚨 Hotline miễn phí: <strong className="text-rose-600 text-sm">1800 1234</strong></div>
                <div>📱 Zalo Hỗ trợ: <strong>UEH Student Support</strong></div>
                <div>🌐 Cổng khẩn cấp: <strong>portal.ueh.edu.vn/khancap</strong></div>
              </div>
            </div>
            <a
              href="tel:18001234"
              className="w-full text-center bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 rounded-lg transition shadow-sm block"
            >
              🚨 Gọi ngay 1800 1234 (Miễn phí)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
