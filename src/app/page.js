import styles from "./page.module.css";
import Navbar from "./componentes/navbar/navbar";
import Card from "./componentes/card/card";
import Hero from "./componentes/hero/hero";
import Footer from "./componentes/footer/footer";

export default function Home() {

  const footerInfo = {
    icon: 'Twitter',
    contacto: 'email'
  }

  const heroInfo = {
    title: 'Portfolio',
    imagen: '/cho tengen toppa gurren lagann.jpg'
  }

  const cardsGrid = [
    {
      title: 'Card 1',
      description: 'Dascripcion Generica',
      image: '/next.svg'
    },
    {
      title: 'Card 4',
      description: 'Dascripcion Generica',
      image: '/vercel.svg'
    },
    {
      title: 'Card 3',
      description: 'Dascripcion Generica',
      image: '/Cute Buubb.png'
    },
  ]

  const menuItem = [
    {
      li: 'Home',
      link: '/'
    },
    {
      li: 'About',
      link: '/about/'
    },
    {
      li: 'Contact',
      link: '/contact/'
    },
  ]

  return (
    <main className={styles.main}>
        <Navbar titulo={'Perro'} menu={menuItem}/>
        <Hero heroText={heroInfo.title}/>
        <div>  
          {
            cardsGrid.map((card, index) =>(
              <Card 
              key={index} 
              title={card.title} 
              image={card.image} 
              description={card.description} 
              />))
          }
        </div>
        <Footer barraMail = {footerInfo.contacto} iconos = {footerInfo.icon} />  
    </main>
  );
};
