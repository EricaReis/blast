import React from 'react';

import { Card, CardImg, CardBody, CardTitle } from 'reactstrap'

import './styles.scss';

export default function Product() {
    return (
        <Card className='product-container'>
            <CardImg top width="100%" src="https://a-static.mlcdn.com.br/1500x1500/computador-gamer-fox-pc-full-intel-core-i5-8gb-geforce-gtx-1050ti-4gb-gddr5-hd-2tb-easypc/3greentechnology/19838/74c69bcefbd4687aedd29c4f6b56b57d.jpg" alt="Imagem produto" />
            <CardBody>
                <CardTitle className='text-center'>PC gamer Neon</CardTitle>
            </CardBody>
        </Card>
    )
}
