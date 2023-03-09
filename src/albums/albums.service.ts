import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { retry } from 'rxjs';
import { CreateAlbumsDto } from './dto/create-albums.dto';
import { UpdateAlbumsDto } from './dto/update-albums.dto';
import { album, albumDocument } from './schemas/album.schema';

@Injectable()
export class AlbumsService {

    constructor(@InjectModel(album.name) private albumModel: Model<albumDocument>){}
    
      getAlbums(genre?: 'Hip Hop' | 'Jazz'){
        return this.albumModel.find().exec();
      }

      //Method to search for album
      getAlbum(id: string){
        return this.albumModel.findById(id).exec();
      }

      createAlbum(createAlbumDto: CreateAlbumsDto){
       return this.albumModel.create(createAlbumDto);
      }

      updateAlbum(id: string, updateAlbumsDto: UpdateAlbumsDto){
       return this.albumModel.findByIdAndUpdate(id, updateAlbumsDto).exec();
      }

      removeAlbum(id: string){
       return this.albumModel.findByIdAndRemove(id).exec();
      }
}
