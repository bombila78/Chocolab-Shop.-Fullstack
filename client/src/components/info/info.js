import React from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    percent: 0.1
});

const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 info__content">
                        <h2>ШОКОЛАД
                                РУЧНОЙ РАБОТЫ</h2>
                        <p>В наши дни шоколад может позволить себе каждый! Однако не все задумываются о его качестве и вкусе. Мы решили изменить ваш взгляд на привычные вещи и создали продукт, который вам точно понравится!</p>
                        <p>
                            Мы ценим ваше время и ваш выбор! Поскольку вы здесь, значит выбираете лучшее для себя, своей семьи, друзей и коллег.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="info__picture">

                        </div>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="info__cards row">
                    <div className="col-md-3">
                        <OnVisible className="info__card first">
                            <div className="info__card_back first">
                                <div className="info__card_content">
                                    <h3>И все-таки
                                    какао:
дерево или куст?</h3>
                                    <p>
                                        Более 3500 лет назад человек начал выращивать какао-дерево. Именно на его стволах  растут плоды с какао-бобами. Из них получают какао-масло и какао тёртое, являющиеся основными ингредиентами всеми нами любимого шоколада. Любопытно, что деревья плодоносят круглый год, однако из тысячи урожай дают лишь несколько десятков.
</p>
                                </div>
                            </div>
                        </OnVisible>
                    </div>
                    <div className="col-md-3">
                        <OnVisible className="info__card second">
                            <div className="info__card_back second">
                                <div className="info__card_content">
                                    <h3>Могли ли древние майя есть шоколад?</h3>
                                    <p>
                                        Родина шоколада - Южная Америка. Древние племена ольмеков первыми в мире попробовали лакомство. Первоначально шоколад представлял собой напиток, притом довольно горький. Ольмеки называли его "kakawa". Ацтеки говорили "xocolatl" - Горькая вода. А вот цивилизация майя использовала какао-бобы еще и как валюту.</p>
                                </div>
                            </div>
                        </OnVisible>
                    </div>
                    <div className="col-md-3">
                        <OnVisible className="info__card third">
                            <div className="info__card_back third">
                                <div className="info__card_content">
                                    <h3>Кто был первым: Колумб или Людовик XIV?</h3>
                                    <p>Первым европеецем, который попробовал шоколадный напиток, был Христофор Колумб. Он же привез какао-бобы в Европу. Однако Колумб не оценил горького вкуса напитка. Распробовал шоколад испанский конкистадор Эрнан Кортес. Он догадался, что в напиток можно добавлять мёд, корицу, ваниль. Значительно позже стали добавлять сахар.</p>
                                </div>
                            </div>
                        </OnVisible>
                    </div>
                    <div className="col-md-3">
                        <OnVisible className="info__card fourth">
                            <div className="info__card_back fourth">
                                <div className="info__card_content">
                                    <h3>Самый популярный шоколад сегодня?</h3>
                                    <p>В 1875 году  в Швейцарии был придуман молочный шоколад. Дэниэл Петер догадался добавить сгущеное молоко. Примечательно, что в наши дни по статистике самым популярным  является молочный шоколад с орехами! Современное общесто даже придумало праздник - всемирный день шоколада, который празднуют 11 июля:)</p>
                                </div>
                            </div>
                        </OnVisible>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Info;