import fs from 'fs';

import { _dirname, tours } from '../data/index.js';

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    reqAt: req.requestTime,
    results: tours.length,
    data: { tours },
  });
};

const getTourById = (req, res) => {
  const reqTourId = +req.params.id;
  const tour = tours.find((tour) => tour.id === reqTourId);

  return res.status(200).json({
    status: 'success',
    data: { tour },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };

  tours.push(newTour);
  fs.writeFile(
    `${_dirname}/data/json/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { tour: newTour },
      });
    }
  );
};

const updateTour = (req, res) => {
  const reqTourId = req.params.id;

  res.status(200).json({
    status: 'success',
    data: { tour: `Updated Tour with ID ${reqTourId}` },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

export { getAllTours, getTourById, createTour, updateTour, deleteTour };
