import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRegionsResponse } from './modules/models/regions-response';
import { IRegionEntity } from './modules/models/region-entity';
import { Region } from './modules/models/region';
import { ICountriesResponse } from './modules/models/countries-response';

@Injectable()
export class CountriesDataService {

  private static readonly BASIC_URL = environment.url_basic;

  constructor(private http: HttpClient) { }

  public getAllRegions(): Observable<Region[]> {
    return this.http.get<IRegionsResponse>(CountriesDataService.BASIC_URL + '/region?format=json')
                    .pipe(
                      map((response: any) => {
                        if (response && response[0] && response[1]) {
                          return response[1]?.map((e: IRegionEntity) => new Region(e.code, e.iso2code, e.name));
                        } else {
                          return from([]);
                        }
                      })
                    );
  }

  public getCountriesByRegionCode(code: string): Observable<ICountriesResponse[]> {
    return this.http.get<ICountriesResponse[]>(CountriesDataService.BASIC_URL + '/region/' + code + '/country?format=json');
  }

  public getCountryDataByIndicators(countryCode: string, indicators: string[]): Observable<any> {
    return this.http.get(CountriesDataService.BASIC_URL + '/country/' + countryCode + '/indicator/' + indicators.join(';') + '?format=json&source=2');
  }

  public getFilteredData(countryCode: string, indicators?: string[], firstYear?: number, lastYear?: number): Observable<any> {
    let getDataUrl = CountriesDataService.BASIC_URL + '/country/' + countryCode;
    if (indicators && indicators.length) {
      getDataUrl = getDataUrl + '/indicator/' + indicators[0];
      if (firstYear) {
        getDataUrl = getDataUrl + '?date=' + firstYear;
        if (lastYear) {
          getDataUrl = getDataUrl + ':' + lastYear;
        }
      }
      if (firstYear) {
        getDataUrl = getDataUrl + '&format=json';
      } else {
        getDataUrl = getDataUrl + '?format=json';
      }
      return this.http.get(getDataUrl + '&source=2');
    } else {
      return of(null);
    }

    
  }

}
