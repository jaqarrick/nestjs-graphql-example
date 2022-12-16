import { Test, TestingModule } from '@nestjs/testing';
import { CitizenResolver } from './citizen.resolver';
import { CitizenService } from './citizen.service';

describe('CitizenResolver', () => {
  let resolver: CitizenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizenResolver, CitizenService],
    }).compile();

    resolver = module.get<CitizenResolver>(CitizenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
