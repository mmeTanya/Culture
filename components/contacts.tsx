import s from "../styles/contacts.module.scss";


const Contacts = () => {

  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>Our address </h2>
          <p className={s.contacts__text}>59 Quai Henri IV</p>
          <p className={s.contacts__text}>Reading</p>
          <p className={s.contacts__text}>+33 096 111 11 11</p>
          <p className={s.contacts__text}>info@lesbisous.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;