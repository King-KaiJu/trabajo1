import Image from "next/image";

const Card = (props) => {
    const {image, title, description} = props;
    return(
        <div style={{backgroundColor: 'red', padding: '2rem', margin: '1rem'}}>
            <Image
                src={image}
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
                />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Huebon</button>
        </div>
    )
}

export default Card;

