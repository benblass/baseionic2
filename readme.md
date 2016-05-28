#Base ionic2 Application

Provides boilerplate code for a Ionic2 application with authentication interface.
Check branches for different authentication services implementations.

Soon to be available branches:


- firebase
- django-rest-authentication

---
You are on the FIREBASE branch
Pending the release of Firebase2 with SDK 3 of Firebase, the authentication providers will work only with projects created in the legacy console of firebase [https://ww.firebase.com]. (You can upgrade your project to the new console after creation and keep functionality).
---

###Configuration

- ionic 2.0.0-beta.25
- ionic-angular 2.0.0-beta.7
- Firebase2 2.4.2

###installation

(with ionic CLI installed)

```
git checkout
```
Update node packages

```
npm install
```
Configure your firebase backend in `app.ts`

```
npm install
```

Check

```
ionic serve
```

###TODO
- Major Reset Password function not implmemented
- Minor Improve errors display
- Minor Make use of the observable provided by angularfire instead of the manual EventEmitter to monitor authentication status changes
