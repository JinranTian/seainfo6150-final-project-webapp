import React from 'react';
import sodoku from '../../assets/images/sodoku.png';
import reflex from '../../assets/images/reflex.png';
import mind from '../../assets/images/mind_training.png';
import more_games from '../../assets/images/more_games.png';

export default function GamesIndex()
{
    document.body.style.backgroundColor="pink";
    return (
        <div>
            <h2>Other Games</h2>
            <p>Here are more interesting games you can play and websites you can visit. Be happy!</p>
            <hr/>
            <div className={"d-flex flex-row justify-content-center p-20 game-cards"}>
                <div className={"card bg-white"}>
                    <h2>Sodoku</h2>
                    <a href={"https://sudoku.com/"}><img className={"img-responsive"} src={sodoku} alt={"Sodoku"} style={{
                        maxWidth: 200,
                        borderRadius: 20
                    }}/></a>
                    <hr/>
                    <a href={"https://sudoku.com/"}>Sodoku</a>
                </div>
                <div className={"card bg-white"}>
                    <h2>Reflex Test</h2>
                    <a href={"https://faculty.washington.edu/chudler/java/redgreen.html"}><img className={"img-responsive"} src={reflex} alt={"Sodoku"} style={{
                        maxWidth: 200,
                        borderRadius: 20
                    }}/></a>
                    <hr/>
                    <a href={"https://faculty.washington.edu/chudler/java/redgreen.html"}>Reflex Test</a>
                </div>
                <div className={"card bg-white"}>
                    <h2>Mind Training</h2>
                    <p>Mind training games for kids</p>
                    <a href={"https://www.smartgameslive.com/en"}><img className={"img-responsive"} src={mind} alt={"Sodoku"} style={{
                        maxWidth: 200,
                        borderRadius: 20
                    }}/></a>
                    <hr/>
                    <a href={"https://www.smartgameslive.com/en"}>Mind Training</a>
                </div>
                <div className={"card bg-white"}>
                    <h2>More Online Games</h2>
                    <p>More Games Online!</p>
                    <a href={"https://www.arkadium.com/free-online-games/"}><img className={"img-responsive"} src={more_games} alt={"More games"} style={{
                        maxWidth:200,
                        borderRadius: 20
                    }} /></a>
                    <hr/>
                    <a href={"https://www.arkadium.com/free-online-games/"}>More Games</a>
                </div>
                <div className={"card bg-white"}>
                    <h2>Other Games</h2>
                    <p>Even more similar games!</p>
                    <hr/>
                    <a href={"https://www.Agame.com"}>AGame</a><br/><br/>
                    <a href={"https://www.Miniclip.com"}>MiniClip</a><br/><br/>
                    <a href={"https://www.Pogo.com"}>Pogo</a><br/><br/>
                    <a href={"https://www.playretrogames.com"}>PlayRetroGames</a><br/><br/>
                    <a href={"https://www.arkadium.com"}>Arkadium</a>
                </div>
            </div>

        </div>
    )
}