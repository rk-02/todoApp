const db = require('../database.js');

exports.create = (req, res) => {
    const data = req.body;
    db.query('INSERT INTO tasks(title, description, start_date, end_date) VALUES ($1, $2, $3, $4)', 
        [data.title, data.description, data.start_date, data.end_date], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Server error');
      } else {
        res.status(200).send('Task has been created');
      }
    });
  };

  exports.get = (req, res) => {
    const data = req.body;
    db.query(`SELECT * FROM tasks
              WHERE id = ${data.id}`, (err, result) => {
                res.json(result.rows[0]);
              });
  };

  exports.update = (req, res) => {
    const data = req.body;
    db.query(`UPDATE tasks 
              SET ${data.column} = '${data.value}'
              WHERE id = ${data.id}`);
  };

  exports.delete = (req, res) => {
    const data = req.body;
    db.query(`DELETE FROM tasks 
              WHERE id = ${data.id}`);
  };