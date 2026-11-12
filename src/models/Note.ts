import { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: User;

  constructor(id: number, title: string, content: string, userId: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  preview(): string {
    if (this.content.length > 20) {
      return this.content.substring(0, 20) + "...";
    }
    return this.content;
  }
}
