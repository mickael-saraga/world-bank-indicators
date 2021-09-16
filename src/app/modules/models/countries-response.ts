import { ICountryEntity } from "./country-entity";
import { IPaginationHeader } from "./pagination-header";

export interface ICountriesResponse {
  pagination: IPaginationHeader;
  countries:  ICountryEntity[];
  // value: [IPaginationHeader, ICountryEntity[]];
}
