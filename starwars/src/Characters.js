import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const CharactersStyle = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
`

function Characters(props) {
  const { characters, handleChange } = props;
  return (
    <CharactersStyle>
      {characters.map((el) => <Character character={el.name}
                                         height={el.height} 
                                         skin_color={el.skin_color} 
                                         eye_color={el.eye_color} 
                                         hair_color={el.hair_color}
                                         gender={el.gender}
                                         handleChange={handleChange}/>)}
    </CharactersStyle>);
}

export default Characters;