import React, { useState, useEffect } from 'react';
import QuizQuestion from "./QuizQuestion";
import Timer from "./Timer";
import { withRouter } from 'react-router-dom';

function QuizMain(props)
{
    useEffect(() =>
    {
        fetchQuizQuestions(20);
        setQ(0);
    }, [])



    let numQuestions = 20; // number of questions
    let [questions, setQuestions] = useState([]);
    let [complete, setComplete] = useState(false);
    let [view, setView] = useState(false);
    let [q, setQ] = useState(0);
    let [qList, setQList] = useState([])

    useEffect(() =>
    {
        if(view!==true) return;
        runView();
    }, [view])

    let runView = () =>
    {
        let score = 0;
        Object.keys(qList).forEach(key =>
        {
            if(qList[key][0] == qList[key][1])
                score++;
        })
        return props.history.push(`/quiz/score?score=${score}&numQuestions=${questions.length}`);
    }


    if(numQuestions < 1) return window.location = "/";

    let onChange = ({ correct_answer }, a) =>
    {
        console.log(correct_answer, a)
        let temp = qList;
        temp[q] = [correct_answer, a];
        setQList(temp);
    }

    let fetchQuizQuestions = (_numQuestions) =>
    {
        fetch(`https://opentdb.com/api.php?amount=${_numQuestions}`)
            .then(result => result.json())
            .then(data =>
            setQuestions(data.results));
    }

    document.body.style.backgroundColor="lightblue";

    return (
        <div>
            <h1>Quiz Time!</h1>
            <Timer complete={complete} setComplete={setComplete} />
            { complete && <button onClick={() => setView(true)}>View Score</button> }
            <button onClick={() =>
            {
                if(window.confirm(`Are you sure you want to finish the quiz?`))
                {
                    setComplete(true)
                }
            }} >Finish
            </button>
            <h4>Question {q+1} of 20</h4>
            {Object.keys(questions).map(k =>
                (
                    <QuizQuestion questionData={questions[k]} onChange={onChange} complete={complete} style={{
                                      display: q == k ? 'block' : 'none'
                    }}/>
                ))}
            <button onClick={() => setQ(q+1)} disabled={q+1 > questions.length-1}>Next</button>
            <button onClick={() => setQ(q-1)} disabled={q-1 <= -1}>Previous</button>
        </div>
    )
}

export default withRouter(QuizMain);