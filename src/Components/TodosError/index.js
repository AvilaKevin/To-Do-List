import React from 'react';
import './TodosError.css'

function TodosError({ error }) {
    return (
        <section className='container'>
            <h2 className='container__h2'>Hubo un error</h2>
            <picture>
                <img className='container__img' src='https://cdn-user-icons.flaticon.com/73410/73410993/1657821733669.svg?token=exp=1657822635~hmac=9ab24674a5402b75281f7952b8d6207f'></img>
            </picture>
        </section>
    )
}

export { TodosError };