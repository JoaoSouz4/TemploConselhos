import './styles.css';
import { AiFillHome } from 'react-icons/ai'
import { ImDatabase } from 'react-icons/im'
import { HiDocumentText } from 'react-icons/hi'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export const Header = () => {
    const [isSelect, setIsSelect] = useState(false);
    const sidebarButton = useRef();

    const handleClick = () => {
        if(isSelect == false ){
            sidebarButton.current.style.animationName = 'open';
            setIsSelect(true);
            return;
        } else {
            sidebarButton.current.style.animationName = 'close';
            setIsSelect(false);
            return;
        }
    }
    return (
     <header ref = {sidebarButton}>
        <div className='header-container'>
            <nav>
                <Link to = {'/'}>
                    <div className="icon"><AiFillHome/>Home</div>
                </Link>

                <Link to = {'/Gerenciar mensagens'}>
                    <div className="icon"><ImDatabase/>Gerenciar mensagens</div>
                </Link>
                <a href="#">
                    <div className="icon"><HiDocumentText/>Doc do projeto</div>
                </a>
            </nav>
        </div>

            <div className='btn-sidebar' onClick={handleClick}>
                <BiMenu/>
            </div>
     </header>
    )
}