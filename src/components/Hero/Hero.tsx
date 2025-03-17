import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from '../ui/Card/Card';
import Container from '../ui/Container/Container';
import css from './Hero.module.css';
import { SLIDES } from './constant';

const renderBullet = (_: number, className: string): string => {
  return `<span class="${className} bullet"></span>`;
};

export default function Hero() {
  return (
    <section className='section'>
      <Container>
        <h1 className='visually-hidden'>Staack</h1>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          spaceBetween={5}
          pagination={{
            clickable: true,
            renderBullet,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={i} className={css.slide}>
              <Card {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
