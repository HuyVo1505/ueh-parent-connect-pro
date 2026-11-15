import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import studentRoutes from './routes/students';
import chatRoutes from './routes/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger (development)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toLocaleTimeString('vi-VN')}] ${req.method} ${req.path}`);
    next();
  });
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/chat', chatRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'UEH Parent Connect API is running 🎓',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint không tồn tại.',
  });
});

// Global error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[Error]', err.message);
  res.status(500).json({
    success: false,
    error: 'Lỗi máy chủ nội bộ. Vui lòng thử lại sau.',
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 UEH Parent Connect Backend`);
  console.log(`   Running at: http://localhost:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   CORS Origin: ${CORS_ORIGIN}\n`);
});

export default app;
