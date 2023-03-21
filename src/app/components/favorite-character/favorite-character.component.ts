import { Component, Input } from '@angular/core';
import { FavoriteCharacter } from '@app/classes/favorite-character';

@Component({
  selector: 'app-favorite-character',
  templateUrl: './favorite-character.component.html',
  styleUrls: ['./favorite-character.component.scss'],
})
export class FavoriteCharacterComponent {
  @Input() character!: FavoriteCharacter;
  isHovered = false;

  constructor() {}
}
