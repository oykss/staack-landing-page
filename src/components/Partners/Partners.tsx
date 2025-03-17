import Container from '../ui/Container/Container';
import Title from '../ui/Title/Title';
import PartnerList from './PartnerList/PartnerList';
import css from './Partners.module.css';

export default function Partners() {
  return (
    <section className={css.section}>
      <Container className={css.container}>
        <div className={css.wrapText}>
          <Title title='Staack wouldn’t be here without the help of our partners.' />
          <p className='desc'>
            Staack helps agile cannabis companies remain competitive through
            innovative and customer-focused financial products. By combining
            professional cannabis insight and digital expertise, we’re
            transforming banking for the cannabis space as we know it.
          </p>
        </div>
        <PartnerList />
      </Container>
    </section>
  );
}
