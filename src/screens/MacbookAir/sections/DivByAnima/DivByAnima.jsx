import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import styles from "../../../../styles/DivByAnima.module.css";

export const DivByAnima = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ромка Новый",
      advantages: "Все очень хорошо ребята знают что делать",
      comment:
        "Я тот самый человек который не думал что когда то бросил употреблять наркотики но спустя курс нахождения в рця не то что думать перестал но мне стало это на столько не интересно что нахожусь трезвый",
    },
    {
      id: 2,
      name: "Марк",
      advantages:
        "Могу лишь сказать одно люди которые мною занимались, я трезвый уже 3,5 года. Низкий поклон как персоналу, так. Руководству центра",
      comment:
        "Я благодарен богу что оказался в центре 12 шаг. Это будущее людей которые попали в сложную жизненную ситуацию",
    },
    {
      id: 3,
      name: "Артём",
      advantages:
        "Крайне квалифицированное руководство-особенно хотел выделить Владимира Балыкова, всегда открытый для помощи и обратной связи консультантский состав, вполне приличные и комфортные условия, условия, а а самое главное максимально конструктивный и действенный подход к лечению и процессу реабилитации! Большая теплота, благодарность и исключительно позитивные воспоминания об этом месте! Рекомендую для всех, кому нужна помощь в решении столь непростой проблемы!",
    },
    {
      id: 4,
      name: "Сергей Батраев",
      comment:
        "Сам прошёл через этот центр. Пятый год не пью, жизнь налаживается. Сознание перевернулось",
    },
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.mainTitle}>ОТЗЫВЫ ПОСЛЕ РЕАБИЛИТАЦИИ</h1>
      <h2 className={styles.subTitle}>В НАШЕМ ЦЕНТРЕ</h2>

      <div className={styles.carouselWrapper}>
        <Carousel className={styles.carousel}>
          <CarouselContent className={styles.carouselContent}>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className={styles.carouselItem}
              >
                <Card className={styles.card}>
                  <CardContent className={styles.cardContent}>
                    <div className={styles.header}>
                      <h3 className={styles.name}>{testimonial.name}</h3>
                    </div>

                    <div className={styles.testimonialContent}>
                      {testimonial.advantages && (
                        <div className={styles.advantagesSection}>
                          <span className={styles.sectionLabel}>
                            Достоинство:
                          </span>
                          <p className={styles.advantagesText}>
                            {testimonial.advantages}
                          </p>
                        </div>
                      )}

                      {testimonial.comment && (
                        <div className={styles.commentSection}>
                          {!testimonial.advantages && (
                            <span className={styles.sectionLabel}>
                              Комментарий:
                            </span>
                          )}
                          <p className={styles.commentText}>
                            {testimonial.comment}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className={styles.navigation}>
            <CarouselPrevious className={styles.navButtonPrev}>
              <span className={styles.navArrow}>&lt;</span>
            </CarouselPrevious>
            <CarouselNext className={styles.navButtonNext}>
              <span className={styles.navArrow}>&gt;</span>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
