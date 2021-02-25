import React, { useState } from 'react';

import ListGrid from 'Components/Shared/ListGrid';
import PaginationBar from 'Components/Shared/PaginationBar';

import EpisodeFilter from 'Components/Episodes/EpisodeFilter';
import EpisodeCard from 'Components/Episodes/EpisodeCard';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getEpisodes } from 'Utils/Requester';

function Episodes() {
  const [page,setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    air_date: '',
    id: 0 
  });
  const { data, loading, error } = useFetch(
    () => getEpisodes({ page, ...filters }),
    [page]
  );

  const resetPage = () => {
    setPage(1);    
  }
  return (
    <>
      <EpisodeFilter
        readOnly={loading}
        inputs={filters}
        onChange={handleChange}
        onSubmit={handleSubmit(resetPage)}
      />
      <PaginationBar
        readOnly={loading}
        current={page}
        max={!(loading || error) ? +data.info.pages : 1}
        onChangePage={setPage}
      />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <ListGrid>
          {data.results.map(item => (
            <EpisodeCard key={item.id} {...item} />
          ))}
        </ListGrid>
      )}
    </>
  );
}

export default Episodes;
