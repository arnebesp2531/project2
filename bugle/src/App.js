import React, { useState } from 'react';
import './App.css';

import {Swatch} from './swatch.js';
import {Picker} from './picker.js';

const initialBugles = [
  {name: "Assembly", seq: "33434544454565456543334444"},
  {name: "Reveille", seq: "34543545435454345434543545435454334"},
  {name: "Taps", seq: "334345345345345456543334"},
  {name: "To The Colors", seq: "5564453344444566654563"},
  {name: "Retreat", seq: "33545432343234543223345"},
];


function App() {
  const [bugleCalls, setBugleCalls] = useState(initialBugles);

  const removeBugleCall = name => {
    setBugleCalls(bugleCalls => bugleCalls.filter(bugleCall => bugleCall.name !== name));
  }
   
  const addBugleCall = newBugleCall => {
    setBugleCalls(bugleCalls => [newBugleCall, ...bugleCalls.filter(bugleCall => bugleCall.name !== newBugleCall.name)]);
  }

  return (
    <div id="swatches-root">
      <Picker add={addBugleCall} />

      {bugleCalls.map(bugleCall => <Swatch key={bugleCall.name} bugle={bugleCall} remove={removeBugleCall} />)}

   
    </div>
  );
}

export default App;
