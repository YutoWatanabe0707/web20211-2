const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let schema = `
create table race(
  id integer primary key,
  race text not null
);
`

db.serialize( () => {
  db.run( schema, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "テーブルを作成しました" );
  });
});
