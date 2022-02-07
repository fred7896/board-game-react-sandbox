import React from 'react';

const Players = (props) => (
    <div className="players mt-3 mb-3">
    {
        props.players.map(player => (
            <div key={player.number} className="mx-auto px-2">
                <h1 className="mouah">Player {player.number}</h1>
                <div>
                    <img src={`../img/l1-mascot-${player.team}.png`} className="pawn-select mt-3 mb-3" alt={`${player.team}`} />
                </div>
            </div>
        ))
    }
</div>

)

export default Players;