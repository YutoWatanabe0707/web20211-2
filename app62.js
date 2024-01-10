const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let sql = `
    select monster.id, monster.name, monster.rarity,
    monster.element, 
    race.race,
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
        if( error ) {
            res.render('show', {mes:"エラーです"});
        }
        res.render('select', {data:row});
      });
    });
})

app.get("/db/:id", (req, res) => {
db.serialize( () => {
db.all("select id, name, rarity, element, from monster where id =" + req.params.id + ";", (error, row) => {
if( error ) {
res.render('show', {mes:"エラーです"});
}
res.render('db', {data:row});
})
})
})

app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));