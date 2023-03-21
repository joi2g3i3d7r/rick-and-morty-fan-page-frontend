import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@app/classes/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character!: Character;
  @Output() onAddFavorite = new EventEmitter<Character>();
  isHovered = false;

  constructor() {}

  addFavorite() {
    this.onAddFavorite.emit(this.character);
  }
}
