import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import css from './Form.module.css';

interface FormField {
  name: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  validation: {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

interface IFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
}

export default function Form({ fields, onSubmit }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: JSON.parse(
      localStorage.getItem('formData') ||
        JSON.stringify(
          Object.fromEntries(fields.map(field => [field.name, '']))
        )
    ),
  });

  const values = watch();

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(values));
  }, [values]);

  const handleFormSubmit = (data: Record<string, string>) => {
    onSubmit(data);
    reset();
    localStorage.removeItem('formData');
  };

  const clearField = (fieldName: string) => {
    setValue(fieldName, '');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map(field => (
        <label key={field.name}>
          <div className={css.icon}>{field.icon}</div>
          <input
            {...register(field.name, field.validation)}
            type={field.type}
            placeholder={field.placeholder}
          />
          {values[field.name] && (
            <FiX
              className={css.clearIcon}
              size={24}
              onClick={() => clearField(field.name)}
            />
          )}
          {errors[field.name] && (
            <span className={css.error}>
              {errors[field.name]?.message as string}
            </span>
          )}
        </label>
      ))}
      <button type='submit' className='btn'>
        Join
      </button>
    </form>
  );
}
