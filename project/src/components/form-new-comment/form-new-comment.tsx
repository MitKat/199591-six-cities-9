import { ChangeEvent, FormEvent, useState } from 'react';

const starsReview = [
  {
    id: '1',
    name: '1-star',
    title: 'terribly',
  },
  {
    id: '2',
    name: '2-star',
    title: 'badly',
  },
  {
    id: '3',
    name: '3-star',
    title: 'not bad',
  },
  {
    id: '4',
    name: '4-star',
    title: 'good',
  },
  {
    id: '5',
    name: '5-star',
    title: 'perfect',
  },
];

function FormNewComment(): JSX.Element {
  const [formData, setFormData] = useState({review: ''});
  const [rating, setRating] = useState({star: ''});

  const textChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setRating({...rating, [name]: value});
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={ratingChangeHandle}>
        {starsReview.map((star) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              key={star.id}
              name={rating.star}
              value={star.id}
              id={star.name}
              type="radio"
            />
            <label htmlFor={star.title} className="reviews__rating-label form__rating-label" title={star.title}>
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
        value={formData.review}
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
          disabled={rating.star === '' || formData.review === ''}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormNewComment;
