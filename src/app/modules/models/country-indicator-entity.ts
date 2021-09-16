import { IBasicEntity } from "./basic-entity";

export interface ICountryIndicatorEntity {
  country: IBasicEntity;
  countryiso3code: string;
  indicator: IBasicEntity;
  date: string;
  decimal: number;
  obs_status: string;
  unit: string;
  value: number;
}