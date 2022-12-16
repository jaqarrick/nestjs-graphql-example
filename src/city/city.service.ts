import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { citizenData } from 'src/citizen/citizenData';
import { cityData } from './cityData';
import { AddCitizenInput } from './dto/add-citizen.input';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';

@Injectable()
export class CityService {
  create(createCityInput: CreateCityInput) {
    cityData.set(createCityInput.name, createCityInput);
    return cityData.get(createCityInput.name);
  }

  findAll() {
    return Array.from(cityData.values());
  }

  findOne(name: string) {
    const city = cityData.get(name);
    if (!city) {
      throw new NotFoundException();
    }
    return city;
  }

  update(name: string, updateCityInput: UpdateCityInput) {
    const city = cityData.get(name);
    if (!city) {
      throw new NotFoundException('City has no record yet');
    }
    const { population, country } = updateCityInput;
    const updatedCity = {
      ...city,
      population,
      country,
    };
    cityData.set(name, updatedCity);
    return cityData.get(name);
  }

  remove(name: string) {
    return cityData.delete(name);
  }

  addCitizen(addCitizenInput: AddCitizenInput) {
    const { name: nameOfCity, id: idOfCitizen } = addCitizenInput;
    const city = cityData.get(nameOfCity);

    if (!city) throw new NotFoundException('City not found');
    const citizen = citizenData.get(idOfCitizen);
    if (!citizen) throw new NotFoundException('Citizen not found');

    if (city.citizens.some((city) => city.id === idOfCitizen))
      throw new BadRequestException('Citizen already exists in city');
    const updatedCity = {
      ...city,
      citizens: [...city.citizens, citizen],
    };

    cityData.set(nameOfCity, updatedCity);
    return cityData.get(nameOfCity);
  }
}
