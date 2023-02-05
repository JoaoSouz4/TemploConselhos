import './styles.css'
import { AiFillDelete } from 'react-icons/ai'

function MyMensage(props){

    const {post, id, func} = props;

    return(
        <div className='option'>
            <label>{post}</label>     
            <div className="icon-delete">
                <AiFillDelete onClick={func}
                />
            </div>
        </div>
    )
}

export default MyMensage;