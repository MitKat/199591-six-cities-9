import { Offer } from '../../mocks/offers';

enum ClassNameHostUser {
  Pro = 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper',
  NotPro = 'property__avatar-wrapper user__avatar-wrapper',
}

type HostUserProps = {
  type: 'Pro' | 'NotPro';
  offer: Offer;
}

function HostUser({type, offer}: HostUserProps): JSX.Element {
  const {host} = offer;
  const classNamePro = ClassNameHostUser[type];
  return (
    <>
      <div className={classNamePro}>
        <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
      </div>
      <span className="property__user-name">
        {host.name}
      </span>
      {
        host.isPro &&
        <span className="property__user-status">Pro</span>
      }
    </>
  );
}

export default HostUser;
