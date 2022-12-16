import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class AddCitizenInput {
  @Field(() => Int, { description: 'id of the citizen' })
  id: number;

  @Field({ description: 'name of the city' })
  name: string;
}
