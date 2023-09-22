import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ButtonCircle from "../components/button-circle";
import s from "../styles/header.module.scss";



const NavLinks = [
  { id: 1, title: "Our community", path: "/community" },
  { id: 2, title: "News", path: "/news" },
  { id: 3, title: "Lessons shedule", path: "/lessons-shedule" },
  { id: 4, title: "Dance group for kids", path: "/dance-group-for-kids" },
  { id: 5, title: "Dance group for adoults", path: "/dance-group-for-adoults" },
  { id: 6, title: "Choir", path: "/choir" },
  { id: 7, title: "Singers", path: "/singers" },
  { id: 7, title: "Sacsofonist", path: "/sacsofonist" },
];

const MobileNav = () => {
  const [isClose, setIsClose] = useState(true);
  const router = useRouter();

  const MenuOpen = () => {
    setIsClose(!isClose);
  };

    return (
    <div className={s.mobile_header}>
      <ul className={s.join_us__social_list}>
        <li className={s.join_us__social_item}>
          <a className={s.join_us__instagram} href="https://www.instagram.com/mme.tania/" />
        </li>
        <li className={s.join_us__social_item}>
          <a className={s.join_us__facebook} href="https://www.facebook.com/tanyaivanovn" />
        </li>
      </ul>
     
      {isClose &&
        
          <ButtonCircle theme={'menu'} type={'button'} onClick={MenuOpen} />
        
      }
      
      <div className={isClose ? s.mobile_header__isClose : s.mobile_header__menu_container}>
        <div className={s.mobile_menu}>
          <ButtonCircle theme={'close'} type={'button'} onClick={MenuOpen} />
          <ul className={s.mobile_menu__list}>
            {NavLinks.map((NavLink) => (
              <li className={s.mobile_menu__item} key={NavLink.id}>
                <Link legacyBehavior href={NavLink.path}>
                  <a id="link"
                    className={
                      router.pathname === NavLink.path
                        ? s.mobile_link_active
                        : s.mobile_menu__link
                    }
                  >
                    {NavLink.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;