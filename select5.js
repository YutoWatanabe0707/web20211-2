const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
select monster.id, monster.name, monster.rarity, monster.element, race.race,
monster.type, monster.battletype, monster.bumpcombo_id, monster.strikeshot_id,
monster.ability_id from monster inner join race on monster.race_id=race.id;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log( data.id + ' : ' + data.name + ' : ' + data.rarity +' : ' + data.element + ' : ' + data.race + ' : ' + data.type + ' : ' + data.battletype + ' : ' + data.bumpcombo_id + ' : ' + data.strikeshot_id + ' : ' + data.ability_id     );
    }
  });
});
