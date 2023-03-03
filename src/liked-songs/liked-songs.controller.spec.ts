import { Test, TestingModule } from '@nestjs/testing';
import { LikedSongsController } from './liked-songs.controller';
import { LikedSongsService } from './liked-songs.service';

describe('LikedSongsController', () => {
  let controller: LikedSongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikedSongsController],
      providers: [LikedSongsService],
    }).compile();

    controller = module.get<LikedSongsController>(LikedSongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
