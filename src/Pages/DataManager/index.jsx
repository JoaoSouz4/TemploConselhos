import { useEffect, useState } from 'react'
import './styles.css'

export const DataBaseManager = () => {

    const [dataStorage, setDataStorage] = useState([]);

    useEffect(()=>{
        const array = []
        if(dataStorage.length!= 0) return;
        else {
            console.log('ENTREI NO LOOP')
            for(let i = 0; i<300; i++){
                const data = localStorage.getItem(i);
                if(data) array.push(data);
            }
            setDataStorage(array)
        }   
    },[])

    return (
        <div className='manager-container'>
            <div className="titles">
                <h1>Genrenciador de Mensagens</h1>
                <p>Aqui estão salvas suas mensagens favoritas</p>
            </div>
           
                <input type="text" placeholder='Pesquisar mensagem salva'/>
                <div className='container-msg'>
                    {dataStorage[3]}
                </div>
        </div>
    )
}