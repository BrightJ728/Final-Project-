import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);
 
// Automatically log in users
const redirectLoggedInToHome = () => redirectLoggedInTo(['/profile-page']);

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectLoggedInToHome),

  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  // {
  //   path: 'home-list',
  //   ...canActivate(redirectUnauthorizedToLogin),
  //   loadChildren: () => import('./pages/home-list/home-list.module').then( m => m.HomeListPageModule)
  // },
  
  {
    path: 'login',
    loadChildren: () => import('./login-register/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'loginaftersignup',
    loadChildren: () => import('./login-register/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'userloginaftersignup',
    loadChildren: () => import('./user-register/user-login/user-login.module').then( m => m.UserLoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./login-register/register/register.module').then( m => m.RegisterPageModule)
  },
 
  {
    path: 'view-teachers',
    loadChildren: () => import('./pages/view-teachers/view-teachers.module').then( m => m.ViewTeachersPageModule)
  },
   {
    path: 'home',
    loadChildren: () => import('./pages/view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  },
  {
    path: 'homeProfile',
    loadChildren: () => import('./pages/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'homeProfile/:id',
    loadChildren: () => import('./pages/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'all-profiles',
    loadChildren: () => import('./pages/all-profiles/all-profiles.module').then( m => m.AllProfilesPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-register/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'user-signup',
    loadChildren: () => import('./user-register/user-signup/user-signup.module').then( m => m.UserSignupPageModule)
  },
  {
    path: 'menu-tab',
    loadChildren: () => import('./menu-tab/menu-tab.module').then( m => m.MenuTabPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
