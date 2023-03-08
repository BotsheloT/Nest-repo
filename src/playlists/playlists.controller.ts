import { Body, Controller, Get, Param, Put, Post, Query, Delete, ParseIntPipe } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreatePlaylistDto } from './dto/create-playlists.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}  

  @Get()
    getPlaylists(){
      return this.playlistsService.getPlaylists();
    }

    @Get(':id')
      getPlaylist(@Param('id', ParseIntPipe) id:string){        
        return this.playlistsService.getOnePlaylist(id);          
     
    }

    @Post()
      addPlaylist(@Body() createPlaylistDto: CreatePlaylistDto){
        return this.playlistsService.addPlaylist(createPlaylistDto)
    }    

    @Put(':id')
      editPLaylist(@Param() id:string, updatePlaylistDto: UpdatePlaylistDto){
        return this.playlistsService.editPlaylist(id, updatePlaylistDto);
    }

    @Delete(':id')
      deletePlaylist(@Param() id:string){
        return this.playlistsService.deletePlaylist(id);
      }
}
