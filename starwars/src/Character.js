import React from 'react';
import styled from 'styled-components';


const CharacterStyle = styled.div`
    color: whitesmoke;
    border: 2px solid black;
    width : 15em;
    background-blend-mode: saturation;
    background-color: grey;
    opacity: 0.6;
    padding-bottom: 1em;
    font-weight: bold;
    margin-bottom: 5em;
`

function Character(props) {
    const { character, height, skin_color, eye_color, hair_color, gender, handleChange } = props;
    return (
            <CharacterStyle >
            <h3 style={handleChange}>Warrior Card</h3>
            <div>Name: {character}</div>
            <div>Height: {height}</div>
            <div>Complexion: {skin_color}</div>
            <div>Eye Color: {eye_color}</div>
            <div>Hair Color: {hair_color}</div>
            <div>Gender: {gender}</div>
            </ CharacterStyle>
        );
}

export default Character;