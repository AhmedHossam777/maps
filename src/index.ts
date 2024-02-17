/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const company = new Company();
const user = new User();
const map = new CustomMap('map');
map.addUserMarker(user)