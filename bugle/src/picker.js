import React, {useState} from 'react';

export function Picker(props) {
    const [val0, set0] = useState(0);
    const [val1, set1] = useState(1);
    const [val2, set2] = useState(2);
    const [val3, set3] = useState(3);
    const [val4, set4] = useState(4);
    const [val5, set5] = useState(5);
    const [val6, set6] = useState(6);
    const [val7, set7] = useState(7);
    const [name, setName] = useState('');
    let [seq, setSeq] = useState(" ");


    return (
        <div id="picker" >
            <h1 id="headerText">Harmonic Series Sequence Creator</h1>
            <span>Simply click the buttons below to add the corresponding natural harmonic onto a new sequence! 
                All bugle calls are a subset of the harmonic series, so a few are listed right off the bat. 
                For an in-depth explanation of what these are, check out this Wikipedia 
                page: <a href="https://en.wikipedia.org/wiki/Harmonic_series_(music)" target="_blank">Harmonic Series</a></span>
            
            <div id="buttons">
                <button type="button" value="0" onClick={e => setSeq(seq += "0")}>0</button>
                <button type="button" value="1" onClick={e => setSeq(seq += "1")}>1</button>
                <button type="button" value="2" onClick={e => setSeq(seq += "2")}>2</button>
                <button type="button" value="3" onClick={e => setSeq(seq += "3")}>3</button>
                <button type="button" value="4" onClick={e => setSeq(seq += "4")}>4</button>
                <button type="button" value="5" onClick={e => setSeq(seq += "5")}>5</button>
                <button type="button" value="6" onClick={e => setSeq(seq += "6")}>6</button>
                <button type="button" value="7" onClick={e => setSeq(seq += "7")}>7</button>
            </div>

            <span className="sequence" >Sequence: {seq}</span>


            <input 
                className="nameBox"
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="name"
            />

            <button className="addButton">Add Sequence to Repertoire!</button>

        </div>

        
    );

}