const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
insert into ability ("ability") values ("ワンウェイレーザーEL");
`

db.serialize( () => {
  db.run( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "データを追加しました" );
  });
});
