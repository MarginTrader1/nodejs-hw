import { Router } from 'express';
import { getNotes, getNoteById } from '../controllers/notesController.js';

const router = Router();

// створюємо групу маршрутів
// Перший маршрут - отримуємо всі нотатки
router.get('/notes', getNotes);

// Другий маршрут - отримуємо нотатку за ID
router.get('/notes/:noteId', getNoteById);

export default router;