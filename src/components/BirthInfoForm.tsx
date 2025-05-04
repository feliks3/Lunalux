import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
};

const BirthInfoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log('submit data', data);
    navigate('/result', { state: data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container p-4 text-light"
    >
      <div className="mb-3">
        <label className="form-label">name</label>
        <input
          className="form-control"
          {...register('name', { required: 'please input your name' })}
        />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">birth date</label>
        <input
          type="date"
          className="form-control"
          {...register('birthDate', {
            required: 'please input your birthDate',
          })}
        />
        {errors.birthDate && (
          <span className="text-danger">{errors.birthDate.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default BirthInfoForm;
