import React from "react";
import "./styles/main.scss";
import {Routes, Route} from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { MyStructure } from "./pages/MyStructure/MyStructure.jsx";
import { DashBoard } from "./pages/DashBoard/DashBoard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="structure" element={<MyStructure />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  );
}

export default App;
