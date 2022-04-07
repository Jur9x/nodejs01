const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`Server funguje na portu ${port}`);
});

            const urlencodedParser = bodyParser.urlencoded({extended: false});

            app.post('/save', urlencodedParser, (req, res) => {
                let time = req.body.time;
                let player = req.body.player;
                let date = new Date();
                let str = `${player},${time},${date.toLocaleDateString()},${date.toLocaleTimeString()}\n`;
                fs.appendFile('./data/result.csv', str, function(err) {
                    if (err) {
                        console.error(err);
                        return res.status(400).json({
                           success: false,
                           message: 'Byla zjištěna chyba při zápisu do souboru' 
                        });
                    }
                });
                res.redirect(301, '/');
            });

app.get('/results', (req, res) => {
    csv().fromFile('./data/result.csv')
    .then(data => {
        console.log(data);
        res.render('results.pug', {'players':data, 'nadpis': 'Výsledky hráčů'});
    })
    .catch(err => {
        console.log(err);
    })
});

app.use(express.static('public'));