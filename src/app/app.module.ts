import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './main/home/home.component';
import { MoviesComponent } from './main/movies/movies.component';
import { MylistComponent } from './main/mylist/mylist.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    HomeComponent,
    MoviesComponent,
    MylistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  exports:[NavComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
