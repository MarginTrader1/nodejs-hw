import { Note } from "../models/note.js";

import createHttpError from 'http-errors';

// Контроллер для отримання списку усіх нотаток
export const getNotes = async (req, res) => {

  const notes = await Note.find();
  res.status(200).json(notes);
};

// Контроллер для отримання однієї нотатки за ID
export const getNoteById = async (req, res, next) => {

  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {

    next(createHttpError(404, `Note with ${noteId} not found`));
    return;
  }

  res.status(200).json(note);
};

// Контролер для створення нотатки
export const createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.status(201).json(note);


};

// Контроллер для видалення нотатки за ID
export const deleteNote = async (req, res, next) => {

  const { noteId } = req.params;
  const note = await Note.findOneAndDelete({
    _id: noteId,});

  if (!note) {
    next(createHttpError(404, `Note with ${noteId} not found`));
    return;
  }

  res.status(200).json(note);
};

// Контроллер для видалення нотатки за ID
export const updateNote = async (req, res, next) => {

  const { noteId } = req.params;
  const note = await Note.findOneAndUpdate({
    _id: noteId,
  },
  req.body,
  { new: true }, // повертаємо оновлений документ

);

  if (!note) {
    next(createHttpError(404, `Note with ${noteId} not found`));
    return;
  }

  res.status(200).json(note);
};