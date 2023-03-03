import { Controller, Delete, Get, Post, Put} from '@nestjs/common';

@Controller('albums')
export class AlbumsController {
    @Get()
        getAlbums(){
            return [];
        }

    @Get(':id')
        getSpecificAlbum(){
            return {};
        }

    @Post()
        addAlbum(){
            return {};
        }

    @Put(':id')
        editAlbum(){
            return {};
        }

    @Delete(':id')
        deleteAlbum(){
            return {};
        }
    
}
