import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums/albums.module';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
  // , MongooseModule.forRoot('mongodb+srv://main:<277Black353>@cluster0.ypaxhzy.mongodb.net/?retryWrites=true&w=majority')
  imports: [AlbumsModule, PlaylistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
