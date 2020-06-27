import React from 'react'

import Product from 'components/Product';

import './styles.scss'

export default function Spotlight() {
    return (
        <div className='spotlight-container'>
            <h4 className='text-center destaques'>Destaques</h4>
            <div className="spotlight-row">

            <Product name='PC gamer Neon' />
            <Product name='mouse fodao' />
            <Product name='super teclado' />
            <Product name='headset' />
            </div>
        </div>
    )
}
