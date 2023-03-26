import './styles.css';
import { AiFillHome } from 'react-icons/ai'
import { ImDatabase } from 'react-icons/im'
import { IoMdDocument } from 'react-icons/io'
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
                <Link 
                    to = {'/'} 
                    onClick = {()=>{
                        sidebarButton.current.style.animationName = 'close';
                        setIsSelect(false);
                }}>
                    <div className="icon"><AiFillHome/>Home</div>
                </Link>

                <Link 
                    to = {'/Gerenciar mensagens'}
                    onClick = {()=>{
                        sidebarButton.current.style.animationName = 'close';
                        setIsSelect(false);
                }}
                >
                    <div className="icon"><ImDatabase/>Gerenciar mensagens</div>
                </Link>
                <a href="https://drive.google.com/file/d/1lq-Ac4k4ecpeHB_lstJGfVoZIgnz5LWm/view?usp=sharing" target={'_blank'}>
                    <div className="icon"><IoMdDocument/>Doc do projeto</div>
                </a>
            </nav>
        </div>

            <div className='btn-sidebar' onClick={handleClick}>
                <BiMenu/>
            </div>
     </header>
    )
}