import React from "react";
import { Card } from "antd";
import "../../../../styles/AssistanceComponent.css";

export const AssistanceComponent = () => {
  const featuresData = [
    {
      id: 1,
      type: "wide",
      bgColor: "#dbf7ee",
      content: (
        <div className="assistance-card-content">
          <div className="wide-card-layout">
            <img
              className="wide-card-image"
              alt="Квалифицированная помощь"
              src="/img/lock.png"
            />
            <div className="wide-card-text">
              <span className="text">
                <b>Оказываем квалифицированную помощь</b> зависимым. С вашим
                близким человеком будут работать дипломированные психологи,
                гештальт-терапевты, клинические, семейные психологи, психиатры,
                квалифицированная помощь в решении юридических проблем.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      type: "narrow",
      bgColor: "#ffffff",
      border: "1px solid #009b7d",
      content: (
        <div className="years-card">
          <div className="years-number">15 лет</div>
          <div className="years-text">
            Более 15 лет продуктивной работы и тысячи спасённых жизней.
          </div>
        </div>
      ),
    },
    {
      id: 3,
      type: "full-width",
      bgColor: "#DCF8EF",
      content: (
        <div className="award-card">
          <img
            className="award-image"
            alt="Лучшие частные клиники"
            src="/img/cup.png"
            width={382}
            height={382}
          />
          <div className="award-text">
            Лауреат Национального конкурса «Лучшие частные клиники Российской
            Федерации - 2016»
          </div>
        </div>
      ),
    },
    {
      id: 4,
      type: "medium",
      bgColor: "#dbf7ee",
      content: (
        <div className="methods-card">
          <img
            className="methods-image"
            alt="Мировые методики"
            src="/img/methods.png"
          />
          <div className="methods-text">
            Применяются лучшие мировые методики: гештальт терапия, арт-терапия,
            психоанализ, 12-шаговая программа, DAY-Тор, Миннесота.
          </div>
        </div>
      ),
    },
    {
      id: 5,
      type: "medium",
      bgColor: "#009b7d",
      border: "1px solid #009b7d",
      content: (
        <div className="therapy-card">
          <div className="therapy-images">
            <img
              className="therapy-blurred-image"
              alt="Семейная психотерапия"
              src="/img/flower.png"
            />
            <img
              className="therapy-blurred-image"
              alt="Семейная психотерапия"
              src="/img/blocks.png"
            />
          </div>
          <div className="therapy-text">
            <span className="therapy-bold-text">Семейная психотерапия:</span>
            <span className="therapy-regular-text">
              помогаем решить все накопившиеся проблемы в семье и вернуть былое
              взаимопонимание и счастье.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      type: "full-width",
      bgColor: "#dbf7ee",
      content: (
        <div className="certificate-card">
          <img
            className="certificate-image"
            alt="Сертификат"
            src="/img/lenta.png"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Сертификат</h3>
            <p className="certificate-text">
              Сертификат ГОСТ ISO 9001:2008, подтверждающий соответствие
              международному уровню стандартов в сфере оказания консультационных
              и психологических услуг.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      type: "small",
      bgColor: "linear-gradient(135deg, #8cd0ba 0%, #009b7d 100%)",
      content: (
        <div className="nas-card">
          <img
            className="nas-image"
            alt="Национальный антинаркотический союз"
            src="/img/nas.png"
          />
          <div className="nas-text">
            Клиника входит в систему «Национального антинаркотического союза
            (НАС)»
          </div>
        </div>
      ),
    },
    {
      id: 8,
      type: "small-stacked",
      content: [
        {
          bgColor: "#DCF8EF",
          innerContent: (
            <div className="guarantee-card">
              <div className="guarantee-number">100%</div>
              <div className="guarantee-text">Гарантируем анонимность.</div>
            </div>
          ),
        },
        {
          bgColor: "rgba(0, 155, 125, 1)",
          border: "1px solid #009B7D",
          innerContent: (
            <div className="pickup-card">
              <img
                className="pickup-image"
                alt="Выезд за пациентом"
                src="/img/location.png"
              />
              <div className="pickup-text">
                Выезжаем за пациентом в любую точку России.
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 9,
      type: "medium",
      bgColor: "linear-gradient(135deg, #8cd0ba 0%, #009b7d 100%)",
      border: "1px solid #009b7d",
      content: (
        <div className="eurocare-card">
          <img
            className="eurocare-image"
            alt="Европейская сертификация"
            src="/img/euroCare.png"
          />
          <div className="eurocare-text">
            Обладатель Европейской сертификации «EUROcare»
          </div>
        </div>
      ),
    },
    {
      id: 10,
      type: "small",
      bgColor: "#dbf7ee",
      content: (
        <div className="warranty-card">
          <div className="warranty-number">5 лет</div>
          <div className="warranty-text">
            гарантии после прохождения полного курса реабилитации.
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="assistance-container">
      <header className="assistance-header">
        <h1>СКАЖИ ЖИЗНИ: ДА!</h1>
        <h2>РЕАБИЛИТАЦИОННЫЙ ЦЕНТР «12-Й ШАГ»</h2>
      </header>

      <div className="cards-grid">
        {/* Первый ряд - 2 колонки */}
        <div className="cards-row first-row">
          <div className="wide-card">
            <Card
              style={{ backgroundColor: featuresData[0].bgColor }}
              className="assistance-card"
            >
              {featuresData[0].content}
            </Card>
          </div>
          <div className="narrow-card">
            <Card
              style={{
                backgroundColor: featuresData[1].bgColor,
                border: featuresData[1].border,
              }}
              className="assistance-card"
            >
              {featuresData[1].content}
            </Card>
          </div>
        </div>

        {/* ]Второй ряд - 3 колонки */}
        <div className="cards-row fifth-row">
          <div className="small-card">
            <Card
              style={{ background: featuresData[6].bgColor }}
              className="assistance-card"
            >
              {featuresData[6].content}
            </Card>
          </div>
          <div className="stacked-cards">
            <Card
              style={{ backgroundColor: featuresData[7].content[0].bgColor }}
              className="assistance-card"
            >
              {featuresData[7].content[0].innerContent}
            </Card>
            <Card
              style={{
                backgroundColor: featuresData[7].content[1].bgColor,
                border: featuresData[7].content[1].border,
              }}
              className="assistance-card"
            >
              {featuresData[7].content[1].innerContent}
            </Card>
          </div>
          <div className="medium-card">
            <Card
              style={{
                background: featuresData[2].bgColor,
                border: featuresData[2].border,
              }}
              className="assistance-card"
            >
              {featuresData[2].content}
            </Card>
          </div>
        </div>

        {/* Третий ряд - 2 колонки */}
        <div className="cards-row third-row">
          <div className="medium-card">
            <Card
              style={{ backgroundColor: featuresData[3].bgColor }}
              className="assistance-card"
            >
              {featuresData[3].content}
            </Card>
          </div>
          <div className="medium-card">
            <Card
              style={{
                backgroundColor: featuresData[5].bgColor,
                border: featuresData[5].border,
              }}
              className="assistance-card"
            >
              {featuresData[5].content}
            </Card>
          </div>
        </div>

        {/* Четвертый ряд - 1 колонка на всю ширину */}
        <div className="cards-row fifth-row">
          <div className="small-card">
            <Card
              style={{ background: featuresData[8].bgColor }}
              className="assistance-card"
            >
              {featuresData[8].content}
            </Card>
          </div>
          <div className="stacked-cards">
            <Card
              style={{
                backgroundColor: featuresData[4].bgColor,
                border: featuresData[4].bgColor,
              }}
              className="assistance-card"
            >
              {featuresData[4].content}
            </Card>
          </div>
          <div className="medium-card">
            <Card
              style={{
                background: featuresData[9].bgColor,
                border: featuresData[9].bgColor,
              }}
              className="assistance-card"
            >
              {featuresData[9].content}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
