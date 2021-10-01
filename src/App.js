import React from "react";


 import Links from "./data/links.json"
import "./App.scss";


function App() {

  return (
    
      <div className="App">
       <ul>
         {Links.map((link,index) =>{
           return(
             <li key = {index}>{link.title}</li>
           )
         })}
       </ul>
      </div>
    
  );
}

export default App;
