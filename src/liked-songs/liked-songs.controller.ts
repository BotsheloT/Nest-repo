import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikedSongsService } from './liked-songs.service';
import { CreateLikedSongDto } from './dto/create-liked-song.dto';
import { UpdateLikedSongDto } from './dto/update-liked-song.dto';

@Controller('liked-songs')
export class LikedSongsController {
  constructor(private readonly likedSongsService: LikedSongsService) {}

  @Post()
  create(@Body() createLikedSongDto: CreateLikedSongDto) {
    return this.likedSongsService.create(createLikedSongDto);
  }

  @Get()
  findAll() {
    return this.likedSongsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likedSongsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikedSongDto: UpdateLikedSongDto) {
    return this.likedSongsService.update(+id, updateLikedSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likedSongsService.remove(+id);
  }
}
