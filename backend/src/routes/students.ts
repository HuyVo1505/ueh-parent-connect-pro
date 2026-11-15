import { Router, Response } from 'express';
import { studentsData } from '../data/students';
import { ApiResponse, Student } from '../types';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /api/students/me – Lấy thông tin sinh viên từ token
router.get('/me', authenticateToken, (req: AuthRequest, res: Response): void => {
  const studentCode = req.studentCode;

  if (!studentCode) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Không tìm thấy thông tin xác thực.',
    };
    res.status(401).json(response);
    return;
  }

  const student = studentsData[studentCode];
  if (!student) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Sinh viên không tồn tại.',
    };
    res.status(404).json(response);
    return;
  }

  const response: ApiResponse<Student> = {
    success: true,
    data: student,
  };
  res.status(200).json(response);
});

export default router;
