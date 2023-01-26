import './styles.css'
import {  BsFillBookmarkStarFill} from 'react-icons/bs'
import { React, useState, memo, useCallback, useEffect } from 'react'
 function  BoxMensage(props){
    const [allMensages, setAllMensagens] = useState([]);
    const [c, setC]= useState(0);

    const handleSave = () => {
        setAllMensagens(state => [...state, props.msg]);
    }
    useEffect(()=>{
        setC(props.id);
        localStorage.setItem(c, [...allMensages]);
    },[allMensages])

    return (

        <section>
            <div className='fav-icon'>
                <BsFillBookmarkStarFill className='icon' onClick={handleSave}/>
             </div>
            <div className='msg'>{props.msg}</div>
        </section>
    )
}

export default memo(BoxMensage);

