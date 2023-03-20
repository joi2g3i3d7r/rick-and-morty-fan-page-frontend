import { Component } from '@angular/core';
import { Character } from '@app/classes/character';
import { FavoriteCharacter } from '@app/classes/favorite-character';
import { CharactersService } from '@app/services/characters.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characters!: Character[];

  constructor(
    private characterService: CharactersService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    const { id: userId } = this.userService.getUserInfo();

    this.characterService.getCharacters().subscribe({
      next: (characters: Character[]) => {
        this.characterService.getAllFavoriteCharacters(userId).subscribe({
          next: (favoriteCharacters: FavoriteCharacter[]) => {
            const charactersTemp = characters.map((item) => ({
              ...item,
              canAddAsFavorite: favoriteCharacters
                .map((row) => row.id)
                .includes(item.id),
            }));

            this.characters = charactersTemp;
          },
          error: (err) => {},
        });
      },
      error: (err) => {},
    });
  }
}
