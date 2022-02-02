import { LoginGuard } from './core/guards/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuard] },
  { path: 'animals', loadChildren: () => import('./modules/animals/animals.module').then(m => m.AnimalsModule), canLoad: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
