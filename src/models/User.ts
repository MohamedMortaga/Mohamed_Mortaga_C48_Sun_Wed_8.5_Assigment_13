import { NoteBook } from "./NoteBook";

export class User {
  public id: number;
  public name: string;
  protected email: string;
  private password: string;
  protected phone: string;
  private age: number;
  private notebooks: NoteBook[] = [];

  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    if (age < 18 || age > 60) {
      throw new Error("age must be between 18 and 60");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  removeNotebook(notebook: NoteBook): void {
    this.notebooks = this.notebooks.filter((n) => n !== notebook);
  }

  getNotebooks(): NoteBook[] {
    return this.notebooks;
  }

  displayInfo(): void {
    console.log(`id: ${this.id}, name: ${this.name}, email: ${this.email}, phone: ${this.phone}, age: ${this.age}`);
  }
}
