var model = require('./IRL-stats.js');
var date_fns = require('date-fns');

console.log(
date_fns.eachDayOfInterval({
  start: new Date(2021, 0, 1),
  end: new Date(2022,0,1)
}))