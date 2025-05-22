import React from "react";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "../../../../styles/Header.module.css";

export const HeaderByAnima = () => {
  return (
    <div className={styles.headerContainer}>
      {/* Первый ряд - только время работы */}
      <div className={styles.topRow}>
        <div className={styles.workingHours}>
          <span>Время работы: Круглосуточно</span>
        </div>
      </div>

      {/* Второй ряд - телефон, город и кнопка */}
      <div className={styles.middleRow}>
        <div className={styles.contactInfo}>
          <div className={styles.phone}>
            <PhoneOutlined className={styles.icon} />
            <span>8 800 500 89 55</span>
          </div>
          <div className={styles.location}>
            <EnvironmentOutlined className={styles.icon} />
            <span>г. Иваново</span>
          </div>
        </div>
        <Button className={styles.callButton} type="primary">
          Срочный вызов
        </Button>
      </div>

      {/* Третий ряд - логотип и регион */}
      <div className={styles.bottomRow}>
        <div className={styles.logoContainer}>
          <img src="/img/logo.png" alt="12 Шаг" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};
