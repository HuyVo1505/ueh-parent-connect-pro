import React from 'react';
import { useAuth } from '../../context/AuthContext';

export interface ArticleItem {
  id: number;
  category: string;
  icon: string;
  bgGradient: string;
  title: string;
  preview: string;
  author: string;
  content: string;
}

export const parentingArticles: ArticleItem[] = [
  {
    id: 0,
    category: 'Tâm lý học đường',
    icon: '😰',
    bgGradient: 'from-blue-100 to-indigo-100',
    title: 'Hội chứng "Cú sốc đại học" – Tại sao con tôi bỗng thu mình lại?',
    preview: '70% tân sinh viên trải qua giai đoạn bỡ ngỡ, cô đơn trong những tháng đầu. Đây là phản ứng tâm lý bình thường khi môi trường sống và học tập thay đổi hoàn toàn...',
    author: 'ThS. Tâm lý Nguyễn Lan Phương – Trung tâm Hỗ trợ Sinh viên UEH',
    content: `Nhiều phụ huynh chia sẻ rằng con họ – vốn là học sinh sôi nổi, tự tin ở cấp 3 – bỗng trở nên trầm lặng, ít gọi điện về nhà sau khi vào đại học. Đây không phải là sự xa cách tình cảm, mà là biểu hiện điển hình của **"cú sốc chuyển tiếp môi trường"**.\n\n### Nguyên nhân từ đâu?\nỞ bậc phổ thông, mọi lịch trình từ giờ học, bài tập đến bữa ăn đều có gia đình và nhà trường đôn đốc. Bước vào đại học, sinh viên phải đối mặt với:\n• Tự chịu trách nhiệm 100% về thời gian và học tập.\n• Xung quanh toàn là những cá nhân xuất sắc từ các tỉnh thành khác.\n• Cảm giác cô đơn nơi phòng trọ và môi trường mới.\n\n### Phụ huynh nên đồng hành thế nào?\n1. **Tránh tra vấn điểm số:** Thay vì hỏi "Hôm nay kiểm tra được mấy điểm?", hãy hỏi "Hôm nay trường có gì vui không con?".\n2. **Công nhận nỗ lực:** Hãy để con hiểu rằng gia đình luôn là bến đỗ an toàn, con không cần phải hoàn hảo để được yêu thương.\n3. **Khuyến khích con tham gia CLB:** Đây là cách nhanh nhất để vượt qua giai đoạn cô đơn ban đầu.`,
  },
  {
    id: 1,
    category: 'Kỹ năng tự lập',
    icon: '💔',
    bgGradient: 'from-pink-100 to-rose-100',
    title: 'Buông tay đúng lúc – Nghệ thuật yêu thương không kiểm soát',
    preview: 'Nghiên cứu cho thấy sinh viên được trao quyền tự quyết cao hơn có kết quả học tập tốt hơn 40% so với nhóm bị kiểm soát chi li...',
    author: 'TS. Giáo dục Phạm Minh Khoa – Khoa Tâm lý ứng dụng',
    content: `Yêu thương không đồng nghĩa với việc quản lý từng giờ con ngủ, từng tiết con đến giảng đường. Sinh viên đại học là người đã trưởng thành về mặt pháp lý và nhận thức.\n\n### Giám sát chi li mang lại rủi ro gì?\n• Khiến con hình thành tâm lý phụ thuộc, không biết tự giải quyết khó khăn.\n• Dẫn đến hành vi che giấu, nói dối để tránh xung đột.\n• Tạo áp lực vô hình làm giảm động lực nội tại của con.\n\n### Nguyên tắc 3 KHÔNG của phụ huynh hiện đại:\n• **Không** gọi điện liên tục trong giờ học.\n• **Không** can thiệp vào việc chọn môn học hay chọn bạn bè của con.\n• **Không** so sánh con với "con nhà người ta".\n\nHãy trao quyền để con được sai lầm trong phạm vi an toàn, bởi thất bại ở giảng đường chính là bài học rẻ nhất trong cuộc đời.`,
  },
  {
    id: 2,
    category: 'Giao tiếp gia đình',
    icon: '💬',
    bgGradient: 'from-emerald-100 to-teal-100',
    title: 'Làm thế nào để con chủ động chia sẻ chứ không "báo cáo"?',
    preview: 'Sự khác biệt giữa câu hỏi "Con học có điểm không?" và "Dạo này con thích môn nào nhất?" tạo ra hai kiểu kết nối hoàn toàn khác nhau...',
    author: 'ThS. Lê Thị Thanh Hà – Chuyên gia tư vấn gia đình',
    content: `Rất nhiều sinh viên tâm sự: "Mỗi lần ba mẹ gọi điện chỉ hỏi con ăn cơm chưa, học hành thế nào, tiền tiêu hết chưa. Con cảm thấy như đang làm bản báo cáo định kỳ".\n\n### Bí quyết tạo dựng cuộc trò chuyện cởi mở:\n• **Hỏi về cảm xúc thay vì kết quả:** "Dạo này con có bị áp lực nhiều không?", "Bạn bè cùng phòng thế nào rồi con?"\n• **Lắng nghe tích cực:** Khi con tâm sự về một khó khăn, đừng vội đưa ra lời khuyên hay trách móc "Ai bảo hồi đó không nghe lời ba mẹ". Hãy lắng nghe trọn vẹn và hỏi: "Con dự định xử lý việc này thế nào, ba mẹ có thể hỗ trợ gì không?".\n• **Tôn trọng không gian riêng:** Hãy thỏa thuận một khung giờ gọi điện cố định (ví dụ tối Chủ Nhật) thay vì gọi bất chợt làm ngắt quãng lịch học nhóm của con.`,
  },
  {
    id: 3,
    category: 'Sức khỏe tinh thần',
    icon: '😴',
    bgGradient: 'from-amber-100 to-yellow-100',
    title: 'Khi con học "không vào" – Dấu hiệu kiệt sức và cách hỗ trợ',
    preview: 'Áp lực học thuật, thi cử tín chỉ dồn dập cùng kỳ vọng gia đình là nguyên nhân hàng đầu gây ra kiệt sức (burnout) ở sinh viên...',
    author: 'BS. Trần Quốc Bảo – Chuyên gia sức khỏe tâm thần',
    content: `Burnout (hội chứng kiệt sức) đang ngày càng phổ biến trong môi trường đại học hiện đại. Sinh viên bị quá tải bởi đồ án nhóm, chứng chỉ ngoại ngữ và nỗi lo việc làm sau tốt nghiệp.\n\n### Dấu hiệu con đang bị quá tải:\n• Mất ngủ triền miên hoặc ngủ li bì không muốn dậy.\n• Hay cáu gắt vô cớ, thu mình lại, tắt thông báo mạng xã hội.\n• Than phiền về đau đầu, đau dạ dày không rõ nguyên nhân y tế.\n\n### Hỗ trợ kịp thời:\n• Hãy khuyên con tạm dừng lại một nhịp, cho phép bản thân nghỉ ngơi 1-2 ngày.\n• Khuyến khích con liên hệ **Trung tâm Hỗ trợ Sinh viên & Tư vấn Tâm lý UEH** (hoàn toàn miễn phí và bảo mật).\n• Giảm bớt kỳ vọng về tấm bằng Giỏi/Xuất sắc nếu sức khỏe của con không cho phép.`,
  },
  {
    id: 4,
    category: 'Phát triển bản thân',
    icon: '🎉',
    bgGradient: 'from-purple-100 to-violet-100',
    title: 'Hoạt động ngoại khóa không phải "phí thời gian" – Khoa học chứng minh',
    preview: 'Sinh viên tham gia CLB, tình nguyện và nghiên cứu khoa học có tỷ lệ tuyển dụng sau tốt nghiệp cao gấp 2.3 lần so với bạn bè...',
    author: 'PGS.TS. Nguyễn Thị Mai – Viện Nghiên cứu Giáo dục',
    content: `Nhiều phụ huynh lo lắng khi thấy con đi sớm về khuya để tổ chức sự kiện CLB, tham gia hoạt động tình nguyện mà "không lo tập trung học chữ".\n\n### Thực tế các nhà tuyển dụng tìm kiếm điều gì?\nTheo khảo sát từ các tập đoàn lớn đối tác của UEH, kiến thức học thuật chỉ chiếm 30% tiêu chí tuyển dụng. 70% còn lại là:\n• Kỹ năng làm việc nhóm và giải quyết mâu thuẫn.\n• Khả năng chịu áp lực và thích ứng linh hoạt.\n• Kỹ năng giao tiếp và lãnh đạo.\n\nNhững kỹ năng này chỉ có thể được tôi luyện thông qua các hoạt động thực tế tại Câu lạc bộ và các dự án ngoại khóa. Hãy tự hào và ủng hộ con khi thấy con năng nổ cống hiến cho tập thể.`,
  },
  {
    id: 5,
    category: 'Tài chính cá nhân',
    icon: '💰',
    bgGradient: 'from-emerald-100 to-green-100',
    title: 'Dạy con quản lý tiền bạc – Bài học không có trong giáo trình',
    preview: '82% sinh viên năm nhất chưa biết lập ngân sách cá nhân. Phụ huynh có thể đồng hành dạy kỹ năng tài chính mà không cần kiểm soát chi tiêu...',
    author: 'ThS. Tài chính Hoàng Minh Tú – Khoa Tài chính Công UEH',
    content: `Rời xa vòng tay gia đình là lần đầu tiên con phải tự quyết định việc chi tiêu từ tiền ăn, tiền trọ đến mua sắm cá nhân.\n\n### Phương pháp quản lý 50/30/20 cho sinh viên:\n• **50%:** Nhu cầu thiết yếu (tiền trọ, ăn uống cơ bản, xăng xe, giáo trình).\n• **30%:** Nhu cầu cá nhân (giao lưu bạn bè, café học nhóm, giải trí).\n• **20%:** Tiết kiệm khẩn cấp (dành cho khi ốm đau, hỏng xe).\n\n### Lời khuyên cho cha mẹ:\n• Chuyển tiền sinh hoạt theo tháng thay vì theo tuần để con học cách hoạch định dài hạn.\n• Nếu con lỡ tiêu lạm vào quỹ, hãy cùng con phân tích nguyên nhân thay vì chỉ trích gay gắt. Trải nghiệm thiếu hụt tài chính ngắn hạn sẽ giúp con quý trọng đồng tiền hơn.`,
  },
];

