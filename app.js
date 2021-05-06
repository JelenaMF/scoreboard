const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers + 1}</span>
        </header>
    );
}
/**
 * 
 * @returns players name and a counter that displays the players score 
 *  
 */
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Lenny 
                 </span>
            <Counter />
        </div>
    );
}

/**
 * 
 * @returns a counter with buttons that allow user to change the score + || -
 *  
 */

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = ( ) => {
    return (
        <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={1} />
            {/** Players List  */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);