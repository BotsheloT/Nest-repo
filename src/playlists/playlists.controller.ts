import { Body, Controller, Get, Param, Put, Post, Query, Delete } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlists.dto';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Get()
    getPlaylists(@Query('theme') theme:string){
      return [];
    }

    @Get(':id')
      getPlaylist(@Param('id') id:number){
      return {};
    }

    @Post()
      addPlaylist(@Body() createPlaylistDto: CreatePlaylistDto){
        return{
          name: createPlaylistDto.name,
          theme: createPlaylistDto.theme
        }
    }    

    @Put('id')
      editPLaylist(@Param() id:number ){
        return [];
    }

    @Delete('id')
      deletePlaylist(@Param() id:number){
        return{
          id
        }
      }
}
