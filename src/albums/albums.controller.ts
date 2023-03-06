import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumsDto } from './dto/create-albums.dto';
import { UpdateAlbumsDto } from './dto/update-albums.dto';

@Controller('albums')
export class AlbumsController {
    @Get()
        getAlbums(@Query('genre') genre:'Hip Hop' | 'Jazz'){
            const service = new AlbumsService;            
            return service.getAlbums(genre)
            
        }

    @Get(':id')
        getSpecificAlbum(@Param('id') id:string){
            return {
                id
            }; 
        }

    @Post()
        addAlbum(@Body() addAlbumDto: CreateAlbumsDto){
            return {
                name: addAlbumDto.name,
                releaseYear: addAlbumDto.releaseYear
            };
        }

    @Put(':id')
        editAlbum(@Param('id') id:string, @Body() updateAlbumsDto: UpdateAlbumsDto){
            return {
                id,
                name: updateAlbumsDto.name,
                releaseYear: updateAlbumsDto.releaseYear
            };
        }

    @Delete(':id')
        deleteAlbum(@Param('id') id:string){
            return {
                id
            };
        }
    
}
