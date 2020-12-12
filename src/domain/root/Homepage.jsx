import React from 'react';
import {Link} from "react-router-dom";

export default function Homepage(props)
{
    let { appVersion } = props;
    document.body.style.backgroundColor="white";
    return (
        <div>
            <div>
                <h2>Quiz App</h2>
            </div>
            <p>Welcome to the Quiz App, and Games! This is a very long-winded introduction!</p>
            <hr/>
            <div className={"d-flex flex-row justify-content-center p-20 home-cards"}>
                <div className={"card bg-lb"}>
                    <h3>Knowledge Quiz</h3>
                    <p>Do you consider yourself to be more <br/>
                        of a book smart person or a street  <br/>
                        smart person? Whichever you are,  <br/>
                        luckily this general knowledge quiz<br/>
                        will test both sides of the coin. <br/>
                        Though you should be warned, there <br/>
                        are no actual questions about coins <br/>
                        in this quiz, so you can sit down <br/>
                        and take that sigh of relief right now.</p>
                    <hr />
                    <div className={"d-flex flex-column text-align-center"}>
                        <Link to={"/quiz/start"} style={{
                            borderRadius: 10,
                            padding: 10,
                            textDecoration: 'none',
                            backgroundColor: 'grey'
                        }} className={"text-white"}>Go</Link>
                    </div>

                </div>
                <div className={"card bg-lg"}>
                    <h3>Intelligence Quotient</h3>
                    <p>The quiz challenge of this page involves <br/>
                        answering 10 questions in 10 minutes. This<br/>
                        quiz is provided for entertainment purposes<br/>
                        only: it's not an IQ test and your score will<br/>
                        not qualify you for any certificates. <br/>
                        Nevertheless, if you're pleased with your <br/>
                        score, you might want to consider taking a<br/>
                        properly administered and supervised IQ test.</p>
                    <hr /><br/>
                    <div className={"d-flex flex-column text-align-center"}>
                        <Link to={"/iq"} style={{
                            borderRadius: 10,
                            padding: 10,
                            textDecoration: 'none',
                            backgroundColor: 'grey'
                        }} className={"text-white"}>Go</Link>
                    </div>
                </div>
                <div className={"card bg-pk"}>
                    <h3>Other Games</h3>
                    <p>Here are more interesting games you <br/>
                        can play and websites you can visit. <br/>
                        Be happy!</p>
                    <hr/>
                    <br/>
                    <br/><br/><br/><br/><br/>
                    <div className={"d-flex flex-column text-align-center"}>
                        <Link to={"/games"} style={{
                            borderRadius: 10,
                            padding: 10,
                            textDecoration: 'none',
                            backgroundColor: 'grey'
                        }} className={"text-white"}>Go</Link>
                    </div>
                </div>
            </div>
            <code className={"font-secondary p-10"}>Running v{appVersion}</code>
        </div>
    )
}