import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums/albums.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { LikedSongsModule } from './liked-songs/liked-songs.module';

@Module({
  imports: [AlbumsModule, PlaylistsModule, LikedSongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
