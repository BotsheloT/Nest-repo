import { Injectable } from '@nestjs/common';
import { CreateAlbumsDto } from './dto/create-albums.dto';
import { UpdateAlbumsDto } from './dto/update-albums.dto';

@Injectable()
export class AlbumsService {
    private albums =[
        {id: 0, name: 'Food and Liquor', genre: 'Hip Hop'},
        {id: 1, name: 'MM..FOOD', genre: 'Hip Hop'},
        {id: 2, name: 'Umdali', genre: 'Jazz'}
      ];
    
      getAlbums(genre?: 'Hip Hop' | 'Jazz'){
        if(genre){
          return this.albums.filter((albums) => albums.genre === genre);
        }
        return this.albums;
      }

      //Method to search for album
      getAlbum(id: number){
        let album = this.albums.find((album) => album.id === id);

        if(!album){
            throw new Error('Album not found');
        }
        return album
      }

      createAlbum(createAlbumDto: CreateAlbumsDto){
        let newAlbum ={
            id: this.albums.at(-1).id+1,
            ...createAlbumDto
            
        };
        this.albums.push(newAlbum);        
        return newAlbum;
      }

      updateAlbum(id: number, updateAlbumsDto: UpdateAlbumsDto){
        this.albums = this.albums.map((album) => {
            if(album.id === id){
                return {...album, updateAlbumsDto};
            }
            return album;
        });
      }

      removeAlbum(id: number){
        let toBeRemoved = this.getAlbum(id);

        this.albums = this.albums.filter((album) => album.id !== id);

        return toBeRemoved;
      }
}
