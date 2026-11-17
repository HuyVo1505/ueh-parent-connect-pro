# 🎓 UEH PARENT CONNECT – Fullstack Production Edition

> **Khẩu hiệu:** *"Đồng hành định hướng, không giám sát chi li"*  
> Cổng thông tin kết nối phụ huynh và sinh viên Đại học Kinh tế TP. Hồ Chí Minh (UEH).

---

## 🌟 1. Giới thiệu & Triết lý thiết kế

**UEH Parent Connect** được xây dựng nhằm giải quyết bài toán giao tiếp giữa gia đình và nhà trường ở bậc đại học:
- **Tôn trọng sự tự chủ:** Không công khai lịch sử điểm danh chi tiết từng tiết hay điểm kiểm tra nhỏ nhằm giúp sinh viên tự rèn luyện tính độc lập.
- **Cảnh báo sớm trực quan:** Sử dụng hệ thống 3 màu (Xanh - Vàng - Đỏ) để phụ huynh biết được nhịp độ học tập mà không cần can thiệp quá sâu.
- **Hỗ trợ toàn diện 24/7:** Tích hợp AI Chatbot giải đáp quy chế và cổng liên lạc khẩn cấp đến Cố vấn học tập (CVHT), Phòng Đào Tạo và Phòng Công tác Sinh viên (CTSV).

---

## 🛠️ 2. Kiến trúc & Công nghệ (Tech Stack)

Dự án được tái cấu trúc theo mô hình **Monorepo chuẩn Enterprise**:

```
ueh-parent-connect-pro/
├── backend/                      # Node.js + Express + TypeScript Backend API
│   ├── src/
│   │   ├── data/                 # CSDL mẫu (5 sinh viên & tri thức chatbot)
│   │   ├── middleware/           # JWT Authentication & Authorization
│   │   ├── routes/               # API endpoints (/auth, /students, /chat)
│   │   ├── types/                # TypeScript Interface dùng chung
│   │   └── index.ts              # Entry point máy chủ Express
│   ├── .env                      # Biến môi trường backend
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                     # React 18 + TypeScript + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/           # Components UI (Header, Notice, Tabs, Modals)
│   │   │   ├── chat/             # AI Chatbot Widget tương tác thời gian thực
│   │   │   ├── modals/           # Modal đọc bài viết tâm lý & Form liên hệ
│   │   │   └── tabs/             # 3 Nhóm tính năng chính
│   │   ├── context/              # React Context (Auth State & Persistence)
│   │   ├── services/             # Axios API Client
│   │   ├── types/                # Frontend Types
│   │   ├── App.tsx               # Root component
│   │   └── main.tsx              # Mount DOM
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
└── package.json                  # Root workspace config
```

### Chi tiết các công nghệ sử dụng:
| Tầng (Layer) | Công nghệ | Mục đích |
|---|---|---|
| **Frontend UI** | **React 18 + Vite** | Hiệu năng cao, tải trang siêu nhanh, SPA hiện đại |
| **Styling** | **Tailwind CSS 3** | Thiết kế giao diện phẳng, chuẩn responsive trên Mobile & Desktop |
| **Language** | **TypeScript 5** | Strict type safety, hạn chế tối đa lỗi runtime |
| **Backend API** | **Node.js + Express (TS)** | RESTful API, kiến trúc Module hóa dễ mở rộng |
| **Xác thực** | **JWT (JSON Web Token)** | Xác thực phiên đăng nhập an toàn, chuẩn stateless |
| **HTTP Client** | **Axios** | Xử lý request, tự động đính kèm Bearer token |

---

## 📡 3. Danh sách RESTful API Endpoints

### 🔐 Xác thực (Authentication)
- `POST /api/auth/login`: Đăng nhập bằng mã số sinh viên (trả về JWT token + thông tin SV).
- `POST /api/auth/logout`: Đăng xuất và vô hiệu hóa phiên.

### 👤 Thông tin sinh viên (Student Profile)
- `GET /api/students/me`: Lấy dữ liệu tổng quan của sinh viên hiện tại (Yêu cầu header `Authorization: Bearer <token>`).

### 🤖 Trợ lý AI (Chatbot Engine)
- `POST /api/chat`: Gửi câu hỏi và nhận câu trả lời phân tích từ tri thức học vụ UEH.

### 🏥 Kiểm tra trạng thái máy chủ (Healthcheck)
- `GET /api/health`: Kiểm tra uptime máy chủ và môi trường hoạt động.

---

## 🎓 4. Danh sách sinh viên Khóa K52 chính thức (Dữ liệu lớp học)

