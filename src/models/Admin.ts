import { User } from "./User";
import { NoteBook } from "./NoteBook";

export class Admin extends User {
  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    super(id, name, email, password, phone, age);
  }

  manageNotes(notebook: NoteBook, noteId: number): void {
    notebook.removeNote(noteId);
    console.log(`admin ${this.name} deleted note ${noteId} from ${notebook.name}`);
  }
}
