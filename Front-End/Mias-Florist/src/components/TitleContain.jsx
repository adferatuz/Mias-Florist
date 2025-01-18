import Button from './Button'
import './styles/titleContainStyles.css'

export const TitleContain = () => {
    return (
        <section className="title-contain">
            <h1 className="title">Surprise your favorite <br /> person</h1>
            <p className="subtitle"><strong><em>New</em></strong> Rose arrangement with golden vase</p>
            <h1 className='title'><em>$99,oo</em></h1>
            <Button 
                type={'button'}
                className={'yellow-button buy-button'}
                content={'Shop now'}
            />
        </section>
    )
}