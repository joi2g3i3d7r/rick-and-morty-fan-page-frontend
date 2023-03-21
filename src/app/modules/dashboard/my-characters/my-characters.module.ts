import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FavoriteCharacterComponent } from '@app/components/favorite-character/favorite-character.component';
import { MyCharactersRoutingModule } from './my-characters-routing.module';
import { MyCharactersComponent } from './my-characters.component';

@NgModule({
  declarations: [MyCharactersComponent, FavoriteCharacterComponent],
  imports: [CommonModule, MyCharactersRoutingModule],
})
export class MyCharactersModule {}
