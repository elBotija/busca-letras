import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario'
import Letra from './components/Letra'
import Informacion from './components/Informacion'
import axios from 'axios'

function App() {
  
  const [artista, setArtista] = useState('')
  const [letra, setLetra] = useState([])
  const [info, setInfo] = useState({})
  
  const consultarAPILetra = async busqueda => {
    const {cancion, artista} = busqueda
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

    const response = await axios(url)

    setArtista(artista)

    setLetra(response.data.lyrics)
  }

  const consultarAPIInfo = async ()=> {
    const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
    const response = await axios(url)
    setInfo(response.data.artists[0])
  }
    
  useEffect(
    () => {
      console.log("agregaste un artista")
      if(artista){
        setInfo({})
        consultarAPIInfo()
      }
    },[artista]
  )

  return(
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {<Informacion info={info}/>}
          </div>
          <div className="col-md-6">
            {<Letra letra={letra}/>}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
