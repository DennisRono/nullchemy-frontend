import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Routes/Home'
import About from './Routes/About'

const Routes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
            </Route>
        </Route>
        </Routes>
    </BrowserRouter>,
  )
}

export default Routes