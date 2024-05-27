let express = require('express');
let sqlite3 = require('sqlite3').verbose();
let app = express();

app.get('/data', function(req, res) {
    let db = new sqlite3.Database('Motor_data.db');
    let data = {
        ids: [],
        timestamps: [],
        voltages: [],
        currents: [],
        velocities: [],
        torques: [],
        temperatures: [],
        elec_powers: [],
        mec_powers: [],
        efficiencies: []
    };

    db.serialize(function() {
        db.each("SELECT ID, TIMESTAMP, VOLTAGE, CURRENT, VELOCITY, TORQUE, TEMPERATURE, ELEC_POWER, MEC_POWER, EFFICIENCY FROM MEASUREMENT", function(err, row) {
            data.ids.push(row.ID);
            data.timestamps.push(row.TIMESTAMP);
            data.voltages.push(row.VOLTAGE);
            data.currents.push(row.CURRENT);
            data.velocities.push(row.VELOCITY);
            data.torques.push(row.TORQUE);
            data.temperatures.push(row.TEMPERATURE);
            data.elec_powers.push(row.ELEC_POWER);
            data.mec_powers.push(row.MEC_POWER);
            data.efficiencies.push(row.EFFICIENCY);
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