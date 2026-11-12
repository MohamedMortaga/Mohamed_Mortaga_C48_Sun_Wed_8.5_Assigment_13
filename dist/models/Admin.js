"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin extends User_1.User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes(notebook, noteId) {
        notebook.removeNote(noteId);
        console.log(`admin ${this.name} deleted note ${noteId} from ${notebook.name}`);
    }
}
exports.Admin = Admin;
