export class CountryIndicatorValue {
  public countryName: string;
  public indicatorCode: string;
  public indicatorName: string;
  public date: number;
  public value: number;

  constructor(countryName: string, indicatorCode: string, indicatorName: string, date: number, value: number) {
      this.countryName = countryName;
      this.indicatorCode = indicatorCode;
      this.indicatorName = indicatorName;
      this.date = date;
      this.value = value;
  }

}