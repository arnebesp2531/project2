import React, {useState} from 'react';

export function Picker(props) {
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
                <button type="button" onClick={e => setSeq(seq += "1")}>1</button>
                <button type="button" onClick={e => setSeq(seq += "2")}>2</button>
                <button type="button" onClick={e => setSeq(seq += "3")}>3</button>
                <button type="button" onClick={e => setSeq(seq += "4")}>4</button>
                <button type="button" onClick={e => setSeq(seq += "5")}>5</button>
                <button type="button" onClick={e => setSeq(seq += "6")}>6</button>
                <button type="button" onClick={e => setSeq(seq += "7")}>7</button>
                <button type="button" onClick={e => setSeq(seq += "8")}>8</button>
            </div>

            <span className="sequence" >Sequence: {seq}</span>


            <input 
                className="nameBox"
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="name"
            />

            <button 
                onClick={() => {
                    props.add({name, seq});
                    setSeq("");
                    setName("");
                    }} 
                className="addButton">
                Add Sequence to Repertoire!
            </button>

        </div>

        
    );

}