import imgRoses from '../../assets/grupo-8.png'
import imgAutumnFlowers from '../../assets/grupo-9.png'
import imgGroup9122 from '../../assets/grupo9122.png'
import imgGroup9123 from '../../assets/grupo9123.png'
import imgSieirfhek from '../../assets/sieirfhek.png'
import imgGroup9124 from '../../assets/grupo9124.png'

const className = ['background-rose', 'background-grey', 'background-3']

export const card2 = {
    card1 : {
        img : imgRoses,
        alt : "img roses"
    },
    card2 : {
        img : imgAutumnFlowers,
        alt : "img autumn flowers"
    }
}

export const card1 = {
    item1: {
        img: imgGroup9122,
        alt: 'Image of a bouquet of flowers',
        description: 'Florall arrangement Roses in Lux',
        promo: 'New',
        price: ['$99,oo'],
        className : className
    },
    item2: {
        img: imgGroup9123,
        alt: 'Image arrangement of a Day Roses',
        description: 'Floral arrangement Day Roses in Black',
        promo: '',
        price: ['$89,oo'],
        className : className
    },
    item3: {
        img: imgSieirfhek,
        alt: 'Floral White roses',
        description: 'Floral bouquet of Pink and White roses',
        promo: '60% off',
        price: ['$49,oo', '$109,oo'],
        className : className
    },
    item4: {
        img: imgGroup9124,
        alt: 'Floral roses day in golden',
        description: 'Floral arrangement of Roses of the Day in a Golden',
        promo: '',
        price: ['$99,oo'],
        className : className
    }
}