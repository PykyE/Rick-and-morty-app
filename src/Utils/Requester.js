import Client from './HTTPClient';

export const BASE_URL = 'https://rickandmortyapi.com/api/';
const RickApi = new Client(BASE_URL);

export function getCharacters({
  page = '',
  name = '',
  status = '',
  species = '',
  gender = '',
}) {
  const URL_PARAMS = new URLSearchParams({
    page,
    name,
    status,
    species,
    gender,
  });
  return RickApi.get(`character?${URL_PARAMS}`);
}

export function getCharacterById({ id = 0 }) {
  return RickApi.get(`character/${id}`);
}

export function getEpisodes({
  page = '',
  name = '',
  air_date = '',
  code = ''
}) {
  const URL_PARAMS = new URLSearchParams({
    page,
    name,
    air_date,
    code,
  });

  return RickApi.get(`episode?${URL_PARAMS}`);
}

export function getEpisodeById({ id = 0 }) {
  return RickApi.get(`episode/${id}`);
}

export function getLocations({
  page = '',
  name = '',
  type = '',
  dimension = '',
}) {
  const URL_PARAMS = new URLSearchParams({
    page,
    name,
    type,
    dimension,
  });
  return RickApi.get(`location?${URL_PARAMS}`);
}

export function getLocationById({ id = 0 }) {
  return RickApi.get(`location/${id}`);
}
