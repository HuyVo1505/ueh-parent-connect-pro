import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [studentCode, setStudentCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = studentCode.trim();
    if (!cleanCode) {
      setErrorMsg('Vui lòng nhập mã số sinh viên.');
      return;
    }

    if (cleanCode.length !== 11 || !cleanCode.startsWith('31261025')) {
      setErrorMsg('Mã sinh viên phải gồm 11 chữ số và bắt đầu bằng dãy 31261025 (Khóa K52).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);
    try {
      await login(cleanCode);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('Mã số sinh viên không tồn tại trong danh sách lớp Khóa K52.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ueh-dark via-teal-700 to-teal-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <div className="bg-white rounded-3xl p-6 sm:p-10 w-full max-w-md shadow-2xl relative z-10 border border-white/20">
        {/* Brand */}
        <div className="flex items-center gap-3.5 mb-2">
          <div className="bg-ueh-primary text-white font-black text-xl px-3.5 py-1.5 rounded-xl tracking-wider shadow-sm">
            UEH
          </div>
          <div>
            <h1 className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight">
              UEH PARENT CONNECT
            </h1>
            <p className="text-xs text-slate-500 italic">
              "Đồng hành định hướng, không giám sát chi li"
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-200 my-5" />

        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl sm:text-2xl font-black text-ueh-dark tracking-tight">
              Cổng Thông Tin Phụ Huynh
            </h2>
            <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Khóa K52
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            Nhập mã số sinh viên 11 chữ số để tra cứu bức tranh học tập tổng quan của tân sinh viên Khóa K52 tại UEH.
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Mã số sinh viên (11 chữ số)
              </label>
              <span className="text-[11px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
                Khóa K52
              </span>
            </div>
            <input
              type="text"
              value={studentCode}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 11);
                setStudentCode(val);
                setErrorMsg('');
              }}
              placeholder="Nhập MSSV (Ví dụ: 31261025192)"
              maxLength={11}
              autoFocus
              className="w-full px-4 py-3 text-sm font-semibold tracking-wider font-mono border-2 border-slate-200 rounded-xl focus:outline-none focus:border-ueh-primary focus:ring-2 focus:ring-ueh-primary/20 transition"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
              <span>Định dạng: 11 số (Bắt đầu bằng 31261025)</span>
              <span className="font-mono">{studentCode.length}/11 chữ số</span>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ueh-primary hover:bg-ueh-dark disabled:opacity-50 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition transform active:scale-[0.99]"
          >
            {isSubmitting ? 'Đang xác thực thông tin...' : '🔑 Tra cứu thông tin sinh viên'}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400 leading-normal">
            Hệ thống quản lý thông tin phụ huynh chính thức dành riêng cho tân sinh viên <strong>Đại học Kinh tế TP.HCM (UEH) – Khóa K52</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
