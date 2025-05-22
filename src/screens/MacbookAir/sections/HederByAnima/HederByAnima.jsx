import React from "react";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "../../../../styles/Header.module.css";

export const HeaderByAnima = () => {
  return (
    <>
      {/* Верхняя информационная панель */}
      <div className={styles.topPanel}>
        <div className={styles.topPanelContent}>
          <div className={styles.workingHours}>
            <PhoneOutlined className={styles.icon} />
            <span>Время работы: Круглосуточно</span>
          </div>
          <div className={styles.location}>
            <EnvironmentOutlined className={styles.icon} />
            <span>г. Иваново</span>
          </div>
          {/* Основной заголовок */}
          <header className={styles.mainHeader}>
            <div className={styles.logoContainer}>
              <img src="/img/logo.png" alt="12 Шаг" className={styles.logo} />
            </div>
            <div className={styles.regionInfo}>
              Работаем по ИВАНОВО И ОБЛАСТИ
            </div>
          </header>
          <div className={styles.phone}>
            <PhoneOutlined className={styles.icon} />
            <span>8 800 500 89 55</span>
          </div>
          <Button className={styles.callButton} type="primary">
            Срочный вызов врача
          </Button>
        </div>
      </div>
    </>
  );
};
