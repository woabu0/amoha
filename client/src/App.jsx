import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  return (
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Main>
  );
}

export default App;
