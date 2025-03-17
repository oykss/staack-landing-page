import { PARTNERS_LIST } from './constant';
import css from './PartnerList.module.css';

export default function PartnerList() {
  return (
    <ul className={css.list}>
      {PARTNERS_LIST.map((partner, i) => (
        <li key={i} className={css.item}>
          <img src={partner} alt={`Partner ${i}`} />
        </li>
      ))}
    </ul>
  );
}
