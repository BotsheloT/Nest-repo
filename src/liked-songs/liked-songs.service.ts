import { Injectable } from '@nestjs/common';
import { CreateLikedSongDto } from './dto/create-liked-song.dto';
import { UpdateLikedSongDto } from './dto/update-liked-song.dto';

@Injectable()
export class LikedSongsService {
  create(createLikedSongDto: CreateLikedSongDto) {
    return 'This action adds a new likedSong';
  }

  findAll() {
    return `This action returns all likedSongs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likedSong`;
  }

  update(id: number, updateLikedSongDto: UpdateLikedSongDto) {
    return `This action updates a #${id} likedSong`;
  }

  remove(id: number) {
    return `This action removes a #${id} likedSong`;
  }
}
