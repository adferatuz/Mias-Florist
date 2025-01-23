import './styles/homeStyles.css'
import { CardMain } from '../components/CardMain'
import { TitleContain } from '../components/TitleContain'
import { Card2 } from '../components/Card2'
import { Carousel } from '../components/Carousel'
import { card1 } from '../core/utils/utils'

export default function Home() {
    return (
        <div className="container">
            <CardMain />
            <TitleContain />
            <Card2 />
            <Carousel title={'Top Sellers'} cards={card1} />
        </div>
    )
}