import { ReactNode } from 'react';
import Title from '../Title/Title';
import css from './Card.module.css';

type TCardProps = {
  title: string;
  subtitle?: string;
  desc: ReactNode;
  images: { img_1x: string; img_2x: string };
};

export default function Card({ title, subtitle, desc, images }: TCardProps) {
  return (
    <>
      <div className={css.wrapText}>
        <Title title={title} subtitle={subtitle} className={css.title} />
        {desc}
      </div>
      <img
        className={css.img}
        src={images.img_1x}
        alt='Phone'
        srcSet={`${images.img_1x} 1x, ${images.img_2x} 2x`}
      />
    </>
  );
}
