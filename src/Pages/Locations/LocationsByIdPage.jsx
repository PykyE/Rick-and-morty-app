import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from 'Hooks/usePageTitle';
import LocationById from 'Containers/Locations/LocationById';

function LocationsByIdPage() {
  const { locationId } = useParams();
  usePageTitle('Location Detail');

  return (
    <section className="container py-3">
      <LocationById id={locationId} />
    </section>
  );
}

export default LocationsByIdPage;
