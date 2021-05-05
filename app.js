const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
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
            <Header />
            {/** Players List  */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);