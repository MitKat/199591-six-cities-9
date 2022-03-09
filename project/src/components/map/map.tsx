import { Location, Offer } from '../../mocks/offers';
import { useRef } from 'react';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, WIDTH_MARKER, HEIGHT_MARKER, ANCHOR_MARKER } from '../../const';

export enum MapContainer {
  MainPage = 'cities__map map',
  PropertyPage = 'property__map map',
}

type MapProps = {
  points: Offer[];
  location: Location;
  selectedPoint: Offer | undefined;
  typePage: 'MainPage' | 'PropertyPage';
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [WIDTH_MARKER, HEIGHT_MARKER],
  iconAnchor: [ANCHOR_MARKER, HEIGHT_MARKER],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [WIDTH_MARKER, HEIGHT_MARKER],
  iconAnchor: [ANCHOR_MARKER, HEIGHT_MARKER],
});

function Map({typePage, points, location, selectedPoint}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  const classNameMap = MapContainer[typePage];

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={classNameMap} ref={mapRef}>
    </section>
  );
}

export default Map;
