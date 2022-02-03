var model = require('./IRL-stats.js');
var date_fns = require('date-fns');


var t0, t1;

t0 = new Date(2020, 4, 17)

console.log(model.data_date_extent)

for (var t1 = t0;
  date_fns.isBefore(t1, model.data_date_extent); // PROBLEM FOUND: this doesn't return undefined - there is an error thrown inside the model
  t1 = date_fns.addDays(t1, 1)
)
  console.log({
    t1,
    v: model.new_cases({ t_in: t1 })
  }
//model.new_cases({t_in:date_fns.addDays(t1,-5)})
)


/*console.log(
date_fns.eachDayOfInterval({
  start: new Date(2021, 0, 1),
  end: new Date(2022,0,1)
}))*/