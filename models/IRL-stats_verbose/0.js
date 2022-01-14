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
    new_deaths: d.new_deaths };

});

// note data has per million figures too, reproduction rate... lots of interesting stuff? weekly_icu_admissions_per_million? new_tests_smoothed_per_thousand? stringency_index? hospital_beds_per_thousand?

// csv fns keyed by date:
export const new_cases_smoothed = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_cases_smoothed;

export const new_deaths_smoothed = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_deaths_smoothed;

export const new_cases = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_cases;

export const new_deaths = ({ t_in }) =>
data.find((d) => isSameDay(d.date, t({ t_in }))).new_deaths;

// some metrics modelling:

// cases 14 days ago / deaths (smoothed values, = 7 day avgs?)
export const cases_deaths_link_smoothed = ({ t_in }) =>
new_cases_smoothed({ t_in: addDays(t({ t_in }), -14) }) / new_deaths_smoothed({ t_in });

export const cases_deaths_link = ({ t_in }) =>
new_cases({ t_in: addDays(t({ t_in }), -14) }) / new_deaths({ t_in });

// explicit inputs:

// t should be a JS date
export const t = ({ t_in }) => t_in;