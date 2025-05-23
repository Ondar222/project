import { useState, useEffect } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Card, Input, message } from "antd";
import styles from "../../../../styles/OverlapWrapper.module.css";

const OverlapWrapperByAnima = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhone, setFormattedPhone] = useState(
    "+7(____) ____ - __ -___"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [bgPosition, setBgPosition] = useState("50% 50%");

  useEffect(() => {
    if (window.innerWidth > 768) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 40 - 10;
      const y = (e.clientY / window.innerHeight) * 40 - 10;
      setBgPosition(`${50 + x}% ${50 + y}%`);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const x = (touch.clientX / window.innerWidth) * 40 - 10;
      const y = (touch.clientY / window.innerHeight) * 40 - 10;
      setBgPosition(`${50 + x}% ${50 + y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);

    // Форматирование номера в реальном времени
    let formatted = "+7";
    if (value.length > 1) formatted += `(${value.substring(1, 4)}`;
    if (value.length > 4) formatted += `) ${value.substring(4, 7)}`;
    if (value.length > 7) formatted += `-${value.substring(7, 9)}`;
    if (value.length > 9) formatted += `-${value.substring(9, 11)}`;

    setFormattedPhone(formatted || "+7(____) ____ - __ -___");
  };

  const handleCallClick = () => {
    const cleanedPhone = phoneNumber.replace(/\D/g, "");

    if (!cleanedPhone || cleanedPhone.length < 11) {
      message.error("Пожалуйста, введите корректный номер телефона (11 цифр)");
      return;
    }

    setIsLoading(true);

    // Здесь должен быть реальный запрос к API
    console.log("Отправка номера:", `+7${cleanedPhone}`);

    // Имитация запроса
    setTimeout(() => {
      message.success(`Мы скоро вам перезвоним по номеру +7${cleanedPhone}`);
      setIsLoading(false);
      setPhoneNumber("");
      setFormattedPhone("+7(____) ____ - __ -___");
    }, 1500);
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.roundedContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.gradientCircle} />
          <img
            className={styles.mainImage}
            alt="Rehabilitation center staff"
            src="/image-25.png"
          />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.subtitle}>
            <span>Работаем по </span>
            <span>Иваново и области</span>
          </div>

          <h1 className={styles.title}>Реабилитационный центр «12-й шаг»</h1>

          <Card className={styles.phoneCard} bordered={false}>
            <p className={styles.description}>
              Пожалуйста, укажите номер телефона,
              <br />
              чтобы мы могли с вами связаться.
            </p>
            <div className={styles.cardContent}>
              <div className={styles.phoneInputContainer}>
                <div className={styles.phoneContainer}>
                  <PhoneOutlined className={styles.phoneIcon} />
                  <Input
                    className={styles.phoneInput}
                    placeholder={formattedPhone}
                    value={formattedPhone}
                    onChange={handlePhoneChange}
                    maxLength={18}
                  />
                </div>

                <Button
                  className={styles.callButton}
                  type="primary"
                  onClick={handleCallClick}
                  loading={isLoading}
                >
                  <span className={styles.buttonText}>Заказать звонок</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div
          className={styles.mobileBottomImage}
          style={{ backgroundPosition: bgPosition }}
        ></div>
      </div>
    </section>
  );
};

export default OverlapWrapperByAnima;
