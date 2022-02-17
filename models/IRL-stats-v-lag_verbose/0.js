import { /* long list coming up, eventually use all_cul keyword instead: calculang issue #13 */new_cases_smoothed, new_deaths_smoothed, new_cases, new_deaths, cases_deaths_link_smoothed, cases_deaths_link, data_date_extent, new_cases_smoothed_lag_allowance, new_cases_lag_allowance } from "./IRL-stats.cul.js?cul_scope_id=1&cul_parent_scope_id=0";
export { /* "" */new_cases_smoothed, new_deaths_smoothed, new_cases, new_deaths, cases_deaths_link_smoothed, cases_deaths_link, data_date_extent, new_cases_smoothed_lag_allowance, new_cases_lag_allowance };

// I'm deliberately implementing variable-lag in a model-of- the base IRL-stats calculang model, where lag is a constant 10. I could easily alter that model instead (but => reflect change in applications).

// In this model we import the base model above, and we override the lag formula (below).
// The below definition will take precedence in the final model and bundle (it's defined closer to the model entrypoint or 'model root').

export const lag = ({ lag_in }) => lag_in; // in the model-of-model lag for the base model is now an input (even though I should just move lag in IRL-stats to an input; happy to make this a simple modular example instead)