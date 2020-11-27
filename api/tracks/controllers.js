const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const query = req.query;

        let sql = `SELECT * FROM tracks`;

        if (query.query) {
            sql = `SELECT * FROM tracks WHERE name like '%${query.query}%'`
        }

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows)
        });
    },
    getOne: (req, res) => {
        const sql = "select * from tracks where TrackId = ?"
        const params = [req.params.id];

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