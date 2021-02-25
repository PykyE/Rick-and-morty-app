import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from 'Hooks/usePageTitle';
import MultipleCharacters from 'Containers/Characters/MultipleCharacters';

function CharactersByIdPage() {
  const { charIds } = useParams();
  usePageTitle('Multiple Characters Details');
  return (
    <section className="container py-3">
      <MultipleCharacters ids = {charIds}> </MultipleCharacters>
    </section>
  );
}

export default CharactersByIdPage;
