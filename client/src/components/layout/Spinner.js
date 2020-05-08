import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
    <p
      classname='large'
      style={{
        width: '500px',
        marginTop: '10px',
        margin: 'auto',
        display: 'block',
      }}
    >
      If loading takes too much time,refresh the page please
    </p>
  </Fragment>
);
