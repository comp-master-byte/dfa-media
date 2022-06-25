import React from "react";
import "./styles/main.scss";
import {Routes, Route} from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { MyStructure } from "./pages/MyStructure/MyStructure.jsx";
import { DashBoard } from "./pages/DashBoard/DashBoard.jsx";
import {Active} from "./pages/Active/Active.jsx";
import {Blogers} from "./pages/Blogers/Blogers.jsx";
import {Landings} from "./pages/Landings/Landings.jsx";
import {Maraphon} from "./pages/Maraphon/Maraphon.jsx";
import {PR} from "./pages/PR/PR.jsx";
import {Shop} from "./pages/Shop/Shop.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="structure" element={<MyStructure />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="active" element={<Active />} />
        <Route path="blogers" element={<Blogers />} />
        <Route path="landings" element={<Landings />} />
        <Route path="maraphon" element={<Maraphon />} />
        <Route path="pr" element={<PR />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
