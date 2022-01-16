import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroesById(heroId);

  if (!hero) return <Navigate to='/' />

  return(
    <>
      <h1>Detalles del Heroes</h1>
      <p> { hero.superhero } </p>
    </>
  )
}