interface TabUniversityLifeProps {
  onOpenArticle: (article: ArticleItem) => void;
}

export const TabUniversityLife: React.FC<TabUniversityLifeProps> = ({ onOpenArticle }) => {
  const { student } = useAuth();

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <div className="text-xs font-bold text-ueh-primary uppercase tracking-widest mb-1">
          NHÓM TÍNH NĂNG 03
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Thấu Hiểu Môi Trường Đại Học
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Giúp phụ huynh hiểu rõ hành trình 4 năm, cẩm nang tâm lý và cơ hội phát triển toàn diện của sinh viên UEH.
        </p>
      </div>

      {/* 1. Lộ Trình 4 Năm */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>🗺️</span>
            <span>Bản Lộ Trình 4 Năm Đại Học Của Sinh Viên</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Bức tranh toàn cảnh về những cột mốc phát triển theo từng giai đoạn học tập tại UEH.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/40 space-y-6 sm:space-y-8 my-4">
          {/* Năm 1 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-ueh-primary text-white font-black text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
              1
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              🌱 Năm 1 – Khám Phá & Hội Nhập (Học kỳ 1 – Học kỳ 2)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-2">
              Hoàn thành các môn đại cương nền tảng, rèn luyện kỹ năng tiếng Anh và thích nghi với phương pháp tự học ở đại học.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Môn đại cương', 'Tiếng Anh chuẩn đầu ra', 'Làm quen CLB/Đội/Nhóm', 'Kỹ năng làm việc nhóm', 'Phương pháp nghiên cứu'].map((tag) => (
                <span key={tag} className="bg-teal-50 text-teal-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-teal-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Năm 2 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
              2
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              📚 Năm 2 – Tích Lũy Kiến Thức Chuyên Ngành (Học kỳ 3 – Học kỳ 4)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-2">
              Bắt đầu học các môn cơ sở ngành cốt lõi, tham gia đề tài Nghiên cứu khoa học sinh viên (UEH500) và mở rộng quan hệ bạn bè.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Môn cơ sở ngành', 'Nghiên cứu khoa học sinh viên', 'Chứng chỉ quốc tế', 'Dự án thực tế môn học', 'Học bổng khuyến khích'].map((tag) => (
                <span key={tag} className="bg-cyan-50 text-cyan-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-cyan-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Năm 3 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
              3
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              🚀 Năm 3 – Thực Chiến & Trải Nghiệm Doanh Nghiệp (Học kỳ 5 – Học kỳ 6)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-2">
              Học chuyên sâu, tham gia các kỳ thực tập part-time hoặc chương trình trao đổi sinh viên quốc tế (Exchange Program).
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Môn chuyên ngành hẹp', 'Thực tập trải nghiệm', 'Cọ xát cuộc thi học thuật', 'Kết nối doanh nghiệp đối tác', 'Trao đổi quốc tế'].map((tag) => (
                <span key={tag} className="bg-amber-50 text-amber-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Năm 4 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-rose-600 text-white font-black text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
              4
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              🎓 Năm 4 – Hoàn Thiện & Cất Cánh Nghề Nghiệp (Học kỳ 7 – Học kỳ 8)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-2">
              Thực tập tốt nghiệp toàn thời gian, hoàn thành Khóa luận / Đề án tốt nghiệp và ứng tuyển chính thức vào các doanh nghiệp.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Thực tập tốt nghiệp', 'Khóa luận tốt nghiệp', 'Chuẩn bị hồ sơ CV', 'Phỏng vấn tuyển dụng', 'Lễ tốt nghiệp & Mạng lưới cựu sinh viên'].map((tag) => (
                <span key={tag} className="bg-rose-50 text-rose-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-rose-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {student && (
          <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3.5 flex items-center gap-3">
            <span className="text-xl">📍</span>
            <div className="text-xs sm:text-sm text-teal-900">
              <strong>Vị trí của con hiện tại:</strong> {student.yearStatus}
            </div>
          </div>
        )}
      </div>

      {/* 2. Cẩm Nang Làm Cha Mẹ Sinh Viên */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>📖</span>
            <span>Cẩm Nang Làm Cha Mẹ Sinh Viên (Chuyên Gia Tâm Lý Học Đường)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Những bài viết ngắn từ các chuyên gia tâm lý và giáo dục, giúp cha mẹ thấu hiểu tâm tư và áp lực của con khi bước vào môi trường mới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {parentingArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className={`h-24 bg-gradient-to-br ${article.bgGradient} flex items-center justify-center text-4xl`}>
                  {article.icon}
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold text-ueh-primary uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    {article.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {article.preview}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-2 mb-2 line-clamp-1 italic">
                  ✍️ {article.author}
                </div>
                <button
                  onClick={() => onOpenArticle(article)}
                  className="w-full text-center text-xs font-bold text-ueh-primary hover:text-ueh-dark py-1.5 bg-teal-50 hover:bg-teal-100 rounded-lg transition"
                >
                  Đọc toàn bộ bài viết →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Hoạt Động Ngoại Khóa & Cơ Hội Nghề Nghiệp */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>🌟</span>
            <span>Hoạt Động Ngoại Khóa & Cơ Hội Nghề Nghiệp</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Cơ hội để sinh viên phát triển kỹ năng mềm, mở rộng mối quan hệ và kiến tạo tương lai sự nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-1.5 bg-white rounded-lg shadow-2xs">🏆</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Hệ Thống 50+ Câu Lạc Bộ / Đội / Nhóm
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Môi trường lý tưởng để sinh viên trau dồi khả năng lãnh đạo, kỹ năng tổ chức sự kiện và giao tiếp xã hội.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['CLB Tiếng Anh (BELL)', 'CLB Nghiên cứu Kinh tế Trẻ (YoRE)', 'CLB Khởi nghiệp (Dynamic)', 'Đội Công tác Xã hội', 'CLB Âm nhạc'].map((item) => (
                <span key={item} className="bg-white text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-1.5 bg-white rounded-lg shadow-2xs">💼</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Mạng Lưới Đối Tác & Ngày Hội Việc Làm
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              UEH hợp tác chiến lược với hơn 500 doanh nghiệp hàng đầu trong và ngoài nước, tổ chức định kỳ Ngày hội nghề nghiệp.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Big4 Kiểm toán', 'Khối Ngân hàng thương mại', 'Tập đoàn Đa quốc gia (FMCG)', 'Công ty Công nghệ & Fintech', 'Doanh nghiệp Logistics'].map((item) => (
                <span key={item} className="bg-white text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-1.5 bg-white rounded-lg shadow-2xs">🌏</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Chương Trình Trao Đổi Sinh Viên Quốc Tế
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cơ hội học tập chuyển tiếp 1-2 học kỳ tại các trường đại học đối tác ở châu Âu, Úc, Mỹ, Singapore và Nhật Bản.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Học bổng Erasmus+', 'Giao lưu văn hóa mùa hè', 'Công nhận tín chỉ tương đương', 'Nâng cao trình độ ngoại ngữ'].map((item) => (
                <span key={item} className="bg-white text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-1.5 bg-white rounded-lg shadow-2xs">🚀</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Ươm Tạo Khởi Nghiệp Đổi Mới Sáng Tạo
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Viện Đổi mới Sáng tạo (UII) hỗ trợ vốn mồi, không gian làm việc chung và chuyên gia cố vấn cho các dự án khởi nghiệp tiềm năng của sinh viên.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Vườn ươm UII', 'Cuộc thi UEH BizTech', 'Kết nối quỹ đầu tư mạo hiểm', 'Cấp bằng sáng chế sinh viên'].map((item) => (
                <span key={item} className="bg-white text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
