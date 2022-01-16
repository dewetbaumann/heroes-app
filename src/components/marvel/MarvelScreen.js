import React from 'react';
import { HeroList } from '../heroe/HeroList';

export const MarvelScreen = () => {
  return(
    <>
      <h1>Heroes de Marvel</h1>
      <hr />
      <HeroList publisher='Marvel Comics'/>
    </>
  )
}
