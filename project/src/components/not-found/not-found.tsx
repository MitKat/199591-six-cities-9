import { Link } from 'react-router-dom';
import { AppRoute} from '../../const';
import Logo from '../logo/logo';
import './not-found.css';

function NotFound(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type='Header' size='Big'/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <section className='not-found__title'>
          <h1 >404. Page Not Found</h1>
        </section>


      </main>
      <div className='not-found__footer'>
        <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
      </div>
    </div>
  );
}

export default NotFound;
