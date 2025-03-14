import phone1_1x from '../../assets/Hero/phone-1@1x.png';
import phone1_2x from '../../assets/Hero/phone-1@2x.png';
import phone2_1x from '../../assets/Hero/phone-2@1x.png';
import phone2_2x from '../../assets/Hero/phone-2@2x.png';
import phone1x from '../../assets/Hero/phone@1x.png';
import phone2x from '../../assets/Hero/phone@2x.png';
import List from '../ui/List/List';

const SLIDE_TWO = [
  'Checking & Savings',
  'Wire Transfers & ACH',
  'Staack Debit Card (FIAT and Crypto)',
  'KYC, Anti-Money-Laundering, and Advanced Fraud Protection',
];

const SLIDE_THREE = [
  'Checking & Savings',
  'Wire Transfers & ACH',
  'Staack Debit Card (FIAT and Crypto)',
  'KYC, Anti-Money-Laundering, and Advanced Fraud Protection',
];

export const SLIDES = [
  {
    title: 'for the Cannabis Industry',
    subtitle: 'Banking and Blockchain Solutions',
    desc: (
      <p className='desc'>
        Staack delivers empowering financial technology to cannabis operators in
        the form of swift and transparent cash-flow logistics and digital
        business management solutions from seed-to-sale.
      </p>
    ),
    images: { img_1x: phone1x, img_2x: phone2x },
  },
  {
    title: 'Digital Banking',
    subtitle: '',
    desc: <List arr={SLIDE_TWO} />,
    images: { img_1x: phone1_1x, img_2x: phone1_2x },
  },
  {
    title: 'On-and-Off Chain Solutions',
    subtitle: '',
    desc: <List arr={SLIDE_THREE} />,
    images: { img_1x: phone2_1x, img_2x: phone2_2x },
  },
];
