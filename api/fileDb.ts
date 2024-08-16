import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Note, NoteMutation} from './types';

const filename = './db.json';
let data: Note[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: NoteMutation) {
        const id = crypto.randomUUID();
        const note = {id, ...item};
        data.push(note);
        await this.save();
        return note;
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data, null, 2));
    }
};

export default fileDb;
