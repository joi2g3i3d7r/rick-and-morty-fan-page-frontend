import { Component, Input } from '@angular/core';
import { Character } from '@app/classes/character';
import { CharactersService } from '@app/services/characters.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character!: Character;
  isHovered = false;

  constructor(
    private userService: UserService,
    private characterService: CharactersService
  ) {}

  addToFavorites(character: Character) {
    const { id: userId } = this.userService.getUserInfo();

    const qualification = prompt('Califique este personaje') || 0;
    const comment = prompt('Añade un comentario') || '';

    this.characterService
      .addFavoriteCharacter(userId, {
        ...character,
        comment,
        qualification: Number(qualification),
      })
      .subscribe({
        next: () => {
          alert(`Favorite ${character.name} added successfully`);
        },
        error: (error) => {
          console.error(error);
          alert(`An error occurred while adding ${character.name}`);
        },
      });
  }
}
