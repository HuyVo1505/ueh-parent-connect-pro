export interface Advisor {
  name: string;
  phone: string;
  email: string;
}

export interface AttendanceInfo {
  status: 'green' | 'yellow' | 'red';
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

export interface LoginRequest {
  studentCode: string;
}

export interface LoginResponse {
  token: string;
  student: Student;
}

export interface ChatRequest {
  message: string;
  studentCode: string;
}

export interface ChatResponse {
  message: string;
  timestamp: string;
}

export interface JwtPayload {
  studentCode: string;
  iat?: number;
  exp?: number;
}
