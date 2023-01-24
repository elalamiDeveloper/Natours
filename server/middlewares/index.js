import { tours } from '../data/index.js';

const createRequestTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

const checkID = (req, res, next, val) => {
  if (+val > tours.length)
    return res.status(400).json({
      status: 'fail',
      message: 'INVALID_ID',
    });

  next();
};

const checkBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price)
    return res.status(400).json({
      status: 'fail',
      message: 'INVALID_BODY',
    });

  next();
};

export { createRequestTime, checkID, checkBody };
