import React from 'react'


export default class OrdersList extends React.Component {

    state = {
        orders: []
    }

    componentDidMount = () => {
        fetch('/api/chocolab/orders', {
            method: 'get'
        })
            .then(res => res.json())
            .then(orders => this.setState({ orders }))
            .catch(e => console.log(e))

    }


    removeOrder = (id) => {
        const {orders} = this.state;
        
        fetch('/api/chocolab/orders/' + id, {
            method : 'delete'
        })
        .then(() => {
            const newOrders = orders.filter(o => o.id !== id)
            this.setState({
                orders: newOrders
            })
        })
        .catch(e => console.log(e))
    }


    render() {
        const { orders } = this.state;

        const allOrders = orders.map(order => {

            const { id, goods, total, clientName, clientPhone } = order;
            
            const splitingGoods = goods.split(',').map(e => {
                return <li>{e}</li> 
            })               

            
            return (
                <div className="col-md-3">
                    <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">Заказ №{id}</h5>
                        <hr/>
                        <h5 className="card-price">Сумма заказа - <span>{total}</span> ₽</h5>
                        <hr/>
                        <ol className="card-list">{splitingGoods}</ol>
                        <hr/>
                        <h6 className="card-subtitle mb-2">Имя клиента - {clientName}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2">Телефон клиента - {clientPhone}</h6>
                        <button className="btn btn-danger" onClick={() => this.removeOrder(id)}>Заказ обработан - удалить</button>
                    </div>
                </div>
                </div>
                
            )
        })

        return (
            <div className="orders-list">
                <div className="container">
                    <div className="row justify-content-center">
                    {allOrders}
                    </div>
                </div>
            </div>
        )
    }
}