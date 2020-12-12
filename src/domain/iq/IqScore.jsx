import React from 'react';
import qs from 'qs';

export default function IqScore(props)
{
    let { iq } = qs.parse(props.location.search, { ignoreQueryPrefix: true })
    document.body.style.backgroundColor="lightgreen";
    return(
        <div>
            <h2>Well Done!</h2>
            <h4>You scored {iq/14} out of 10</h4>
        </div>
    )
}