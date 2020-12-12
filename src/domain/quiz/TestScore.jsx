import React from 'react';
import qs from 'qs';

export default function TestScore(props)
{
    let q = qs.parse(props.location.search, { ignoreQueryPrefix: true })
    let score = q.score || 0;
    let numQuestions = q.numQuestions || 0;

    return (
        <div>
            <h2>Well Done!</h2>
            <h4>You scored {score} out of {numQuestions}</h4>
            <h4>That is {Math.round((score/numQuestions)*100)}%</h4>
        </div>
    )
}