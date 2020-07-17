import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';


function App() {

  // Appointmens in local storage
  let initialSchedule = JSON.parse(localStorage.getItem('schedule'));
  if(!initialSchedule){
    initialSchedule = [];
  } 

  // schedule state
  const [schedule, updateSchedule] = useState(initialSchedule);

  //Triger when statew changes, whith useEffect hook
  useEffect(() => {
    let initialSchedule = JSON.parse(localStorage.getItem('schedule'));

    if(initialSchedule){
      localStorage.setItem('schedule', JSON.stringify(schedule))
    } else{
      localStorage.setItem('schedule', JSON.stringify([]))
    }
  }, [schedule]);

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

  // Conditional Message
  const title = schedule.length === 0 ? 'Schedule Empty :(' : 'Schedule'

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
                  <h2>{title}</h2>
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
