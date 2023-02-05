import './styles.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import { LoadComponent } from '../../components/LoadComponent'
import BoxMensage from '../../components/BoxMensage'
export const Home= () => {
  

  const [currentMensage, setCurrentMensage] = useState({});
  const [loadStatus, setLoadStatus] = useState(false);

  const handleClick = ()=>{

    setLoadStatus(true);
    setTimeout(()=>{setLoadStatus(false)},2000);

    fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then(resp => setCurrentMensage({text: resp.slip.advice, id: resp.slip.id}));
  }

  return (
    <div className="Home">
      <div className="informations">
        <h1>Templo dos Conselhos</h1>
        <p>Busque um conselho e saia mais sábio.</p>
      </div>

      <button onClick={handleClick}>
        <BiSearchAlt2/>Buscar Conselho
      </button>

      {loadStatus === true && <LoadComponent/>}
      {loadStatus === false &&  <BoxMensage msg = {currentMensage.text} id = {currentMensage.id}></BoxMensage>} 
    </div>
  );
 }

