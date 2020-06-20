import React from 'react'

const Introdution = () => {
    return (
        <div className="introdution">
            <div className="container">
                <div className="introdution__bigPicture">
                    <div className="introdution__bigPicture_dark">
                        <div className="introdution__bigPicture_onhover">
                            <div className="introdution__bigPicture_content">
                                <span>ТЁМНЫЙ</span>
                                <span>МОЛОЧНЫЙ</span>
                                <span>БЕЛЫЙ</span>
                                <h2>ДОМАШНИЙ ШОКОЛАД ИЗ НАТУРАЛЬНЫХ ИНГРЕДИЕНТОВ</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="introdution__smallPictures">
                    <div className="introdution__smallPictures_photo choco">
                        <div className="introdution__smallPictures_content">
                        <div className="introdution__smallPictures_text">ШОКОЛАД</div>
                        
                        </div>
                    </div>
                    <div className="introdution__smallPictures_photo ingred">
                        <div className="introdution__smallPictures_content">
                        <div className="introdution__smallPictures_text">ИНГРЕДИЕНТЫ</div>
                        
                        </div>
                    </div>
                    <div className="introdution__smallPictures_photo forms">
                        <div className="introdution__smallPictures_content">
                        <div className="introdution__smallPictures_text">ФОРМЫ</div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introdution;