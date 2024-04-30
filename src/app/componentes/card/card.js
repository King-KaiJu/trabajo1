import styles from "./card.module.css"

const Card = ({image, title, description, alt, lar}) => {
    return(
        <a href="/" >
            <div className={styles.card} style={{backgroundImage:`url(${image})`}}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default Card;