import React from "react";
import styles from "./DfaModal.module.scss";
import ReactModal from "react-modal";
import { DfaInput } from "../DfaInput/DfaInput";
import { DfaButton } from "../dfaButton/DfaButton";

export const DfaModal = (props) => {

    const { visible, onClose } = props;

    return (
        <ReactModal
            isOpen={visible}
            onRequestClose={onClose}
            className={styles.content}
            overlayClassName={styles.overlay}
            ariaHideApp={false}
        >
            <div className={styles.modalInner}>
                <div className={styles.inputBlock}>
                    <div className={styles.inputBlock__input}>
                        <DfaInput />
                    </div>
                    <div className={styles.inputBlock__input}>
                        <DfaInput />
                    </div>
                </div>
                <div className={styles.btnBlock}>
                    <DfaButton btnText="Отправить" />
                </div>
            </div>
        </ReactModal>
    )
}
