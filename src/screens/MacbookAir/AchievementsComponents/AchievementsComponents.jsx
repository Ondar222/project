import React from "react";
import { Card } from "antd";
import styles from "../../../styles/AchievementsComponents.module.css"; // Создайте этот файл для стилей

export const AchievementsComponents = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>НАШИ ДОСТИЖЕНИЯ</h2>

      <div className={styles.cardsContainer}>
        <Card
          className={styles.achievementCard}
          style={{ backgroundImage: "url(/image-5-1.png)" }}
        />
        <Card
          className={styles.achievementCard}
          style={{ backgroundImage: "url(/image-3-1.png)" }}
        />
        <Card
          className={styles.achievementCard}
          style={{ backgroundImage: "url(/image-4-1.png)" }}
        />
      </div>
    </div>
  );
};
