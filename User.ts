import faker = require("faker");

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }

  markerContent(): string {
    return `
    <div>
    <h4>${this.name}</h4>
    <h5>Lat: ${this.location.lat}</h5>
    <h5>Lon: ${this.location.lng}</h5>
    </div>   
    `;
  }
}
