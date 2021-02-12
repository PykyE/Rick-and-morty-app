import React from 'react';

import useFetch from 'Hooks/useFetch';

import { getLocationById } from 'Utils/Requester';

function LocationById({ id }) {
  const { data, loading, error } = useFetch(() => getLocationById({ id }), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <div>{data.name}</div>
      )}
    </>
  );
}

export default LocationById;
