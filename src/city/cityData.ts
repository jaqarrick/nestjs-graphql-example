import { initialCitizenData } from 'src/citizen/citizenData';
import { City } from './entities/city.entity';

export const cityData = new Map();

const initialData: City[] = [
  {
    name: 'Boston',
    country: 'USA',
    citizens: initialCitizenData,
  },
  {
    name: 'Paris',
    country: 'France',
    citizens: [],
  },
];

initialData.forEach((entry) => {
  cityData.set(entry.name, entry);
});
