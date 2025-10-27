import { Note } from "../models/note.js";

// Контроллер для отримання списку усіх нотаток
export const getNotes = async (req, res) => {

  const notes = await Note.find();
  res.status(200).json(notes);
};

// Контроллер для отримання однієї нотатки за ID
export const getNoteById = async (req, res) => {

  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.status(200).json(note);
};
