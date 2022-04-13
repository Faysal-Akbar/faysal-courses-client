import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/courses" element={<Courses />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
