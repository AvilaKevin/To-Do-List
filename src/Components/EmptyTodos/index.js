import React from 'react';
import './EmptyTodos.css'

function EmptyTodos() {
    return (
        <section className='EmptyTodos-container'>
            <h2 className='EmptyTodos-container__h2'>No tienes To-Do's creados</h2>
            <picture className='img-container'>
                <img className='img-container__img' src='https://cdn-user-icons.flaticon.com/73410/73410993/1657760059309.svg?token=exp=1657760960~hmac=99eea8a5ca8823dfd355eb5f4d28c03a' alt='Portapales con una X encima'></img>
            </picture>
        </section>
    );
}

export { EmptyTodos };