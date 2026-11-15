import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Header: React.FC = () => {
  const { student, logout } = useAuth();

  if (!student) return null;

  return (
    <header className="bg-gradient-to-r from-ueh-dark to-ueh-primary text-white px-4 sm:px-8 py-3 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <div className="bg-white text-ueh-dark font-black text-base px-3 py-1.5 rounded-lg tracking-wider shadow-sm">
              UEH
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base tracking-wide flex items-center gap-2">
                UEH PARENT CONNECT
              </div>
              <div className="text-xs text-teal-100 opacity-90 italic">
                Cổng thông tin phụ huynh
              </div>
            </div>
          </div>
          <span className="bg-white/20 border border-white/30 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
            PORTAL PHỤ HUYNH
          </span>
        </div>

        {/* Right: Student Information & Logout */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold flex items-center justify-center text-sm shadow">
              {student.avatar}
            </div>
            <div>
              <div className="font-bold text-white text-xs sm:text-sm leading-tight">
                Sinh viên đồng hành: {student.name}
              </div>
              <div className="text-[11px] text-teal-100 opacity-80">
                MSSV: {student.code}
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-white/20" />

          <div className="hidden lg:block">
            <div className="text-[10px] text-teal-100 uppercase tracking-wider opacity-75">
              Khoa / Chuyên ngành
            </div>
            <div className="font-semibold text-white text-xs">
              {student.cohort} • {student.major}
            </div>
          </div>

          <div className="hidden xl:block w-px h-8 bg-white/20" />

          <div className="hidden xl:block">
            <div className="text-[10px] text-teal-100 uppercase tracking-wider opacity-75">
              Cố vấn học tập (CVHT)
            </div>
            <div className="font-semibold text-white text-xs">
              {student.advisor.name}
            </div>
          </div>

          <button
            onClick={logout}
            className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap"
            title="Đăng xuất khỏi cổng thông tin"
          >
            <span>🚪</span>
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </header>
  );
};
