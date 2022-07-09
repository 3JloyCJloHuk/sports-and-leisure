import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import styles from './popupblock.module.scss';

type PopUpBlockProps = {
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopUpBlock: React.FC<PopUpBlockProps> = ({ setPopUp }) => {
  return (
    <div className={styles.popup_background}>
      <div className={styles.popup_form}>
        <div className={styles.popup_form_lines} onClick={() => setPopUp(false)}>
          <span className={styles.popup_form_lines_line}></span>
          <span className={styles.popup_form_lines_line}></span>
        </div>
        <h2>Оформить заявку на запчасти</h2>
        <Formik
          initialValues={{
            name: '',
            mail: '',
            phone: '',
            message: '',
          }}
          onSubmit={(values) => {
            alert('Ваш заказ оформлен');
            console.log({ values });
          }}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.popup_form_input}>
              <ErrorMessage component="p" name="name" />
              <Field type="text" name="name" placeholder="Контактное лицо" />
              <Field type="text" name="mail" placeholder="Электронная почта" />
              <Field type="text" name="phone" placeholder="Контактный телефон" />
              <Field as="textarea" name="message" placeholder="Комментарий" />
              <button type="submit">Узнать подробнее</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PopUpBlock;
