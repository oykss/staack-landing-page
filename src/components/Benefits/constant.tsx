import benefits1_1x from '../../assets/benefits/benefits-1@1x.png';
import benefits1_2x from '../../assets/benefits/benefits-1@2x.png';
import benefits2_1x from '../../assets/benefits/benefits-2@1x.png';
import benefits2_2x from '../../assets/benefits/benefits-2@2x.png';
import benefits3_1x from '../../assets/benefits/benefits-3@1x.png';
import benefits3_2x from '../../assets/benefits/benefits-3@2x.png';
import List from '../ui/List/List';

const SLIDE_ONE = [
  'Staack helps with Business Budgeting: Savings, inventory, tax, investment, and payroll',
  'Use smart contracts for automatic asset allocation, inventory management, and tax payments',
  'Portfolio Management - make active and passive investments in FIAT and/or Crypto',
];

const SLIDE_TWO = [
  'Schedule safe, on-site pick-ups according to your cash requirement needs',
  'Book off-site pick-ups to your partner facilities and other vendors',
  'Communicate with your driver (and other depositors) with in-app messaging',
  'Monitor your cash en route and receive deposits within one business day',
];

const SLIDE_THREE = [
  'Send money directly to other Staack Accounts with Nominal Fees',
  'Send or receive payments instantly in FIAT or Crypto',
  'Point-of-Banking & Payment Processing',
];

export const SLIDES = [
  {
    title: 'Make payments',
    subtitle: 'Send Money and',
    desc: <List arr={SLIDE_ONE} />,
    images: { img_1x: benefits1_1x, img_2x: benefits1_2x },
  },
  {
    title: 'by Staacking',
    subtitle: 'Reach Financial Goals',
    desc: <List arr={SLIDE_TWO} />,
    images: { img_1x: benefits2_1x, img_2x: benefits2_2x },
  },
  {
    title: 'Cash Pick-up',
    subtitle: 'Armored Car',
    desc: <List arr={SLIDE_THREE} />,
    images: { img_1x: benefits3_1x, img_2x: benefits3_2x },
  },
];
