import { CreateCitizenInput } from './create-citizen.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCitizenInput extends PartialType(CreateCitizenInput) {
  @Field(() => Int)
  id: number
}
