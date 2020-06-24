import React from 'react';
import axios from 'axios';

export default class AddGoodForm extends React.Component {


    state = {
        name: '',
        info: '',
        category: '',
        price: 0,
        imageURL: '',
        categories: [],
        title: ''
    }

    componentDidMount = () => {
        fetch('/api/categories/all', {
            method: 'get'
        })
            .then((res) => res.json())
            .then((data) => this.setState({categories: data}))
            .catch((error) => console.log(error))
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { name, info, category, price, imageURL } = this.state;

        const good = {
            name,
            info,
            category,
            price,
            imageURL
        }
        axios
            .post('/api/goods', good)
            .catch((e) => console.log(e))

        this.setState({
            name: '',
            info: '',
            category: '',
            price: 0,
            imageURL: ''
        })
    }

    handleCatSubmit = event => {
        event.preventDefault();

        const { title } = this.state;

        const category = {title}
        axios
            .post('/api/categories', category)
            .catch((e) => console.log(e))

        this.setState({
            title: ''
        })
    }


    render() {
        const { name, info, category, price, imageURL, categories, title } = this.state;

        const allCategories = categories.map(c => {
            return <option key={c.title}>{c.title}</option>
        })
        return (
            <div className="add-good-form">
                <div className="container">
                    <form onSubmit={this.handleCatSubmit}>
                        <h2>Создать новую категорию</h2>
                        <div className="form-group">
                            <label htmlFor="title">Название категории</label>
                            <input type="text" className="form-control form-control-lg" id="title" name="title" placeholder="Название категории" value={title} onChange={this.handleInputChange} required/>
                        </div>
                        <button type="submit" className="button">Добавить категорию</button>  
                    </form>
                    <hr/>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Добавить товар в каталог</h2>
                        <div className="form-group">
                            <label htmlFor="name">Название товара</label>
                            <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Название товара" value={name} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="info">Дополнительная информация</label>
                            <input type="text" className="form-control form-control-lg" id="info" name="info" placeholder="Дополнительная информация" value={info} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="kind">Вид товара</label>
                            <select className="form-control form-control-lg" id="category" name="category" value={category} onChange={this.handleInputChange}>
                                {allCategories} 
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Цена</label>
                            <input type="number" className="form-control form-control-lg" id="price" name="price" placeholder="Цена" min="1" value={price} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageURL">URL картинки</label>
                            <input type="text" className="form-control form-control-lg" id="imageURL" name="imageURL" placeholder="URL картинки" value={imageURL} onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="button">Добавить товар</button>
                    </form>
                </div>
            </div>
        )
    }

}
