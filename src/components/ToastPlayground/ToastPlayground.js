import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import {ToastsContext} from "../App";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('notice');
    
  const {toasts, setToasts} = React.useContext(ToastsContext);
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
      <ToastShelf></ToastShelf>
      
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" 
                      className={styles.messageInput}
                      value={message}
                      onChange={(event) =>  setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map((variant) =>
                <label htmlFor={`variant-${variant}`} key={`notice-radio-${variant}`}>
                  <input 
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={selectedVariant === variant}
                      onChange={(event) =>  setSelectedVariant(event.target.value)}
                  />
                  {variant}
                </label>    
              )
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => {
              setToasts([...toasts, {
                    id: crypto.randomUUID(),
                    message: message,
                    variant: selectedVariant
                  }]
              );
              setMessage('');
            }}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
