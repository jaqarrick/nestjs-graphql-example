import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCitizenInput {
  @Field()
  firstName: string
  @Field({nullable: true})
  lastName?: string
  @Field({nullable: true})
  occupation?: string
  @Field(() => Int, {nullable: true})
  age?: number
}
