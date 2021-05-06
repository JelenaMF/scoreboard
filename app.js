const players= [
    {
        name: "Lenny",
        score:50,
        id: 1
    },
    {
        name: "Mandi",
        score: 85,
        id: 2
    },
    {
        name: "Steven",
        score: 95,
        id: 3
    },
    {
        name: "Malcom",
        score: 80,
        id: 4
    }
];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}
/**
 * 
 * @returns players name and a counter that displays the players score 
 *  
 */
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name} 
                 </span>
            <Counter score={props.score}/>
        </div>
    );
}

/**
 * 
 * @returns a counter displays score with buttons that allow user to change the score + || -
 *  
 */

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = ( props ) => {
    return (
        <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length} />
            {/** Players List  */}
            {props.initialPlayers.map( player => 
                <Player 
                    name={player.name} 
                    score={player.score}
                    key={player.id.toString()}
                    />
                   
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players}/>, 
    document.getElementById('root')
);