import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'Black';

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `company name is ${this.name}`;
  }
}
