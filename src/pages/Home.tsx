import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <div className="mt-4">
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default Home;
