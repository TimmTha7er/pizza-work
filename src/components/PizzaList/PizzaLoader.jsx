import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = (props) => {
  return (
    <div className='pizza content__pizza'>
      <ContentLoader
        speed={2}
        width={280}
        height={470}
        viewBox='0 0 280 470'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
      >
        <circle cx='130' cy='120' r='120' />
        <rect x='0' y='312' rx='10' ry='10' width='276' height='87' />
        <rect x='0' y='272' rx='10' ry='10' width='276' height='20' />
        <rect x='0' y='416' rx='10' ry='10' width='85' height='45' />
        <rect x='117' y='416' rx='20' ry='20' width='160' height='45' />
      </ContentLoader>
    </div>
  );
};

export default PizzaLoader;
