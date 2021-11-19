import { MyDatabaseClassic } from './db/my-database-classic';

// Para explicar multiplas instâncias
import { mydataDb } from './module_a';

const db = MyDatabaseClassic.getInstance();

db.addUser({ name: 'Carlos', age: 25 });
db.addUser({ name: 'José', age: 7 });

console.log('show in b');
db.showUsers();

// Se for rodado sem o import do module_a, vai mostrar o que foi instanciado aqui em b.
// Se for importado o module_a, vai mostrar a e b juntos, pq é uma instancia só, global

console.log(db === mydataDb);
