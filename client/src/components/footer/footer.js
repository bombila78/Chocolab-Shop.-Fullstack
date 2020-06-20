import React from 'react';

export default class Footer extends React.Component {

    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <p className="footer__title">КОНТАКТЫ</p>
                            <p><a href="tel:8 (812) 923-99-08">8 (812) 923-99-08</a></p>
                            <p><a href="mailto:choco-lab@mail.ru">choco-lab@mail.ru</a></p>
                            <p>Санкт-Петербург, ул. Прибрежная 10, к.3</p>
                            <p><i className="fa fa-vk" /> <i className="fa fa-instagram" /></p>
                        </div>
                        <div className="col-md-4">
                            <form className="footer__form">
                                <p className="footer__title">БУДЬ В КУРСЕ НАШИХ НОВИНОК И АКЦИЙ</p>
                                <input type="text" name="name" placeholder="Имя"></input>
                                <input type="email" name="email" placeholder="Email"></input>
                                <button type="submit" className="button footer__button">ПОДПИСАТЬСЯ</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer__info row ">
                        <span className="footer__rights">© ChocoLab. All Rights Reserved. 2020</span>
                            <span><a href="/">Политика конфиденциальности</a></span>
                            <span><a href="/">Публичная оферта</a></span>

                    </div>
                </div>
            </footer>
        )
    }
    
}