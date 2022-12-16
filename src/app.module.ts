import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { PersonModule } from './person/person.module';
import { CitizenModule } from './citizen/citizen.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: true, 
    driver: ApolloDriver
  }), CityModule, PersonModule, CitizenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
