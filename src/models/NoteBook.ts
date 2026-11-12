import { Note } from "./Note";
import { User } from "./User";

export class NoteBook {
  public id: number;
  public name: string;
  private notes: Note[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  addNote(id: number, title: string, content: string, user: User): void {
    const note = new Note(id, title, content, user);
    this.notes.push(note);
  }

  removeNote(id: number): void {
    this.notes = this.notes.filter((n) => n.id !== id);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}
