import { IsEnum, MinLength } from "class-validator";

export class CreateAlbumsDto {    
    @MinLength(4, {message: 'Ensure the album name has at least 4 characters in it'})
    name: string;
    
    @IsEnum(['Hip Hop', 'Jazz'], {message: 'You can only listen to Hip Hop or Jazz'})
    genre: 'Hip Hop | Jazz';
}