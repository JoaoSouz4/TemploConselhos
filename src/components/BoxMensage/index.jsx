import './styles.css'
import {  BsFillBookmarkStarFill} from 'react-icons/bs'
import { React } from 'react'

 export const BoxMensage = (props) =>{

    const handleSave = () => {
        const array = [];
        array.push(props.msg);
        localStorage.setItem('key', array);
    } 

    return (
        <section>
            <div className='fav-icon'>
                <BsFillBookmarkStarFill className='icon' onClick={handleSave}/>
             </div>

            <div className='msg'>
                {props.msg}
            </div>
        </section>
    )
}

