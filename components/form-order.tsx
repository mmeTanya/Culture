import { useState } from 'react';
import Button from "../components/button";
import s from "../styles/form-order.module.scss";


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [answer, setAnswer] = useState('');
  const [errorsSubmit, setErrorsSubmit] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });


  const handleChange = ({ target: { name, value } }) => {
    setErrorsSubmit({
      name: '',
      email: '',
      phone: '',
      comments: '',
    });
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'phone':
        return setPhone(value);
      case 'comments':
        return setComments(value);
      default:
        return;
    }
  }

  const regexName = /^[a-z ,.'-]+$/i
  const regexEmail = /^\w([\.-]?\w+)*(\@\w{1,})*(\.\w{2,})$/;
  const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

  const reset = () => {
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setComments('');
      setAnswer('');
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      phone: phone,
      comments: comments,
      date: new Date()
    }

    if (name === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        name: 'required'
      }));
    } else
      if (!regexName.test(name)) {
        setErrorsSubmit(prevState => ({
          ...prevState,
          name: 'wrong'
        }));
      }
    if (email === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        email: 'required'
      }));
    } else
      if (!regexEmail.test(email)) {
        setErrorsSubmit(prevState => ({
          ...prevState,
          email: 'wrong'
        }));
      }
    if (phone === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        phone: 'required'
      }));
    } else
      if (!regexPhone.test(phone)) {
        setErrorsSubmit(prevState => ({
          ...prevState,
          phone: 'wrong'
        }));
      }
    if (comments === '') {
      setErrorsSubmit(prevState => ({
        ...prevState,
        comments: 'required'
      }));
    }

    if (name === '' ||
      !regexName.test(name) ||
      email === '' ||
      !regexEmail.test(email) ||
      phone === '' || !regexPhone.test(phone)
      || comments === '') {
      return
    }

    const response = await fetch('/api/applications', {
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors'
    })
    const result = await response.json()
    setAnswer('Thanks');
    reset()
  }


  return (
    <form className={s.form_info} onSubmit={handleSubmit} autoComplete="off">
      <div className={s.form_info__form_field}>
        <label className={s.form_info__label} htmlFor="name">
          Name
        </label>
        <input
          className={errorsSubmit.name === 'required' || errorsSubmit.name === 'wrong' ? s.form_info__input_red : s.form_info__input}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
        {errorsSubmit.name === 'required' && <p className={s.form_info__error}>Write name</p>}
        {errorsSubmit.name === 'wrong' && <p className={s.form_info__error}>Wrong name</p>}
      </div>
      <div className={s.form_info__form_field}>
        <label className={s.form_info__label} htmlFor="tel">
          Phone
        </label>
        <input
          className={errorsSubmit.phone === 'required' || errorsSubmit.phone === 'wrong' ? s.form_info__input_red : s.form_info__input}
          type="tel"
          name="phone"
          id="tel"
          value={phone}
          onChange={handleChange}
        />
        {errorsSubmit.phone === 'required' && <p className={s.form_info__error}>Wrie phone</p>}
        {errorsSubmit.phone === 'wrong' && <p className={s.form_info__error}>Wrong phone</p>}
      </div>
      <div className={s.form_info__form_field}>
        <label className={s.form_info__label} htmlFor="email">
          Email
        </label>
        <input
          className={errorsSubmit.email === 'required' || errorsSubmit.email === 'wrong' ? s.form_info__input_red : s.form_info__input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        {errorsSubmit.email === 'required' && <p className={s.form_info__error}>Write email</p>}
        {errorsSubmit.email === 'wrong' && <p className={s.form_info__error}>Wrong email</p>}
      </div>
      <div className={s.form_info__form_field}>
        <label className={s.form_info__label} htmlFor="comments">
          Text
        </label>
        <textarea
          className={errorsSubmit.comments === 'required' || errorsSubmit.comments === 'wrong' ? s.form_info__comments_red : s.form_info__comments}
          name="comments"
          id="comments"
          placeholder="Write text"
          value={comments}
          onChange={handleChange}
        >
        </textarea>
        {errorsSubmit.comments === 'required' && <p className={s.form_info__error}>Write text</p>}
      </div>
      <div className={s.form_info__button}>
        <Button theme={'no_animate'} type={'submit'} text={'Send'} />
      </div>
      <p className={s.form_info__answer}>{answer}</p>
    </form>
  );
};

export default Form;
