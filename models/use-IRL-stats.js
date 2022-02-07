var model = require('./IRL-stats.js');
var date_fns = require('date-fns');

var t0 = new Date(2020, 3, 17);
var t_in;

var out = [];

for (
  t_in = t0;
  date_fns.isBefore(t_in, model.data_date_extent({})) || date_fns.isEqual(t_in, model.data_date_extent({}));
  t_in = date_fns.addDays(t_in, 1)
) {
  out.push({
    date: t_in,
    // optimising for size : manually. Arquero? (csv wired to browser)
    //new_cases: model.new_cases({ t_in: t1 }),
    //new_deaths: model.new_deaths({ t_in: t1 }),
    cases_deaths_link_smoothed: model.cases_deaths_link_smoothed({t_in}) == Infinity ? null : +(+model.cases_deaths_link_smoothed({t_in})).toFixed(2), // vega doesn't like Infinity!
    cases_smoothed: +(+model.new_cases_smoothed({t_in})).toFixed(2),
    deaths_smoothed: +(+model.new_deaths_smoothed({t_in})).toFixed(2)
      //cases_deaths_link: model.cases_deaths_link({ t_in: t1 }),
  });
}

  // output a csv
  console.log('date,cases_deaths_link_smoothed,cases_smoothed,deaths_smoothed');
  out.forEach((d) => {
    console.log(
      `${date_fns.format(d.date, 'yyyy-MM-dd')},${d.cases_deaths_link_smoothed},${d.cases_smoothed},${d.deaths_smoothed}`
    );
  });
