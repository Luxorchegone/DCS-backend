import { Test, TestingModule } from '@nestjs/testing';
import { MainsectionController } from './mainsection.controller';
import { MainsectionService } from './mainsection.service';

describe('MainsectionController', () => {
  let controller: MainsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainsectionController],
      providers: [MainsectionService],
    }).compile();

    controller = module.get<MainsectionController>(MainsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
