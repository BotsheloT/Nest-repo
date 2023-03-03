import { Module } from '@nestjs/common';
import { LikedSongsService } from './liked-songs.service';
import { LikedSongsController } from './liked-songs.controller';

@Module({
  controllers: [LikedSongsController],
  providers: [LikedSongsService]
})
export class LikedSongsModule {}
