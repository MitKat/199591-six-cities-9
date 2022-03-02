import { ChangeEvent, FormEvent, useState } from 'react';

const MIN_LENGTH_REVIEW = 50;
const MAX_LENGTH_REVIEW = 300;

const starsReview = [
  {
    id: 1,
    name: '1-star',
    title: 'terribly',
  },
  {
    id: 2,
    name: '2-star',
    title: 'badly',
  },
  {
    id: 3,
    name: '3-star',
    title: 'not bad',
  },
  {
    id: 4,
    name: '4-star',
    title: 'good',
  },
  {
    id: 5,
    name: '5-star',
    title: 'perfect',
  },
];

function FormNewComment(): JSX.Element {
  const [textComment, setTextComment] = useState('');
  const [rating, setRating] = useState(0);

  const textChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setTextComment(evt.target.value);
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsReview.map((star) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              key={star.id}
              name={star.name}
              value={String(star.id)}
              id={String(star.id)}
              type="radio"
              checked={rating === star.id}
              onChange={ratingChangeHandle}
            />
            <label htmlFor={String(star.id)} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={textComment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={textChangeHandle}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={rating === 0 || textComment.length < MIN_LENGTH_REVIEW || textComment.length > MAX_LENGTH_REVIEW}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormNewComment;
