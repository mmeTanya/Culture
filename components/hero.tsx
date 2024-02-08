import Link from "next/link";
import { Pacifico, Calistoga } from 'next/font/google'
import { Fade, JackInTheBox, Rotate } from "react-awesome-reveal"
import s from "../styles/hero.module.scss";


const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],

})

const calistoga = Calistoga({
  weight: '400',
  subsets: ['latin'],
})

const Hero = () => {

  return (

    <section className={s.hero}>
      <Rotate delay={3000} className={s.hero__title_cover} triggerOnce={true}>
        <h1 className={s.hero__title}  >
          <span className={pacifico.className}>WELCOME
          </span></h1>
      </Rotate>
      <Rotate delay={4000} className={s.hero__text_cover1} triggerOnce={true}>
        <p className={s.hero__text}> <span className={calistoga.className} >to the website of Ukrainian cultural community "BALAMUTY" </span></p>
        </Rotate>
      <div className={s.hero__cover_link}>
        
      </div>
    </section >
  );
};

export default Hero;
