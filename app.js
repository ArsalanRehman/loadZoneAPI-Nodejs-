const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const loadPosition = require('./routes/loadPositionRouter');
// const globalErrorHandler = require('./controllers/errorControler');
// const AppError = require('./utils/appError');
const app = express();
app.use(express.json());
const cors = require('cors');
//////////////////

app.get(helmet());

// app.get(cors());
// port = [3000,3001,3002,3003,3004]
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// const limiter = rateLimit({
//   max: 100000,
//   windowsMS: 60* 60 * 1000,
//   message: 'request kotaniz acmistir'
// });
// app.use('/api', limiter);

app.use('/api/v1/position', loadPosition);

// app.all('*', (req, res, next) => {
//   next(new AppError(`${req.originalUrl} bulunmamaktadir`, 404));
// });
// app.use(globalErrorHandler);

module.exports = app;
