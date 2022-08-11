import React from 'react';

import AddAPlaceForm from './AddAPlaceForm';
import '../Styles/AddAPlace.module.css';

const AddAPlace = () => {
  return (
    <div className={"new-entry"}>
      <AddAPlaceForm />
    </div>
  );
};

export default AddAPlace;
