var model = require('./IRL-stats.js');
var date_fns = require('date-fns');

var t0 = new Date(2020, 2, 17);
var t1;

var out = [];

for (
  t1 = t0;
  date_fns.isBefore(t1, model.data_date_extent);
  t1 = date_fns.addDays(t1, 1)
) {
  out.push({
    t1,
    new_cases: model.new_cases({ t_in: t1 }),
    new_deaths: model.new_deaths({ t_in: t1 }),
    new_cases_smoothed: model.new_cases_smoothed({ t_in: t1 }),
    new_deaths_smoothed: model.new_deaths_smoothed({ t_in: t1 }),
    cases_deaths_link_smoothed: model.cases_deaths_link_smoothed({ t_in: t1 }),
    cases_deaths_link: model.cases_deaths_link({ t_in: t1 }),
  });
}

  // output a csv
  console.log('date,cases_deaths_link,cases_deaths_link_smoothed,new_cases,new_deaths,new_cases_smoothed,new_deaths_smoothed');
  out.forEach((d) => {
    console.log(
      `${date_fns.format(d.t1, 'yyyy-MM-dd')},${d.cases_deaths_link},${d.cases_deaths_link_smoothed},${d.new_cases},${d.new_deaths},${d.new_cases_smoothed},${d.new_deaths_smoothed}`
    );
  });
