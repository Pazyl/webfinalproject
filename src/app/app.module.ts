import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SafeUrlPipe } from './shared/safe-url.pipe';

import { HomeComponent } from './home/home.component';
import { TopAnimeComponent } from './top-anime/top-anime.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AnimeComponent } from './anime/anime.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    [SafeUrlPipe],
    HomeComponent,
    TopAnimeComponent,
    CatalogComponent,
    AnimeComponent,
    MoviesComponent,
    SeriesComponent,
    AnimeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
