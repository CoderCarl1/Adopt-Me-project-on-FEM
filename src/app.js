import React from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams'

const App = () => {
  return (
    <div>
    <h1 id="something-important"> Adopt Me</h1>
    <SearchParams />
    {/* <Pet 
    name="luna" 
    animal="dog" 
    breed="Havanese"/>
    <Pet 
    name="Pepper" 
    animal="Bird" 
    breed="Cockatiel"/>
    <Pet 
    name="Doink" 
    animal="Cat" 
    breed="Mixed"/> */}
    </div>
  )
};

render(<App />, document.getElementById("root"));
