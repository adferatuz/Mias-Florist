import './styles/homeStyles.css'
import { CardMain } from '../components/CardMain'
import { TitleContain } from '../components/TitleContain'
import { Card2 } from '../components/Card2'

export default function Home() {
    return (
        <div className="container">
            <CardMain />
            <TitleContain />
            <Card2 />
        </div>
    )
}