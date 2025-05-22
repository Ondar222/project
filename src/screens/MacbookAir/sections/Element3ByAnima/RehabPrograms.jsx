import React from "react";
import { Card } from "antd";
import "../../../../styles/RehabPrograms.css";

const { Meta } = Card;

export const RehabPrograms = () => {
  const cards = [
    {
      id: 1,
      title: "Реабилитация",
      description:
        "Созданы все условия для восстановления душевного и эмоционального состояния пациентов.",
      imageUrl: "/img/rehabIcon.png",
    },
    {
      id: 2,
      title: "Созависимость",
      description:
        "Постоянно проводим консультации для близких зависимых пациентов. Созависимость тоже болезнь.",
      imageUrl: "/img/CapsulaIcon.png",
    },
    {
      id: 3,
      title: "Лечение",
      description:
        "Лечение наркомании и алкоголизма занимает от 2 до 9 месяцев, если работать на результат. Центр дает гарантию от срыва - 5 лет!",
      imageUrl: "/img/KitsIcon.png",
    },
    {
      id: 4,
      title: "Социализация",
      description:
        "Мы предлагаем своим выходцам уникальные образовательные программы социальной адаптации.",
      imageUrl: "/img/PeoplesIcon.png",
    },
  ];

  return (
    <div className="element3-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="service-card"
          bordered
          style={{ borderColor: "#009b7d" }}
        >
          <div className="card-content-wrapper">
            <div className="card-image-container">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="card-image"
              />
            </div>
            <div className="card-text-content">
              <Meta
                title={<div className="card-title">{card.title}</div>}
                description={
                  <div className="card-description">{card.description}</div>
                }
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
