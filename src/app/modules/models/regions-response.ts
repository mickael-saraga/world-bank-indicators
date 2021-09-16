import { IPaginationHeader } from "./pagination-header";
import { IRegionEntity } from "./region-entity";

export interface IRegionsResponse {
  pagination: IPaginationHeader;
  regions: IRegionEntity[];
}
