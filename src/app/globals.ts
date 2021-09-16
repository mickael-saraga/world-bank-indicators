import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { IIndicator } from "./modules/models/indicator";

@Injectable({
  providedIn: 'root'
})
export class Globals {

  indicators: IIndicator[] = [
    {
      label: 'GDP (current US$)',
      name: 'GDP',
      value: environment.filter_GDP
    },
    {
      label: 'Population, total',
      name: 'population_total',
      value: environment.filter_population_total
    },
    {
      label: 'Imports of goods and services (current US$)',
      name: 'tobacco_usage_prevalence',
      value: environment.filter_tobacco_usage_prevalence
    },
    {
      label: 'Adjusted net national income per capital (current US$)',
      name: 'goods_and_services_imports',
      value: environment.filter_goods_and_services_imports
    },
    {
      label: 'Prevalence of current tobacco use (% of adults)',
      name: 'national_income_capital',
      value: environment.filter_national_income_capital
    },
    {
      label: 'Current health expenditure (% of GDP)',
      name: 'health_expenditure',
      value: environment.filter_health_expenditure
    },
    {
      label: 'Life expectancy at birth, total (years)',
      name: 'life_expectancy_total',
      value: environment.filter_life_expectancy_total
    },
  ];

}