import './styles.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import { BoxMensage } from '../../components/BoxMensage'

export const Home= () => {

  const [currentMensage, setCurrentMensage] = useState('');

  const handleClick = () => {

  }

  useEffect(()=>{
     fetch('https://api.adviceslip.com/advice')
      .then(resp => resp.json())
      .then(resp => setCurrentMensage(resp.slip.advice));
  }, [])

  return (
    <div className="Home">

      <div className="informations">
        <h1>Templo dos Conselhos</h1>
        <p>Busque um conselho e saia mais sábio.</p>
      </div>

      <button onClick={handleClick}>
        <BiSearchAlt2/>
        Buscar Conselho
      </button>
      <BoxMensage></BoxMensage>
    </div>
  );
}
