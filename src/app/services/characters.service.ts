import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteCharacter } from '@app/classes/favorite-character';
import { Environment } from '@app/environment/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient
      .get(`${Environment.API_RICK_AND_MORTY}/api/character`)
      .pipe(map((data: any) => data.results));
  }

  addFavoriteCharacter(userId: string, character: FavoriteCharacter) {
    return this.httpClient.post(
      `${Environment.API_BACKEND}/api/users/${userId}/favorite-characters`,
      character
    );
  }

  getAllFavoriteCharacters(userId: string) {
    return this.httpClient
      .get(`${Environment.API_BACKEND}/api/users/${userId}/favorite-characters`)
      .pipe(map((data: any) => data.listFavoriteCharacters));
  }
}
