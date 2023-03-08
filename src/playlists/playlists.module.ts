import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import {playlist, playlistSchema} from './schemas/playlist.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: playlist.name, schema: playlistSchema}])],
  controllers: [PlaylistsController],
  providers: [PlaylistsService]
})
export class PlaylistsModule {}
