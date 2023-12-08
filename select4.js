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
bumpcombo.bumpcombo, monster.strikeshot_id,
monster.ability_id 
from monster 
inner join bumpcombo 
on monster.bumpcombo_id=bumpcombo.id;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log( data.id + ' : ' + data.name + ' : ' + data.rarity +' : ' + data.element + ' : ' + data.race_id + ' : ' + data.type + ' : ' + data.battletype + ' : ' + data.bumpcombo + ' : ' + data.strikeshot_id + ' : ' + data.ability_id     );
    }
  });
});
