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
            <Counter />
        </div>
    );
}

/**
 * 
 * @returns a counter displays score with buttons that allow user to change the score + || -
 *  
 */

class Counter extends React.Component{
    state = {
        score: 0
    };      
//the method will add to the counter
    incrementScore = () => {
        this.setState({
            score: this.state.score + 1

        });
    }
// this method will subtract from the counter 
    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        })
    }


    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }

}

const App = ( props ) => {
    return (
        <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length} />
            {/** Players List  */}
            {props.initialPlayers.map( player => 
                <Player 
                    name={player.name} 
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