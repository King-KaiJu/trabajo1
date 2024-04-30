import Card from '../card/card';
import styles from '@/app/componentes/cardsGrid/cardsGrid.module.css';

const CardsGrid = ({cards}) => {
    return(
        <section className={styles.container}>
            {cards.map((card, index) =>(
                <article key={index} className={styles.col_4}>
                    <Card 
                    key={index} 
                    title={card.title} 
                    description={card.description} 
                    image={card.image} 
                    alt={card.alt}
                    lar={card.lar}
                    />
                </article>
            ))}
        </section>
    )
}

export default CardsGrid