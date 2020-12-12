import React from 'react';

export default function QuestionCard(props)
{
    let {
        questionData
    } = props;

    let {
        type,
        category,
        difficulty,
        question,
    } = questionData;

    return (
        <div>
            <small className={"font-secondary fw-700"}>Difficulty: {difficulty.toUpperCase()} | Type: {type === 'multiple' ? `Multiple Choice` : `True or False`}</small>
            <hr />
            <small>{category}</small>
            <div className={"d-flex flex-column text-align-center"}>
                <h3 style={{padding: 0, margin: 0}}>Question</h3>
                <p dangerouslySetInnerHTML={{
    __html: question
}}/>
            </div>

            <hr />
        </div>
    )
}