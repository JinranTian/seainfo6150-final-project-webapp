import React from 'react';
import {Link} from "react-router-dom";

export default function IqTestIndex()
{
    document.body.style.backgroundColor="lightgreen";
    return (
        <div className={"d-flex flex-column text-align-center"}>
            <h2>Intelligence Quotient (IQ) Test</h2>
            <p>The quiz challenge of this page involves
                answering 10 questions in 10 minutes. This
                quiz is provided for entertainment purposes
                only: it's not an IQ test and your score will
                not qualify you for any certificates.
                Nevertheless, if you're pleased with your
                score, you might want to consider taking a
                properly administered and supervised IQ test.
            </p>
            <p>After you finish and before you view score, you can see the answer of each question by navigating through the questions</p>
            <Link to={"/iq/main"} style={{
                borderRadius: 10,
                padding: 10,
                textDecoration: 'none',
                backgroundColor: 'grey'
            }} className={"text-white"}>Start IQ Test</Link>
        </div>
    )
}