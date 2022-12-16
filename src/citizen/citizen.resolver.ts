import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CitizenService } from './citizen.service';
import { Citizen } from './entities/citizen.entity';
import { CreateCitizenInput } from './dto/create-citizen.input';
import { UpdateCitizenInput } from './dto/update-citizen.input';

@Resolver(() => Citizen)
export class CitizenResolver {
  constructor(private readonly citizenService: CitizenService) {}

  @Mutation(() => Citizen)
  createCitizen(@Args('createCitizenInput') createCitizenInput: CreateCitizenInput) {
    return this.citizenService.create(createCitizenInput);
  }

  @Query(() => [Citizen], { name: 'citizens' })
  findAll() {
    return this.citizenService.findAll();
  }

  @Query(() => Citizen, { name: 'citizen' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.citizenService.findOne(id);
  }

  @Mutation(() => Citizen)
  updateCitizen(@Args('updateCitizenInput') updateCitizenInput: UpdateCitizenInput) {
    return this.citizenService.update(updateCitizenInput.id, updateCitizenInput);
  }

  @Mutation(() => Citizen)
  removeCitizen(@Args('id', { type: () => Int }) id: number) {
    return this.citizenService.remove(id);
  }
}
