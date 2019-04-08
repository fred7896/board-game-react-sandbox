import React, { Component } from 'react';
import Players from '../components/Players';

class PlayerSelect extends Component {
    state = {
        teams: ['Blue', 'Green', 'Red', 'White'],
        currentPlayerSelect: 1,
        players: [],
        readyToStart: false
    };

    setPlayer = (team) => {
        if (this.state.players.find(player => player.team === team)) {
            alert('Nope, team already selected');
            window.open('https://www.youtube.com/watch?v=16J7KiZmnJA','_blank');
        } else {
            this.setState((prevState) => ({
                currentPlayerSelect: prevState.currentPlayerSelect + 1,
                players: [
                    ...prevState.players, {
                        number: prevState.currentPlayerSelect,
                        team
                    }
                ]
                ,
                readyToStart: prevState.currentPlayerSelect === 2 ? true : false
            }));
        }
    }

    startGame = () => {
        this.props.startGame(this.state.players);
    }

    render() {
        return (
            <div>
                    <Players players = {this.state.players}/>
                {
                    this.state.readyToStart ?
                        <React.Fragment>
                            <div className="starter">
                                <h1 className="mouah">Click start to begin!</h1>
                                <button onClick={this.startGame} className="start-button mt-3 mb-3">START</button>
                            </div>
                        </React.Fragment> :
                        <React.Fragment>
                            <div className="mouah">
                                <h1 >Player {this.state.currentPlayerSelect} select a team:</h1>
                            </div>

                            <ul className="team-list row">
                                {
                                    this.state.teams.map(team => (
                                        <li className="col-12 col-sm-6 col-md-3" key={team}>

                                            <img onClick={() => this.setPlayer(team)}
                                                src={`../img/l1-mascot-${team}.png`} className="pawn mx-auto d-block mt-3" alt={`${team}`} />
                                        </li>

                                    ))
                                }
                            </ul>
                        </React.Fragment>
                }
            </div>
        );
    }
}

export default PlayerSelect;