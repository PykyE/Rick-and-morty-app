import React from 'react';

import useFetch from 'Hooks/useFetch';

import { getLocationById } from 'Utils/Requester';

import Waiter from 'Components/Shared/Waiter'

function LocationById({ id }) {
  const { data, loading, error } = useFetch(() => getLocationById({ id }), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <Waiter></Waiter>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <div>
        </div>
      )}
    </>
  );
}

export default LocationById;
