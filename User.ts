import faker = require("faker");

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // this.name = "maimous";
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
      // lat: 4.5678,
      // lng: 2.3456
    };
  }
}
