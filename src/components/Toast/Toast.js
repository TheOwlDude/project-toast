import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import {ToastsContext} from "../App";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function getClassName(variant) {
    switch (variant) {
        case 'success': return styles.success;
        case 'warning': return styles.warning;
        case 'error': return styles.error;
        case 'notice': return styles.notice;
        default: throw "WTF";
    }
}

function Toast({id}) {
  const {toasts, setToasts} = React.useContext(ToastsContext);
  
  return (
    <div className={`${styles.toast} ${getClassName(toasts.filter(toast => toast.id === id)[0].variant)}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
          {toasts.filter(toast => toast.id === id)[0].message}
      </p>
      <button className={styles.closeButton} 
              onClick={() => {
                  const remainingToasts = toasts.filter(toast => toast.id !== id);
                  setToasts(remainingToasts);
              }}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
