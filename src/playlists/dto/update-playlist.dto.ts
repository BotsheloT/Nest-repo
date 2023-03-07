import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaylistDto } from './create-playlists.dto';

export class UpdateLikedSongDto extends PartialType(CreatePlaylistDto) {}
