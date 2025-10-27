import { Router } from 'express';
import {
  getNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

// створюємо групу маршрутів
// Перший маршрут - отримуємо всі нотатки
router.get('/notes', getNotes);

// Другий маршрут - отримуємо нотатку за ID
router.get('/notes/:noteId', getNoteById);

// Третій маршрут - створення нотатки
router.post('/notes', createNote);

//  Четвертий маршрут - видалення нотатки
router.delete('/notes/:noteId', deleteNote);

//  П'ятий маршрут - оновлення нотатки
router.patch('/notes/:noteId', updateNote);

export default router;
