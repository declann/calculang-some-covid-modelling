// copying some old stuff; this data integration approach is a bit mental right now: clearly the top 80% of this file should note be in calculang (everything above "metrics").
// much of this can be neatly abstracted into a csv loader for calculang, but that might hide the Qs about performance/approach that I don't mind exposing now.

import data_string from 'raw-loader!../public/owid-covid-data-IRL.csv';
import { csvParse, autoType } from 'd3-dsv';
import { format, isSameDay, addDays } from 'date-fns';

const data = csvParse(data_string, autoType).map((d) => {
  return {
    date: new Date(format(d.date, 'yyyy-MM-dd')),
    new_cases_smoothed: d.new_cases_smoothed,
    new_deaths_smoothed: d.new_deaths_smoothed,
    new_cases: d.new_cases,
    new_deaths: d.new_deaths };

});

export const data_date_extent = ({}) => data[data.length - 1].date; // important, because data is hidden to applications

// "smoothed" = 7 day avg.
// Ireland only sends data once per week, which is an interesting effect I am watching for recent data
export const new_cases_smoothed = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_cases_smoothed;

export const new_deaths_smoothed = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_deaths_smoothed;

export const new_cases = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_cases;

export const new_deaths = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_deaths;

// some metrics modelling:

export const new_cases_smoothed_lag_allowance = ({ t_in }) =>
new_cases_smoothed({ t_in: addDays(t({ t_in }), -lag({})) });

export const new_cases_lag_allowance = ({ t_in }) =>
new_cases({ t_in: addDays(t({ t_in }), -lag({})) });

// cases 10 days ago / deaths (on 7 day avgs)
export const cases_deaths_link_smoothed = ({ t_in }) =>
new_cases_smoothed_lag_allowance({ t_in }) / new_deaths_smoothed({ t_in });

// same, but using daily numbers
export const cases_deaths_link = ({ t_in }) => new_cases_lag_allowance({ t_in }) / new_deaths({ t_in });

export const lag = ({}) => 10; // lag a constant 10 here

// explicit inputs:
// t should be a JS date
export const t = ({ t_in }) => t_in;