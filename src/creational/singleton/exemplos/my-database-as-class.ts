import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  showUsers(): void {
    console.log('show users:');
    this.users.map((user) => console.log(user));
  }
}
