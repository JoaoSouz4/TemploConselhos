import { useEffect, useState } from 'react'
import MyMensage from '../../components/MyMensage';
import './styles.css'

export const DataBaseManager = () => {

    const [dataStorage, setDataStorage] = useState([]);

    useEffect(()=>{
        const array = []
        if(dataStorage.length!= 0) return;
        else {
            for(let i = 0; i<300; i++){
                const data = localStorage.getItem(i);
                if(data) array.push({msg: data, id: i});
            }
            setDataStorage(array);
        }   
    },[]);

    const handleDelete = () => {
        console.log('delete')

    }

    return (

        <div className='manager-container'>
            <div className="titles">
                <h1>Genrenciador de Mensagens</h1>
                <p>Aqui estão salvas suas mensagens favoritas</p>
            </div>
           
                <input type="text" placeholder='Pesquisar mensagem salva'/>
                <div className='container-msg'>
                    {dataStorage.map((post)=>{
                        return <MyMensage key = {post.id} id={post.id} post = {post.msg} func = {handleDelete}></MyMensage>
                    })}
                </div>
        </div>
    )
}