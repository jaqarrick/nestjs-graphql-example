import { CreateCityInput } from './create-city.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCityInput extends PartialType(CreateCityInput) {}
