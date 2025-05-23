import React, { useState } from "react";
import { Card, Button, Input, message } from "antd";
import { CardContent } from "../../../components/ui/card";
import { PhoneIcon } from "lucide-react";
import "../../../styles/UserCard.css";

export const UserCard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
    let formattedValue = "";

    if (value.length > 0) {
      formattedValue = `+7(${value.substring(1, 4)}`;
      if (value.length > 4) formattedValue += `) ${value.substring(4, 7)}`;
      if (value.length > 7) formattedValue += `-${value.substring(7, 9)}`;
      if (value.length > 9) formattedValue += `-${value.substring(9, 11)}`;
    }

    setPhoneNumber(formattedValue);
  };

  const handleSubmit = () => {
    if (!phoneNumber || phoneNumber.replace(/\D/g, "").length < 11) {
      message.error("Пожалуйста, введите корректный номер телефона");
      return;
    }

    setIsLoading(true);

    // Здесь будет запрос к API
    console.log("Отправлен номер:", phoneNumber);

    // Имитация запроса
    setTimeout(() => {
      setIsLoading(false);
      message.success("Ваша заявка принята! Мы скоро вам перезвоним.");
      setPhoneNumber("");
    }, 1500);
  };

  return (
    <section className="user-card-section">
      <div className="user-card-container">
        <div className="user-card-content">
          <p className="user-card-text">
            Пожалуйста, укажите номер телефона,
            <br />
            чтобы мы могли с вами связаться.
          </p>

          <Card className="user-card-phone-card">
            <CardContent className="user-card-phone-content">
              <div className="user-card-phone-wrapper">
                <PhoneIcon className="user-card-phone-icon" />
                <Input
                  className="user-card-phone-input"
                  placeholder="+7(___) ___-__-__"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  maxLength={18} // Максимальная длина с учетом форматирования
                />
              </div>

              <Button
                className="user-card-call-button"
                onClick={handleSubmit}
                loading={isLoading}
              >
                <span className="user-card-button-text">Заказать звонок</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="user-card-image-container">
          <img className="user-card-image" alt="Image" src="/image-6.png" />
        </div>
      </div>
    </section>
  );
};
