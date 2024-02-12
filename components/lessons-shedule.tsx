import s from "../styles/contacts.module.scss";


const LessonsShedule = () => {

  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>We are working</h2>
          <p className={s.contacts__text}>for children 4 - 6 years </p>
          <p className={s.contacts__text}>Tuesday, Friday : 4pm - 5pm</p>
          <p className={s.contacts__text}>for children 6 and above </p>
          <p className={s.contacts__text}>Tuesday, Friday : 5pm - 6.30pm</p>
          <p className={s.contacts__text}>for adoults </p>
          <p className={s.contacts__text}> Friday : 6.30pm - 8.30pm</p>
        </div>
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>Welcome to our lessons !</h2>
        </div>
      </div>
    </section>
  );
};

export default LessonsShedule;