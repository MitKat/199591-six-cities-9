import Logo from '../logo/logo';

const ActiveLogo = {
  Active: 'true',
  Inactive: 'false',
} as const;

type MainHeaderProps = {
  statusLogo: 'Active' | 'Inactive';
}

function MainHeader({statusLogo}: MainHeaderProps): JSX.Element {
  const status =ActiveLogo[statusLogo];
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {(status === 'true') ?
              <Logo type='HeaderActive' size='Big' />
              : <Logo type='Header' size='Big' />}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href=" ">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href=" ">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
