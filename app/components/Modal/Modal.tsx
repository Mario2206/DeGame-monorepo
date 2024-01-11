import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ show, children, onClose }) => {
    if (!show) {
        return null;
    }

    return (
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
              <button className={styles.closeButton} onClick={onClose}>&times;</button>
          </div>
          <div className={styles.modalBody}>
              {children}
          </div>
        </div>
      </div>
    );
};

export default Modal;