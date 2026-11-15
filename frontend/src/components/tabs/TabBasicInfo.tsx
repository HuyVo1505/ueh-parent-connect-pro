import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const TabBasicInfo: React.FC = () => {
  const { student } = useAuth();

  if (!student) return null;

  const { attendance, academic, finance } = student;
  const creditPercent = Math.min(100, Math.round((academic.creditsDone / academic.creditsTotal) * 100));
  const semPercent = Math.min(100, Math.round((student.semesterCurrent / student.semesterTotal) * 100));

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <div className="text-xs font-bold text-ueh-primary uppercase tracking-widest mb-1">
          NHÓM TÍNH NĂNG 01
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Bức Tranh Học Tập Tổng Quan
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Nắm bắt nhịp độ học tập, tiến độ tích lũy và nghĩa vụ tài chính của sinh viên một cách nhẹ nhàng, tinh gọn.
        </p>
      </div>

      {/* 1. Trạng Thái Chuyên Cần Tổng Quát */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🎯</span>
              <span>Trạng Thái Chuyên Cần Tổng Quát (Hệ 3 Màu Cảnh Báo)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Thay vì theo dõi từng buổi vắng, phụ huynh chỉ cần quan sát tín hiệu màu sắc để biết con đang duy trì nhịp học an toàn hay không.
            </p>
          </div>
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${attendance.status === 'green' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 ring-2 ring-emerald-500/20' : 'bg-slate-100 text-slate-400'}`}>
              Xanh (Hiện tại)
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${attendance.status === 'yellow' ? 'bg-amber-100 text-amber-800 border border-amber-300 ring-2 ring-amber-500/20' : 'bg-slate-100 text-slate-400'}`}>
              Vàng (10%)
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${attendance.status === 'red' ? 'bg-rose-100 text-rose-800 border border-rose-300 ring-2 ring-rose-500/20' : 'bg-slate-100 text-slate-400'}`}>
              Đỏ (20%)
            </span>
          </div>
        </div>

        {/* 3 Status description cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Card Green */}
          <div className="bg-emerald-50/70 border-2 border-emerald-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                🟢 MỨC XANH LÁ
              </span>
              <span className="text-xs font-bold text-emerald-700">An toàn</span>
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-1">Đi học đầy đủ (Vắng &lt; 10%)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sinh viên tham gia học đều đặn, đảm bảo điều kiện dự thi tất cả học phần trong học kỳ.
            </p>
          </div>

          {/* Card Yellow */}
          <div className="bg-amber-50/70 border-2 border-amber-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                🟡 MỨC VÀNG
              </span>
              <span className="text-xs font-bold text-amber-800">Nhắc nhở</span>
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-1">Vắng khoảng 10% số tiết</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mức nhắc nhở nhẹ để sinh viên tự cân đối lịch trình cá nhân, chưa ảnh hưởng quyền dự thi.
            </p>
          </div>

          {/* Card Red */}
          <div className="bg-rose-50/70 border-2 border-rose-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                🔴 MỨC ĐỎ
              </span>
              <span className="text-xs font-bold text-rose-700">Cảnh báo cấm thi</span>
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-1">Vắng từ 20% số tiết trở lên</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Có học phần chạm ngưỡng quy chế cấm thi. Cần phụ huynh và CVHT phối hợp hỗ trợ kịp thời.
            </p>
          </div>
        </div>

        {/* Current Student's Status Banner */}
        <div
          className={`rounded-xl p-4 border flex items-center gap-3.5 transition-all ${
            attendance.status === 'green'
              ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-300'
              : attendance.status === 'yellow'
              ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-300'
              : 'bg-gradient-to-r from-rose-50 to-red-50 border-rose-300'
          }`}
        >
          <div
            className={`w-3.5 h-3.5 rounded-full shrink-0 animate-pulse ${
              attendance.status === 'green'
                ? 'bg-emerald-500'
                : attendance.status === 'yellow'
                ? 'bg-amber-500'
                : 'bg-rose-600'
            }`}
          />
          <div>
            <div className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
              TRẠNG THÁI CHUYÊN CẦN HIỆN TẠI
            </div>
            <div
              className={`font-bold text-sm sm:text-base ${
                attendance.status === 'green'
                  ? 'text-emerald-700'
                  : attendance.status === 'yellow'
                  ? 'text-amber-800'
                  : 'text-rose-700'
              }`}
            >
              {attendance.label}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {attendance.description}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Tiến Độ Tín Chỉ & Học Lực */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>📊</span>
            <span>Tiến Độ Tín Chỉ & Học Lực</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Cái nhìn tổng thể về hành trình tích lũy tín chỉ và xếp loại học lực của sinh viên.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Progress Bars */}
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                <span>📚 Tín chỉ tích lũy</span>
                <span className="font-bold text-slate-900">{academic.creditsDone} / {academic.creditsTotal} TC ({creditPercent}%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-ueh-primary to-teal-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${creditPercent}%` }}
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                <span>📅 Tiến độ chương trình</span>
                <span className="font-bold text-slate-900">Học kỳ {student.semesterCurrent} / {student.semesterTotal} ({semPercent}%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${semPercent}%` }}
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                <span>🎯 Học phần đang học kỳ này</span>
                <span className="font-bold text-slate-900">{academic.subjectsNow} học phần</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full w-full" />
              </div>
            </div>
          </div>

          {/* Academic Rank Card */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-200/80 rounded-xl p-5 flex items-center gap-4">
            <div className="text-4xl sm:text-5xl shrink-0 p-3 bg-white rounded-2xl shadow-sm border border-teal-100">
              {academic.rankIcon}
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                XẾP LOẠI HỌC LỰC HIỆN TẠI
              </div>
              <div className="text-xl sm:text-2xl font-black text-ueh-dark mt-0.5">
                {academic.rank}
              </div>
              <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-1">
                Điểm trung bình tích lũy: <span className="text-ueh-primary font-bold text-base">{academic.gpa.toFixed(2)}</span> / 4.0
              </div>
              <p className="text-xs text-slate-600 mt-1 italic">
                "{academic.rankDescription}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Thông Báo Tài Chính & Hành Chính */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>💰</span>
            <span>Thông Báo Tài Chính – Hành Chính</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Các nghĩa vụ tài chính và giấy tờ hành chính quan trọng trong học kỳ hiện tại.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Tuition */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">📄</span>
              <div>
                <div className="text-xs text-slate-500">Học phí học kỳ hiện tại</div>
                <div className="text-sm sm:text-base font-bold text-slate-900">{finance.tuitionAmount}</div>
              </div>
            </div>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                finance.tuitionPaid
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-100 text-rose-800 border border-rose-200'
              }`}
            >
              {finance.tuitionPaid ? '✓ Đã đóng' : '⚠ Chưa đóng'}
            </span>
          </div>

          {/* Health Insurance */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">🏥</span>
              <div>
                <div className="text-xs text-slate-500">Bảo hiểm y tế sinh viên</div>
                <div className="text-sm font-semibold text-slate-900">{finance.insurance.period}</div>
              </div>
            </div>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                finance.insurance.valid
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-100 text-rose-800 border border-rose-200'
              }`}
            >
              {finance.insurance.valid ? '✓ Còn hiệu lực' : '⚠ Cần gia hạn'}
            </span>
          </div>

          {/* Scholarship */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">🎓</span>
            <div>
              <div className="text-xs text-slate-500">Học bổng / Hỗ trợ tài chính</div>
              <div className="text-sm font-semibold text-slate-900">
                {finance.scholarship || 'Không có trong học kỳ này'}
              </div>
            </div>
          </div>

          {/* Admin records */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs">📋</span>
              <div>
                <div className="text-xs text-slate-500">Hồ sơ hành chính sinh viên</div>
                <div className="text-sm font-semibold text-slate-900">Đầy đủ và hợp lệ</div>
              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
              ✓ Hoàn chỉnh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
