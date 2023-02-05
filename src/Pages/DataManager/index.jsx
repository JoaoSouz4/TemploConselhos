import { useEffect, useState } from 'react'
import MyMensage from '../../components/MyMensage';
import { AiFillDelete } from 'react-icons/ai';
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

    const handleDelete = (id) => {
        const array = [...dataStorage];
            for(let i = 0;i<array.length;i++){
                if(array[i].id == id){
                 array.splice(i,1);
                 localStorage.removeItem(id);
                 setDataStorage(array);
                 }
        }
    }

    return (

        <div className='manager-container'>
            <div className="titles">
                <h1>Genrenciador de Mensagens</h1>
                <p>Aqui estão salvas suas mensagens favoritas</p>
            </div>
            <div className='container-msg'>

                {dataStorage.map((post)=>{

                    return(
                        <div className='option' key={post.id}>
                            <label>{post.msg}</label>     
                            <div className="icon-delete">
                                <AiFillDelete onClick={()=>{
                                    handleDelete(post.id)
                                   
                                }}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}