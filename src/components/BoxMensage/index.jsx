import './styles.css'
import {  BsFillBookmarkStarFill } from 'react-icons/bs'
import { useState } from 'react'
import { LoadComponent } from '../LoadComponent'

export const BoxMensage = (props) => {

 
    return (
        <section>

            <div className='fav-icon'>
                <BsFillBookmarkStarFill
                 className='icon'/>
             </div>

            <div className='msg'>
                {props.msg}
            </div>
        </section>
    )
}