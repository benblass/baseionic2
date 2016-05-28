import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {AuthService} from './services/authService';
import {
    AngularFire, 
    FIREBASE_PROVIDERS, 
    defaultFirebase, 
    firebaseAuthConfig,
    AuthMethods,
    AuthProviders
  } from 'angularfire2';



@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    AuthService,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://testfirebasebackend.firebaseio.com'),
    firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
      remember: 'default',
      scope: ['email']
    })
     ]
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
