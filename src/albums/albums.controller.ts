import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumsDto } from './dto/create-albums.dto';
import { UpdateAlbumsDto } from './dto/update-albums.dto';

@Controller('albums')
export class AlbumsController {

    constructor(private readonly albumsService: AlbumsService){}

    @Get()
        getAlbums(@Query('genre') genre:'Hip Hop' | 'Jazz'){
            //const service = new AlbumsService;   (Instantiated service)         
            return this.albumsService.getAlbums(genre)
            
        }

    @Get(':id')
        getSpecificAlbum(@Param('id', ParseIntPipe) id:number){
            try{
                return this.albumsService.getAlbum(id)
            }catch(err){
                throw new NotFoundException();
            }
            
        }

    @Post()
        addAlbum(@Body(new ValidationPipe()) createAlbumDto: CreateAlbumsDto){
            return this.albumsService.createAlbum(createAlbumDto);   
        }

    @Put(':id')
        editAlbum(@Param('id') id:string, @Body() updateAlbumsDto: UpdateAlbumsDto){
            return this.albumsService.updateAlbum(+id, updateAlbumsDto);
        }

    @Delete(':id')
        deleteAlbum(@Param('id') id:string){
            return this.albumsService.removeAlbum(+id)
        }
    
}
