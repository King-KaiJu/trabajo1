const Hero = (props) => {
    const {heroText} = props;
    return (
        <h1 style={{backgroundImage: '/Cute Buubb.png' , padding: '5rem', margin: '3rem'}}>{heroText}</h1>
    )
}

export default Hero