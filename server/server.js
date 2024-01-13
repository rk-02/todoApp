const express = require('express');
const app = express();
const port = 3000;
const taskRouter = require('./routers/taskRouter.js');

app.use(express.json());

app.use('/', taskRouter);

app.listen(port, () => {
    console.log('Server started on port ', port);
});