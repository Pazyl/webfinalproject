import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SafeUrlPipe } from './shared/safe-url.pipe';

import { HomeComponent } from './home/home.component';
import { TopAnimeComponent } from './top-anime/top-anime.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AnimeComponent } from './anime/anime.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    [SafeUrlPipe],
    HomeComponent,
    TopAnimeComponent,
    CatalogComponent,
    AnimeComponent,
    MoviesComponent,
    AnimeDetailComponent,
    SerialsComponent,
    SignInComponent,
    SignUpComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
