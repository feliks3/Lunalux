import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const ResultPage: React.FC = () => {
  const location = useLocation();
  const data = location.state;

  if (!data)
    return (
      <Layout>
        <p>no data</p>;
      </Layout>
    );

  return (
    <Layout>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">{data.name}</li>
          <li className="list-group-item">{data.birthDate}</li>
        </ul>
      </div>
    </Layout>
  );
};

export default ResultPage;
