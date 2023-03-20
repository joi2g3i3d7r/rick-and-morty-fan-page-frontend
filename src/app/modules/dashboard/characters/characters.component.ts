import { Component } from '@angular/core';
import { Character } from '@app/classes/character';
import { CharactersService } from '@app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characters!: Character[];

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      console.log(characters);

      this.characters = characters;
    });
  }
}
