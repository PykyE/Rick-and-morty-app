import React, { useState } from 'react';

import ListGrid from 'Components/Shared/ListGrid';
import PaginationBar from 'Components/Shared/PaginationBar';

import LocationFilter from 'Components/Locations/LocationFilter';
import LocationCard from 'Components/Locations/LocationCard';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getLocations } from 'Utils/Requester';

function Locations() {
  const [page,setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    type: '',
    dimension: ''
  });
  const { data, loading, error } = useFetch(
    () => getLocations({ page, ...filters }),
    [page]
  );
  const resetPage = () => {
    setPage(1);    
  }
  return (
    <>
      <LocationFilter
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
            <LocationCard key={item.id} {...item} />
          ))}
        </ListGrid>
      )}
    </>
  );
}

export default Locations;
