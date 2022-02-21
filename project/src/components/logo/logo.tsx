import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


export enum ClassNameLogo {
  HeaderActive = 'header__logo-link header__logo-link--active',
  Header = 'header__logo-link',
  Footer = 'footer__logo-link',
}


const SizeLogo = {
  Big: {
    width: 81,
    height: 41,
  },
  Small: {
    width: 64,
    height: 33,
  },
} as const;


type LogoProps = {
  type: 'Header' | 'HeaderActive' | 'Footer';
  size: 'Big' | 'Small';
}

function Logo({type, size}: LogoProps): JSX.Element {
  const sizeSvg = SizeLogo[size];
  const className = ClassNameLogo[type];
  return (
    <Link className={className} to={AppRoute.Main}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={sizeSvg.width}
        height={sizeSvg.height}
      />
    </Link>
  );
}

export default Logo;
