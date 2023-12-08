const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let schema = `
create table monster(
  id integer primary key,
  name text not null,
  rarity integer not null,
  element text not null,
  race_id integer not null,
  type text not null,
  battletype text not null,
  bumpcombo_id integer not null,
  strikeshot_id integer not null,
  ability_id integer not null
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
