const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
insert into monster ("name", "rarity", "element", "race_id", "type", "battletype", "bumpcombo_id", "strikeshot_id", "ability_id") values("巨獣バハムート", 6, "闇", 6,"反射", "パワー", 10, 4, 8);
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
