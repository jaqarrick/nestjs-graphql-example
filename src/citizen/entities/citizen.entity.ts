import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Citizen {
  @Field(() => Int)
  id: number
  @Field()
  firstName?: string
  @Field({nullable: true})
  lastName?: string
  @Field({nullable: true})
  occupation?: string
  @Field(() => Int, {nullable: true})
  age?: number
}
