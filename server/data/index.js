import url from 'url';
import fs from 'fs';

const _dirname = url.fileURLToPath(new URL('.', import.meta.url));

const tours = JSON.parse(
  fs.readFileSync(`${_dirname}json/tours-simple.json`, {
    encoding: 'utf-8',
  })
);

export { _dirname, tours };
