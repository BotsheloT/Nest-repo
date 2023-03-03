import { Test, TestingModule } from '@nestjs/testing';
import { LikedSongsService } from './liked-songs.service';

describe('LikedSongsService', () => {
  let service: LikedSongsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedSongsService],
    }).compile();

    service = module.get<LikedSongsService>(LikedSongsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
