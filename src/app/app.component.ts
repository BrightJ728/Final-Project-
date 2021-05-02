import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterModule, Routes } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  constructor(private platform: Platform,
    private menuCtrl: MenuController,
    private router: Router,public afAuth: AngularFireAuth,
    private splashScreen: SplashScreen) {
      this.initializeApp();
    }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      
    });}
    signOut() {
      return this.afAuth.signOut().then(() => {
        this.router.navigate(['login']);
      })
    }
    ngOnInit() {
      // this.router.events.subscribe((event: RouterEvent) => {
      //   if (event instanceof NavigationEnd && event.url === '/login') {
      //     this.menuCtrl.enable(false);
      //   }
      // });
    }
   
}

