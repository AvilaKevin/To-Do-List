import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className='TodosLoading_container'>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export { TodosLoading };