import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log("Character Data", res)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log("Character Error", err)
      })

  }, []);

  return (
    <section className="character-list grid-view">
      {character.map((person, index) => {
        return <CharacterCard
          image={person.image}
          name={person.name}
          birth_year={person.birth_year}
          species={person.species}
          status={person.status}
          location={person.location.name}
          origin={person.origin.name}
          //Episodes
          key={index} />
      })}

    </section>
  );
}