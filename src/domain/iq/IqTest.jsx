import React, { useState } from 'react';
import Iq1 from '../../assets/images/iq-1.png';
import Iq2 from '../../assets/images/iq-2.png';
import Iq3 from '../../assets/images/iq-3.png';
import Iq4 from '../../assets/images/iq-4.png';
import Iq5 from '../../assets/images/iq-5.png';
import Iq6 from '../../assets/images/iq-6.png';
import Iq7 from '../../assets/images/iq-7.png';
import Iq8 from '../../assets/images/iq-8.png';
import Iq9 from '../../assets/images/iq-9.png';
import Iq10 from '../../assets/images/iq-10.png';
import Timer from "../quiz/Timer";
import IqQuestion from "./IqQuestion";
import { withRouter } from 'react-router-dom';


function IqTest(props)
{
    document.body.style.backgroundColor="lightgreen";
    let [iqData, setIqData] = useState({
        0: [Iq1, 'F'],
        1: [Iq2, 'B'],
        2: [Iq3, 'C'],
        3: [Iq4, 'B'],
        4: [Iq5, 'C'],
        5: [Iq6, 'F'],
        6: [Iq7, 'D'],
        7: [Iq8, 'E'],
        8: [Iq9, 'E'],
        9: [Iq10, 'A'],
    });

    // [IMAGE, ANSWER]

    let [q, setQ] = useState(0);
    let [complete, setComplete] = useState(false);
    let [score, setScore] = useState(0);
    let numQs = 9;

    let calculate = function()
    {
        let tempScore = 0;
        console.log(iqData)
        Object.keys(iqData).forEach(key =>
        {
            if(iqData[key][2] != null)
            {
                if(iqData[key][2] === iqData[key][1])
                {
                    tempScore++;
                }
            }
        })
        setScore(tempScore*14);
    }

    return (
        <div>
            <Timer complete={complete} setComplete={setComplete} />
            <button onClick={() =>
            {
                if(window.confirm(`Are you sure you want to end the IQ test?`))
                {
                    setComplete(true);
                    calculate();
                }
            }}>Finish</button>
            { complete && <button onClick={() =>
            {
                return props.history.push(`/iq/score?iq=${score}`);
            }}>View Score</button> }
            <hr/>
            <div className={"d-flex flex-column text-align-center"}>
                <h4>Question {q+1} of 10</h4>
                {Object.keys(iqData).map(k =>
                (
                    <IqQuestion iqData={iqData[k]} complete={complete} change={(v) =>
                    {
                        let temp = iqData;
                        temp[k][2] = v
                        setIqData(temp)
                        console.log(v)
                    }} style={{
                        display: q==k ? 'block' : 'none'
                    }} />
                ))}
            </div>
            <button onClick={() => setQ(q+1)} disabled={q+1 > numQs}>Next</button>
            <button onClick={() => setQ(q-1)} disabled={q-1 < 0}>Previous</button>
        </div>
    )

}

export default withRouter(IqTest);