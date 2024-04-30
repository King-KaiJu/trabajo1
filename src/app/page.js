import styles from "./page.module.css";
import Hero from "./componentes/hero/hero";
import Navbar from "./componentes/navbar/navbar";
import Card from "./componentes/card/card";
import CardsGrid from "./componentes/cardsGrid/cardsGrid";
import Footer from "./componentes/footer/footer";

export default function Home() {

  const menuItem = [
    {
      li: 'About',
      link: '/about/'
    },
    {
      li: 'FAQ',
      link: '/faq/'
    },
    {
      li: 'Contact',
      link: '/contact/'
    },
  ]

  const heroInfo = {
    title: 'Portfolio'
  }

  const cardsGrid = [
    {
      title: 'Card 1',
      description: 'Dascripcion Generica',
      image: '/vercel.svg',
      alt: '15rem',
      lar: '15rem'
    },
    {
      title: 'Card 4',
      description: 'Dascripcion Generica',
      image: '/vercel.svg',
      alt: '15rem',
      lar: '15rem'
    },
    {
      title: 'Card 8',
      description: 'Dascripcion Generica',
      image: '/vercel.svg',
      alt: '15rem',
      lar: '15rem'
    },
    {
      title: 'Card B',
      description: 'Dascripcion Generica',
      image: '/vercel.svg',
      alt: '15rem',
      lar: '15rem'
    },
  ]

  const footerInfo = {
    icon: 'Twitter',
    contacto: 'email'
  }

  return (
    <main>
        <Navbar titulo={'KaiJu'} menu={menuItem}/>
        <Hero heroText={heroInfo.title}/>
        <section className={styles.cardSection}>
        <article>
          <Card
            title= {'Buubb'}
            description={ 'Bocetos de este OC'}
            image= {''}
            alt= {'50rem'}
            lar= {'100rem'}
          />
        </article>
        <CardsGrid cards={cardsGrid} />
        </section>
        <Footer barraMail = {footerInfo.contacto} iconos = {footerInfo.icon} />  
    </main>
  );
};