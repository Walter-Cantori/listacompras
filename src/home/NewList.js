import React from 'react';

import CustomCard from '../common/CustomCard';

const NewList = () => (
  <CustomCard link="/lista" containerClass="new-list-container">
    <div>
      <p className="title">Adicionar Novas Listas!</p>
    </div>
  </CustomCard>
);

export default NewList;