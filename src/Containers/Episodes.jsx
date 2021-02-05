import React from 'react';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getEpisodes } from 'Utils/Requester';

function Episodes() {
  const [filters, setFilter, onSubmit] = useFormControl({
    name: '',
    episodes: '',
  });
  const { data, loading, error, reFetch } = useFetch(
    () => getEpisodes({ ...filters }),
    []
  );
  return (
    <>
      <input
        readOnly={loading}
        autoFocus
        type="number"
        value={page}
        onChange={handlePage}
      />
      <CharactersFilters
        readOnly={loading}
        inputs={filters}
        onChange={handleChange}
        onSubmit={handleSubmit(reFetch)}
      />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <CharactersList items={data.results} />
      )}
    </>
  );
}

export default Episodes;
