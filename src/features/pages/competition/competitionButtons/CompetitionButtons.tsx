import React, {useState} from 'react';
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import {Modal} from "@mui/material";
import styles from './styles.module.css';
import {competitionDescription} from "../../../../constants";

const CompetitionButtons = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const redirectToRegistration = () => {
        navigate('/register');
    }
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className={styles.root}>
            <button className={classNames(styles.button, styles.takePartButton)} onClick={() => redirectToRegistration()}>
                Стать участником
            </button>
            <button className={styles.button} onClick={() => openModal()}>
                Правила
            </button>
            <Modal
                className={styles.modal}
                open={modalOpen}
                onClose={() => closeModal()}
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalHeading}>
                        Правила соревнования
                    </div>
                    <div className={styles.modalText}>
                        {competitionDescription}
                    </div>
                </div>
            </Modal>
            <button className={styles.button}>
                Весовой зачет
            </button>
        </div>
    );
};

export default CompetitionButtons;