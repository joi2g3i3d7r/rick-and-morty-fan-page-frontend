import { Component, Input } from '@angular/core';
import { Character } from '@app/classes/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character!: Character;
  isHovered = false;

  addToFavorites(character: Character) {
    console.log('add ', character);
  }
}
