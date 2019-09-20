import React, {Fragment} from 'react';

export default function Letra ({letra}) {
  if(letra.length){
    return(
      <Fragment>
        <h2>Letra Canción</h2>
        <p className="letra">{letra}</p>
      </Fragment>
    )
  }
  return ''
}