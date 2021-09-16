import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { environment } from '../../../environments/environment';
import { CountriesDataService } from '../../countries-data.service';
import { Globals } from '../../globals';
import { ICountriesResponse } from '../models/countries-response';
import { Country } from '../models/country';
import { ICountryEntity } from '../models/country-entity';
import { ICountryIndicatorEntity } from '../models/country-indicator-entity';
import { CountryIndicatorValue } from '../models/country-indicator-value';
import { IIndicator } from '../models/indicator';
import { IPaginationHeader } from '../models/pagination-header';
import { Region } from '../models/region';

@Component({
  selector: 'cip-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public regions: Region[] = [];
  public selectedRegion!: Region;
  public selectedRegionCode: string = '';
  
  public indicators: IIndicator[] = [];
  public selectedIndicators: IIndicator[]= [];

  public countries: Country[] = [];
  public selectedCountry!: Country | null;
  public countriesColumns: string[] = ['code', 'name'];

  public years: number[] = [];
  public firstYear!: number;
  public lastYear!: number;

  public countriesIndicators: CountryIndicatorValue[] = [];
  public indicatorsColumns: string[] = ['year', 'indicatorName'];

  constructor(private globals: Globals,
              private dataService: CountriesDataService) { }

  ngOnInit(): void {
    this.indicators = this.globals.indicators;
    
    this.dataService.getAllRegions().subscribe((regions: Region[]) => {
      if (regions && regions.length) {
        this.regions = regions;
      }
    });

    for (let year = 1990; year < (new Date()).getFullYear(); year++) {
      this.years.push(year);
    }
  }

  public selectRegion(event: any) {
    this.selectedCountry = null;
    if (event && event.value) {
      this.selectedRegion = event.value;
      this.selectedRegionCode = this.selectedRegion.code;
      this.dataService.getCountriesByRegionCode(this.selectedRegionCode).subscribe((response: ICountriesResponse[]) => {
        const pagination = response[0] as unknown as IPaginationHeader;
        const countriesEntities = response[1] as unknown as ICountryEntity[];
        this.countries = countriesEntities.map((entity: ICountryEntity) => new Country(entity.id, entity.name));
      });
    }
  }
  
  public selectIndicators(event: any) {
    if (event && event.value) {
      this.selectedIndicators = event.value;
      if (this.selectedCountry) {
        this.dataService.getCountryDataByIndicators(this.selectedCountry.code, this.selectedIndicators.map((indicator) => indicator.value))
                        .subscribe((response: any) => {
                          if (response && response[0] && response[1]) {
                            (response[1] as ICountryIndicatorEntity[]).forEach((e: ICountryIndicatorEntity) => {
                              this.countriesIndicators.push(new CountryIndicatorValue(e.country.value,
                                                                                      e.indicator.id,
                                                                                      e.indicator.value,
                                                                                      Number(e.date), e.value));
                            });
                          }
                        });
      }
    }
  }

  public selectCountry(country: Country, index: number) {
    this.selectedCountry = country;
    
  }

  public selectFirstYear(event: any) {
    this.firstYear = event?.value;
    if (this.selectedCountry) {
      this.dataService.getFilteredData(this.selectedCountry.code, this.selectedIndicators.map((indicator) => indicator.value), this.firstYear, this.lastYear)
                      .subscribe((response: any) => {
                        console.log(response);
                        
                      });
    }
  }
  
  public selectLastYear(event: any) {
    this.lastYear = event?.value;
    if (this.selectedCountry && this.firstYear) {
      this.dataService.getFilteredData(this.selectedCountry.code, this.selectedIndicators.map((indicator) => indicator.value), this.firstYear, this.lastYear)
                      .subscribe((response: any) => {
                        console.log(response);
                        
                      });
    }
  }

}
