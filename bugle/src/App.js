import React, { useState } from 'react';
import './App.css';

import {Swatch} from './swatch.js';
import {Picker} from './picker.js';

const initialBugles = [
  {name: "Reveille", sequence: "23432434324343234"},
  {name: "Taps", sequence: "223234234234234345432223333"},
  {name: "To The Colors", sequence: "4453342233333455543452"},
  {name: "Retreat", sequence: "23455544434322345554442223"},
  {name: "Assembly", sequence: "22323433343454345432223333 22323433343454345432223333"},
];


function App() {
  const [bugleCalls, setBugleCalls] = useState(initialBugles);

  const removeBugleCall = name => {
    setBugleCalls(bugleCalls => bugleCalls.filter(bugleCall => bugleCall.name !== name));
  }

  return (
    <div id="swatches-root">
      <Picker />


      {bugleCalls.map(bugleCall => <Swatch key={bugleCall.name} 
      bugle={bugleCall} remove={removeBugleCall} />)}

   
    </div>
  );
}

export default App;
