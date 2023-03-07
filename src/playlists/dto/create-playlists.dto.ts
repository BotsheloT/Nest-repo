import { IsEnum, MinLength } from "class-validator";

export class CreatePlaylistDto {
    @MinLength(4, {message: 'Plalist name is too short'})
    name: string;
    @IsEnum(['Chill', 'Hype'], {message: 'Your playlist should only be Chill or Hype'})
    theme: string;
}
