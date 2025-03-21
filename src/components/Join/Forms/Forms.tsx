import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import Form from '../../ui/Form/Form';
import css from './Forms.module.css';

const fieldsJoin = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    icon: <IoMailOutline size={26} className='icon' />,
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone number',
    icon: <FiPhone size={24} className='icon' />,
    validation: {
      required: 'Phone number is required',
      pattern: {
        value: /^\+?[0-9]{10,12}$/,
        message: 'Invalid phone number format',
      },
    },
  },
];

const fieldsShare = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    icon: <IoMailOutline size={26} className='icon' />,
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'company-name',
    type: 'text',
    placeholder: 'Company name',
    icon: <FiPhone size={24} className='icon' />,
    validation: {
      required: 'Company name is required',
    },
  },
];

const tabs = ['Join', 'Share'];

export default function Forms() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSubmit = (data: Record<string, string>) => {
    toast.success('Your form has been successfully submitted!');
    console.table(data);
  };

  return (
    <div>
      <ul className={css.list}>
        {tabs.map(item => (
          <motion.li
            key={item}
            initial={false}
            animate={{
              color: item === selectedTab ? '#fff' : '#ffffff5a',
            }}
            onClick={() => setSelectedTab(item)}
          >
            {item}
            {item === selectedTab ? (
              <motion.div className={css.underline} layoutId='underline' />
            ) : null}
          </motion.li>
        ))}
      </ul>

      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab === 'Join' ? 'Join' : 'Share'}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
        >
          <Form
            fields={selectedTab === 'Join' ? fieldsJoin : fieldsShare}
            onSubmit={handleSubmit}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
