import s from "../styles/footer.module.scss";

const Footer = () => {

  return (
    <footer className={s.page_footer}>
      <div className={s.container_union}>
        <div className={s.contact_container}>
          <h2 className={s.page_footer__title}>Ukrainian cultural community</h2>
          <address>
            <ul>
              <li className={s.page_footer__contact_link}>  <a href="https://goo.gl/maps/F8HtsvvBLD5XEcSb9" className={s.page_footer__contact_link}></a>провулок Ярмарочний, 57</li>
              <li className={s.page_footer__contact_link}>Reading</li>
              <li className={s.page_footer__contact_item}><a href="mailto:info@devstudio.com" className={s.page_footer__contact_link}>info@devstudio.com</a></li>
              <li className={s.page_footer__contact_item}><a href="tel:+380961111111" className={s.page_footer__contact_link}>+38 096 111 11 11</a></li>
            </ul>
          </address>
      </div>
    </div>
    </footer >

  );
};

export default Footer;
