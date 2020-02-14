import faker = require("faker");

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }

  markerContent(): string {
    return `
    <div>
    <h4>${this.companyName}</h4>
    <h5> ${this.catchPhrase}</h5>
    <h5>Lat: ${this.location.lat}</h5>
    <h5>Lon: ${this.location.lng}</h5>
    </div>   
    `;
  }
}
