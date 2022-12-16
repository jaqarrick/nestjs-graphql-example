import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field({ description: 'Name of the City' })
  name: string;

  @Field({ description: 'County in which the city is in' })
  country: string;

  @Field(() => Int, {
    nullable: true,
    description: 'Number of residents in the city',
  })
  population: number;
}
