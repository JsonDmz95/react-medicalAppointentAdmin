import React from "react";

const Appointment = ({ appointment, removeAppointment }) => (
  <div className="appointment">
    <p>
      Pet Name: <span>{appointment.pet}</span>
    </p>
    <p>
      Human Name: <span>{appointment.name}</span>
    </p>
    <p>
      Date: <span>{appointment.date}</span>
    </p>
    <p>
      Time: <span>{appointment.time}</span>
    </p>
    <p>
      Symptomology: <span>{appointment.sympthoms}</span>
    </p>

    <button
      className="button remove u-full-width"
      onClick={() => removeAppointment(appointment.id)}
    >Remove &times;</button>
  </div>
);
export default Appointment;