Hệ thống đã loại bỏ tài khoản demo và cập nhật trực tiếp toàn bộ danh sách lớp **Khóa K52 (Tân sinh viên)**. Phụ huynh nhập mã số sinh viên 11 chữ số bắt đầu bằng `31261025...` để tra cứu:

| STT | Mã số SV (11 số) | Họ và tên tân sinh viên | Chuyên ngành | Chuyên cần | Học lực | Tình trạng học phí |
|---|---|---|---|---|---|---|
| 1 | **31261025192** | **Trần Chí Bằng** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.42 – Giỏi** | ✓ Đã đóng (HB 50%) |
| 2 | **31261025194** | **Nguyễn Tuệ Bình** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.55 – Giỏi** | ✓ Đã đóng |
| 3 | **31261025200** | **Mai Diệu Châu** | Kế toán Doanh nghiệp | 🟡 **Vàng (Nhắc nhở)** | **2.85 – TB Khá** | ⚠ Chưa đóng |
| 4 | **31261025203** | **Vũ Bảo Hải Châu** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.65 – Xuất sắc** | ✓ Đã đóng (HB 100%) |
| 5 | **31261025207** | **Nguyễn Thị Linh Chi** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.28 – Giỏi** | ✓ Đã đóng |
| 6 | **31261025210** | **Hoàng Ngọc Phi Cường** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.48 – Giỏi** | ✓ Đã đóng (HB K52) |
| 13 | **31261025265** | **Lưu Gia Hân** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.50 – Giỏi** | ✓ Đã đóng (HB K52) |
| 41 | **31261025624** | **Nguyễn Dương Anh Thư** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.68 – Xuất sắc** | ✓ Đã đóng (HB 100%) |
| 48 | **31261025721** | **Trịnh Gia Tuệ** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.58 – Giỏi** | ✓ Đã đóng |
| 54 | **31261025772** | **Nguyễn Tường Vy** | Kế toán Doanh nghiệp | 🟢 **Xanh (An toàn)** | **3.50 – Giỏi** | ✓ Đã đóng |
*(... cùng tất cả 54 sinh viên trong danh sách lớp chính thức Khóa K52 ngành Kế toán Doanh nghiệp).*

---

## 🚀 5. Hướng dẫn chạy dự án trên máy

### Yêu cầu tiên quyết:
- Đã cài đặt **Node.js** (phiên bản 18+ hoặc 20+) và trình quản lý gói `pnpm` hoặc `npm`.

---

### Bước 1: Khởi động Backend (Express API)

Mở một cửa sổ Terminal (PowerShell):
```powershell
cd C:\Users\NC\.gemini\antigravity\scratch\ueh-parent-connect-pro\backend
pnpm install
# hoặc npm install
pnpm dev
# hoặc npm run dev
```
👉 Máy chủ Backend sẽ chạy tại: **http://localhost:5000**

---

### Bước 2: Khởi động Frontend (React + Vite)

Mở một cửa sổ Terminal thứ hai:
```powershell
cd C:\Users\NC\.gemini\antigravity\scratch\ueh-parent-connect-pro\frontend
pnpm install
# hoặc npm install
pnpm dev
# hoặc npm run dev
```
👉 Mở trình duyệt truy cập: **http://localhost:5173**

> 💡 **Tính năng tự động chuyển đổi thông minh (Offline Fallback):**  
> Frontend được trang bị sẵn cơ chế dự phòng dữ liệu mô phỏng. Kể cả khi chưa khởi động Backend, phụ huynh vẫn có thể đăng nhập vào cả 5 tài khoản và trải nghiệm đầy đủ các tính năng tương tác!

---

## 🔮 6. Lộ trình phát triển trong tương lai (Roadmap)

1. **Tích hợp CSDL Production:** Kết nối PostgreSQL / MongoDB thay thế in-memory mock.
2. **LLM GenAI Chatbot:** Tích hợp OpenAI GPT-4 / Google Gemini Live API kết hợp RAG (Retrieval-Augmented Generation) tra cứu sổ tay sinh viên UEH.
3. **Cơ chế xác thực 2 lớp (2FA):** Gửi mã OTP xác thực qua số điện thoại của phụ huynh đã đăng ký trong hồ sơ sinh viên.
4. **Mobile App:** Sử dụng React Native / Flutter xuất bản lên App Store và Google Play.
5. **Thông báo đẩy (Push Notifications):** Báo tự động qua Zalo ZNS / SMS khi trạng thái chuyên cần chuyển sang mức Vàng hoặc Đỏ.
