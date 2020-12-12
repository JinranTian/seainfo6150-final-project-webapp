import React from 'react';
import QuestionCard from "./QuestionCard";
import QuestionAnswer from "./QuestionAnswer";

export default function QuizQuestion(props)
{
    let {
        onChange,
        questionData,
        complete,
        style
    } = props;

    return (
        <div style={style}>
            <div className={"question-card"}>
                <QuestionCard questionData={questionData} />
                <QuestionAnswer questionData={questionData} onChange={onChange} complete={complete} />
            </div>
        </div>
    )


}