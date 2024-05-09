import styles from "./card.module.css"

const Card = ({image, title, description, alt, lar, marg, txtColor}) => {
    return(
        <a href="/" >
            <div 
            className={styles.box} 
            style={{
                backgroundImage: `url(${image})`,
                width: `${lar}`,
                height: `${alt}`,
                margin: `${marg} 0 ${marg} 4rem`,
                }}
            >
                <h3 className={styles.textCard} style={{fontSize: `calc(${alt}/15)`, color: `${txtColor}`}}>{title}</h3>
                <p className={styles.textCard} style={{fontSize: `calc(${alt}/20)`, color: `${txtColor}`}}>{description}</p>
            </div>
        </a>
    )
}

export default Card;