import './styles.css'
import {  BsFillBookmarkStarFill} from 'react-icons/bs'
import { React, useState, memo, useCallback, useEffect, useRef } from 'react'
import AlertMsg from '../AlertMsg';

 function  BoxMensage(props){
    const [allMensages, setAllMensagens] = useState([]);
    const [c, setC]= useState(0);
    const Alert = useRef(0);

    const handleSave = () => {

        if(allMensages == props.msg){
            alert('Esta Mensagem já foi salva');
            return;
        }
        else{
            Alert.current.style.opacity = 1;
            setTimeout(()=>{Alert.current.style.opacity = 0;},1000);
            setAllMensagens(state => [...state, props.msg]);
        }
    }
    useEffect(()=>{
        setC(props.id);
        localStorage.setItem(c, [...allMensages]);
    },[allMensages])

    return (
        <>
        <AlertMsg text = {'Mensagem Salva'} valueToRef = {Alert}/>
        <section>
            <div className='fav-icon'>
                <BsFillBookmarkStarFill className='icon' onClick={handleSave}/>
             </div>
            <div className='msg'>{props.msg}</div>
            
        </section>
        </>
        
    )
}

export default memo(BoxMensage);

