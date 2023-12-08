const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

let sql = `
select monster.id, monster.name, monster.rarity, monster.element, race.race,
monster.type, monster.battletype,
bumpcombo.bumpcombo, strikeshot.strikeshot,
ability.ability from monster 
inner join race on monster.race_id=race.id
inner join bumpcombo on
monster.bumpcombo_id=bumpcombo.id
inner join strikeshot on
monster.strikeshot_id=strikeshot.id
inner join ability on
monster.ability_id=ability.id;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log( data.id + ' : ' + data.name + ' : ' + data.rarity +' : ' + data.element + ' : ' + data.race + ' : ' + data.type + ' : ' + data.battletype + ' : ' + data.bumpcombo + ' : ' + data.strikeshot + ' : ' + data.ability     );
    }
  });
});
