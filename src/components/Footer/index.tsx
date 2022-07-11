import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.module.scss';
import '../../scss/_variables.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_block + ' container'}>
        <div className={styles.footer_block_address + ' desktop'}>
          <p>192019, Санкт-Петербург</p>
          <p>
            24 линия В.О., д. 3-7,
            <br /> территория завода "Электроаппарат"
          </p>
          <p>© 2022 — Спорт и Отдых</p>
        </div>
        <ul className={styles.footer_block_menu}>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/service">Сервис и Ремонт</NavLink>
          </li>
          <li>
            <NavLink to="/spares">Запчасти</NavLink>
          </li>
        </ul>
        <ul className={styles.footer_block_menu}>
          <li>
            <NavLink to="/shipping">Доставка и Оплата</NavLink>
          </li>
          <li>
            <NavLink to="/company">О компании</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
        <div className={styles.footer_block_phone}>
          <a href="tel:+78123226060">+7 (812) 322-60-60</a>
          <a href="tel:+79213266026">+7 (921) 326-60-26</a>
          <a href="mailto:info@vezdehod.com">Связаться с нами</a>
        </div>

        <div className={styles.footer_block_address + ' mobile'}>
          <p>192019, Санкт-Петербург</p>
          <p>
            24 линия В.О., д. 3-7,
            <br /> территория завода "Электроаппарат"
          </p>
          <p>© 2022 — Спорт и Отдых</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
