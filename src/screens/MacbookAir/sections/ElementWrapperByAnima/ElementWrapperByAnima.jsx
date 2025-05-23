import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "../../../../styles/ElementWrapperByAnima.css";

export const ElementWrapperByAnima = () => {
  const doctors = [
    {
      id: 1,
      name: "Решетников Владимир Владимирович",
      position:
        "Помощь: гештальт-терапевт наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name1.png",
    },
    {
      id: 2,
      name: "Харлашкина Наталья Григорьевна",
      position: "Помощь: арт-терапевт, психоаналитик, гештальт-терапевт",
      image: "/img/name2 1.png",
    },
    {
      id: 3,
      name: "Лопатин Дмитрий Владимирович",
      position: "Помощь: наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name3.png",
    },
    {
      id: 4,
      name: "Полухина Татьяна Александровна",
      position: "Помощь: наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name4.png",
    },
    {
      id: 5,
      name: "Долотова Юлия Романова",
      position:
        "Помощь: гештальт-терапевт наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name5 1.png",
    },
    {
      id: 6,
      name: "Дмитрий Олегович Кузнецов",
      position:
        "Помощь: гештальт-терапевт наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name6.png",
    },
    {
      id: 7,
      name: "Дмитрий Олегович Кузнецов",
      position:
        "Помощь: гештальт-терапевт наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name7.png",
    },
    {
      id: 8,
      name: "Дмитрий Олегович Кузнецов",
      position:
        "Помощь: гештальт-терапевт наркологического Центра «Двенадцатый Шаг»",
      image: "/img/name8.png",
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">НАШИ ДОКТОРА</h2>

      <div className="cardsGrid">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="card">
            <CardContent className="cardContent">
              <div className="imageContainer">
                <img
                  alt={`Доктор ${doctor.name}`}
                  src={doctor.image}
                  className="doctorImage"
                />
              </div>
              <div className="textContainer">
                <h3 className="doctorName">{doctor.name}</h3>
                <p className="doctorPosition">{doctor.position}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
