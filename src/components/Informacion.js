import React, {Fragment} from 'react';

export default function Informacion ({info}) {
  if(Object.keys(info).length){
    return(
      <div className="card border-light">
        <div className="card-header bg-primary text-light font-wight-bold">
          Informacion Artistica
        </div>
        <div className="card-body">
          <img src={info.strArtistThumb} alt={info.strArtist}/>
          <p className="card-text">Genero{info.strGenre}</p>
          <h2 className="card-text text-center">Biografía de {info.strArtist}</h2>
          <p className="card-text">{info.strBiographyES}</p>
          <p className="card-text">
            <a href={`https://${info.strFacebook}`} target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${info.strTwitter}`} target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={`https://${info.strFMChart}`} target="_blank">
              <i className="fab fa-lastfm"></i>
            </a>
          </p>
        </div>
      </div>
    )
  }
  return ''
}