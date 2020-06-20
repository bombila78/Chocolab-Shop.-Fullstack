import React from 'react';
import axios from 'axios';

export default class AddGoodForm extends React.Component {


    state = {
        name: '',
        info: '',
        kind: 'choco',
        price: 0,
        imageURL: ''
    }

    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    handleSubmit = event => {
        event.preventDefault();

        const {name, info, kind, price, imageURL} = this.state;
        
        const good = {
            name,
            info,
            kind,
            price,
            imageURL
        }
        axios
        .post('/api/chocolab/add', good)
        .then(() => console.log("Good added", good))
        .catch((e) => console.log(e))

        this.setState({
            name: '',
            info: '',
            kind: 'choco',
            price: 0,
            imageURL: ''
        })
    }



    render() {
        const {name, info, kind, price, imageURL} = this.state;

        return (
            <div className="add-good-form">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    <h2>Добавить товар в каталог</h2>
                        <div className="form-group">
                            <label htmlFor="name">Название товара</label>
                            <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Название товара" value={name} onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="info">Дополнительная информация</label>
                            <input type="text" className="form-control form-control-lg" id="info" name="info" placeholder="Дополнительная информация" value={info} onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="kind">Вид товара</label>
                            <select className="form-control form-control-lg" id="kind" name="kind" value={kind} onChange={this.handleInputChange}>
                                <option>choco</option>
                                <option>ingred</option>
                                <option>box</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Цена</label>
                            <input type="number" className="form-control form-control-lg" id="price" name="price" placeholder="Цена" min="1" value={price} onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageURL">URL картинки</label>
                            <input type="text" className="form-control form-control-lg" id="imageURL" name="imageURL" placeholder="URL картинки" value={imageURL} onChange={this.handleInputChange}/>
                        </div>
                        <button type="submit" className="button">Добавить товар</button>
                    </form>
                </div>
            </div>
        )
    }

}
