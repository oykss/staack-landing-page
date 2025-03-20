import Container from '../ui/Container/Container';
import Title from '../ui/Title/Title';
import Forms from './Forms/Forms';
import css from './Join.module.css';

export default function Join() {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.container}>
          <div className={css.textWrap}>
            <Title
              title='Join the movement!'
              className={css.desc}
              subtitle='Do you know a cannabis business that could benefit from Staack’s
              banking and blockchain solutions?'
            />
          </div>
          <Forms />
        </div>
      </Container>
    </section>
  );
}
