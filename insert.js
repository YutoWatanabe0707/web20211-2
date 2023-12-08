const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
insert into monster ("name", "rarity", "element", "race_id", "type", "battletype", "bumpcombo_id", "strikeshot_id", "ability_id") values ("フォノー", 2, "火", 1,"反射", "バランス", 1, 1, 1);
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
