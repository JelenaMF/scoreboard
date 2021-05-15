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
                <button className="remove-player" onClick={() => props.removePlayer( props.id )}>x</button>
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
        this.setState(prevState => {
            return {
            score: prevState.score + 1
            }
        });
    }
// this method will subtract from the counter 
    decrementScore = () => {
        this.setState( prevState => {
            return {
            score: prevState.score - 1
            }
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

class App extends React.Component {

    state = {
        players: [
            {
                name: "Lenny",
                id: 1
            },
            {
                name: "Mandi",
                id: 2
            },
            {
                name: "Steven",
                id: 3
            },
            {
                name: "Malcom",
                id: 4
            }
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id )

            }
        })
    }
    
    render() {
        return (
            <div className="scoreboard">
                <Header title="scoreboard" totalPlayers={this.state.players.length} />
                {/** Players List  */}
                {this.state.players.map( player => 
                    <Player 
                        name={player.name} 
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                        />
                       
                )}
            </div>
        );
    }
    
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);