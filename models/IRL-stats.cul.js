// copying some old stuff; this is a bit mental right now, but does it work?

import data_string from 'raw-loader!../public/owid-covid-data-IRL.csv';
import { csvParse, autoType } from 'd3-dsv';
import { format, isSameDay, addDays } from 'date-fns';

const data = csvParse(data_string, autoType).map((d) => {
  return {
    date: new Date(format(d.date, 'yyyy-MM-dd')),
    new_cases_smoothed: d.new_cases_smoothed,
    new_deaths_smoothed: d.new_deaths_smoothed,
    new_cases: d.new_cases,
    new_deaths: d.new_deaths,
  };
});

export const testing = () => 1; // this should work, and so should this:

// const data_date_extent = ({}) => data[data.length - 1].date;   ====== error at runtime, so breaking all rules and making a constant (not a function !!!)
export const data_date_extent = data[data.length - 1].date; // exposing this, because not knowing the bounds = possibility for runtime TypeErrors in data.find result lookup

// note data has per million figures too, reproduction rate... lots of interesting stuff? weekly_icu_admissions_per_million? new_tests_smoothed_per_thousand? stringency_index? hospital_beds_per_thousand?

// csv fns keyed by date:
export const new_cases_smoothed = () =>
  data.find((d) => isSameDay(d.date, t())).new_cases_smoothed;

export const new_deaths_smoothed = () =>
  data.find((d) => isSameDay(d.date, t())).new_deaths_smoothed;

export const new_cases = () =>
  data.find((d) => isSameDay(d.date, t())).new_cases;

export const new_deaths = () =>
  data.find((d) => isSameDay(d.date, t())).new_deaths;

// some metrics modelling:

// cases 14 days ago / deaths (smoothed values, = 7 day avgs? yes confirmed in Excel, should confirm here!)
export const cases_deaths_link_smoothed = () =>
  new_cases_smoothed({ t_in: addDays(t(), -14) }) / new_deaths_smoothed();

export const cases_deaths_link = () =>
  new_cases({ t_in: addDays(t(), -14) }) / new_deaths();

// explicit inputs:

// t should be a JS date
export const t = () => t_in;
