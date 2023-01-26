import { useEffect, useState } from 'react'
import './styles.css'

export const DataBaseManager = () => {

    const [dataStorage, setDataStorage] = useState();

    useEffect(()=>{
        const data = localStorage.getItem('key');
        setDataStorage(data);
        console.log(dataStorage)
    }, [])

    return (
        <div className='manager-container'>

            <div className="titles">
                <h1>Genrenciador de Mensagens</h1>
                <p>Aqui estão salvas suas mensagens favoritas</p>
            </div>
           
                <input type="text" placeholder='Pesquisar mensagem salva'/>
                <div className='container-msg'>
                </div>
        </div>
    )
}