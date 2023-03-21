import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'characters',

        loadChildren: () =>
          import('./characters/characters.module').then(
            (m) => m.CharactersModule
          ),
      },
      {
        path: 'my-characters',
        loadChildren: () =>
          import('./my-characters/my-characters.module').then(
            (m) => m.MyCharactersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
