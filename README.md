# some covid modelling

csv direct to vega: https://observablehq.com/@declann/covid19-cases-deaths-link@320 *Note need to point csv to this branch!*

Note bugs with 0/negative death intervals

## data

Data source is [Our World in Data](https://ourworldindata.org/).

I use [Flat Data](https://next.github.com/projects/flat-data) to bring down updated data ~~each day~~ (correction: not regularised yet). I'm only bringing down a little bit!

## models

I'm not doing anything sophisticated atm, stat-type calcs maybe.

calculang bundles may be unnecessarily large without pruning data.

### cases-deaths proxy link for IRL

[caclulang code](./models/IRL-stats.cul.js) is over-done, need to integrate with data better.

[script](./models/use-IRL-stats.js) to create cases-deaths proxy link csv.

## todo

Simplify the integration.

I should probably be applying [Arquero](https://uwdata.github.io/arquero/) at least somewhere, or some other smarts.

Consider about separating data from model +/-s?

Probably stop committing/tracking `owid-covid-data-extract.csv`, the complete csv from OWID.
