import styles from './navbar.module.css'

const Navbar = (props) => {
    const {titulo, menu} = props;
    return(
        <header className={styles.container}>
            <h1><a href='/'>{titulo}</a></h1>
            <nav>
                <ul className={styles.menu} >
                    {
                    menu.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.li}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar