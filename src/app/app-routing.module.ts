import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopAnimeComponent } from './top-anime/top-anime.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AnimeComponent } from './anime/anime.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'top-100-anime', component: TopAnimeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'anime/:id', component: AnimeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
