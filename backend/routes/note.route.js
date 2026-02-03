import express from "express"
import { createNote, deleteNote, getNotes, updateNote } from '../controllers/note.controller.js';

const router = express.Router();

// api endpoints for note app
router.post("/create-note", createNote);
router.get("/get-notes", getNotes);
router.put("/update-note/:id", updateNote);
router.delete("/delete-note/:id", deleteNote)


export default router;