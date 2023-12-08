const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
select id , name , rarity , element , race_id , type , battletype , bumpcombo_id , strikeshot_id , ability_id  from monster; 
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.rarity +' : ' + data.element + ' : ' + data.race_id + ' : ' + data.type + ' : ' + data.battletype + ' : ' + data.bumpcombo_id + ' : ' + data.strikeshot_id + ' : ' + data.ability_id   );
		}
	});
});
