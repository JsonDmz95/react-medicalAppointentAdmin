import React, { Fragment, useState } from "react";
import {v4 as uuid} from "uuid";

const Form = () => {
  //Creatin Appointment State
  const [appointment, updateAppointment] = useState({
    pet: "",
    name: "",
    date: "",
    time: "",
    sympthoms: "",
  });

  const [error, updateError] = useState(false);

  //handleChange declaration
  const handleChange = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  //get Values
  const {pet, name, date, time, sympthoms} = appointment;

  //handleSubmit Declaration
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Fields Validation
    if(pet.trim() === '' || name.trim() === '' || date.trim() === '' || time.trim() === '' || sympthoms.trim() === ''){
      updateError(true);
      return;
    }
    updateError(false);

    //Asign ID
    appointment.id = uuid();
    console.log(appointment);

    //Create Appintment

    //Clean Form
  }

  return (
    <Fragment>
      <h2>New Appointment</h2>

      {
        error ? <p className="alert-error">All the fields are required</p> : null
      }

      <form
        onSubmit = {handleSubmit}
      >
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Ex.: Nala"
          onChange={handleChange}
          value={pet}
        />

        <label>Pets' Human Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Ex.: Saray"
          onChange={handleChange}
          value={name}
        />

        <label>Appointment Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Appointment Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptomology</label>
        <textarea
          className="u-full-width"
          name="sympthoms"
          onChange={handleChange}
          value={sympthoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Save Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
