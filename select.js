const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('kaijin.db');

let sql = `
select id, name , level from kaijin;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.level );
		}
	});
});
