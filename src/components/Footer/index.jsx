import './styles.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer>
           <label className='credits'>Desenvolvido por João Souza</label>
           <label className='year'>2023</label>
           <div>
            <a href="https://github.com/JoaoSouz4" target='_blank'><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/" target='_blank'><AiFillLinkedin/></a>
            <a href="https://www.instagram.com/jo4o.souza/" target='_blank'><AiOutlineInstagram/></a>
           </div>
        </footer>
    )
}