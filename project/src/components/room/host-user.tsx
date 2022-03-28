import { Offer } from '../../types/offer';

enum ClassNameHostUser {
  Pro = 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper',
  NotPro = 'property__avatar-wrapper user__avatar-wrapper',
}

type HostUserProps = {
  offer: Offer;
}

function HostUser({offer}: HostUserProps): JSX.Element {
  const {host} = offer;

  const classNamePro = ClassNameHostUser.Pro;
  const classNameNotPro = ClassNameHostUser.NotPro;
  return (
    <>
      <div className={host.isPro ? classNamePro : classNameNotPro}>
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
