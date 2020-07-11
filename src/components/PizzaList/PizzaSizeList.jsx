import React, { useState } from 'react';
import cln from 'classnames';

import { connect } from "react-redux";

const findActiveElement = (elements) => {
  return elements.findIndex((el) => {
    return el.available === true;
  });
};

const PizzaSizeList = ({ sizes,  }) => {
  const [activeSize, setActiveSize] = useState(findActiveElement(sizes));

  const onSizeClick = (index, size) => () => {
    if (size.available) {
      setActiveSize(index);
      // handleSizeClick(index);
    }
  };

	const sizeList = sizes.map((size, index) => {
    return (
      <span
        key={index}
        onClick={onSizeClick(index, size)}
        className={cln('pizza__size', {
          'pizza__size_disable': !size.available,
          'pizza__size_active': activeSize === index && size.available,
        })}
      >
        {size.name}
      </span>
    );
  });

  return (
   <div className='pizza__size-list'>   
      {sizeList}
   </div>
   );
};

// const mapStateToProps = () => {};

const mapDispatchToProps = () => {
  return {
    onSizeClick: (index, size) => () => {
      console.log('on size click', index, size);
    },
  };
};

export default connect(mapDispatchToProps)(PizzaSizeList);

