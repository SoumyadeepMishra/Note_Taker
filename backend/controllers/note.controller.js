import Note from '../models/note.model.js';

export const createNote = async(req, res) => {
    try {
        // logic to create a note
        const { title, content } = req.body;
        if( !title || !content ) {
            return res.status(400).json ({ message: "Title and content are required" });
        }

        // saving into database
        const newNote = new Note ({ title, content });
        await newNote.save();

        // showing the saved data
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

// retrieving all notes created in the database
export const getNotes = async (req, res) => {
    try {
       const notes = await Note.find().sort({ createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

// update note end point logic is added here
export const updateNote = async ( req, res ) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if ( !updatedNote ) {
            return res.status(404).json({ message: "Note not updated" });
        }
        res.status(200).json(updatedNote);
    } catch ( error ) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

// delete note logic can be added here 
export const deleteNote = async ( req, res) => {
    try {
        const deleteNode = await Note.findByIdAndDelete(req.params.id);
        if ( !deleteNode ) {
            return res.status(404).json({ message: "Note not found for deletion" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch ( error ) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}