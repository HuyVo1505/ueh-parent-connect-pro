import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload, ApiResponse } from '../types';

export interface AuthRequest extends Request {
  studentCode?: string;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Không tìm thấy token xác thực. Vui lòng đăng nhập lại.',
    };
    res.status(401).json(response);
    return;
  }

  try {
    const secret = process.env.JWT_SECRET || 'ueh_parent_connect_secret';
    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.studentCode = decoded.studentCode;
    next();
  } catch {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Token không hợp lệ hoặc đã hết hạn.',
    };
    res.status(403).json(response);
  }
};
