import { MyDatabaseClassic } from '../exemplos/my-database-as-class';

const mydataDb = MyDatabaseClassic.getInstance();

mydataDb.addUser({ name: 'Joao', age: 25 });
mydataDb.addUser({ name: 'Maria', age: 23 });
mydataDb.addUser({ name: 'Pedro', age: 4 });
mydataDb.addUser({ name: 'Ana', age: 7 });

console.log('show in a');

mydataDb.showUsers();
// mydataDb.removeUser(2);

export { mydataDb };
