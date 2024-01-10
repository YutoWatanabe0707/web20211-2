const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('monster.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const message = "Hello world";
  res.render('show', {mes:message});
});

app.get("/db", (req, res) => {
    db.serialize( () => {
      db.all("select id, name, rarity, element, race.race from monster inner join race on monster.race_id=race.id;", (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            res.render('select', {data:row});
        })
    })
})

app.get("/top", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name, rarity, element, race_id from monster order by id" + desc + " limit " + req.query.pop + ";";
    console.log(sql);    // ②
  db.serialize( () => {
      db.all(sql, (error, data) => {
          if( error ) {
              res.render('show', {mes:"エラーです"});
          }
          //console.log(data);    // ③
          res.render('select', {data:data});
      })
  })
})

app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));