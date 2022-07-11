import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import styles from './popupblock.module.scss';
import validation from './validation';

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
          validationSchema={validation}
          onSubmit={(values) => {
            alert('Console');
            console.log({ values });
          }}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.popup_form_inputs}>
              <div className={styles.popup_form_inputs_input}>
                <Field type="text" name="name" placeholder="Контактное лицо" />
                <ErrorMessage
                  className={styles.popup_form_inputs_input_error}
                  component="p"
                  name={'name'}
                />
              </div>
              <div className={styles.popup_form_inputs_input}>
                <Field type="text" name="mail" placeholder="Электронная почта" />
                <ErrorMessage
                  className={styles.popup_form_inputs_input_error}
                  component="p"
                  name={'mail'}
                />
              </div>
              <div className={styles.popup_form_inputs_input}>
                <Field type="text" name="phone" placeholder="Контактный телефон" />
                <ErrorMessage
                  className={styles.popup_form_inputs_input_error}
                  component="p"
                  name={'phone'}
                />
              </div>
              <div className={styles.popup_form_inputs_input}>
                <Field as="textarea" name="message" placeholder="Комментарий" />
                <ErrorMessage
                  className={styles.popup_form_inputs_input_error}
                  component="p"
                  name={'message'}
                />
              </div>
              <button type="submit">Узнать подробнее</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PopUpBlock;
