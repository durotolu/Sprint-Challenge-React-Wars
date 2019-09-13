import React from 'react';
import styled from 'styled-components';

const CharacterStyle = styled.div`
    color: blue;
    border: 2px solid black;
    width : 20em;
`

function Character(props) {
    const { character, height, skin_color, eye_color } = props;
    return (
        <div>
            <CharacterStyle>
            <h3>Warrior Info</h3>
            <div>Name: {character}</div>
            <div>Height: {height}</div>
            <div>Complexion: {skin_color}</div>
            <div>Eye Color: {eye_color}</div>
            </ CharacterStyle>
        </div>);
}

export default Character;