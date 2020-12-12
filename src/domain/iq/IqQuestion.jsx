import React, { useState } from 'react';

export default function IqQuestion(props)
{
    let { iqData, complete, style, change } = props;

    let [u, setU] = useState('');

    return (
        <div className={"card bg-white"} style={style}>
            <img src={iqData[0]} className={"img-responsive"} alt={"IQ"} />
            <hr/>
            <h4>Answer</h4>
            <select disabled={complete} onChange={complete ? null : (e) =>
            {
                if(e.target.value != null)
                    change(e.target.value);
                setU(e.target.value)
            }} value={iqData[3] || null}>
                <option selected disabled>-- SELECT --</option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"C"}>C</option>
                <option value={"D"}>D</option>
                <option value={"E"}>E</option>
                <option value={"F"}>F</option>
            </select>
            {complete ?
                    u === iqData[1] ? <div className={"success p-10"}>Correct!</div> : <div className={"danger text-white p-10"}>Wrong! The correct answer is {iqData[1]}</div>
             : ''}
        </div>
    )
}