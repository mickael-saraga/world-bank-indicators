export class Country {
  public code: string;
  // public isoCode: string;
  public name: string;

  constructor(code: string, /* isoCode: string, */ name: string) {
    this.code = code;
    // this.isoCode = isoCode;
    this.name = name;
  }
}