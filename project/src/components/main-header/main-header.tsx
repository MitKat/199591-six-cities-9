import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import Logo from '../logo/logo';

type MainHeaderProps = {
  activeLogo: boolean;
}


function MainHeader({activeLogo}: MainHeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);
  const user = useAppSelector(({USER}) => USER.user);
  const dispatch = useAppDispatch();

  const isActive = activeLogo;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={isActive ? 'HeaderActive' : 'Header'} size='Big' />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                (authorizationStatus === AuthorizationStatus.Auth) ?
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{user.email}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="/"
                        onClick={(evt) => {
                          evt.preventDefault();
                          dispatch(logoutAction());
                        } }
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default React.memo(MainHeader);
