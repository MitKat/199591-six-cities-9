import { Fragment } from 'react';
import dayjs from 'dayjs';
import { getPercRating } from '../../utils';
import { Review } from '../../types/review';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <Fragment>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          const {comment, user, id, rating, date} = review;
          const dateReview = dayjs(date).format('MMMM YYYY');
          return(
            <li className="reviews__item" key={id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                  {user.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${getPercRating(rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
                </p>
                <time className="reviews__time" dateTime="2019-04-24">{dateReview}</time>
              </div>
            </li>
          );
        }).slice(-10).reverse()}
      </ul>
    </Fragment>
  );
}

export default Reviews;
