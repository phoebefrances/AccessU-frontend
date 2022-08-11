import React, { useEffect } from "react";
import { useState } from "react";

import '../Styles/AddAPlaceForm.module.css'

const emptyPlaceDetails = {
    category: "",
    name: "",
    rating: "",
    photo: "",
    address: "",
    longitude: "",
    latitude: "",
    accessible: false,
    eye: false,
    hearing: false,
    brain: false,
    phone_number: "",
    web_address: "",
    opening_times: "",
}

const AddAPlaceForm = () => {

//Form Collection 
    const [categoryInput, setCategoryInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [ratingInput, setRatingInput] = useState('')
    const [photoInput, setPhotoInput] = useState('')
    const [addressInput, setAddressInput] = useState('')
    const [longitudeInput, setLongitudeInput] = useState('')
    const [latitudeInput, setLatitudeInput] = useState('')
    const [accessibleInput, setAccessibleInput] = useState(false)
    const [eyeInput, setEyeInput] = useState(false)
    const [hearingInput, setHearingInput] = useState(false)
    const [brainInput, setBrainInput] = useState(false)
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [webAddressInput, setWebAddressInput] = useState('')
    const [openingTimesInput, setOpeningTimesInput] = useState('')

// Form Data
const [formData, setFormData] = useState(emptyPlaceDetails)

useEffect(() => {
    function updateFormData() {
       setFormData({
          ...formData,
          category: categoryInput,
          name: nameInput,
          rating: ratingInput,
          photo: photoInput,
          address: addressInput,
          longitude: longitudeInput,
          latitude: latitudeInput,
          accessible: accessibleInput,
          eye: eyeInput,
          hearing: hearingInput,
          brain: brainInput,
          phone_number: phoneNumberInput,
          web_address: webAddressInput,
          opening_times: openingTimesInput
       });
       console.log(formData);
    }
    updateFormData();
 }, [
    categoryInput,
    nameInput,
    ratingInput,
    photoInput,
    addressInput,
    longitudeInput,
    latitudeInput,
    accessibleInput,
    eyeInput,
    hearingInput,
    brainInput,
    phoneNumberInput,
    webAddressInput,
    openingTimesInput
 ]);

 const categoryChangeHandler = event => {
    setCategoryInput(event.target.value);
  };

  const nameChangeHandler = event => {
    setNameInput(event.target.value);
  };

  const ratingChangeHandler = event => {
    setRatingInput(event.target.value);
  };

  const photoChangeHandler = event => {
    setPhotoInput(event.target.value);
  };

  const addressChangeHandler = event => {
    setAddressInput(event.target.value);
  };

  const longitudeChangeHandler = event => {
    setLongitudeInput(event.target.value);
  };

  const latitudeChangeHandler = event => {
    setLatitudeInput(event.target.value);
  };

  const accessibleChangeHandler = event => {
    setAccessibleInput(event.target.value);
  };

  const eyeChangeHandler = event => {
    setEyeInput(event.target.value);
  };

  const hearingChangeHandler = event => {
    setHearingInput(event.target.value);
  };

  const brainChangeHandler = event => {
    setBrainInput(event.target.value);
  };

  const phoneNumberChangeHandler = event => {
    setPhoneNumberInput(event.target.value);
  };

  const webAddressChangeHandler = event => {
    setWebAddressInput(event.target.value);
  };

  const openingTimesChangeHandler = event => {
    setOpeningTimesInput(event.target.value);
  };

  async function sendFormData(formData) {
    console.log("FORM DATA HERE", formData);
    const res = await fetch(`https://places-table-undefined.herokuapp.com/places`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit working, here is the form data", formData);
    sendFormData(formData);
  }


  return (
    <form >
      <div className="new-entry__controls">
        <div className="new-entry__control">
          <label>Add A Place</label>
        </div>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            type="text"
            style={{ textAlign: 'left' }} 
            placeholder="Category"
            onChange={categoryChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Name"
            onChange={nameChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Rating"
            onChange={ratingChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Image"
            onChange={photoChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Address"
            onChange={addressChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Longitude"
            onChange={longitudeChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Latitude"
            onChange={latitudeChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
      <label> Mobility access </label>
        <label> True
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'True'
            value= {true}
            onChange={accessibleChangeHandler}
          />
          </label>
          <label> False
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={accessibleChangeHandler}
          />
          </label>
      </div>
      <div className="new-entry__textbox">
      <label> Visual access </label>
        <label> True
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'True'
            value= {true}
            onChange={eyeChangeHandler}
          />
          </label>
          <label> False
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={eyeChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label> Hearing access </label>
        <label> True
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'True'
            value= {true}
            onChange={hearingChangeHandler}
          />
          </label>
          <label> False
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={hearingChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label> Neurodivergent friendly </label>
        <label> True
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name='true'
            value= {true}
            onChange={brainChangeHandler}
          />
          </label>
          <label> False
          <input
            style={{ textAlign: 'left' }}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={brainChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Phone Number"
            onChange={phoneNumberChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Web Address"
            onChange={webAddressChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__textbox">
        <label>
          <input
            style={{ textAlign: 'left' }}
            type="text"
            placeholder="Opening Times"
            onChange={openingTimesChangeHandler}
          />
        </label>
      </div>
      <div className="new-entry__actions">
        <button type="submit" formData={formData} onClick={handleSubmit}>Add a Place</button>
      </div>
    </form>
  );
};

export default AddAPlaceForm;
