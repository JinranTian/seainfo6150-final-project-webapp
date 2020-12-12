import React, { useState, useEffect } from 'react';

export default function QuestionAnswer(props)
{


    function shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    let {
        onChange,
        questionData,
        complete
    } = props;

    let {
        correct_answer,
        incorrect_answers,
        type
    } = questionData;

    useEffect(() =>
    {
        let shuffled = shuffleArray([correct_answer, ...incorrect_answers])
        setAnswers(shuffled)
    }, [correct_answer, incorrect_answers])

    let [answers, setAnswers] = useState([]);
    let [userAnswer, setUserAnswer] = useState('');

    return type === 'multiple' ? (
        <div className={"d-flex flex-column"}>
            <select label={"Answer"} onChange={(e) =>
            {
                setUserAnswer(e.target.value)
                onChange(questionData, e.target.value)
            }} disabled={complete}>
                <option disabled selected value>-- SELECT --</option>
                {answers && Object.keys(answers).map(k =>
                    (
                        <option value={answers[k]} dangerouslySetInnerHTML={{__html: answers[k]}}></option>
                    ))}
            </select>
            {complete ?
                    userAnswer === correct_answer ? <div className={"success p-10"}>Correct!</div> : <div className={"danger text-white p-10"}>Wrong! The correct answer is {correct_answer}</div>
                : ''}
        </div>
    ) : (
        <div className={"d-flex flex-column"}>
            <select label={"Answer"} onChange={(e) =>
            {
                setUserAnswer(e.target.value)
                onChange(questionData, e.target.value)
            }} disabled={complete}>
                <option disabled selected value>-- SELECT --</option>
                {answers && Object.keys(answers).map(k =>
                    (
                        <option value={answers[k]} dangerouslySetInnerHTML={{__html: answers[k]}}></option>
                    ))}
            </select>
            {complete ?
                userAnswer === correct_answer ? <div className={"success p-10"}>Correct!</div> : <div className={"danger text-white p-10"}>Wrong! The correct answer is {correct_answer}</div>
                : ''}
        </div>
    )
}