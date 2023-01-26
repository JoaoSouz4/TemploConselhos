import  './styles.css'
import { MdContentCopy } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'

export const MensageItem = ({props}) => {
    <div>
        <label>
            {props.text}
        </label>

        <div className='options'>
            <MdContentCopy/>
            <AiOutlineDelete/>
        </div>
    </div>
}