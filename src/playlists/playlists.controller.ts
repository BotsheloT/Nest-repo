import { Body, Controller, Get, Param, Put, Post, Query, Delete } from '@nestjs/common';
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
      getPlaylist(@Param('id') id:number){
      return this.playlistsService.getOnePlaylist(id);
    }

    @Post()
      addPlaylist(@Body() createPlaylistDto: CreatePlaylistDto){
        return this.playlistsService.addPlaylist(createPlaylistDto)
    }    

    @Put('id')
      editPLaylist(@Param() id:number, updatePlaylistDto: UpdatePlaylistDto){
        return {
          id,
          name: updatePlaylistDto
        };
    }

    @Delete('id')
      deletePlaylist(@Param() id:number){
        return{
          id
        }
      }
}
