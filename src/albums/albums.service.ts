import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumsService {
    private albums =[
        {id: 0, name: 'Secrets', genre: 'RnB'},
        {id: 1, name: 'MM..FOOD', genre: 'Hip Hop'},
        {id: 2, name: 'Umdali', genre: 'Jazz'}
      ];
    
      getAlbums(genre?: 'Hip Hop' | 'Jazz'){
        if(genre){
          return this.albums.filter((albums) => albums.genre === genre);
        }
        return this.albums;
      }
}
