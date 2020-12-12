import React from 'react';
import {Link} from "react-router-dom";

export default function Footer()
{
    return (
        <footer>
            <ul>
                <li>
                    <div>
                        <p className={"fw-700"}>Links</p>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/quiz/start"}>Quiz</Link>
                        <Link to={"/iq"}>IQ Test</Link>
                        <Link to={"/games"}>Games</Link>
                        <Link to={"/contactus"}>Contact Us</Link>

                    </div>
                </li>
                <li>
                    <div>
                        <p className={"fw-700"}>More</p>
                        <span>Policies</span>
                        <span>Blog</span>
                        <span>GDPR</span>
                    </div>
                </li>
            </ul>
        </footer>
    )
}