let express = require('express');
let sqlite3 = require('sqlite3').verbose();
let app = express();

app.get('/data', function(req, res) {
    let db = new sqlite3.Database('db.db');
    let data = {
        timestamps: [],
        ampers: [],
        currents: [],
        voltages: []
    };

    db.serialize(function() {
        db.each("SELECT timestamp, amper, current, voltage FROM motor_data", function(err, row) {
            data.timestamps.push(row.timestamp);
            data.ampers.push(row.amper);
            data.currents.push(row.current);
            data.voltages.push(row.voltage);
        }, function() {
            db.close();
            res.json(data);
        });
    });
});

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('.'));
app.use('/css', express.static('css'));