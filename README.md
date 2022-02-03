# some covid modelling

⚠️ **This model is not validated and the output (e.g. [./models/use-IRL-stats.csv](./models/use-IRL-stats.csv)) is showing curious discontinuities which are not expected.**

## data

Data source is [Our World in Data](https://ourworldindata.org/).

I use [Flat Data](https://next.github.com/projects/flat-data) to bring down updated data ~~each day~~ (correction: not regularised yet). I'm only bringing down a little bit!

## models

I'm not doing anything sophisticated atm, stats maybe.

calculang bundles may be unnecessarily large without pruning data.

## todo

calculang part of actions will fail until I make release and move to it!

Consider about separating data from model +/-s?

I should probably be applying [Arquero](https://uwdata.github.io/arquero/) at least somewhere.

I should be pruning, but ideally not manually.

Bug RE recent data: Deaths are only entered weekly, but I should still get recent results. The reason I don't is because OWID smoothed deaths are populated with the real death figure entry. I can allow for this by calculating my own smoothed value, which is an ok idea anyways...

Daily updates: Setup Flat action to run every day, also setup compilation action to run afterwards. (Currently no use to calculang models to just update the raw data, without reflecting in the bundles!) Also make the date bounds in scripts dynamic!
