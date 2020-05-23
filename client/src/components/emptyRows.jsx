import React from 'react';

const EmptyRows = ({ Categories }) => Categories.map((item, idx) => {
  const {
    className,
  } = item;
  return (

    <tr key={idx} className={className}>
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
  );
});

export default EmptyRows;
