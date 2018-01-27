import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';

import { TaskPage } from '../pages/task/task';

import { AngularFireModule } from 'angularfire2';

// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyAuduJ0f3Pa4p7ue0JfVGNKSQZJmbNfyc0",
    authDomain: "shoppinglist-4259e.firebaseapp.com",
    databaseURL: "https://shoppinglist-4259e.firebaseio.com",
    projectId: "shoppinglist-4259e",
    storageBucket: "shoppinglist-4259e.appspot.com",
    messagingSenderId: "922418142862"
};

@NgModule({
  declarations: [
    MyApp,
    LoginEmailPage,
    SignUpPage,
    TaskPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginEmailPage,
    SignUpPage,
    TaskPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider]
})
export class AppModule {}
