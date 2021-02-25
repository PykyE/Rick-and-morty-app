import React, { useState } from "react";

import ListGrid from "Components/Shared/ListGrid";

import CharacterCard from "Components/Characters/CharacterCard";

import useFetch from "Hooks/useFetch";

import { getMultipleCharactersById } from "Utils/Requester";

import Waiter from "Components/Shared/Waiter.jsx"

const MultipleCharacters = ({ ids }) => {
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
        <ListGrid>
          {data.map((item) => (
            <CharacterCard key={item.id} {...item} />
          ))}
        </ListGrid>
      )}
    </>
  );
};

export default MultipleCharacters;
