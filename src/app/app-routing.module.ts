import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MoviesComponent } from './main/movies/movies.component';
import { MylistComponent } from './main/mylist/mylist.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path:'landing',component:LandingComponent },
  {path:'home',component:HomeComponent },
  {path:'movies',component:MoviesComponent },
  {path:'mylist',component:MylistComponent },
  {path:'',redirectTo:'/home' ,pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
