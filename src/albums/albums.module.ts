import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { album, albumSchema} from './schemas/album.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: album.name, schema: albumSchema}])],
  controllers: [AlbumsController],
  providers: [AlbumsService]
})
export class AlbumsModule {}
