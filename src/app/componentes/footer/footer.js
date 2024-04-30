const Footer = ({barraMail, iconos}) =>{
    return (
        <footer style={{backgroundColor: '#00f'}}>
            <section>
                <h1>{iconos}</h1>
            </section>
            <section>
                <form>
                    <input type={barraMail}></input>
                </form>
            </section>
        </footer>
    )
}

export default Footer