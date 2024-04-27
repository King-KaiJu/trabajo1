const Navbar = (props) => {
    const {titulo, menu} = props;
    return(
        <header style={{backgroundColor: 'cyan', padding: '2rem', margin: '1rem'}}>
            <h1>{titulo}</h1>
            <nav>
                <ul>
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