import React from "react";
import { useEffect, useState } from "react";
import feeds from "./data/feeds.json";
//  import links from "./data/links.json"
import "./App.scss";

function App() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    feeds.forEach((feed) => {
      (async () => {
        const response = await fetch(feed.linksUrl);
        const tempLinks = await response.json();
        tempLinks.forEach((tempLink) => (tempLink.origin = feed.name));
        setLinks((n) => [...n,...tempLinks]);
      })();
    });
  },[]);
  return (
    <div className="App">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a target="_blank" href={link.url} rel="noreferrer">
                {link.title}
              </a>
              (from {link.origin})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
