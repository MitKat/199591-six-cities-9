export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ClassLogo {
  HeaderMainPage = 'header__logo-link header__logo-link--active',
  Header = 'header__logo-link',
  Footer = 'footer__logo-link',
}
