import './styles.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function AlertMsg(props){
    
    return(
        <div className='alert' ref = {props.valueToRef}>
            {props.text}
            <AiOutlineCheckCircle/>
        </div>
        
    )
}

export default AlertMsg;