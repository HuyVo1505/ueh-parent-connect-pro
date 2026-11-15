import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { studentsData } from '../data/students';
import { LoginRequest, LoginResponse, ApiResponse } from '../types';

const router = Router();

// POST /api/auth/login
router.post('/login', (req: Request, res: Response): void => {
  const { studentCode } = req.body as LoginRequest;

  if (!studentCode) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Vui lòng nhập mã số sinh viên.',
    };
    res.status(400).json(response);
    return;
  }

  const normalizedCode = studentCode.trim().toUpperCase();
  const student = studentsData[normalizedCode];

  if (!student) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Mã số sinh viên không tồn tại trong hệ thống.',
    };
    res.status(401).json(response);
    return;
  }

  const secret = process.env.JWT_SECRET || 'ueh_parent_connect_secret';
  const token = jwt.sign(
    { studentCode: normalizedCode },
    secret,
    { expiresIn: '8h' }
  );

  const response: ApiResponse<LoginResponse> = {
    success: true,
    data: { token, student },
    message: `Đăng nhập thành công. Chào mừng phụ huynh của ${student.name}!`,
  };
  res.status(200).json(response);
});

// POST /api/auth/logout
router.post('/logout', (_req: Request, res: Response): void => {
  const response: ApiResponse<null> = {
    success: true,
    message: 'Đã đăng xuất thành công.',
  };
  res.status(200).json(response);
});

export default router;
