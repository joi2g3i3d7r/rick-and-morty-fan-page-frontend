import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/classes/character';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient
      .get('https://rickandmortyapi.com/api/character')
      .pipe(map((data: any) => data.results));
  }

  addFavoriteCharacter(userId: string, character: Character) {
    return this.httpClient.post(
      `/api/users/${userId}/favorite-characters`,
      character
    );
  }
}
