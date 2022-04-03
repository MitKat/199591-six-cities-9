import React from 'react';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet, { Marker } from 'leaflet';
import { useRef } from 'react';
import { Offer } from '../../types/offer';
import { Location } from '../../types/location';
import useMap from '../../hooks/use-map';
import { SizeMarker, SizeAnchorMarker, UrlMarker } from '../../const';

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
  iconUrl: UrlMarker.Default,
  iconSize: [SizeMarker.Width, SizeMarker.Height],
  iconAnchor: [SizeAnchorMarker.Width, SizeAnchorMarker.Height],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: UrlMarker.Current,
  iconSize: [SizeMarker.Width, SizeMarker.Height],
  iconAnchor: [SizeAnchorMarker.Width, SizeAnchorMarker.Height],
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
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, points, selectedPoint, location]);

  return (
    <section className={classNameMap} ref={mapRef}>
    </section>
  );
}

export default React.memo(Map);
