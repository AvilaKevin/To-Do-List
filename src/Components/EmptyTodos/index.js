import React from 'react';
import './EmptyTodos.css'
import emptyIcon from '../../Icons/004-empty-box.png';

function EmptyTodos() {
    return (
        <section className='EmptyTodos-container'>
            <h2 className='EmptyTodos-container__h2'>No tienes To-Do's creados</h2>
            <picture className='img-container'>
                <img className='img-container__img' src={emptyIcon} alt='Portapales con una X encima'></img>
            </picture>
        </section>
    );
}

export { EmptyTodos };