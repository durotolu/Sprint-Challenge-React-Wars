import React from 'react';
import Character from './Character';

function Characters(props) {
  const { characters } = props;
  return (
    <div>
        {console.log(characters
            )}
      {characters.map((el) => <Character character={el.name} height={el.height} skin_color={el.skin_color} eye_color={el.eye_color} />)}
    </div>);
}

export default Characters;