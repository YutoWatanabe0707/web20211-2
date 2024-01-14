const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
delete from monster where id=14;
`

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを削除しました" );
	});
});
