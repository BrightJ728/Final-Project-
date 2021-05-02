import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule],
  providers: [SplashScreen, SpeechRecognition, Geolocation, NativeGeocoder, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: SETTINGS , useValue: {} }, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
