const express = require('express');
const app = express();
const port = 3001;
const taskRouter = require('./routers/taskRouter.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // разрешаем запросы с любого домена
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());

app.use('/', taskRouter);

app.listen(port, () => {
    console.log('Server started on port ', port);
});