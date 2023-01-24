import { URL } from 'url';
import fs from 'fs';

import connect from './connectionDB.js';
import Tour from '../../models/tourModel.js';

const __dirname = decodeURI(new URL('.', import.meta.url).pathname);

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

connect();
if (process.argv[2] === '--import') importData();
if (process.argv[2] === '--delete') deleteData();

// console.log(process.argv);
