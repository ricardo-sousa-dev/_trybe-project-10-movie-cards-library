// import { render } from 'enzyme';
import React from 'react';
import './App.css';
<<<<<<< HEAD
import data from './data';
=======
>>>>>>> 4952764 (Resolve o requisito 3)
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
<<<<<<< HEAD
      <MovieList movies={ data } />
=======
      <MovieList />
>>>>>>> 4952764 (Resolve o requisito 3)
=======
      <MovieList movies={ Movies } />
>>>>>>> 733ccde (Resolve o requisito 4)
    </div>
  );
}

export default App;
