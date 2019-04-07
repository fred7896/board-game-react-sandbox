import React, { Component } from 'react';

class PlayerSelect extends Component {
    state = {
        teams: ['Blue', 'Green', 'Red', 'White'],
        currentPlayerSelect: 1,
        players: []

    };
    render() {
        return (
            <div>
                <div className ="mouah">
                    <h1 >Player {this.state.currentPlayerSelect} select a team:</h1>
                </div>
                
                <ul className="team-list">
                {
                    this.state.teams.map(team => (
                        <li>
                        <img src={`../img/mascot-${team}.jpg`} className="pawn" alt={`${team}`} />
                        </li>

                    ))
                }             
                </ul>  
            </div>
        );
    }
}

export default PlayerSelect;