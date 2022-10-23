const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const router = express.Router();
require('dotenv').config();


//middleware
app.use(express.static('./public'))
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('This is hello world page guys')
})

app.use('/api/v1/tasks', tasks);

app.use('/admin', router, (req, res) => {
  res.send(401)
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    });
  } catch (error) {
    console.log(error);
  }
};

start();


