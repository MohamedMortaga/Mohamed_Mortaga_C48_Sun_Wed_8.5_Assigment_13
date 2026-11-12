"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const Admin_1 = require("./models/Admin");
const NoteBook_1 = require("./models/NoteBook");
const Storage_1 = require("./models/Storage");
const user = new User_1.User(1, "Mohamed", "mohamed@gmail.com", "123456", "01012345678", 22);
const admin = new Admin_1.Admin(2, "Ahmed", "ahmed@gmail.com", "admin123", "01098765432", 30);
user.displayInfo();
admin.displayInfo();
const notebook = new NoteBook_1.NoteBook(1, "Study");
notebook.addNote(1, "TypeScript", "classes, inheritance and generics in typescript", user);
notebook.addNote(2, "Node", "express and mongoose", user);
user.addNotebook(notebook);
for (const note of notebook.getNotes()) {
    console.log(note.title, "-", note.preview(), "- by", note.userId.name);
}
admin.manageNotes(notebook, 1);
console.log(notebook.getNotes().map((n) => n.title));
const storage = new Storage_1.Storage();
storage.addItem("a");
storage.addItem("b");
storage.removeItem("a");
console.log(storage.getAllItems());
