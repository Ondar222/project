import React from "react";
import { Card } from "antd";
import styles from "../../../styles/RoutineComponents.module.css"; // Создайте этот файл для стилей

export const RoutineComponents = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        РАСПОРЯДОК ДНЯ ВРЦ «12-Й ШАГ» ВОСКРЕСЕНЬЕ
      </h2>
      <Card className={styles.scheduleCard}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.scheduleImage}
            alt="Daily schedule"
            src="/image-7.png"
          />
        </div>
      </Card>
    </div>
  );
};
