import React from 'react';
import { useAuth } from '../context/AuthContext';

export const NoticeBar: React.FC = () => {
  const { student } = useAuth();

  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 sm:px-8 py-2.5 text-xs sm:text-[13px] text-amber-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div className="flex items-center gap-2 flex-1">
        <span className="text-orange-600 text-base">🛡️</span>
        <span className="leading-snug">
          <strong>Nguyên tắc minh bạch tôn trọng:</strong> Hệ thống chỉ hiển thị chỉ số tổng quan & ngưỡng cảnh báo sớm, không công khai lịch sử điểm danh từng tiết hay điểm thành phần nhỏ để tôn trọng sự trưởng thành của sinh viên.
        </span>
      </div>
      {student && (
        <span className="bg-teal-50 border border-teal-200 text-ueh-dark text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap self-end md:self-auto">
          {student.semesterLabel}
        </span>
      )}
    </div>
  );
};
