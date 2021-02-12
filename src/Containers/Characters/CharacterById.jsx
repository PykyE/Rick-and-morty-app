import React from 'react';

import useFetch from 'Hooks/useFetch';

import CharacterExtendedCard from 'Components/Characters/CharacterExtendedCard'
import ListGrid from 'Components/Shared/ListGrid'

import { getCharacterById } from 'Utils/Requester';

function CharacterById({ id }) {
  const { data, loading, error } = useFetch(() => getCharacterById({ id }), [
    id,
  ]);

  console.log('This is the data:')
  console.log(data);
  return (
    <>
      {/* {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <CharacterExtendedCard key={data.id}/>
      )} */}
      {/* <ListGrid>
          {data.results.map(item => (
            <CharacterExtendedCard key={item.id} {...item} />
          ))}
        </ListGrid> */}
    </>
  );
}

export default CharacterById;
