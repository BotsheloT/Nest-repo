import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {playlist, playlistSchema} from './schemas/playlist.schema';
import { CreatePlaylistDto } from './dto/create-playlists.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Injectable()
export class PlaylistsService {
    private playlists = [
        {id: 0, name: '11:11', theme: 'Chill'},
        {id: 1, name: 'Madness', theme: 'Hype'}
    ]

    getPlaylists(){
        return this.playlists;
    }

    getOnePlaylist(id: number){
        let playlist = this.playlists.find((playlist) => playlist.id === id);

        if(!playlist){
            throw new Error('Playlist not found');
        }

        return playlist;

    }

    addPlaylist(createPlaylistDto: CreatePlaylistDto){
        let playlist = {
            id: this.playlists.at(-1).id +1,
            ...createPlaylistDto
        };
        this.playlists.push(playlist);

        return playlist;
    }

    editPlaylist(id: number, updatePlaylistDto: UpdatePlaylistDto){
        this.playlists = this.playlists.map((playlist) => {
            if(playlist.id == id){
                return{...playlist, updatePlaylistDto}
            }
            return playlist;
        });
    }

    deletePlaylist(id: number){
        let deleteItem = this.getOnePlaylist(id);

        this.playlists = this.playlists.filter((playlist) => playlist.id !== id);

        return deleteItem;
    }
}
