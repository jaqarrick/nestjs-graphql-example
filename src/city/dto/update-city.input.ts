import { CreateCityInput } from './create-city.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCityInput extends PartialType(CreateCityInput) {
  id: number;
}