import { useState, useEffect } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Card, Input, message } from "antd";
import styles from "../../../../styles/OverlapWrapper.module.css";

const OverlapWrapperByAnima = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
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
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return "+7(____) ____ - __ -___";

    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(
      /^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
    );

    if (!match) return phone;

    let formatted = "+7";
    if (match[2]) formatted += `(${match[2]}`;
    if (match[3]) formatted += `) ${match[3]}`;
    if (match[4]) formatted += `-${match[4]}`;
    if (match[5]) formatted += `-${match[5]}`;

    return formatted || "+7(____) ____ - __ -___";
  };

  const handleCallClick = () => {
    const cleanedPhone = phoneNumber.replace(/\D/g, "");
    if (!cleanedPhone || cleanedPhone.length < 11) {
      message.error("Пожалуйста, введите корректный номер телефона (11 цифр)");
      return;
    }

    setIsLoading(true);

    console.log("Номер для звонка:", `+7${cleanedPhone}`);

    setTimeout(() => {
      message.success(`Мы скоро вам перезвоним по номеру +7${cleanedPhone}`);
      setIsLoading(false);
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
                    placeholder={formatPhoneNumber(phoneNumber)}
                    value={phoneNumber}
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
