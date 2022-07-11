import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss';

const menu = [
  { title: 'Главная', href: '/' },
  { title: 'Сервис и Ремонт', href: '/service' },
  { title: 'Запчасти', href: '/spares' },
  { title: 'Доставка и Оплата', href: '/shipping' },
  { title: 'О компании', href: '/company' },
  { title: 'Контакты', href: '/contacts' },
];

const Header: React.FC = () => {
  const location = useLocation();

  const [checked, setChecked] = React.useState(false);
  const [menuActive, setMenuActive] = React.useState<String>(location.pathname);

  if (checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <header className={styles.header}>
      <div
        className={
          checked
            ? styles.header_background + ' ' + styles.header_background_checked
            : styles.header_background
        }
        onClick={() => setChecked(false)}></div>
      <div className={styles.header_block + ' container'}>
        <a href="/">
          <div className={styles.header_block_logo}>
            <img src="./img/logo.png" alt="logo" />
            <div>
              <h4>Спорт и Отдых </h4>
              <p>продажа и обслуживание вездеходной техники</p>
            </div>
          </div>
        </a>
        <ul
          className={
            checked
              ? styles.header_block_menu + ' ' + styles.header_block_menu_checked
              : styles.header_block_menu
          }>
          <div className={styles.header_block_menu_lines} onClick={() => setChecked(false)}>
            <span className={styles.header_block_menu_lines_line}></span>
            <span className={styles.header_block_menu_lines_line}></span>
          </div>
          <a href="/">
            <div
              className={styles.header_block_logo + ' ' + styles.tablet}
              onClick={() => {
                setChecked(false);
              }}>
              <img src="./img/logo.png" alt="logo" />
              <div>
                <h4>Спорт и Отдых </h4>
              </div>
            </div>
          </a>
          {menu.map((obj, i) => (
            <li key={i}>
              <NavLink
                to={obj.href}
                className={menuActive === obj.href ? styles.active : ''}
                onClick={() => {
                  setChecked(false);
                  setMenuActive(obj.href);
                }}>
                {obj.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.header_block_lines} onClick={() => setChecked(true)}>
          <span className={styles.header_block_lines_line}></span>
          <span className={styles.header_block_lines_line}></span>
          <span className={styles.header_block_lines_line}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
