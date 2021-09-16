import { IEntityCode } from "./entity-code";

export interface ICountryEntity {
  id: string;
  name: string;
  capitalCity: string;
  iso2code: string;
  latitude: string;
  longitude: string;
  adminregion: IEntityCode;
  incomeLevel: IEntityCode;
  lendingType: IEntityCode;
}