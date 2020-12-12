import React from 'react';
import {Link} from "react-router-dom";

export default function QuizStart(props)
{
    document.body.style.backgroundColor="lightblue";
    return (
        <div className={"d-flex flex-column text-align-center"}>
            <h2>Knowledge Quiz</h2>
            <h3>Introduction</h3>
            <p className={"p-10"}>Do you consider yourself to be more of a book smart person or a street smart person?
                Whichever you are, luckily this general knowledge quiz will test both sides of the coin.
                Though you should be warned, there are no actual questions about coins in this quiz,
                so you can sit down and take that sigh of relief right now.</p>
            <hr/>
            <h4>After you finish and before you view score, you can see the answer of each question by navigating through the questions</h4>
            <h4>You have chosen to take a quiz of 20 questions.</h4>
            <p>You have 10 minutes to complete the quiz.</p>
            <Link to={`/quiz/main`} style={{
                borderRadius: 10,
                padding: 10,
                textDecoration: 'none',
                backgroundColor: 'grey'
            }} className={"text-white"}>Start Quiz</Link>
        </div>
    )
}