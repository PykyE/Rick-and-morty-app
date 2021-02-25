import React from 'react';

import useFetch from 'Hooks/useFetch';

import CharacterExtendedCard from 'Components/Characters/CharacterExtendedCard'

import { getCharacterById } from 'Utils/Requester';

import Waiter from 'Components/Shared/Waiter'

function CharacterById({ id }) {
  const { data, loading, error } = useFetch(() => getCharacterById({ id }), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <Waiter></Waiter>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <html>
          <CharacterExtendedCard {...data}/>
        </html>        
      )}
    </>
  );
}

export default CharacterById;
