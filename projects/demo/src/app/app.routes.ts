import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  //{ path: 'home', component: HomeComponent },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo/todo.component'),
  },
  // { path: 'about', component: AboutComponent },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
];
