import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviewsAction } from '../../store/api-actions';
import FormNewComment from '../form-new-comment/form-new-comment';
import Reviews from '../reviews/reviews';

function ContainerReviews(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);
  const reviews = useAppSelector(({DATA}) => DATA.reviews);

  useEffect(() => {
    dispatch(fetchReviewsAction(String(id)));
  }, [id, dispatch]);

  return (
    <section className="property__reviews reviews">
      <Reviews reviews={reviews} />
      {(authorizationStatus === AuthorizationStatus.Auth) && <FormNewComment hotelId={String(id)} />}
    </section>
  );
}

export default ContainerReviews;
