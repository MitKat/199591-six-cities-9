import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { AppRoute, AuthorizationStatus, ValidatePattern } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import Logo from '../logo/logo';
import LocationLogin from './location-login';

function SignIn(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.Main));
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null ) {
      const isValid = ValidatePattern.lettersPassword.test(passwordRef.current.value)
                   && ValidatePattern.numbersPassword.test(passwordRef.current.value);
      if (isValid) {
        onSubmit({
          login: emailRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        toast('Password must contain at least one letter and one number');
      }
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type='Header' size='Big' />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button"
                type="submit"
              >
                 Sign in
              </button>
            </form>
          </section>
          <LocationLogin />
        </div>
      </main>
    </div>
  );
}

export default SignIn;
