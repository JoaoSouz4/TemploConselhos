import './styles.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import { BoxMensage } from '../../components/BoxMensage'
import { LoadComponent } from '../../components/LoadComponent'

export const Home= () => {

  const [currentMensage, setCurrentMensage] = useState();
  let apimsg;

  useEffect(()=>{
    console.log('Montou')
    fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then(resp => apimsg = resp.slip.advice)
  })

  const handleClick = () => {
   setCurrentMensage(apimsg)
  }

  return (
    <div className="Home">
      {console.log('-------------COMPONENTE MONTADO----------------')}
      <div className="informations">
        <h1>Templo dos Conselhos</h1>
        <p>Busque um conselho e saia mais sábio.</p>
      </div>

      <button onClick={handleClick}>
        <BiSearchAlt2/>
        Buscar Conselho
      </button>
      <BoxMensage msg = {currentMensage}></BoxMensage>
    </div>
  );
}

