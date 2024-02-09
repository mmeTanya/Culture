import s from "../styles/contacts.module.scss";


const LessonsShedule = () => {

  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>Temps de travail</h2>
          <p className={s.contacts__text}>Mardi - Jeudi : 11h - 21h</p>
          <p className={s.contacts__text}>Vendredi - Dimanche : 11h - 23h</p>
        </div>
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>Nous serons ravis de vous voir dans notre restaurant !</h2>
        </div>
      </div>
    </section>
  );
};

export default LessonsShedule;