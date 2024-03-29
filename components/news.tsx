import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader'
import s from "../styles/news.module.scss";
import Button from "../components/button";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const News = () => {

  const [news, setNews] = useState([])
  const [page, setPage] = useState(2)
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    onLoadNews()

  }, []);


  const onLoadNews = async () => {

    try {
      const response = await fetch('/api/news')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.news.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      const firstPage = result.news.slice(0, 7)
      setNews(firstPage)
      setStatus(Status.RESOLVED)
      if (result.news.length > 7) {
        setShowButton(true)
      }
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  const onLoadNext = async () => {
    setShowButton(false)
    window.scroll({
      left: 0,
      behavior: 'smooth'
    });
    setPage((prevState) => prevState + 1)
    try {
      const response = await fetch('/api/news')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.news.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      const nextPage = result.news.slice(7 * page - 7, 7 * page)
      setNews([...news, ...nextPage])
      setStatus(Status.RESOLVED)
      if (page >= Math.ceil(result.news.length / 7)) {
        setShowButton(false);
      } else {
        setShowButton(true)
      }
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }


  return (
    <section className={s.news} >
      <h2 className={s.news__title}>
        Our news
      </h2>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED &&
        <ul>
          { news.map(item =>
          (<li key={uuidv1()} className={s.news_item}>
            <div className={s.news_item__cover}>
              {item.title && <h2 className={s.news_item__title}>{item.title}</h2>}
              <div className={s.news_item__img_cover}>
                {item.image && item.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.news_item__img} />))}
                {item.video && item.video.map(el => (<iframe key={uuidv1()} src={el.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={s.news_item__video}></iframe>))}
              </div>
              {item.text && item.text.map(el => (<p key={uuidv1()} className={s.news_item__text}>{el.p}</p>))}
              {item.link && item.link.map(el => (<a key={uuidv1()} href={el.href} className={s.news_item__link}>{el.p}</a>))}
              {item.date && <p className={s.news_item__date}>{item.date}</p>}
            </div>
          </li>)
          )}
        </ul>
      }
      {showButton && <Button theme={'no_animate'} onClick={onLoadNext} type={'button'} text={'Завантажити ще'} />}
    </section>
  );
};

export default News;