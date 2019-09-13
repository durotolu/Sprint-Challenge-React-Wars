import React from 'react';

function Character(props) {
    const { character, height } = props;
    return (
        <div>
            <div>{character}</div>
            <div>{height}</div>
        </div>);
}

export default Character;