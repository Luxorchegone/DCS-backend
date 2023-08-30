import { Test, TestingModule } from '@nestjs/testing';
import { DevlogService } from './devlog.service';

describe('DevlogService', () => {
  let service: DevlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevlogService],
    }).compile();

    service = module.get<DevlogService>(DevlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
