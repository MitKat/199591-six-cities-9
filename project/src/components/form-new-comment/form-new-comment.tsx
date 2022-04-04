import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendComment } from '../../store/api-actions';
import { isFormEnabled } from '../../store/data-process/data-process';
import { CommentData } from '../../types/comment-data';

const MIN_LENGTH_REVIEW = 50;
const MAX_LENGTH_REVIEW = 300;

const STARS_REVIEW = [
  {
    id: 5,
    name: '5-star',
    title: 'perfect',
  },
  {
    id: 4,
    name: '4-star',
    title: 'good',
  },
  {
    id: 3,
    name: '3-star',
    title: 'not bad',
  },
  {
    id: 2,
    name: '2-star',
    title: 'badly',
  },
  {
    id: 1,
    name: '1-star',
    title: 'terribly',
  },
];

type FormNewCommentProps = {
  hotelId: string;
}

function FormNewComment({hotelId}: FormNewCommentProps): JSX.Element {
  const [textComment, setTextComment] = useState('');
  const [rating, setRating] = useState(0);

  const isDisabled = useAppSelector(({DATA}) => DATA.isDisabled);

  const dispatch = useAppDispatch();

  const textChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setTextComment(evt.target.value);
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const onSubmit = (commentData: CommentData) => {
    dispatch(sendComment(commentData));
  };

  const resetForm = () => {
    setRating(0);
    setTextComment('');
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: textComment,
      rating: rating,
      hotelId: hotelId,
    });

    dispatch(isFormEnabled(true));
    resetForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS_REVIEW.map((star) => (
          <Fragment key={star.id}>
            <input
              className="form__rating-input visually-hidden"
              name={star.name}
              value={String(star.id)}
              id={String(star.id)}
              type="radio"
              checked={rating === star.id}
              onChange={ratingChangeHandle}
              disabled={isDisabled}
            />
            <label htmlFor={String(star.id)} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={textComment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={textChangeHandle}
        disabled={isDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={rating === 0 || textComment.length <= MIN_LENGTH_REVIEW || textComment.length >= MAX_LENGTH_REVIEW}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormNewComment;
