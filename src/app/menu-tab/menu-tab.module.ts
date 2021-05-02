import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTabPageRoutingModule } from './menu-tab-routing.module';

import { MenuTabPage } from './menu-tab.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);
 
// Automatically log in users
const redirectLoggedInToHome = () => redirectLoggedInTo(['/all-profiles']);

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: '../home/home.module',
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
  
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login-register/login/login.module').then( m => m.LoginPageModule),
  //   ...canActivate(redirectLoggedInToHome),
  // },
  // {
  //   path: 'loginaftersignup',
  //   loadChildren: () => import('./login-register/login/login.module').then( m => m.LoginPageModule),
  // },
  // {
  //   path: 'userloginaftersignup',
  //   loadChildren: () => import('./user-register/user-login/user-login.module').then( m => m.UserLoginPageModule),
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./login-register/register/register.module').then( m => m.RegisterPageModule)
  // },
  {
    path: 'profile',
    loadChildren:'../pages/profile/profile.module'
  },
  {
    path: 'view-teachers',
    loadChildren: '../pages/view-teachers/view-teachers.module'
  },
   {
    path: 'home',
    loadChildren: '../pages/view-details/view-details.module'
  },
  {
    path: 'home/:id',
    loadChildren: '../pages/view-details/view-details.module'
  },
  {
    path: 'homeProfile',
    loadChildren: '../pages/profile-details/profile-details.module'
  },
  {
    path: 'homeProfile/:id',
    loadChildren: '../pages/profile-details/profile-details.module'
  },
  {
    path: 'all-profiles',
    loadChildren: '../pages/all-profiles/all-profiles.module'
  },
  {
    path: 'user-login',
    loadChildren: '../user-register/user-login/user-login.module'
  },
  {
    path: 'user-signup',
    loadChildren:'../user-register/user-signup/user-signup.module'
  },
  {
    path: 'menu-tab',
    loadChildren: '../menu-tab/menu-tab.module'
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTabPageRoutingModule
  ],
  declarations: [MenuTabPage]
})
export class MenuTabPageModule {}
