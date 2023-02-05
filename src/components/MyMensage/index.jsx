import './styles.css'
import { AiFillDelete } from 'react-icons/ai'

function MyMensage(props){

    return(
        <div className='option'>
            <label>{props.post}</label>
            
            <div className="icon-delete">
                <AiFillDelete onClick={props.func}/>
                </div>
        </div>
    )
}

export default MyMensage;