import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id,superhero,publisher,alter_ego,first_appearance,characters }) => {
  const path= `/assets/img/heroes/${id}.jpg`;
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={ path } alt={ superhero } className="card-img-top"/>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                {
                  (alter_ego !== characters) && 
                    <p className="text-mutted">{ characters }</p>
                }
                <p className="card-text">
                  <small>{ first_appearance }</small>
                </p>
                <Link to={ `/heroe/${ id }` }>Mas...</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
