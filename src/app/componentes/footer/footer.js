import styles from "./footer.module.css";

const Footer = ({barraMail, twitter, instagram, github}) =>{
    return (
        <footer className={styles.mierdaconpatas}>
            <section className={styles.izquierda}>
                <a href="https://twitter.com/?lang=es"><h2>{twitter}</h2></a>
                <a href="https://www.instagram.com"><h2>{instagram}</h2></a>
                <a href="https://github.com/King-KaiJu"><h2>{github}</h2></a>
            </section>
            <section className={styles.derecha}>
                <form>
                    <input type={barraMail}></input>
                </form>
            </section>
        </footer>
    )
}

export default Footer