const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const cors = require('cors');

app.get(cors());

// const DB = process.env.DATABASE.replace('<PASSWORD>',
//   process.env.DATABASE_PASSWORD);

const DB = 'mongodb://localhost:27017';
mongoose.set('strictQuery', false);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connection successfully');
  });

// console.log(app.get('env'));

const port = 6060;
app.listen(port, () => {
  console.log(`App is listening on ${port} `);
});
