import React from "react";
import { HeroList } from "../heroe/HeroList";

export const DcScreen = () => {
  return(
    <>
      <h1>Heroes de DC</h1>
      <hr />
      <HeroList publisher='DC Comics'/>
    </>
  )
}
