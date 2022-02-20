import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <section  style={{marginTop: 80, textAlign: 'center', fontStyle: 'italic'}}>
          <h1 className="title">404. Page Not Found</h1>
        </section>


      </main>
      <div style={{height: 480, marginTop: 80, textAlign: 'center'}}>
        <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
      </div>
    </div>
  );
}

export default NotFound;
