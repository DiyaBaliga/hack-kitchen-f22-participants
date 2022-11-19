import React from "react";
import './NavBar.css';

function NavBar({setSearchTerm}) {
  
  return (
    <div>
    <div class="topnav">
      <a href="#top">Dumplings</a>
      <a href="https://www.youtube.com/watch?v=ah5G2EXKgvA&themeRefresh=1">Pizza</a>
      <a href="#top">Gyoza</a>
      <a href="https://www.scmp.com/magazines/style/travel-food/article/3002819/eat-local-osaka-think-gyoza-hot-dogs-and-marinated-ovum">Sandwich</a>
      <a href="#top">Potstickers</a>
      <a href="https://twitter.com/reactjpg/status/1451778529545252864?lang=ha">Cat</a>
      <label class="search-label" for="search">Search
        <input 
          type="text" 
          id="search" 
          name="search"
          onSubmit={(e) => setSearchTerm(e.target.value)}></input>
      </label>
    </div>
    <div class="topnav">
      <a href="#top">Top</a>
      <a href="#ingredients">Ingredients</a>
      <a href="#recipe">Recipe</a>
    </div>
    </div>
  );
}

export default NavBar;