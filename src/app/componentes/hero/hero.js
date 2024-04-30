import styles from "./hero.module.css"

const Hero = ({heroText}) => {
    return (
        <div className={styles.heroBKG}>
            <h1 className={styles.hero}>{heroText}</h1>
        </div>
    )
}

export default Hero