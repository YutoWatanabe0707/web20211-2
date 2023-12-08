const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
select monster.id, 
monster.name,
monster.rarity,
monster.element, 
monster.race_id,
monster.type,
monster.battletype, 
monster.bumpcombo_id, strikeshot.strikeshot,
monster.ability_id 
from monster inner join strikeshot on monster.strikeshot_id=strikeshot.id;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log( data.id + ' : ' + data.name + ' : ' + data.rarity +' : ' + data.element + ' : ' + data.race_id + ' : ' + data.type + ' : ' + data.battletype + ' : ' + data.bumpcombo_id + ' : ' + data.strikeshot_id + ' : ' + data.ability_id     );
    }
  });
});
