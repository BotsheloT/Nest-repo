import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumsDto } from './create-albums.dto';

export class UpdateLikedSongDto extends PartialType(CreateAlbumsDto) {}
