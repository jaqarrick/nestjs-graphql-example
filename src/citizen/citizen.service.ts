import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { citizenData } from './citizenData';
import { CreateCitizenInput } from './dto/create-citizen.input';
import { UpdateCitizenInput } from './dto/update-citizen.input';

@Injectable()
export class CitizenService {
  create(createCitizenInput: CreateCitizenInput) {
    // create new id
    const newId = citizenData.size;
    if (citizenData.get(newId)) {
      throw new BadRequestException('entry already exists');
    }

    const newCitizen = {
      id: newId,
      ...createCitizenInput,
    };
    citizenData.set(newId, newCitizen);

    return citizenData.get(newId);
  }

  findAll() {
    return Array.from(citizenData.values());
  }

  findOne(id: number) {
    return citizenData.get(id);
  }

  update(id: number, updateCitizenInput: UpdateCitizenInput) {
    const citizenToUpdate = citizenData.get(id);

    const updatedCitizen = {
      ...citizenToUpdate,
      ...updateCitizenInput,
    };
    citizenData.set(id, updatedCitizen);
    return citizenData.get(id);
  }

  remove(id: number) {
    const removedCitizen = citizenData.get(id);
    if (!removedCitizen) throw new NotFoundException();

    citizenData.delete(id);
    return removedCitizen;
  }
}
