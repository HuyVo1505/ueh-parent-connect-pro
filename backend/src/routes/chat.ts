import { Router, Request, Response } from 'express';
import { getBotResponse } from '../data/chatResponses';
import { ChatRequest, ChatResponse, ApiResponse } from '../types';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// POST /api/chat – Gửi tin nhắn tới AI chatbot
router.post('/', authenticateToken, (req: Request, res: Response): void => {
  const { message } = req.body as ChatRequest;

  if (!message || message.trim().length === 0) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Nội dung tin nhắn không được để trống.',
    };
    res.status(400).json(response);
    return;
  }

  if (message.trim().length > 500) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Tin nhắn không được vượt quá 500 ký tự.',
    };
    res.status(400).json(response);
    return;
  }

  // Simulate processing delay
  const botMessage = getBotResponse(message);
  const chatResponse: ChatResponse = {
    message: botMessage,
    timestamp: new Date().toISOString(),
  };

  const response: ApiResponse<ChatResponse> = {
    success: true,
    data: chatResponse,
  };
  res.status(200).json(response);
});

export default router;
