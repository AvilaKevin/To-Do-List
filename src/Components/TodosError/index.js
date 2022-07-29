import React from 'react';
import './TodosError.css'
import errorIcon from '../../Icons/005-page.png'

function TodosError({ error }) {
    return (
        <section className='container'>
            <h2 className='container__h2'>Hubo un error !</h2>
            <picture className='img_container'>
                <img className='img_container__img' src={errorIcon}></img>
            </picture>
        </section>
    )
}

export { TodosError };