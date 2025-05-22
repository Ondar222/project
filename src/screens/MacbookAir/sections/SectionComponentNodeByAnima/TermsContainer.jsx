import React from "react";
import { Card } from "antd";
import "../../../../styles/TermsContainer.css";

export const TermsContainer = () => {
  const livingConditions = [
    {
      image: "/img/home.png",
      text: "Комфортное проживание в отдельном обустроенном доме со всеми необходимыми удобствами и оборудованием для реабилитации: зал для групповой терапии, кухня, душевые, сауна, комнаты для индивидуальной работы с психологом, комфортабельный спортзал, тренажеры Kettler",
      bgColor: "#1a352b",
      textColor: "white",
    },
    {
      image: "/img/collektiv.png",
      text: "Постоянно проводятся коллективные игры и тренинги, направленные на сплочение, смекалку, командное взаимодействие, взаимопомощь и единство. И конечно же, во время таких мероприятий ребята получают море позитивных эмоций.",
      bgColor: "linear-gradient(135deg, #8cd0ba 0%, #218354 100%)",
      textColor: "white",
    },
    {
      image: "/img/bloknote.png",
      text: "Проживание и реабилитация проходят в небольших группах. Курс реабилитации, в зависимости от плана лечения, составленного под каждого пациента индивидуально, может занимать от 2 до 9 месяцев.",
      bgColor: "#dbf7ee",
      textColor: "#1a352b",
    },
    {
      image: "/img/ecology.png",
      text: "Центр находится в живописном месте в экологически чистом г. Иваново. Потрясающая природа, сосновый бор и пение птиц, свежий чистый воздух, огороженный зеленый дворик с уютными беседками - все это делает духовное исцеление пациентов максимально естественным.",
      bgColor: "#1a352b",
      textColor: "white",
    },
  ];

  return (
    <div className="page-container">
      {/* Анимированные листья */}
      <div className="leaves-animation">
        <img src="/img/leaves.png" alt="Leaf" className="leaf leaf1" />
        <img src="/img/leaves.png" alt="Leaf" className="leaf leaf2" />
        <img src="/img/leaves.png" alt="Leaf" className="leaf leaf3" />
      </div>

      <section className="terms-container">
        <header className="terms-header">
          <h2 className="terms-title">УСЛОВИЯ ПРОЖИВАНИЯ В РЦ «12-Й ШАГ»</h2>
          <p className="terms-subtitle">
            В нашем реабилитационном Центре созданы все условия для
            восстановления душевного, психологического, физического и
            эмоционального состояния пациентов:
          </p>
        </header>

        <div className="conditions-grid">
          {livingConditions.map((condition, index) => (
            <Card
              key={index}
              className="condition-card"
              style={{
                background: condition.bgColor,
                border: "none",
                borderRadius: "30px",
              }}
            >
              <div className="card-content">
                <div className="image-container">
                  <img
                    className="condition-image"
                    src={condition.image}
                    alt="Living condition"
                  />
                </div>
                <p
                  className="condition-text"
                  style={{ color: condition.textColor }}
                >
                  {condition.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
