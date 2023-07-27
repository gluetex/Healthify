import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DeviceMotion } from '@awesome-cordova-plugins/device-motion/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideStorage, getStorage } from "@angular/fire/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhwUQ4dyWspAU53ErwArgyXhl-ZzZNw2I",
  authDomain: "healthify-78015.firebaseapp.com",
  projectId: "healthify-78015",
  storageBucket: "healthify-78015.appspot.com",
  messagingSenderId: "307872925519",
  appId: "1:307872925519:web:74d67cc5cbf3091704a73a",
  measurementId: "G-09F20RSR0T"
};



@NgModule({
  declarations: [AppComponent],
  imports: [AngularFireAuthModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(firebaseConfig)),
     provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DeviceMotion],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}

