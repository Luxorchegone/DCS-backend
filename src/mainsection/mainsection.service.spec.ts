import { Test, TestingModule } from '@nestjs/testing';
import { MainsectionService } from './mainsection.service';

describe('MainsectionService', () => {
  let service: MainsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainsectionService],
    }).compile();

    service = module.get<MainsectionService>(MainsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
