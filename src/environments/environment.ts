// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_basic: 'http://api.worldbank.org/v2',
  url_all_regions: 'region?format=json',
  filter_GDP: 'NY.GDP.MKTP.CD',
  filter_population_total: 'SP.POP.TOTL',
  filter_tobacco_usage_prevalence: 'SH.PRV.SMOK',
  filter_goods_and_services_imports: 'NE.IMP.GNFS.CD',
  filter_national_income_capital: 'NY.ADJ.NNTY.PC.CD',
  filter_health_expenditure: 'SH.XPD.CHEX.GD.ZS',
  filter_life_expectancy_total: 'SP.DYN.LE00.IN',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
