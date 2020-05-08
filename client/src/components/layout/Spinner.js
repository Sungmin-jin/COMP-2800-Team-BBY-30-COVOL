import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
    <br />
    <p
      classname='lead container'
      style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
    >
      If loading takes too much time,refresh the page please
    </p>
  </Fragment>
);
