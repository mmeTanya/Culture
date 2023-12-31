import Link from "next/link";
import { Pacifico, Calistoga } from 'next/font/google'
import { JackInTheBox, Rotate } from "react-awesome-reveal"
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
      <Rotate delay={1500} className={s.hero__title_cover} triggerOnce={true}>
        <h1 className={s.hero__title}  >
        <span className={pacifico.className}>WELCOME
        </span></h1>
      </Rotate>
      <Rotate delay={2000} className={s.hero__text_cover} triggerOnce={true}>
        <p className={s.hero__text}> <span className={calistoga.className} >to the website of Ukrainian cultural community Kryla </span></p>
      </Rotate>
      <div className={s.hero__cover_link}>
        <JackInTheBox delay={3000} className={s.hero__cover} triggerOnce={true}>
          <div className={s.hero__item}>
            <Link legacyBehavior href='/community'>
              <a id="link" className={calistoga.className} > Let's go to our website </a>
            </Link>
          </div>
        </JackInTheBox>
      </div>
    </section >
  );
};

export default Hero;
