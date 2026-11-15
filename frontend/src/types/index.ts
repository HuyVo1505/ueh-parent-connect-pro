// ─── Shared Types (mirrors backend/src/types/index.ts) ───────────────────────

export interface Advisor {
  name: string;
  phone: string;
  email: string;
}

export type AttendanceStatus = 'green' | 'yellow' | 'red';

export interface AttendanceInfo {
  status: AttendanceStatus;
  label: string;
  description: string;
}

export interface AcademicInfo {
  creditsDone: number;
  creditsTotal: number;
  subjectsNow: number;
  gpa: number;
  rank: string;
  rankIcon: string;
  rankDescription: string;
}

export interface InsuranceInfo {
  period: string;
  valid: boolean;
}

export interface FinanceInfo {
  tuitionAmount: string;
  tuitionPaid: boolean;
  insurance: InsuranceInfo;
  scholarship: string | null;
}

export interface Student {
  id: string;
  code: string;
  name: string;
  avatar: string;
  major: string;
  cohort: string;
  advisor: Advisor;
  semesterCurrent: number;
  semesterTotal: number;
  semesterLabel: string;
  attendance: AttendanceInfo;
  academic: AcademicInfo;
  finance: FinanceInfo;
  yearStatus: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface LoginResponse {
  token: string;
  student: Student;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ChatApiResponse {
  message: string;
  timestamp: string;
}

// ─── UI State Types ────────────────────────────────────────────────────────────

export type TabId = 0 | 1 | 2;

export interface Tab {
  id: TabId;
  label: string;
  icon: string;
}
