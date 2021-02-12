import React from 'react';

import useFetch from 'Hooks/useFetch';

import { getEpisodeById } from 'Utils/Requester';

function EpisodeById({ id }) {
  const { data, loading, error } = useFetch(() => getEpisodeById({ id }), [
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

export default EpisodeById;
