const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const sql = `SELECT * FROM playlists`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows)
        });
    },
    getOne: (req, res) => {
        const sql = "select * from playlists where PlaylistId = ?"
        const params = [req.params.id];
        console.log(params)
        db.get(sql, params, (err, row) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(row)
        })
    },
    create: (req, res) => {
        // read row data from body
    },
    update: (req, res) => {
        // read row data from body
    },
    delete: (req, res) => {}
}

module.exports = controllers;