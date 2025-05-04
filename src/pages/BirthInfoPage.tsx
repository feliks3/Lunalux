import React from 'react';
import BirthInfoForm from '../components/BirthInfoForm';
import Layout from '../components/Layout';

const BirthInfoPage: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="mb-4 text-center">input your birth date</h1>
        <BirthInfoForm />
      </div>
    </Layout>
  );
};

export default BirthInfoPage;
