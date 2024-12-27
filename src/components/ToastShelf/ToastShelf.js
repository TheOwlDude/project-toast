import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastsContext} from "../App";

function ToastShelf() {

  const {toasts, setToasts} = React.useContext(ToastsContext);

  return (
    <ol className={styles.wrapper}>
        {toasts.map(toast =>
        <li className={styles.toastWrapper}>
            <Toast id={toast.id}></Toast>
        </li>    
        )}
    </ol>
  );
}

export default ToastShelf;
