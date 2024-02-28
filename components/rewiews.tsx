import { useState, useEffect } from 'react';
import Button from "../components/button";
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader'
import s from "../styles/form-order.module.scss";
import { Architects_Daughter } from 'next/font/google';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


const Rewiews = () => {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [answer, setAnswer] = useState('');
  const [errorsSubmit, setErrorsSubmit] = useState({
    name: '',
    comments: ''
  });

  const [rewiews, setRewiews] = useState([])
  const [status, setStatus] = useState(Status.IDLE);


  useEffect(() => {
    onLoadRewiews()
  }, []);



  const onLoadRewiews = async () => {

    try {
      const response = await fetch('/api/rewiews')
      setStatus(Status.PENDING)

      const result = await response.json()
      if (result.rewiews.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      setRewiews(result.rewiews)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setErrorsSubmit({
      name: '',
      comments: '',
    });
    switch (name) {
      case 'name':
        return setName(value);
      case 'comments':
        return setComments(value);
      default:
        return;
    }
  }

  const regexName = /^[a-z ,.'-]+$/i

  const reset = () => {
    setTimeout(() => {
      setName('');
      setComments('');
      setAnswer('');
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: name,
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
      else
        if (comments === '') {
          setErrorsSubmit(prevState => ({
            ...prevState,
            comments: 'required'
          }));
        }

    if (name === '' ||
      !regexName.test(name) ||
      comments === '') {
      return
    }


    const response = await fetch('/api/post-rewiews', {
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors'
    })
    const result = await response.json()
    setAnswer('Thanks');
    reset()
  }



  return (
    <section>
      <article className={s.rewiews}>
        <h2 className={s.rewiews__title}>
          Rewiews
        </h2>
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED &&
          <ul className={s.rewiews__list} >
            {rewiews && rewiews.map(item =>
            (<li key={uuidv1()} className={s.rewiews__item}>
              <p key={uuidv1()} className={s.rewiews__text}>{item.name}</p>
              <p key={uuidv1()} className={s.rewiews__text}>{item.comments}</p>
            </li>
            ))}
          </ul>}


        <h2 className={s.rewiews__title}>
          Leave your Rewiew
        </h2>
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
            {errorsSubmit.name === 'required' && <p className={s.form_info__error}>Напишіть ім`я</p>}
            {errorsSubmit.name === 'wrong' && <p className={s.form_info__error}>Wrong name</p>}
          </div>

          <div className={s.form_info__form_field}>
            <label className={s.form_info__label} htmlFor="comments">
              Text
            </label>
            <textarea
              className={errorsSubmit.comments === 'required' || errorsSubmit.comments === 'wrong' ? s.form_info__comments_red : s.form_info__comments}
              name="comments"
              id="comments"
              placeholder="Напишіть текст"
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
      </article>
    </section >
  );
};

export default Rewiews;
