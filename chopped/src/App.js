import React, {useState} from 'react';
import './App.css';
import {Header, Ingredients, NavBar, Recipe, SearchResults} from './Components';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchResults searchTerms={searchTerm} />
      <NavBar setSearchTerm={setSearchTerm}/>
      <Header />
      <Ingredients />
      <Recipe />
    </div>
  );
}

export default App;
