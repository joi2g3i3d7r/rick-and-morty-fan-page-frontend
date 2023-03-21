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
  qualification: number = 0;
  comment: string = '';
  characterSelected!: Character;

  constructor(
    private characterService: CharactersService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  openModal() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.qualification = 0;
      this.comment = '';
    }
  }

  onAddFavorite(character: Character) {
    this.characterSelected = character;
    this.openModal();
  }

  addFavorite() {
    const { id: userId } = this.userService.getUserInfo();

    this.characterService
      .addFavoriteCharacter(userId, {
        ...this.characterSelected,
        comment: this.comment,
        qualification: this.qualification,
      })
      .subscribe({
        next: () => {
          alert(`Favorite ${this.characterSelected.name} added successfully`);
          this.closeModal();
        },
        error: (error) => {
          console.error(error);
          alert(
            `An error occurred while adding ${this.characterSelected.name}`
          );
        },
      });
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
