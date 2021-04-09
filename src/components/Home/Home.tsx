import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HOME_ROUTE, EXAMPLE_2, EXAMPLE_1 } from '../../utils';

import style from './Home.scss';

import BinaryThree from '../../binaryThree';

const Home = () => {
  useEffect(() => {
    BinaryThree.insert(1);
    BinaryThree.insert(2);
    BinaryThree.insert(3);
    BinaryThree.insert(4);
    BinaryThree.insert(15);

    BinaryThree.insert(5);
    BinaryThree.insert(6);
    BinaryThree.insert(12);
    BinaryThree.insert(8);
    BinaryThree.insert(41);

    BinaryThree.postOrderTraverse(BinaryThree.root, console.log);
    console.log(BinaryThree.search(BinaryThree.root, 6));
  }, []);
  return (
    <div className={style.container}>
      <Link to={HOME_ROUTE}>
        <div>Home</div>
      </Link>
      <Link to={EXAMPLE_1}>
        <div>example 1</div>
      </Link>
      <Link to={EXAMPLE_2}>
        <div>example 2</div>
      </Link>
    </div>
  );
};

export default Home;
