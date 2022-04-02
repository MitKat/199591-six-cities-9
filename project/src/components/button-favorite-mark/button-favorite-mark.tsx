import React from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { favoriteMarkAction } from '../../store/api-actions';

const ClassNameButton = {
  Property: {
    Active: 'property__bookmark-button property__bookmark-button--active button',
    Normal: 'property__bookmark-button button',
    Svg: 'property__bookmark-icon',
  },
  Place: {
    Active: 'place-card__bookmark-button place-card__bookmark-button--active button',
    Normal: 'place-card__bookmark-button button',
    Svg: 'place-card__bookmark-icon',
  },
};

const SizeMark = {
  Big: {
    width: 31,
    height: 33,
  },
  Small: {
    width: 18,
    height: 19,
  },
};

type ButtonFavoriteMarkProps = {
  isFavorite: boolean;
  size: 'Big' | 'Small';
  typeMark: 'Property' | 'Place';
  hotelId: string;
}

function ButtonFavoriteMark({isFavorite, size, typeMark, hotelId}: ButtonFavoriteMarkProps): JSX.Element {
  const sizeIcon = SizeMark[size];
  const className = ClassNameButton[typeMark];
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  const favoriteHandle = () => {

    const favoriteMarkData = {
      id: Number(hotelId),
      status: Number(!isFavorite),
    };

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(favoriteMarkAction(favoriteMarkData));
    } else {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }

  };

  return (
    <button className={isFavorite ? className.Active : className.Normal}
      type="button"
      onClick = {favoriteHandle}
    >
      <svg className={className.Svg} width={sizeIcon.width} height={sizeIcon.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default React.memo(ButtonFavoriteMark);
