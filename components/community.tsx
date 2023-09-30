import { Fade } from "react-awesome-reveal"
import Gallery from '@/components/gallery'
import Gallery1 from '@/components/gallery1'
import Button from "../components/button";
import Modal from "../components/modal";
import s from "../styles/community.module.scss";

const divStyle = {
  whiteSpace: 'break-spaces',
  display: 'block'
}

const Community = () => {

  return (
    <section className={s.hero}>
      <div className={s.hero__overlay}>
        <img src='/dance.jpeg' alt='image' className={s.hero__img} />
      </div>
      <p className={s.hero__text}>We are Ukrainian cultural community Kalyna. In addition to its intrinsic value, culture provides important social and economic benefits. With improved learning and health, increased tolerance, and opportunities to come together with others, culture enhances our quality of life and increases overall well-being for both individuals and communities.</p>
      <Gallery />
      <h1 className={s.hero__title}>Our choreograf</h1>
      <div className={s.hero__overlay1}>
        <img src='/dance.jpeg' alt='image' className={s.hero__img1} />
      </div>
      <Fade delay={3000} cascade damping={1e-1} triggerOnce={true} duration={300} style={divStyle} className={s.hero__text}>
        Nos aliments dépendent fortement des produits locaux. Les pommes fraîches, les baies, les haricots verts, les poireaux, les champignons, diverses courges et les fruits à noyau font partie des produits les plus couramment utilisés. La volaille, le bœuf, l'agneau et le veau sont facilement disponibles toute l'année. La viande de gibier est particulièrement appréciée et abondante pendant la saison de chasse qui s'étend du début de l'automne à février. Peu importe la région, la France regorge de fromages et de vins artisanaux.
      </Fade>
      <Gallery1 />
    </section>
  );
};

export default Community;