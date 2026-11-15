import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { chatApi } from '../../services/api';
import { ChatMessage } from '../../types';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const { student } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'bot',
      content: `👋 Xin chào quý phụ huynh! Tôi là **AI Trợ Lý UEH Parent Connect**.\n\nTôi có thể giải đáp nhanh mọi thắc mắc về:\n• Quy chế học vụ, chuyên cần & cấm thi\n• Chính sách học phí, thời hạn thanh toán\n• Học bổng & cơ hội việc làm\n• Kênh hỗ trợ tâm lý và kết nối CVHT\n\nQuý phụ huynh hãy chọn câu hỏi nhanh bên dưới hoặc nhập trực tiếp câu hỏi nhé!`,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const quickChips = [
    'Học phí đóng ở đâu?',
    'Vắng học bao nhiêu bị cấm thi?',
    'Học bổng có những loại gì?',
    'Liên hệ CVHT thế nào?',
    'Hỗ trợ tâm lý cho con',
  ];

  // Local fallback response helper
  const getFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('học phí') || q.includes('đóng tiền') || q.includes('thanh toán')) {
      return `📋 **Học phí tại UEH:**\n\nHọc phí được thông báo và đóng vào đầu mỗi học kỳ qua:\n• Cổng thanh toán trực tuyến: **my.ueh.edu.vn**\n• Chuyển khoản ngân hàng theo hướng dẫn của Phòng KHTC\n• Trực tiếp tại Phòng KHTC (Cơ sở A: 59C Nguyễn Đình Chiểu, Q.3)\n📞 Hotline Tài chính: **028 3829 4617**`;
    }
    if (q.includes('vắng') || q.includes('chuyên cần') || q.includes('điểm danh')) {
      return `📌 **Quy chế chuyên cần UEH:**\n\n• 🟢 **Vắng < 10%:** An toàn tuyệt đối, duy trì tốt.\n• 🟡 **Vắng 10% - 19%:** Mức nhắc nhở nhẹ để sinh viên tự cân đối lịch học.\n• 🔴 **Vắng ≥ 20%:** **Bị cấm thi** học phần đó theo Quy chế đào tạo.\n\n⚠️ Lưu ý: Giảng viên điểm danh tự động, vắng dù có phép hay không đều tính vào tổng tỷ lệ tiết.`;
    }
    if (q.includes('cấm thi')) {
      return `🚨 **Quy chế cấm thi:**\n\nKhi sinh viên vắng từ 20% số tiết trở lên của một học phần, hệ thống tự động khóa quyền dự thi kết thúc học phần đó.\n• Điểm học phần: 0 điểm\n• Sinh viên buộc phải đăng ký học lại trong các kỳ tiếp theo\n💡 Nếu thấy cột chuyên cần chuyển màu ĐỎ, phụ huynh nên nhắc con liên hệ ngay CVHT để được hướng dẫn!`;
    }
    if (q.includes('học bổng') || q.includes('hỗ trợ')) {
      return `🏆 **Các chương trình học bổng tại UEH:**\n\n1. **Học bổng Khuyến khích học tập:** Xét theo kỳ dựa trên kết quả GPA & Điểm rèn luyện (Mức Xuất sắc: 100% HP, Giỏi: 80% HP, Khá: 50% HP).\n2. **Học bổng Doanh nghiệp đối tác:** 500+ doanh nghiệp tài trợ hàng năm.\n3. **Học bổng Hỗ trợ sinh viên khó khăn / Vượt khó vươn lên.**\n📍 Chi tiết nộp hồ sơ tại Phòng CTSV.`;
    }
    if (q.includes('cvht') || q.includes('cố vấn')) {
      return `👨‍🏫 **Cố vấn học tập (CVHT):**\n\nCVHT là giảng viên trực tiếp phụ trách lớp sinh viên. Thầy/Cô có nhiệm vụ tư vấn lộ trình học, giải quyết khó khăn học vụ và định hướng nghề nghiệp.\n\nThông tin CVHT của sinh viên được hiển thị ngay tại mục **"Chăm sóc phụ huynh"** hoặc phần đầu trang này.`;
    }
    if (q.includes('tâm lý') || q.includes('căng thẳng') || q.includes('áp lực')) {
      return `💚 **Hỗ trợ tâm lý sinh viên UEH:**\n\nNhà trường có **Phòng Tư vấn Tâm lý Học đường** với đội ngũ chuyên gia giàu kinh nghiệm:\n• Tư vấn 1-1 hoàn toàn miễn phí và bảo mật thông tin.\n• Hotline hỗ trợ 24/7: **1800 1234**\n• Đăng ký lịch hẹn qua app UEH Student hoặc email: **ctsv@ueh.edu.vn**`;
    }
    return `Cảm ơn câu hỏi của quý phụ huynh! 😊\n\nHệ thống đã ghi nhận câu hỏi. Để nhận được tư vấn chi tiết và chính xác nhất từ cán bộ phụ trách, phụ huynh có thể liên hệ:\n• Phòng Đào tạo: **028 3829 4617**\n• Phòng Công tác Sinh viên: **028 3829 4111**\n• Hoặc bấm nút **"Gửi yêu cầu hỗ trợ"** tại mục Chăm sóc phụ huynh nhé!`;
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      content: query,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const studentCode = student?.code || '31261025001';
      // Attempt API call to backend
      const res = await chatApi.sendMessage(query, studentCode);
      const botMessage: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'bot',
        content: res.message,
        timestamp: new Date(res.timestamp),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      // Fallback response with realistic delay
      setTimeout(() => {
        const fallbackText = getFallbackResponse(query);
        const botMessage: ChatMessage = {
          id: String(Date.now() + 1),
          role: 'bot',
          content: fallbackText,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 700);
      return;
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onToggle}
          className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-full shadow-chat flex items-center gap-2.5 transition transform hover:scale-105 active:scale-95"
          aria-label="Mở khung chat AI phụ huynh"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hỏi đáp AI Phụ huynh</span>
        </button>
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[94vw] sm:w-[410px] h-[550px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white text-orange-600 flex items-center justify-center text-lg font-bold shadow-xs">
                🤖
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">AI Trợ Lý UEH Parent Connect</h4>
                <div className="text-[11px] text-amber-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>Sẵn sàng hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="w-7 h-7 rounded-full bg-black/15 hover:bg-black/25 flex items-center justify-center text-white text-xs font-bold transition"
              aria-label="Đóng chat"
            >
              ✕
            </button>
          </div>

          {/* Messages body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/70 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-2xs whitespace-pre-line leading-relaxed ${
                      isUser
                        ? 'bg-ueh-primary text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200/70 rounded-bl-xs'
                    }`}
                  >
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-start">
                <div className="bg-white border border-slate-200/70 rounded-2xl rounded-bl-xs px-4 py-3 shadow-2xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick chips */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="text-[11px] font-semibold bg-teal-50 hover:bg-teal-100 text-ueh-dark border border-teal-200 px-3 py-1 rounded-full transition shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập thắc mắc của phụ huynh..."
              className="flex-1 text-xs sm:text-sm px-4 py-2.5 bg-slate-100 border border-transparent rounded-full focus:bg-white focus:outline-none focus:border-ueh-primary focus:ring-1 focus:ring-ueh-primary"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-ueh-primary hover:bg-ueh-dark disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition"
              aria-label="Gửi tin nhắn"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};
