import { Module } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CitizenResolver } from './citizen.resolver';

@Module({
  providers: [CitizenResolver, CitizenService]
})
export class CitizenModule {}
