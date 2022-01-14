import { readCSV, writeCSV } from 'https://deno.land/x/flat@0.0.13/src/csv.ts';
//import * as aq from 'https://cdn.skypack.dev/arquero';

const csvPath = Deno.args[0]; // './owid-covid-data-extract.csv';

const originalCSV = await readCSV(csvPath);

var data = await readCSV(csvPath, {});

data = data.filter((d) => d.iso_code == 'IRL');

await writeCSV('./public/owid-covid-data-IRL.csv', data);
