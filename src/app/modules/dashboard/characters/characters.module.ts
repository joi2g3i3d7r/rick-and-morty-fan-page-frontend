import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from '@app/components/character/character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [CommonModule, CharactersRoutingModule, FormsModule],
})
export class CharactersModule {}
