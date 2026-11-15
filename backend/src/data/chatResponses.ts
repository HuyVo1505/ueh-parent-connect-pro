export interface ChatPattern {
  patterns: string[];
  response: string;
}

export const chatPatterns: ChatPattern[] = [
  {
    patterns: ['học phí', 'đóng tiền', 'thanh toán', 'nộp tiền'],
    response: `📋 **Học phí tại UEH:**\n\nHọc phí được đóng theo học kỳ, thường vào đầu mỗi học kỳ.\n\n**Các kênh thanh toán:**\n• Chuyển khoản ngân hàng (theo thông báo từ Phòng KHTC)\n• Cổng thanh toán trực tuyến tại my.ueh.edu.vn\n• Trực tiếp tại Phòng Kế hoạch Tài chính (Cơ sở A)\n\n📞 **Hotline Tài chính:** 028 3829 4617`,
  },
  {
    patterns: ['vắng', 'nghỉ học', 'điểm danh', 'chuyên cần'],
    response: `📌 **Quy chế chuyên cần UEH:**\n\n• 🟢 Vắng < 10% số tiết: Bình thường, không ảnh hưởng\n• 🟡 Vắng 10–20%: Nhắc nhở, cần điều chỉnh\n• 🔴 Vắng ≥ 20% số tiết: **Bị cấm thi** môn đó trong kỳ\n\n⚠️ Lưu ý: Vắng có phép vẫn tính vào tổng số tiết vắng.`,
  },
  {
    patterns: ['cấm thi', 'bị cấm', 'không được thi'],
    response: `🚨 **Quy chế cấm thi:**\n\nSinh viên bị cấm thi khi vắng ≥ 20% số tiết học phần.\n\n**Hậu quả:**\n• Nhận điểm 0 cho học phần đó\n• Phải đăng ký học lại\n• Ảnh hưởng đến GPA tích lũy\n\n💡 Khi phát hiện trạng thái ĐỎ, hãy liên hệ CVHT ngay để được hỗ trợ.`,
  },
  {
    patterns: ['học bổng', 'hỗ trợ tài chính', 'miễn giảm'],
    response: `🏆 **Các loại học bổng tại UEH:**\n\n• 🥇 **Tài năng:** GPA ≥ 3.6 → 100% học phí\n• 🥈 **Khuyến khích:** GPA ≥ 3.2 → 50-80% học phí\n• 🌍 **Quốc tế:** Từ các tổ chức nước ngoài\n• 💼 **Doanh nghiệp:** Từ 500+ công ty đối tác\n\n📋 Nộp hồ sơ đầu mỗi HK tại Phòng CTSV`,
  },
  {
    patterns: ['cvht', 'cố vấn', 'giáo viên hướng dẫn'],
    response: `👨‍🏫 **Cố vấn học tập (CVHT):**\n\nCVHT là người đồng hành trực tiếp với sinh viên suốt quá trình học.\n\n**CVHT hỗ trợ:**\n• Tư vấn đăng ký học phần\n• Giải quyết vướng mắc học vụ\n• Định hướng nghề nghiệp\n• Hỗ trợ khi gặp khó khăn\n\n📞 Thông tin CVHT hiển thị trong mục **Chăm sóc phụ huynh** của cổng này.`,
  },
  {
    patterns: ['bảo hiểm', 'bhyt', 'y tế'],
    response: `🏥 **Bảo hiểm y tế sinh viên:**\n\n• Bắt buộc theo quy định Nhà nước\n• Đóng theo năm học (tháng 8-9)\n• Mức đóng: ~500.000-800.000đ/năm\n• Quyền lợi: Khám chữa bệnh theo đúng tuyến với mức hỗ trợ 80-100%\n\n📍 Đăng ký/gia hạn tại Phòng CTSV hoặc online qua my.ueh.edu.vn`,
  },
  {
    patterns: ['gpa', 'điểm', 'xếp loại', 'học lực'],
    response: `📊 **Thang GPA và xếp loại tại UEH:**\n\n• 🏆 Xuất sắc: GPA ≥ 3.6\n• 🥇 Giỏi: GPA 3.2 – 3.59\n• 🥈 Khá: GPA 2.5 – 3.19\n• 🥉 Trung bình khá: GPA 2.0 – 2.49\n• Trung bình: GPA 1.0 – 1.99\n\n💡 GPA trong cổng này hiển thị điểm tích lũy tổng thể (không chi tiết từng môn).`,
  },
  {
    patterns: ['đăng ký học phần', 'môn học', 'thời khóa biểu', 'lịch học'],
    response: `📅 **Đăng ký học phần:**\n\nSinh viên tự đăng ký học phần qua hệ thống my.ueh.edu.vn theo lịch Phòng Đào Tạo thông báo đầu mỗi học kỳ.\n\n**Lưu ý:**\n• CVHT xem xét và tư vấn kế hoạch học tập\n• Phụ huynh không tham gia trực tiếp vào việc đăng ký\n• Sinh viên có quyền tự quyết học phần phù hợp năng lực\n\n📞 Thắc mắc: Phòng Đào Tạo – 028 3829 4617`,
  },
  {
    patterns: ['thực tập', 'việc làm', 'tuyển dụng', 'nghề nghiệp'],
    response: `💼 **Hỗ trợ việc làm tại UEH:**\n\nTrung tâm Hỗ trợ Việc làm UEH kết nối với **500+ doanh nghiệp đối tác**.\n\n**Dịch vụ hỗ trợ:**\n• Giới thiệu thực tập có lương (SV năm 3-4)\n• Hội chợ việc làm hàng năm\n• Workshop kỹ năng phỏng vấn\n• Cơ sở dữ liệu việc làm online\n\n🌐 careers.ueh.edu.vn`,
  },
  {
    patterns: ['tâm lý', 'khó khăn', 'stress', 'áp lực', 'lo lắng'],
    response: `💚 **Hỗ trợ tâm lý sinh viên UEH:**\n\nUEH có **Trung tâm Hỗ trợ Tâm lý** với dịch vụ miễn phí:\n• Tư vấn cá nhân (bảo mật tuyệt đối)\n• Nhóm hỗ trợ đồng đẳng\n• Workshop quản lý stress\n\n📞 **Đường dây hỗ trợ:** 1800 1234 (miễn phí)\n📧 tamly@ueh.edu.vn\n\n💡 Phụ huynh hãy khuyến khích con sử dụng dịch vụ này nếu cần.`,
  },
];

export const defaultResponse = `Cảm ơn câu hỏi của quý phụ huynh! 😊\n\nTôi đã ghi nhận yêu cầu này. Để được hỗ trợ chi tiết hơn:\n\n📞 **Phòng Công tác Sinh viên:** 028 3829 4111\n✉️ **Email:** ctsv@ueh.edu.vn\n🌐 **Portal:** my.ueh.edu.vn\n\nHoặc sử dụng **Cổng kết nối khẩn cấp** trong mục "Chăm sóc phụ huynh" trên cổng này.`;

export function getBotResponse(message: string): string {
  const lowerMsg = message.toLowerCase();
  for (const item of chatPatterns) {
    if (item.patterns.some(p => lowerMsg.includes(p))) {
      return item.response;
    }
  }
  return defaultResponse;
}
