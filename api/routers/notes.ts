import express from "express";
import fileDb from "../fileDb";
import {imagesUpload} from "../multer";
import {NoteMutation} from "../types";

const notesRouter = express.Router();

notesRouter.get('/', async (req, res) => {
    const notes = await fileDb.getItems();
    return res.send(notes);
});

notesRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    if (!req.body.note) {
        return res.status(400).send({error: 'Title and price are required!'});
    }

    const note: NoteMutation = {
        author: req.body.author === '' ? 'Anonymous' : req.body.author,
        note: req.body.note,
        image: req.file ? req.file.filename : null,
    }

    const savedNote = await fileDb.addItem(note);
    return res.send(savedNote);
});

export default notesRouter;
