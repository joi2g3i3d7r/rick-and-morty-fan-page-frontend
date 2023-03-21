import { Component } from '@angular/core';
import { FavoriteCharacter } from '@app/classes/favorite-character';
import { CharactersService } from '@app/services/characters.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-my-characters',
  templateUrl: './my-characters.component.html',
  styleUrls: ['./my-characters.component.scss'],
})
export class MyCharactersComponent {
  favoriteCharacters!: FavoriteCharacter[];

  constructor(
    private characterService: CharactersService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    const { id: userId } = this.userService.getUserInfo();

    this.characterService.getAllFavoriteCharacters(userId).subscribe({
      next: (favoriteCharacters: FavoriteCharacter[]) => {
        this.favoriteCharacters = favoriteCharacters;
      },
      error: (err) => {},
    });
  }
}
