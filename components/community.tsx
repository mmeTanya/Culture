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
      <Fade delay={3000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        We are Ukrainian cultural community .
      </Fade>
      <Fade delay={4000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        In addition to its intrinsic value, culture provides
      </Fade>
      <Fade delay={5000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        important social and economic benefits. With improved
      </Fade>
      <Fade delay={6000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        learning and health, increased tolerance, and opportunities
      </Fade>
      <Fade delay={7000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        to come together with others, culture enhances our quality
      </Fade>
      <Fade delay={8000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        of life and increases overall well-beingfor  individuals
      </Fade>
      <Fade delay={9000} cascade damping={1e-1} triggerOnce={true} duration={300} className={s.hero__text}>
        and communities.
      </Fade>
      <h1 className={s.hero__title}>Our choreograf</h1>
      <div className={s.hero__overlay1}>
        <img src='/ana.jpg' alt='image' className={s.hero__img1} />
      </div>
      <p className={s.hero__text}>
        The dance group "Balamuty" was created at the end of 2022 by the choreographer from Kyiv, Hanna Andryushchenko. This team is part of the Ukrainian community in the city of Reading. Ukrainian children and adults who came to Great Britain with the beginning of the war between Russia and Ukraine dance in the group.
        One of the goals of our enemy is to destroy the language and national culture of our people, song, dance, history. Therefore, we consider it our duty to support our culture and traditions wherever we are. This is our cultural and diplomatic front.
        The program features traditional Ukrainian dances and plot sketches. There are plans to create dances of different nationalities.
        In particular, English.
        We have to introduce our culture to the world. and save for the future.
        We thank our English friends for this opportunity.
      </p>
      <Gallery />
    </section>
  );
};

export default Community;