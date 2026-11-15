import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student } from '../types';
import { authApi } from '../services/api';

// Danh sách sinh viên Khóa K52 - Ngành Kế toán Doanh nghiệp chính thức
const fallbackStudents: Record<string, Student> = {
  '31261025192': {
    id: '1', code: '31261025192', name: 'Trần Chí Bằng', avatar: 'TB',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trần Chí Bằng đang duy trì nhịp độ chuyên cần rất tốt, đi học đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.42, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Kết quả học tập ban đầu rất tốt, tiếp tục phát huy!' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích tân sinh viên 50%' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025194': {
    id: '2', code: '31261025194', name: 'Nguyễn Tuệ Bình', avatar: 'NB',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Tuệ Bình tham gia học đầy đủ các học phần.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.55, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Khả năng thích ứng với môi trường đại học rất nhanh.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025200': {
    id: '3', code: '31261025200', name: 'Mai Diệu Châu', avatar: 'MC',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'yellow', label: '🟡 VÀNG (NHẮC NHỞ)', description: 'Sinh viên Mai Diệu Châu có 1 môn chạm ngưỡng vắng gần 10%, cần nhắc nhở con điều chỉnh lịch trình.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 2.85, rank: 'Trung bình khá', rankIcon: '🥈', rankDescription: 'Cần chú ý phương pháp tự học để cải thiện điểm số.' },
    finance: { tuitionAmount: '29.983.100 ₫', tuitionPaid: false, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025203': {
    id: '4', code: '31261025203', name: 'Vũ Bảo Hải Châu', avatar: 'VC',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Vũ Bảo Hải Châu duy trì lịch trình học tập rất chuẩn mực.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.65, rank: 'Xuất sắc', rankIcon: '🏆', rankDescription: 'Thành tích học tập đầu khóa xuất sắc, tư duy nổi bật.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Thủ khoa xét tuyển 100%' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025207': {
    id: '5', code: '31261025207', name: 'Nguyễn Thị Linh Chi', avatar: 'NC',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Linh Chi tham gia đầy đủ các buổi học đại cương.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.28, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Nỗ lực học tập tốt và tích cực tham gia thảo luận nhóm.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025210': {
    id: '6', code: '31261025210', name: 'Hoàng Ngọc Phi Cường', avatar: 'HC',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Hoàng Ngọc Phi Cường duy trì chuyên cần rất tốt, tham gia đủ các buổi học.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.48, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực vững vàng, năng động trong các hoạt động sinh viên.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích UEH K52' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025221': {
    id: '7', code: '31261025221', name: 'Vương Thùy Dung', avatar: 'VD',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Vương Thùy Dung duy trì nhịp độ chuyên cần an toàn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.15, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Con đang dần thích nghi tốt với phương pháp học tín chỉ.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025228': {
    id: '8', code: '31261025228', name: 'Lưu Trung Đài', avatar: 'LD',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'yellow', label: '🟡 VÀNG (NHẮC NHỞ)', description: 'Sinh viên Lưu Trung Đài có tỷ lệ vắng xấp xỉ 10%, phụ huynh nên nhắc con chú ý giờ học.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 2.76, rank: 'Trung bình khá', rankIcon: '🥈', rankDescription: 'Cần phân bổ thời gian tự học hợp lý hơn.' },
    finance: { tuitionAmount: '29.983.100 ₫', tuitionPaid: false, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025236': {
    id: '9', code: '31261025236', name: 'Bùi Tâm Đoan', avatar: 'BD',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Bùi Tâm Đoan đi học chuyên cần và đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.35, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực tốt, tinh thần tự giác cao.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025237': {
    id: '10', code: '31261025237', name: 'Huỳnh Tuyết Đoan', avatar: 'HD',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Huỳnh Tuyết Đoan học tập chăm chỉ, không có buổi vắng nào.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.40, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập vững vàng, nắm chắc kiến thức các môn đại cương.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025239': {
    id: '11', code: '31261025239', name: 'Võ Cẩm Đoan', avatar: 'VD',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Võ Cẩm Đoan duy trì việc lên lớp đều đặn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.22, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Tiến độ học tập ổn định.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025252': {
    id: '12', code: '31261025252', name: 'Võ Anh Hào', avatar: 'VH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Võ Anh Hào tham gia học tập nghiêm túc và đúng giờ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.30, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thích nghi tốt với môi trường giảng đường đại học.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025255': {
    id: '13', code: '31261025255', name: 'Nguyễn Đỗ Thanh Hằng', avatar: 'NH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Đỗ Thanh Hằng chuyên cần rất tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.52, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Năng động, có tinh thần cầu tiến cao.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích HK1' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025261': {
    id: '14', code: '31261025261', name: 'Hoàng Gia Hân', avatar: 'HH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Hoàng Gia Hân tham gia đầy đủ các lớp.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.10, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Học lực khá, có tiềm năng phát triển tốt.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025265': {
    id: '15', code: '31261025265', name: 'Lưu Gia Hân', avatar: 'LH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Lưu Gia Hân đi học đều đặn, không có tiết vắng đáng lo ngại.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.50, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thành tích học tập nổi bật, tích cực tham gia câu lạc bộ sinh viên.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích tân sinh viên' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025276': {
    id: '16', code: '31261025276', name: 'Trần Bảo Hân', avatar: 'TH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trần Bảo Hân duy trì việc học rất nề nếp.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.38, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Kỹ năng làm việc nhóm tốt, đóng góp tích cực cho bài tập lớn.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025279': {
    id: '17', code: '31261025279', name: 'Mai Kim Hiền', avatar: 'MH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Mai Kim Hiền duy trì chuyên cần rất tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.18, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Học lực vững vàng, thích nghi tốt với phương pháp học mới.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025280': {
    id: '18', code: '31261025280', name: 'Ngô Cẩm Hiền', avatar: 'NH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Ngô Cẩm Hiền tham gia học tập đều đặn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.45, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Tư duy logic tốt, điểm thành phần các môn đại cương cao.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025285': {
    id: '19', code: '31261025285', name: 'Trần Thị Quỳnh Hoa', avatar: 'TH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trần Thị Quỳnh Hoa duy trì chuyên cần rất tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.25, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập chăm chỉ và chủ động trong giờ thảo luận.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025289': {
    id: '20', code: '31261025289', name: 'Nguyễn Thanh Hùng', avatar: 'NH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'yellow', label: '🟡 VÀNG (NHẮC NHỞ)', description: 'Sinh viên Nguyễn Thanh Hùng có biểu hiện vắng học rải rác một số buổi đầu tuần, cần phụ huynh nhắc nhở nhẹ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 2.65, rank: 'Trung bình khá', rankIcon: '🥈', rankDescription: 'Cần tập trung ôn luyện để chuẩn bị cho kỳ thi kết thúc học phần.' },
    finance: { tuitionAmount: '29.983.100 ₫', tuitionPaid: false, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025291': {
    id: '21', code: '31261025291', name: 'Nguyễn Thị Khánh Huyền', avatar: 'NH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Khánh Huyền đi học đầy đủ và đúng giờ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.40, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Kết quả học tập ổn định, hòa nhập nhanh với giảng đường.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025296': {
    id: '22', code: '31261025296', name: 'Đoàn Đặng Quỳnh Hương', avatar: 'DH',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Đoàn Đặng Quỳnh Hương có tinh thần học tập rất nghiêm túc.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.60, rank: 'Xuất sắc', rankIcon: '🏆', rankDescription: 'Thành tích nổi bật, đạt điểm số cao trong các bài kiểm tra định kỳ.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích UEH K52' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025333': {
    id: '23', code: '31261025333', name: 'Phạm Ngọc Hồng Kim', avatar: 'PK',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Phạm Ngọc Hồng Kim duy trì chuyên cần xuất sắc (100%), không vắng tiết nào.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.88, rank: 'Xuất sắc', rankIcon: '🏆', rankDescription: 'Thành tích học tập đầu khóa xuất sắc, tư duy phân tích tài chính vượt trội, Top đầu ngành Kế toán Doanh nghiệp.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích học tập UEH K52 (Loại Xuất sắc) – 100% học phí' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025344': {
    id: '24', code: '31261025344', name: 'La Huỳnh Kim Liên', avatar: 'LL',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên La Huỳnh Kim Liên đi học đều đặn, chuyên cần tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.32, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, nắm bắt bài giảng nhanh.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025350': {
    id: '25', code: '31261025350', name: 'Hoàng Mai Linh', avatar: 'HL',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Hoàng Mai Linh tham gia học tập tích cực và chuyên cần.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.45, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Tập trung học tập tốt, khả năng tự học được đánh giá cao.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025396': {
    id: '26', code: '31261025396', name: 'Nguyễn Thị Thu Minh', avatar: 'NM',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Thu Minh duy trì chuyên cần rất tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.36, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Chăm chỉ và có tinh thần trách nhiệm trong nhóm học tập.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025399': {
    id: '27', code: '31261025399', name: 'Cao Thị Trà My', avatar: 'CM',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Cao Thị Trà My tham gia lớp đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.20, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Học lực khá, khả năng giao tiếp và thuyết trình tự tin.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025405': {
    id: '28', code: '31261025405', name: 'Trần Hồ Quỳnh My', avatar: 'TM',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trần Hồ Quỳnh My duy trì nếp học tập chỉn chu.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.42, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, hoàn thành tốt các bài tập cá nhân.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025443': {
    id: '29', code: '31261025443', name: 'Lê Huỳnh Yến Ngọc', avatar: 'LN',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Lê Huỳnh Yến Ngọc đi học đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.30, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Tư duy nhanh nhẹn và tích cực tương tác với giảng viên.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025448': {
    id: '30', code: '31261025448', name: 'Nguyễn Huỳnh Bảo Ngọc', avatar: 'NN',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Huỳnh Bảo Ngọc duy trì chuyên cần an toàn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.52, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thành tích học tập đầu khóa rất ấn tượng.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích HK1' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025478': {
    id: '31', code: '31261025478', name: 'Hoàng Yến Nhi', avatar: 'HN',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Hoàng Yến Nhi có tỷ lệ tham gia lớp học rất cao.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.15, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Học lực khá, hòa đồng và hỗ trợ bạn bè trong học tập.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025479': {
    id: '32', code: '31261025479', name: 'Huỳnh Ái Nhi', avatar: 'HN',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Huỳnh Ái Nhi đi học đầy đủ các buổi.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.38, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Kết quả học tập ổn định, thái độ học tập chuẩn mực.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025496': {
    id: '33', code: '31261025496', name: 'Toàn Uyển Nhi', avatar: 'TN',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Toàn Uyển Nhi duy trì chuyên cần rất tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.46, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, thích ứng nhanh với môi trường năng động của UEH.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025519': {
    id: '34', code: '31261025519', name: 'Trần Thị Yến Oanh', avatar: 'TO',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trần Thị Yến Oanh lên lớp đều đặn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.25, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập chăm chỉ, hoàn thành bài tập đúng hạn.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025550': {
    id: '35', code: '31261025550', name: 'Tạ Nguyễn Minh Quí', avatar: 'TQ',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Tạ Nguyễn Minh Quí duy trì nhịp học rất đều đặn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.34, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, năng nổ trong các hoạt động ngoại khóa.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025557': {
    id: '36', code: '31261025557', name: 'Lâm Thị Như Quỳnh', avatar: 'LQ',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Lâm Thị Như Quỳnh tham gia học tập nghiêm túc.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.48, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thành tích học tập tốt, có tố chất nghiên cứu học thuật.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025559': {
    id: '37', code: '31261025559', name: 'Nguyễn Thị Huỳnh Sang', avatar: 'NS',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Huỳnh Sang đi học đầy đủ, không có tiết vắng.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.20, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Nỗ lực thích nghi tốt với cách học theo tín chỉ.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025594': {
    id: '38', code: '31261025594', name: 'Nguyễn Quốc Thắng', avatar: 'NT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'yellow', label: '🟡 VÀNG (NHẮC NHỞ)', description: 'Sinh viên Nguyễn Quốc Thắng vắng 1 buổi học môn đại cương, cần chú ý không để tỷ lệ vượt mức 10%.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 2.80, rank: 'Trung bình khá', rankIcon: '🥈', rankDescription: 'Cần phân bổ thời gian hợp lý hơn giữa việc học và các hoạt động cá nhân.' },
    finance: { tuitionAmount: '29.983.100 ₫', tuitionPaid: false, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025580': {
    id: '39', code: '31261025580', name: 'Mang Thanh Thảo', avatar: 'MT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Mang Thanh Thảo tham gia học tập chăm chỉ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.41, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, chủ động trao đổi với cố vấn khi cần hỗ trợ.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025591': {
    id: '40', code: '31261025591', name: 'Võ Huỳnh Thu Thảo', avatar: 'VT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Võ Huỳnh Thu Thảo đi học đều đặn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.32, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập vững, thích nghi tốt với môi trường mới.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025624': {
    id: '41', code: '31261025624', name: 'Nguyễn Dương Anh Thư', avatar: 'NT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Dương Anh Thư duy trì chuyên cần xuất sắc, không nghỉ buổi nào.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.68, rank: 'Xuất sắc', rankIcon: '🏆', rankDescription: 'Thành tích học tập đầu khóa xuất sắc, tư duy nổi trội.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Tài năng Khóa K52 – 100% học phí' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025627': {
    id: '42', code: '31261025627', name: 'Nguyễn Thị Anh Thư', avatar: 'NT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Anh Thư lên lớp đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.40, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, tham gia hoạt động lớp năng nổ.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025633': {
    id: '43', code: '31261025633', name: 'Phạm Nguyễn Minh Thư', avatar: 'PT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Phạm Nguyễn Minh Thư duy trì chuyên cần an toàn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.28, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập chăm chỉ, bài tập đạt kết quả tốt.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025661': {
    id: '44', code: '31261025661', name: 'Nguyễn Đặng Phương Trang', avatar: 'NT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Đặng Phương Trang đi học nghiêm túc.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.50, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, giao tiếp tự tin và làm việc nhóm hiệu quả.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích HK1' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025663': {
    id: '45', code: '31261025663', name: 'Nguyễn Thị Yến Trang', avatar: 'NT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Yến Trang đi học chuyên cần.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.35, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thích ứng nhanh, nắm bài tốt.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025701': {
    id: '46', code: '31261025701', name: 'Dương Thùy Thanh Trúc', avatar: 'DT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Dương Thùy Thanh Trúc đi học đầy đủ các buổi.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.45, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, luôn hoàn thành bài tập trước hạn.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025718': {
    id: '47', code: '31261025718', name: 'Trần Thị Cẩm Tú', avatar: 'TT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trần Thị Cẩm Tú duy trì chuyên cần an toàn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.18, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Học lực khá, hòa đồng với bạn bè cùng lớp.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025721': {
    id: '48', code: '31261025721', name: 'Trịnh Gia Tuệ', avatar: 'TT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trịnh Gia Tuệ đi học chuyên cần và đúng giờ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.58, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thành tích học tập đầu khóa rất ấn tượng, có năng khiếu ngoại ngữ.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích UEH K52' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025726': {
    id: '49', code: '31261025726', name: 'Lê Thị Ánh Tuyết', avatar: 'LT',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Lê Thị Ánh Tuyết lên lớp đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.32, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập chăm chỉ, tự tin trong các buổi thảo luận chuyên đề.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025731': {
    id: '50', code: '31261025731', name: 'Nguyễn Lê Thuyên Kim Nhã Uyên', avatar: 'NU',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Lê Thuyên Kim Nhã Uyên duy trì việc học rất nề nếp.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.62, rank: 'Xuất sắc', rankIcon: '🏆', rankDescription: 'Học lực xuất sắc, tích cực tham gia các dự án nghiên cứu khoa học sinh viên.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: 'Học bổng Khuyến khích tân sinh viên 100%' },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025736': {
    id: '51', code: '31261025736', name: 'Huỳnh Thị Hồng Vân', avatar: 'HV',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Nguyễn Văn Đức', phone: '0901 222 333', email: 'ducnv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Huỳnh Thị Hồng Vân chuyên cần tốt.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.20, rank: 'Khá', rankIcon: '🥈', rankDescription: 'Học lực khá, hòa đồng và thích nghi tốt.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025739': {
    id: '52', code: '31261025739', name: 'Trang Cẩm Vân', avatar: 'TV',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'TS. Lê Thị Bích Liên', phone: '0987 654 321', email: 'lienltb@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Trang Cẩm Vân đi học đầy đủ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.35, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học tập chăm chỉ và có trách nhiệm.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025740': {
    id: '53', code: '31261025740', name: 'Nguyễn Thị Hà Vi', avatar: 'NV',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Thị Hà Vi duy trì chuyên cần an toàn.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.44, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Học lực giỏi, kết quả các bài kiểm tra đầu khóa rất tốt.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  },
  '31261025772': {
    id: '54', code: '31261025772', name: 'Nguyễn Tường Vy', avatar: 'NV',
    major: 'Kế toán Doanh nghiệp', cohort: 'Khóa K52',
    advisor: { name: 'ThS. Trần Văn Nam', phone: '0912 345 678', email: 'namtv@ueh.edu.vn' },
    semesterCurrent: 1, semesterTotal: 8, semesterLabel: 'Học kỳ 1/2026 • Khóa K52 (Tân sinh viên)',
    attendance: { status: 'green', label: '🟢 XANH LÁ (AN TOÀN)', description: 'Sinh viên Nguyễn Tường Vy tham gia các tiết học đầy đủ, đúng giờ.' },
    academic: { creditsDone: 15, creditsTotal: 130, subjectsNow: 5, gpa: 3.50, rank: 'Giỏi', rankIcon: '🥇', rankDescription: 'Thích ứng rất nhanh với phương pháp giảng dạy tại UEH.' },
    finance: { tuitionAmount: '19.719.000 ₫', tuitionPaid: true, insurance: { period: 'Năm học 2026–2027', valid: true }, scholarship: null },
    yearStatus: 'Đang ở Năm 1 (Học kỳ 1) – Giai đoạn Khám phá & Hội nhập môi trường Đại học'
  }
};

interface AuthContextType {
  student: Student | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (studentCode: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedStudent = localStorage.getItem('ueh_student_data');
    if (savedStudent) {
      try {
        setStudent(JSON.parse(savedStudent));
      } catch (e) {
        console.error('Failed to parse saved student info', e);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (studentCode: string): Promise<void> => {
    const code = studentCode.trim().toUpperCase();
    try {
      // Try API login
      const data = await authApi.login(code);
      localStorage.setItem('ueh_auth_token', data.token);
      localStorage.setItem('ueh_student_data', JSON.stringify(data.student));
      setStudent(data.student);
    } catch {
      // Fallback local mock if backend API is not currently reached
      if (fallbackStudents[code]) {
        const mockStudent = fallbackStudents[code];
        localStorage.setItem('ueh_auth_token', `mock_token_${code}`);
        localStorage.setItem('ueh_student_data', JSON.stringify(mockStudent));
        setStudent(mockStudent);
      } else {
        throw new Error('Mã số sinh viên không tồn tại trong danh sách lớp Khóa K52 ngành Kế toán Doanh nghiệp. Vui lòng kiểm tra lại 11 chữ số.');
      }
    }
  };

  const logout = () => {
    authApi.logout().catch(() => {});
    setStudent(null);
  };

  return (
    <AuthContext.Provider
      value={{
        student,
        isAuthenticated: !!student,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
