import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { AddCitizenInput } from './dto/add-citizen.input';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Mutation(() => City)
  createCity(@Args('createCityInput') createCityInput: CreateCityInput) {
    return this.cityService.create(createCityInput);
  }

  @Query(() => [City], {name: 'cities'})
  findAll() {
    return this.cityService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('name') name: string) {
    return this.cityService.findOne(name);
  }

  @Mutation(() => City)
  updateCity(@Args('name') name: string, @Args('updateCityInput') updateCityInput: UpdateCityInput) {
    return this.cityService.update(name, updateCityInput);
  }

  @Mutation(() => City)
  removeCity(@Args('name') name: string) {
    return this.cityService.remove(name);
  }

  @Mutation(() => City)
  addCitzenToCity(@Args('addCitizenInput') addCitizenInput: AddCitizenInput){
    return this.cityService.addCitizen(addCitizenInput)
  }
}
