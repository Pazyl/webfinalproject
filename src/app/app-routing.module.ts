import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopAnimeComponent } from './top-anime/top-anime.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AnimeComponent } from './anime/anime.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'top-100-anime', component: TopAnimeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'serials', component: SerialsComponent },
  { path: ':api/:id', component: AnimeDetailComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
