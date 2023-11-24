const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('kaijin.db');

let sql = `
insert into kaijin ("name" , "level") values ("ワクチンマン" ,"鬼");
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
