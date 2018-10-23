import React from 'react';

const ListFooter = (props) => (
  <div className="list-footer ">
    <p>01/01/2019</p>
    <p>{props.total}</p>
  </div>
);

export default ListFooter;