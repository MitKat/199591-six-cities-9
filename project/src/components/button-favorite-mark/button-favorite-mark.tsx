
enum ClassNameButton {
  Active = 'place-card__bookmark-button place-card__bookmark-button--active button',
  Normal = 'place-card__bookmark-button button',
}

type ButtonFavoriteMarkProps = {
  isFavorite: boolean;
}

function ButtonFavoriteMark({isFavorite}: ButtonFavoriteMarkProps): JSX.Element {
  const classNameActive = ClassNameButton.Active;
  const classNameNormal = ClassNameButton.Normal;

  return (
    <button className={isFavorite ? classNameActive : classNameNormal} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default ButtonFavoriteMark;
