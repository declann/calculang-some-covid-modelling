import { readCSV, writeCSV } from 'https://deno.land/x/flat@0.0.13/src/csv.ts';
//import * as aq from 'https://cdn.skypack.dev/arquero';

const csvPath = Deno.args[0]; // './owid-covid-data-extract.csv';

var data = await readCSV(csvPath, {});

data = data
  .filter((d) => d.iso_code == 'IRL')
  .map(({ iso_code, date, new_cases_smoothed, new_cases, new_deaths_smoothed, new_deaths }) => ({
    iso_code,
    date,
    new_cases_smoothed,
    new_cases,
    new_deaths_smoothed,
    new_deaths
  }));

await writeCSV('./public/owid-covid-data-IRL.csv', data);
