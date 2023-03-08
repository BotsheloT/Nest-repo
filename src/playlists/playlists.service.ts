import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {playlist, playlistDocument} from './schemas/playlist.schema';
import { CreatePlaylistDto } from './dto/create-playlists.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Injectable()
export class PlaylistsService {
    
    constructor(@InjectModel(playlist.name) private playlistModel: Model<playlistDocument>){}

    getPlaylists(){
        return this.playlistModel.find().exec();
    }

    getOnePlaylist(id: string){        
        return this.playlistModel.findById(id).exec();
    }

    addPlaylist(createPlaylistDto: CreatePlaylistDto){
      return this.playlistModel.create(createPlaylistDto);
    }

    editPlaylist(id: string, updatePlaylistDto: UpdatePlaylistDto){
        return this.playlistModel.findByIdAndUpdate(id, updatePlaylistDto).exec();
    }

    deletePlaylist(id: string){
       return this.playlistModel.findByIdAndDelete(id).exec();
    }
}
