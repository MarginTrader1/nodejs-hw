// src/server.js
import express from 'express';
import cors from 'cors';

import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';

import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import { timeLogger } from './middleware/timeLogger.js';

//імпортуємо групу маршрутів
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger); // инфо про запити - має стояти першим
app.use(express.json()); // Middleware для парсингу JSON
app.use(cors()); // Middleware, яка дозволяє запити з будь-яких джерел
app.use(timeLogger); // Middleware для логування часу

// Група маршрутів для нотаток
app.use(notesRoutes);

// Маршрут для тестування middleware помилки
app.get('/test-error', () => {
  // Штучна помилка для прикладу
  throw new Error('Simulated server error');
});

// Middleware для несуществующих маршрутов (після всіх маршрутів)
app.use(notFoundHandler);

// Middleware для обробки помилок
app.use(errorHandler);

// підключення до MongoDB
await connectMongoDB();

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
