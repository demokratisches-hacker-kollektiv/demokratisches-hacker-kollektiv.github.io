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
import Untersuchungen from "./pages/Untersuchungen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="repository" element={<Repository />} />
          <Route path="medien" element={<Medien />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="untersuchungen" element={<Untersuchungen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
