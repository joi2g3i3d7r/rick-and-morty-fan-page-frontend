import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}

  getCharacters() {
    return this.httpClient.get('https://rickandmortyapi.com/api/character');
  }
}
