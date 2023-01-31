import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Latest from './pages/Latest';
import TopRated from './pages/TopRated';
import Error from './pages/Error';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/movie/latest' element={<Latest />}></Route>
          <Route path='/movie/top_rated' element={<TopRated />}></Route>
          <Route path='/movie/:id' element={<SingleMovie />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
