import Form from '../components/form-order'
import s from "../styles/contacts.module.scss";


const Contacts = () => {

  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>Our address </h2>
          <p className={s.contacts__text}>95 York Rd</p>
          <p className={s.contacts__text}>Reading</p>
          <p className={s.contacts__text}>RG1 8DU</p>
          <p className={s.contacts__text}>07340481420</p>
          <p className={s.contacts__text}>ganna.voloshchuk4@gmail.com</p>
        </div>
        <h2 className={s.contacts__title_paragraf}>To contact us fill form </h2>
        <Form />
      </div>
    </section>
  );
};

export default Contacts;