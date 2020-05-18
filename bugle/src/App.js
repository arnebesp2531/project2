import React from 'react';
import './App.css';

import {Swatch} from './swatch.js';


function App() {
  return (
    <div id="swatches-root">
      <Swatch bugle={{name: "Reveille", sequence: "012345676543210"}}/>
    </div>
  );
}

export default App;
