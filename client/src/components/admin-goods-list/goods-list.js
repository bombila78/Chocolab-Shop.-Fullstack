import React from 'react';
import GoodsListItem from '../admin-goods-list-item/admin-goods-list-item'

export default class GoodsList extends React.Component {

    state = {
        categoriesAndGoods: [],
        filter: 'all'
    }

    componentDidMount = () => {
        fetch('/api/categories/all', {
            method: 'get'
        })
            .then((res) => res.json())
            .then((data) => this.setState({ categoriesAndGoods: data }))
            .catch((err) => console.log(err))

    }

    removeGood = (id) => {

        let confirmed = window.confirm("Вы уверены что хотите удалить товар?");

        if (confirmed) {
            const { categoriesAndGoods } = this.state
            fetch('/api/goods/' + id, {
                method: 'delete'
            })
                .then(async (res) => {
                    const categoryId = await res.json();
                    const category = categoriesAndGoods.find(cat => cat.id === categoryId)
                    const catIdx = categoriesAndGoods.findIndex(cat => cat.id === categoryId)
                    
                    const newCategory = {...category}
                    newCategory.Goods = newCategory.Goods.filter(g => g.id !== id);
                    const newCatsAndGoods = [
                        ...categoriesAndGoods.slice(0, catIdx),
                         newCategory,
                         ...categoriesAndGoods.slice(catIdx + 1)]
                         
                    this.setState({
                        categoriesAndGoods: newCatsAndGoods
                    })
                })
                .catch((e) => console.log(e))
        }
    }

    removeCateg = (id) => {

        let confirmed = window.confirm("Вы уверены что хотите удалить категорию?")

        if (confirmed) {
            const {categoriesAndGoods} = this.state;

            fetch('/api/categories/' + id, {
                method: 'delete'
            })
            .then(() => {
                const newCategoriesAndGoods = categoriesAndGoods.filter(c => c.id !== id);
                this.setState({categoriesAndGoods: newCategoriesAndGoods})
            })
            .catch((e) => console.log(e))
        }

    }

    changeFilter = (title) => {
        this.setState({ filter: title })
    }

    render() {

        const { categoriesAndGoods, filter } = this.state;

        const categoriesButtonsGroup = categoriesAndGoods.map(categ => {
            const { title } = categ;

            return <button className="admin-goods-list_button" onClick={() => this.changeFilter(title)}>{title}</button>

        })

        let filteredCats = [];

        if (filter === 'all') {
            filteredCats = [...categoriesAndGoods]
        } else {
            filteredCats = categoriesAndGoods.filter(c => c.title === filter)
        }
        const allCatsAndGoods = filteredCats.map(category => {
            
            const { title, id, Goods } = category;

            const allGoodsOfCat = Goods.map(good => {
                const { id } = good;
                return <GoodsListItem key={id} good={good} removeGood={() => this.removeGood(id)} />
            })

            return (
                <div key={title} className="admin-goods-list_category">
                    <div className="row justify-content-around">
                    <h3>{title}</h3>
                    <button className="btn btn-danger" onClick={() => this.removeCateg(id)}>Удалить категорию со всеми товарами</button>
                    </div>
                    <div className="row">
                        {allGoodsOfCat}
                    </div>
                </div>
            )
        })


        return (
            <div className="admin-goods-list">
                <div className="container">
                    <h2>АССОРТИМЕНТ</h2>
                    <div className="admin-goods-list_buttonGroup row">
                        <button className="admin-goods-list_button" onClick={() => this.changeFilter("all")}>Показать все</button>
                        {categoriesButtonsGroup}
                    </div>
                    <div className="container">
                        {allCatsAndGoods}
                    </div>
                </div>
            </div>
        )
    }
}