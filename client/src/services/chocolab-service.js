import choco1 from '../images/choco_1.jpg';
import choco2 from '../images/choco_2.jpg';
import choco3 from '../images/choco_3.jpg';
import ingred1 from '../images/ingred-1.jpg';
import ingred2 from '../images/ingred_2.jpg';
import ingred3 from '../images/ingred_3.jpg';
import ingred4 from '../images/ingred_4.jpg';
import box1 from '../images/box_1.png';
import box2 from '../images/box_2.jpg';
import box3 from '../images/box_3.jpg';

export default class ChocolabService {

    data = [
        {
            id:1,
            kind: 'choco',
            name: "ШОКОЛАД",
            info: "ПЕКАН",
            img: {choco1},
            price: 420
        },
        {
            id:2,
            name: "ШОКОЛАД",
            info: "МАДАГАСКАР",
            kind: 'choco',
            img: {choco2},
            price: 350
        },
        {
            id:3,
            name: "ШОКОЛАД",
            info: "ФИНЛЯНДИЯ",
            kind: 'choco',
            img: {choco3},
            price: 430
        },
        {
            id:4,
            name: "КАКАО МАСЛО",
            info: "(КОЛУМБИЯ)",
            kind: 'ingred',
            img: {ingred1},
            price: 650,
            weight: 500
        },
        {
            id:5,
            name: "ОРЕХ ПЕКАН",
            info: "(СЫРОЙ)",
            kind: 'ingred',
            img: {ingred2},
            price: 180,
            weight: 100
        },
        {
            id:6,
            name: "ТЁМНЫЙ ШОКОЛАД",
            info: "(В КАЛЛЕТАХ)",
            kind: 'ingred',
            img: {ingred3},
            price: 250,
            weight: 200
        },
        {
            id:7,
            name: "ФОРМА ДЛЯ ШОКОЛАДА",
            info: "ГЕОМЕТРИЯ",
            kind: 'box',
            img: {box1},
            price: 420
        },
        {
            id:8,
            name: "ФОРМА ДЛЯ КАЛЛЕТ",
            info: "КАПЛЯ",
            kind: 'box',
            img: {box2},
            price: 150
        },
        {
            id:9,
            name: "ФОРМА ДЛЯ ШОКОЛАДА",
            info: "ОРНАМЕНТ",
            kind: 'box',
            img: {box3},
            price: 350
        },


    ]

    getGoods() {
        return new Promise((resolve) => {
                resolve(this.data)
        })
    }
}