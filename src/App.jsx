import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'Components/Shared/Layout';

import Home from 'Pages/Other/Home';
import NotFound from 'Pages/Other/NotFound';
import CharactersPage from 'Pages/Characters/CharactersPage';
import CharactersByIdPage from 'Pages/Characters/CharacterByIdPage';
import LocationsPage from 'Pages/Locations/LocationsPage';
import LocationsByIdPage from 'Pages/Locations/LocationsByIdPage';
import EpisodesPage from 'Pages/Episodes/EpisodesPage'
import EpisodesByIdPage from 'Pages/Episodes/EpisodesByIdPage'

import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route path="/characters/:characterId" component={CharactersByIdPage} />
          <Route exact path="/locations" component={LocationsPage} />
          <Route path="/locations/:locationId" component={LocationsByIdPage} />
          <Route exact path="/episodes" component={EpisodesPage} />
          <Route path="/episodes/:episodeId" component={EpisodesByIdPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
