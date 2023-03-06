import { MinLength } from "class-validator";

export class CreateAlbumsDto {    
    name: string;
    @MinLength(4)
    genre: 'Hip Hop | Jazz';
}
