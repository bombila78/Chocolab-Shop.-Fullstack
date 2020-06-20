import React from 'react'

import Header from '../header/header';
import Footer from '../footer/footer';
import GoodsList from '../goodslist/goodslist'

const GoodsListPage = () => {
    return (
        <React.Fragment>
            <Header />
            <GoodsList />
            <Footer />
        </React.Fragment>
    )
}

export default GoodsListPage