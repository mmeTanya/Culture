import { Fade } from "react-awesome-reveal"
import Gallery from '@/components/gallery'
/* import Gallery1 from '@/components/gallery1' */
import Button from "../components/button";
import Modal from "../components/modal";
import s from "../styles/community.module.scss";
import React, { CSSProperties } from "react";


const Community = () => {

  return (
    <section className={s.hero}>
      <Fade delay={7000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        We are Ukrainian cultural community .
      </Fade>
      <Fade delay={8000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        In addition to its intrinsic value, culture provides
      </Fade>
      <Fade delay={9000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        important social and economic benefits. With improved
      </Fade>
      <Fade delay={10000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        learning and health, increased tolerance, and opportunities
      </Fade>
      <Fade delay={11000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        to come together with others, culture enhances our quality
      </Fade>
      <Fade delay={12000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        of life and increases overall well-beingfor  individuals
      </Fade>
      <Fade delay={13000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        and communities.
      </Fade>
      <h1 className={s.hero__title}>Our choreograf</h1>
      <div className={s.hero__overlay1}>
        <img src='/dance.jpeg' alt='image' className={s.hero__img1} />
      </div>
      <p className={s.hero__text}>
        A successful choreographer demonstrates a keen passion and talent for dance partnered with persistence, determination and excellent teaching and leadership skills. As a choreographer, you'll create and plan routines for performance, usually to music. You'll create dance routines to entertain at live shows, events or for TV and films. You're usually required to plan the whole performance, from teaching the steps to the dancers to working with costume designers and directors to achieve the desired outcome. You could choreograph stage, TV or film performances, music videos, and even fashion shows or corporate events. You might create your own dance pieces or interpret a director's instructions depending on the brief provided.

        You'll need a high level of dancing ability, the patience to teach others and to know what looks good to a wider audience, as well as the communication skills needed to make sure that your directions are coming across clearly to your dancers.
      </p>
      <Gallery />
    </section>
  );
};

export default Community;