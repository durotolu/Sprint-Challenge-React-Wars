import React from 'react';
import Character from './Character';

function Characters(props) {
  const { characters } = props;
  return (
    <div>
        {console.log(characters
            )}
      {characters.map((el) => <Character character={el.name} height={el.height}/>)}
    </div>);
}

export default Characters;