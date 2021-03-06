const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {
        const query = req.query;


        let sql = `SELECT * FROM albums`;

        if (query.query) {
            sql = `SELECT * FROM albums WHERE title like '%${query.query}%'`
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
        const sql = "select * from albums where AlbumId = ?"
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