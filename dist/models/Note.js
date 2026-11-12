"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        if (this.content.length > 20) {
            return this.content.substring(0, 20) + "...";
        }
        return this.content;
    }
}
exports.Note = Note;
