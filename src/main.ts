import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { NoteBook } from "./models/NoteBook";
import { Storage } from "./models/Storage";

const user = new User(1, "Mohamed", "mohamed@gmail.com", "123456", "01012345678", 22);
const admin = new Admin(2, "Ahmed", "ahmed@gmail.com", "admin123", "01098765432", 30);

user.displayInfo();
admin.displayInfo();

const notebook = new NoteBook(1, "Study");
notebook.addNote(1, "TypeScript", "classes, inheritance and generics in typescript", user);
notebook.addNote(2, "Node", "express and mongoose", user);

user.addNotebook(notebook);

for (const note of notebook.getNotes()) {
  console.log(note.title, "-", note.preview(), "- by", note.userId.name);
}

admin.manageNotes(notebook, 1);
console.log(notebook.getNotes().map((n) => n.title));

const storage = new Storage<string>();
storage.addItem("a");
storage.addItem("b");
storage.removeItem("a");
console.log(storage.getAllItems());
