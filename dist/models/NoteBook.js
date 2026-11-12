"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteBook = void 0;
const Note_1 = require("./Note");
class NoteBook {
    id;
    name;
    notes = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addNote(id, title, content, user) {
        const note = new Note_1.Note(id, title, content, user);
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter((n) => n.id !== id);
    }
    getNotes() {
        return this.notes;
    }
}
exports.NoteBook = NoteBook;
