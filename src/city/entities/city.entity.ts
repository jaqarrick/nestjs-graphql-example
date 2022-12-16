import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Citizen } from 'src/citizen/entities/citizen.entity';

@ObjectType()
export class City {
  /* The type function is required when there's the potential for ambiguity between the 
  TypeScript type system and the GraphQL type system. 
  Specifically: it is not required for string and boolean types; 
  it is required for number (which must be mapped to either a GraphQL Int or Float).
  The type function should simply return the desired GraphQL type.
  */
  @Field({ description: 'Name of the City' })
  name: string;

  @Field({ description: 'County in which the city is in' })
  country: string;

  @Field(() => Int, {
    nullable: true,
    description: 'Number of residents in the city',
  })
  population?: number;

  @Field(() => [Citizen])
  citizens: Citizen[];
}
