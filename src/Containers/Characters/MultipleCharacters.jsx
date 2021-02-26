import React, { useState } from "react";

import ListGrid from "Components/Shared/ListGrid";

import CharacterCard from "Components/Characters/CharacterCard";
import CharacterExtendedCard from '../../Components/Characters/CharacterExtendedCard'

import useFetch from "Hooks/useFetch";

import { getMultipleCharactersById } from "Utils/Requester";

import Waiter from "Components/Shared/Waiter.jsx"

const MultipleCharacters = ({ ids }) => {
  console.log(typeof(ids));
  console.log(ids);
  console.log(ids.length);
  const { data, loading, error } = useFetch(
    () => getMultipleCharactersById({ ids }),
    []
  );

  return (
    <>
      {loading ? (
        <Waiter></Waiter>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <>{(ids.length===1)?
          <CharacterExtendedCard {...data}/>:        
          <ListGrid>
          {data.map((item) => (
            <CharacterCard key={item.id} {...item} />
          ))}
        </ListGrid>}
        </>
      )}
    </>
  );
};

export default MultipleCharacters;
