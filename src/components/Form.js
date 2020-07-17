import React, { Fragment, useState } from "react";

const Form = () => {
  //Creatin Appointment State
  const [appointment, updateAppointment] = useState({
    pet: "",
    name: "",
    date: "",
    time: "",
    sympthoms: "",
  });

  //handleChange declaration
  const handleChange = () => {
    console.log("Escribiendo");
  };

  return (
    <Fragment>
      <h2>New Appointment</h2>

      <form>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Ex.: Nala"
          onChange={handleChange}
        />

        <label>Pets' Human Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Ex.: Saray"
          onChange={handleChange}
        />

        <label>Appointment Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Appointment Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Symptomology</label>
        <textarea
          className="u-full-width"
          name="sympthoms"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Save Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
