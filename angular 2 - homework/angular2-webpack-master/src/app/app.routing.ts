import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieTopComponent } from './movies/movie-top.component';
import { MovieDetailComponent } from './movies/movie-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top', component: MovieTopComponent },
  { path: 'movies', component: MovieDetailComponent },
  { path: 'movie/:idIMDB', component: MovieDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
