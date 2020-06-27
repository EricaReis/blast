import React from 'react'

import Product from 'components/Product';

import './styles.scss'

export default function Spotlight() {
    return (
        <div className='spotlight-container'>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}
