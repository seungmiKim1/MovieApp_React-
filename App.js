import React from 'react'; 
import './App.css';

/*function Thursday() { 
  return <h1>Today is Thursday!</h1>;
}

function Movie() {
  return <h1>I like Movie!</h1>;
}*/

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return(
    /*<div className="App"/>;*/
    <div>
      
      <Food fav="kimchi"/>
      <Food fav="rameni"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;
