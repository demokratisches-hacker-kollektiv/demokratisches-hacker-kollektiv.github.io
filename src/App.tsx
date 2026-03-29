/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Repository from "./pages/Repository";
import Medien from "./pages/Medien";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

export default function App() {
  return (
    <BrowserRouter basename="/demokratisches-hacker-kollektiv.github.io">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="repository" element={<Repository />} />
          <Route path="medien" element={<Medien />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
