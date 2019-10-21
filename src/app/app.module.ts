import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './main/home/home.component';
import { MoviesComponent } from './main/movies/movies.component';
import { MylistComponent } from './main/mylist/mylist.component';
import { FooterComponent } from './footer/footer.component';
import { TileComponent } from './main/components/tile/tile.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MaterialModule } from './material/material.module';
MaterialModule
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    HomeComponent,
    MoviesComponent,
    MylistComponent,
    FooterComponent,
    TileComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports:[NavComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
