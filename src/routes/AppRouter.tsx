import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout/MainLayout';
import Anticheat from '../pages/Anticheat/Anticheat';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Match from '../pages/Match/Match';
import News from '../pages/News/News';
import NotFound from '../pages/NotFound/NotFound';
import Play from '../pages/Play/Play';
import Registration from '../pages/Registration/Registration';
import Teams from '../pages/Teams/Teams';
import TournamentsList from '../pages/TournamentsList/TournamentsList';
import UserProfile from '../pages/UserProfile/UserProfile';
import UserLayout from '../layouts/UserLayout/UserLayout';
import UserTeams from '../pages/UserTeams/UserTeams';
import UserFriends from '../pages/UserFriends/UserFriends';
import Tournament from '../components/Tournament/Tournament';
import CreateTournament from '../pages/CreateTournament/CreateTournament';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="play">
          <Route index element={<Play />} />
          <Route path=":match_id" element={<Match />} />
        </Route>

        <Route path="news" element={<News />}></Route>
        <Route path="teams" element={<Teams />} />

        <Route path="tournaments">
          <Route index element={<TournamentsList />} />
          <Route path="createTournament" element={<CreateTournament />} />

          <Route path=":tournament_id">
            <Route index element={<Tournament />} />
            <Route path=":match_id" element={<Match />} />
          </Route>
        </Route>

        <Route path=":user_id" element={<UserLayout />}>
          <Route index element={<UserProfile />} />
          <Route path="friends" element={<UserFriends />} />
          <Route path="teams" element={<UserTeams />} />
        </Route>

        <Route path="anticheat" element={<Anticheat />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
