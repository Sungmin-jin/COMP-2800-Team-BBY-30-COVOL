import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <div>
    <img
      src={spinner}
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        marginTop: '5rem',
      }}
      alt='Loading...'
    />
    <br />
    <p
      classname='lead container'
      style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
    >
      If loading takes too much time, refresh the page please
    </p>
  </div>
);
