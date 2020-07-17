import React, {Fragment, useState} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';


function App() {

  // schedule state
  const [schedule, updateSchedule] = useState([]);

  //add new appointment to schedule
  const addAppointment = appointment => {
    updateSchedule([
      ...schedule,
      appointment
    ]);
  }

  //remove appointment from schedule
  const removeAppointment = id =>{
    const newschedule = schedule.filter(appointment => appointment.id !== id);
    updateSchedule(newschedule);
  }

  return (
    <Fragment>
          <h1>Vaterinary appointments admin</h1>

          <div className="container">
              <div className="row">
                <div className="one-half column">
                  <Form 
                    addAppointment={addAppointment}
                  />
                </div>
                <div className="one-half column">
                  <h2>Schedule</h2>
                  {schedule.map(appointment => (
                    <Appointment
                      key={appointment.id} 
                      appointment={appointment}
                      removeAppointment={removeAppointment}
                    />
                  ))}
                </div>
              </div>
          </div>
    </Fragment>
  );
}

export default App;
