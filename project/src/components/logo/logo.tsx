import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoProps = {
  className: string;
}

function Logo(props: LogoProps): JSX.Element {
  const {className} = props;
  return (
    <Link className={className} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
