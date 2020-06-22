import React from 'react';
import loading from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className='loading'>
           rooms data loading
                 <div>
                     <img src={loading} alt="load"/>
                </div>
        </div>
    )
}
