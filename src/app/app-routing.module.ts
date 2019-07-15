import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'explore', loadChildren: './pages/explore/explore.module#ExplorePageModule' },
  // { path: 'property', loadChildren: './pages/property/property.module#PropertyPageModule' },
  {path: 'property/:id', loadChildren: './pages/property/property.module#PropertyPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
