import './styles/homeStyles.css'
import { CardMain } from '../components/CardMain'
import { TitleContain } from '../components/TitleContain'

export default function Home() {
    return (
        <div className="container">
            <CardMain />
            <TitleContain />
        </div>
    )
}