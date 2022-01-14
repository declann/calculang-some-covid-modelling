var model = require('./IRL-stats.js');
var date_fns = require('date-fns');

var t0 = new Date(2020, 4, 1);
var t1;

var out = [];

for (
  t1 = t0;
  date_fns.isBefore(t1, new Date(2021, 10, 13));
  t1 = date_fns.addDays(t1, 1)
)
  out.push({
    t1,
    cases_deaths_link_smoothed: model.cases_deaths_link_smoothed({ t_in: t1 }),
    cases_deaths_link: model.cases_deaths_link({ t_in: t1 }),
  });

// output a csv
console.log('date,cases_deaths_link,cases_deaths_link_smoothed');
out.forEach((d) => {
  console.log(
    `${date_fns.format(d.t1, 'yyyy-MM-dd')},${d.cases_deaths_link},${
      d.cases_deaths_link_smoothed
    }`
  );
});
