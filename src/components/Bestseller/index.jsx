import React, { useEffect, useState } from 'react'

import Product from 'components/Product';

import api from 'config/api';
import './styles.scss'

//Produtos de lançamentos pegando dados do mochAPI.io

export default function Bestseller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            const { data } = await api.get("lancamentos")

            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bestseller-container'>
            <div className="align-bestseller mt-md-3">
                <h4 className='text-center bestsellers my-3'>Lançamentos</h4>
            </div>
            <div className="bestseller-row">

                {products && products.map(product => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}