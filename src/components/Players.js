import React from 'react';

const Players = (props) => (
    <div className="players mt-3 mb-3">
    {
        props.players.map(player => (
            <div key={player.number}>
                <h1 className="mouah">Player {player.number}</h1>
                <div>
                    <img src={`../img/l1-mascot-${player.team}.png`} className="pawn-select mx-auto d-block mt-3 mb-3" alt={`${player.team}`} />

                </div>
            </div>
        ))
    }
</div>

)

export default Players;