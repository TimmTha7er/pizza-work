import React, { useState } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';

// const bases = ['тонкое', 'традиционное'];

const BaseList = ({ bases }) => {
  const [activeBase, setActiveBase] = useState(0);

  const onBaseClick = (index, base) => () => {
    if (base.available) {
      setActiveBase(index);
      // handleBaseClick(index);
    }
  };

  const baseList = bases.map((base, index) => {
    return (
      <span
        key={index}
        onClick={onBaseClick(index, base)}
        className={cln('pizza__base', {
          'pizza__base_disable': !base.available,
          'pizza__base_active': activeBase === index && base.available,
        })}
      >
        {base.name}
      </span>
    );
  });

  return <div className='pizza__base-list'>{baseList}</div>;
};

// const mapStateToProps = () => {};

const mapDispatchToProps = () => {
  return {
    onBaseClick: (index, base) => () => {
      console.log('on base click', index, base);
    },
  };
};

export default connect(mapDispatchToProps)(BaseList);
