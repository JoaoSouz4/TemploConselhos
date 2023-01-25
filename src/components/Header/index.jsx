import './styles.css';
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
                <a href="">Home</a>
                <a href="">Gerenciar mensagens</a>
                <a href="">Doc do Projeto</a>
            </nav>
        </div>

            <div className='btn-sidebar' onClick={handleClick}>
                <BiMenu/>
            </div>
     </header>
    )
}