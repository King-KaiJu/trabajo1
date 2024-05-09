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
      title: 'Diujos en digital',
      description: 'Dibujos hechos con la tableta de dibujo',
      image: '/images/CuteBuubb.png',
      alt: '20rem',
      lar: '25rem',
      marg: '0',
      txtColor: 'black'
    },
    {
      title: '3D',
      description: 'Renders de objetos en 3D',
      image: '/images/Cafetera_Render.png',
      alt: '20rem',
      lar: '25rem',
      marg: '0',
      txtColor: 'grey'
    },
    {
      title: 'Model Sheet',
      description: 'Disqños de personaje en tradicional y en digital',
      image: '/images/Sheet.jpeg',
      alt: '20rem',
      lar: '25rem',
      marg: '0',
      txtColor: 'black'
    },
    {
      title: 'Proximamente...',
      description: 'mas proyectos proximamente',
      image: '/images/prog.png',
      alt: '20rem',
      lar: '25rem',
      marg: '0',
      txtColor: 'light-grey'
    },
  ]

  const footerInfo = {
    twitter: 'Twitter',
    instagram: 'Instagram',
    github: 'GitHub',
    contacto: 'email'
  }

  return (
    <main>
        <Navbar titulo={'KaiJu'} menu={menuItem}/>
        <Hero heroText={heroInfo.title}/>
        <section >
          <h2 className={styles.sectionOfCards}>Tabajos</h2>
          <article className={styles.espacioCards}>
            <article>
              <Card
                title= {'Dibujos en Tradicional'}
                description={ 'Dibujos hechos a lapiz y papel'}
                image= {'/images/Moth.jpeg'}
                alt= {'43rem'}
                lar= {'50rem'}
                marg = {'10rem'}
                txtColor = {"black"}
              />
            </article>
            <CardsGrid cards={cardsGrid} />
          </article>
        </section>
        <Footer barraMail = {footerInfo.contacto} twitter={footerInfo.twitter} instagram={footerInfo.instagram} github = {footerInfo.github} />  
    </main>
  );
};